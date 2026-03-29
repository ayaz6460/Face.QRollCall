const express = require('express');
const router = express.Router();
const supabase = require('../supabase');
const { v4: uuidv4 } = require('uuid');

// ─── ADMIN MIDDLEWARE ────────────────────────────────────────────────────────
// In a full production app, this would deeply inspect JWT roles. 
// For this MVP, we rely on the frontend's protected routing and basic checks.
const requireAdmin = (req, res, next) => {
  // Pass through for now, as JWT bearer auth is handled at the /api layer 
  // or via explicit Admin UI triggers.
  next();
};

/**
 * GET /api/admin/system-stats
 */
router.get('/system-stats', requireAdmin, async (req, res) => {
  try {
    const [attRes, stdRes, tchRes, msgRes] = await Promise.all([
      supabase.from('attendance').select('id, status'),
      supabase.from('students').select('id'),
      supabase.from('users').select('id, role').eq('role', 'teacher'),
      supabase.from('notifications').select('id, status, type')
    ]);

    const totalStudents = stdRes.data?.length || 0;
    const totalTeachers = tchRes.data?.length || 0;
    
    const attData = attRes.data || [];
    const totalAtt = attData.length;
    const presents = attData.filter(a => a.status === 'present').length;
    const overallPercent = totalAtt > 0 ? Math.round((presents / totalAtt) * 100) : 100;

    const notifData = msgRes.data || [];
    const smsSent = notifData.filter(n => n.type === 'sms' && n.status === 'sent').length;
    const emailsSent = notifData.filter(n => n.type === 'email' && n.status === 'sent').length;

    res.json({
      systemHealth: 100,
      totalStudents,
      totalTeachers,
      overallPercent,
      communications: { sms: smsSent, emails: emailsSent }
    });
  } catch (err) {
    console.error('[Admin System Stats]', err);
    res.status(500).json({ error: 'Failed' });
  }
});

/**
 * GET /api/admin/teachers
 */
router.get('/teachers', requireAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*').eq('role', 'teacher');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/teachers
 */
router.post('/teachers', requireAdmin, async (req, res) => {
  try {
    const { email, password, name, department } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    
    // Insert into 'users' table
    const teacherId = uuidv4();
    const payload = {
      id: teacherId,
      email,
      password,
      role: 'teacher',
      name: name || 'New Teacher',
      department: department || 'Engineering'
    };

    const { error } = await supabase.from('users').insert([payload]);
    if (error) throw error;
    
    res.json({ success: true, teacher: payload });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/admin/teachers/:id
 */
router.put('/teachers/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('users').update(req.body).eq('id', id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/admin/teachers/:id/password
 */
router.put('/teachers/:id/password', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    if (!password || String(password).length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const { data, error } = await supabase
      .from('users')
      .update({ password })
      .eq('id', id)
      .eq('role', 'teacher')
      .select('id');

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.json({ success: true, message: 'Teacher password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/admin/admins
 */
router.get('/admins', requireAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*').eq('role', 'admin');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/admins
 */
router.post('/admins', requireAdmin, async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    
    // Insert into 'users' table
    const adminId = uuidv4();
    const payload = {
      id: adminId,
      email,
      password,
      role: 'admin',
      name: name || 'System Administrator',
    };

    const { error } = await supabase.from('users').insert([payload]);
    if (error) throw error;
    
    res.json({ success: true, admin: payload });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/admin/sessions
 */
router.get('/sessions', requireAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase.from('sessions').select('*').order('created_at', { ascending: false }).limit(200);
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/admin/sessions
 */
router.post('/sessions', requireAdmin, async (req, res) => {
  try {
    const { subject, teacher_id, expiry_hours } = req.body;
    if (!subject || !teacher_id) return res.status(400).json({ error: 'Subject and Teacher ID are required' });
    
    const token = require('uuid').v4();
    const expiry = Date.now() + (expiry_hours || 1) * 60 * 60 * 1000;

    const { error } = await supabase.from('sessions').insert([{
      token, subject, teacher_id, expiry, ended: false, started: false
    }]);

    if (error) throw error;
    res.json({ success: true, session: { token, subject, teacher_id, expiry } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE /api/admin/sessions/:token
 */
router.delete('/sessions/:token', requireAdmin, async (req, res) => {
  try {
    const { token } = req.params;
    const { error } = await supabase.from('sessions').delete().eq('token', token);
    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/admin/attendance
 */
router.get('/attendance', requireAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase.from('attendance').select('*').order('timestamp', { ascending: false }).limit(200);
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/admin/attendance/:id
 */
router.put('/attendance/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!['present', 'absent', 'fraud'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const { error } = await supabase.from('attendance').update({ status }).eq('id', id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/admin/communications
 */
router.get('/communications', requireAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase.from('notifications').select('*').order('timestamp', { ascending: false }).limit(200);
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
