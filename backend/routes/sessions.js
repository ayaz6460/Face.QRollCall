const express = require('express');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
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
 * POST /api/end-session
 */
router.post('/end-session', async (req, res) => {
  try {
    const { token, manualState } = req.body;
    if (!token) return res.status(400).json({ error: 'token is required' });

    const { data: sessions } = await supabase.from('sessions').select('*').eq('token', token).limit(1);
    const session = sessions?.[0];
    if (!session) return res.status(404).json({ error: 'Session not found' });

    // Mark session ended
    await supabase.from('sessions').update({ ended: true, started: false }).eq('token', token);

    const today = new Date().toISOString().split('T')[0];

    // Get already-marked attendance for today (token-scoped)
    let marked = [];
    try {
      const { data: markedByToken, error: markedErr } = await supabase.from('attendance')
        .select('student_id')
        .gte('timestamp', `${today}T00:00:00Z`)
        .contains('location', { token });
      if (markedErr) throw markedErr;
      marked = markedByToken || [];
    } catch (e) {
      // Fallback for older schemas / RLS policies that block JSON contains
      const { data: markedFallback, error: markedFallbackErr } = await supabase.from('attendance')
        .select('student_id')
        .eq('subject', session.subject)
        .gte('timestamp', `${today}T00:00:00Z`);
      if (markedFallbackErr) throw markedFallbackErr;
      marked = markedFallback || [];
    }

    const markedIds = new Set((marked || []).map(a => a.student_id));
    
    // If no manual state is sent (e.g. from Stop Session button), assume all unmarked students are absent
    let finalState = manualState;
    if (!finalState) {
      const { data: allStudents } = await supabase.from('students').select('id, name');
      finalState = (allStudents || []).map(s => ({ id: s.id, name: s.name, status: 'absent' }));
    }

    // Insert anyone not already marked by a real QR scan.
    const toInsert = finalState
      .filter(s => !markedIds.has(s.id))
      .map(s => ({
        id: uuidv4(), student_id: s.id, student_name: s.name,
        subject: session.subject, timestamp: new Date().toISOString(),
        status: s.status === 'pending' ? 'absent' : s.status, // default un-toggled students to absent!
        device_id: 'Teacher-Manual', location: { token, manual: true }
      }));

    if (toInsert.length > 0) {
      await supabase.from('attendance').insert(toInsert);
    }

    const { data: allStudents } = await supabase.from('students').select('id, email, parent_phone');
    const studentInfo = {};
    (allStudents || []).forEach(s => { studentInfo[s.id] = { email: s.email, parent_phone: s.parent_phone }; });

    const absentees = toInsert.filter(r => r.status === 'absent').map(r => ({
      id: r.student_id, name: r.student_name, subject: r.subject, 
      email: studentInfo[r.student_id]?.email,
      parent_phone: studentInfo[r.student_id]?.parent_phone
    }));

    // Send notifications to parents of absentees
    // Calculate shortage % for absentees
    const { data: subjSessions } = await supabase.from('sessions')
      .select('id')
      .eq('subject', session.subject)
      .eq('ended', true);
    const totalSubjSessions = (subjSessions || []).length || 1; // avoid /0
    
    const absenteeIds = absentees.map(a => a.id);
    let presentCounts = {};
    if (absenteeIds.length > 0) {
      const { data: presentRecords } = await supabase.from('attendance')
        .select('student_id')
        .eq('subject', session.subject)
        .eq('status', 'present')
        .in('student_id', absenteeIds);
      (presentRecords || []).forEach(r => {
        presentCounts[r.student_id] = (presentCounts[r.student_id] || 0) + 1;
      });
    }

    const notifInsert = [];
    const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    for (const student of absentees) {
      const pCount = presentCounts[student.id] || 0;
      const percentage = Math.round((pCount / totalSubjSessions) * 100);
      const isShortage = percentage < 75;

      let msg = `Dear Parent, your ward ${student.name} was absent for ${session.subject} on ${dateStr}.`;
      let emailHtml = `<div style="font-family:Inter,sans-serif;padding:24px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca">
              <h2 style="color:#dc2626">Absence Alert</h2>
              <p>Dear Parent, your ward <strong>${student.name}</strong> was absent for <strong>${session.subject}</strong> on <strong>${dateStr}</strong>.</p>`;

      if (isShortage) {
        msg += ` WARNING: Attendance is ${percentage}%, below the 75% requirement.`;
        emailHtml += `<div style="margin-top:16px;padding:12px;background:#fff1f2;border-left:4px solid #ef4444;color:#991b1b">
          <strong>⚠️ Shortage Warning:</strong> Overall attendance for this subject has dropped to <strong>${percentage}%</strong> (Below mandatory 75%).
        </div>`;
      }
      emailHtml += `<hr/><small>QRollCall — Smart Attendance System</small></div>`;
      
      // 1. Email Notification
      const emailNotif = {
        id: uuidv4(), student_id: student.id, student_name: student.name,
        type: 'email', message: msg, subject: 'Absence Alert',
        status: 'pending', timestamp: new Date().toISOString()
      };

      if (student.email) {
        try {
          await transporter.sendMail({
            from: process.env.SMTP_USER || 'noreply@qrollcall.edu',
            to: student.email,
            subject: isShortage ? '⚠️ Absence & Shortage Alert - QRollCall' : 'Absence Alert - QRollCall',
            html: emailHtml
          });
          emailNotif.status = 'sent';
        } catch (e) {
          emailNotif.status = 'failed';
          emailNotif.error = e.message;
        }
      } else {
        emailNotif.status = 'skipped (no email)';
      }
      notifInsert.push(emailNotif);

      // 2. SMS Notification
      const smsNotif = {
        id: uuidv4(), student_id: student.id, student_name: student.name,
        type: 'sms', message: msg, subject: 'Absence Alert',
        status: 'pending', timestamp: new Date().toISOString()
      };

      if (student.parent_phone) {
        try {
          if (!twilioClient) throw new Error('Twilio not configured');
          await twilioClient.messages.create({
            body: msg,
            from: process.env.TWILIO_FROM_NUM,
            to: student.parent_phone
          });
          smsNotif.status = 'sent';
        } catch (e) {
          smsNotif.status = 'failed';
          smsNotif.error = e.message;
        }
      } else {
        smsNotif.status = 'skipped (no phone)';
      }
      notifInsert.push(smsNotif);

      // Notify student socket
      req.io.to(`student-${student.id}`).emit('attendance-update', {
        subject: session.subject, status: 'absent', timestamp: new Date().toISOString()
      });
    }

    if (notifInsert.length > 0) {
      await supabase.from('notifications').insert(notifInsert);
    }

    req.io.to(`teacher-${session.teacher_id}`).emit('session-ended', {
      subject: session.subject, absenteesCount: absentees.length
    });

    res.json({ success: true, absenteesCount: absentees.length, notifications: notifInsert.length });
  } catch (err) {
    console.error('[end-session]', err);
    res.status(500).json({ error: 'Failed to end session' });
  }
});

/**
 * GET /api/fraud-logs
 */
router.get('/fraud-logs', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('fraud_logs').select('*').order('timestamp', { ascending: false }).limit(100);
    if (error) throw error;
    // Map snake_case to camelCase for frontend
    const mapped = (data || []).map(f => ({
      ...f,
      studentId: f.student_id,
      studentName: f.student_name,
      riskScore: f.risk_score
    }));
    res.json({ fraudLogs: mapped });
  } catch (err) {
    console.error('[fraud-logs]', err);
    res.status(500).json({ error: 'Failed to load fraud logs' });
  }
});

/**
 * POST /api/update-fraud-status
 */
router.post('/update-fraud-status', async (req, res) => {
  try {
    const { id, status } = req.body;
    const { data, error } = await supabase
      .from('fraud_logs')
      .update({ status, resolved_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    if (error) throw error;
    res.json({ success: true, log: data?.[0] });
  } catch (err) {
    console.error('[update-fraud-status]', err);
    res.status(500).json({ error: 'Failed to update fraud status' });
  }
});

/**
 * GET /api/attendance-history?studentId=s1
 */
router.get('/attendance-history', async (req, res) => {
  try {
    const { studentId } = req.query;
    if (!studentId) return res.status(400).json({ error: 'studentId required' });
    const { data, error } = await supabase
      .from('attendance').select('*').eq('student_id', studentId)
      .order('timestamp', { ascending: false }).limit(100);
    if (error) throw error;
    res.json({ history: data || [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load history' });
  }
});

/**
 * GET /api/students
 */
router.get('/students', async (req, res) => {
  try {
    const { data, error } = await supabase.from('students').select('*').order('roll');
    if (error) throw error;
    res.json({ students: data || [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load students' });
  }
});

/**
 * GET /api/students/:id
 */
router.get('/students/:id', async (req, res) => {
  try {
    const { data, error } = await supabase.from('students').select('*').eq('id', req.params.id).single();
    if (error) throw error;
    res.json({ student: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load student' });
  }
});

/**
 * GET /api/all-attendance
 */
router.get('/all-attendance', async (req, res) => {
  try {
    const { subject } = req.query;
    const today = new Date().toISOString().split('T')[0];
    let query = supabase.from('attendance').select('*').gte('timestamp', `${today}T00:00:00Z`);
    if (subject) query = query.eq('subject', subject);
    const { data, error } = await query;
    if (error) throw error;
    res.json({ attendance: data || [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load attendance' });
  }
});
/**
 * POST /api/students
 */
router.post('/students', async (req, res) => {
  try {
    const { id, name, roll, email, parent_phone, device_id, password } = req.body;
    if (!name || !roll || !email) return res.status(400).json({ error: 'Name, Roll, and Email are required' });
    
    const newId = id || require('uuid').v4();
    const newStudent = { id: newId, name, roll, email, parent_phone, device_id };
    
    const { data, error } = await supabase.from('students').insert([newStudent]).select();
    if (error) {
      if (error.code === '23505') return res.status(400).json({ error: 'Roll number or Email already exists' });
      throw error;
    }
    
    // Insert into users for custom password auth
    const newUser = { id: newId, name, email, role: 'student', password: password || 'pass123' };
    const { error: userErr } = await supabase.from('users').insert([newUser]);
    if (userErr) console.error('Failed pushing to users', userErr);
    
    res.json({ success: true, student: data?.[0] || newStudent });
  } catch (err) {
    console.error('[create-student]', err);
    res.status(500).json({ error: err.message || 'Failed to create student' });
  }
});
/**
 * PUT /api/students/:id
 */
router.put('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, roll, email, parent_phone } = req.body;
    
    // Update students table
    const { error: stuErr } = await supabase.from('students')
      .update({ name, roll, email, parent_phone })
      .eq('id', id);
    if (stuErr) throw stuErr;

    // Update users table (keeps login synced)
    const { error: userErr } = await supabase.from('users')
      .update({ name, email })
      .eq('id', id)
      .eq('role', 'student');
    if (userErr) console.error('Failed updating users table', userErr);

    res.json({ success: true });
  } catch (err) {
    console.error('[update-student]', err);
    res.status(500).json({ error: 'Failed to update student profile' });
  }
});

/**
 * PUT /api/students/:id/password
 * Directly updates a student's login password (teacher/admin action)
 */
router.put('/students/:id/password', async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    if (!password || String(password).length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const { data: student, error: studentErr } = await supabase
      .from('students')
      .select('id, name, email')
      .eq('id', id)
      .single();

    if (studentErr || !student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { data: updatedRows, error: updateErr } = await supabase
      .from('users')
      .update({ password })
      .eq('id', id)
      .eq('role', 'student')
      .select('id');

    if (updateErr) throw updateErr;

    if (!updatedRows || updatedRows.length === 0) {
      const { error: upsertErr } = await supabase
        .from('users')
        .upsert({
          id,
          name: student.name,
          email: student.email,
          role: 'student',
          password,
        }, { onConflict: 'email' });

      if (upsertErr) throw upsertErr;
    }

    res.json({ success: true, message: 'Student password updated successfully' });
  } catch (err) {
    console.error('[update-student-password]', err);
    res.status(500).json({ error: 'Failed to update student password' });
  }
});
/**
 * DELETE /api/students/:id
 */
router.delete('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await supabase.from('users').delete().eq('id', id);
    await supabase.from('attendance').delete().eq('student_id', id);
    await supabase.from('fraud_logs').delete().eq('student_id', id);
    await supabase.from('notifications').delete().eq('student_id', id);
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    console.error('[delete-student]', err);
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

module.exports = router;
