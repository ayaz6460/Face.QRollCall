const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { v4: uuidv4 } = require('uuid');
const supabase = require('../supabase');
const router = express.Router();

const twilioClient = process.env.TWILIO_SID ? twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN) : null;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

/**
 * POST /api/send-notification
 */
router.post('/send-notification', async (req, res) => {
  try {
    const { studentIds, message, channels = ['email'], subject = 'Attendance Alert' } = req.body;
    if (!studentIds?.length || !message) return res.status(400).json({ error: 'studentIds and message required' });

    const { data: students, error: stErr } = await supabase
      .from('students').select('*').in('id', studentIds);
    if (stErr) throw stErr;

    const results = [];
    const toInsert = [];

    for (const student of (students || [])) {
      const personalizedMsg = message.replace(/{name}/g, student.name);

      for (const channel of channels) {
        const notif = {
          id: uuidv4(), student_id: student.id, student_name: student.name,
          type: channel, message: personalizedMsg, subject,
          status: 'pending', timestamp: new Date().toISOString()
        };

        if (channel === 'email' && student.email) {
          try {
            await transporter.sendMail({
              from: process.env.SMTP_USER || 'noreply@qrollcall.edu',
              to: student.email,
              subject,
              html: `<div style="font-family:Inter,sans-serif;padding:24px;background:#f5f7fa;border-radius:12px">
                <h2 style="color:#2563eb">QRollCall Notification</h2>
                <p>Dear ${student.name},</p>
                <p>${personalizedMsg}</p>
                <hr/><small>QRollCall Attendance System</small></div>`
            });
            notif.status = 'sent';
          } catch (e) {
            notif.status = 'failed';
            notif.error = e.message;
          }
        } else if (channel === 'sms' && student.parent_phone) {
          try {
            if (!twilioClient) throw new Error('Twilio not configured');
            await twilioClient.messages.create({
              body: personalizedMsg,
              from: process.env.TWILIO_FROM_NUM,
              to: student.parent_phone
            });
            notif.status = 'sent';
          } catch (e) {
            notif.status = 'failed';
            notif.error = e.message;
          }
        } else if (channel === 'email' && !student.email) {
          notif.status = 'skipped (no email)';
        }

        toInsert.push(notif);
        results.push(notif);
      }
    }

    if (toInsert.length > 0) {
      const { error: insErr } = await supabase.from('notifications').insert(toInsert);
      if (insErr) console.error('[notifications insert]', insErr);
    }

    res.json({ success: true, sent: results.filter(r => r.status === 'sent' || r.status?.startsWith('sent')).length, results });
  } catch (err) {
    console.error('[send-notification]', err);
    res.status(500).json({ error: 'Failed to send notifications' });
  }
});

/**
 * GET /api/notifications?studentId=s1
 */
router.get('/notifications', async (req, res) => {
  try {
    const { studentId } = req.query;
    let query = supabase.from('notifications').select('*').order('timestamp', { ascending: false }).limit(50);
    if (studentId) query = query.eq('student_id', studentId);
    const { data, error } = await query;
    if (error) throw error;
    res.json({ notifications: data || [] });
  } catch (err) {
    console.error('[notifications]', err);
    res.status(500).json({ error: 'Failed to load notifications' });
  }
});

module.exports = router;
