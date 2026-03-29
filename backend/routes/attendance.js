const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fraudDetection = require('../middleware/fraudDetection');
const supabase = require('../supabase');
const router = express.Router();

function normalizeLocation(location) {
  if (!location || typeof location !== 'object') return null;

  const rawLat = location.lat ?? location.latitude;
  const rawLng = location.lng ?? location.longitude;

  const lat = typeof rawLat === 'string' ? parseFloat(rawLat) : rawLat;
  const lng = typeof rawLng === 'string' ? parseFloat(rawLng) : rawLng;

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const normalized = { lat, lng };

  if (location.accuracy != null) {
    const accuracy = typeof location.accuracy === 'string' ? parseFloat(location.accuracy) : location.accuracy;
    if (Number.isFinite(accuracy)) normalized.accuracy = accuracy;
  }

  return normalized;
}

/**
 * POST /api/mark-attendance
 */
router.post('/mark-attendance', async (req, res) => {
  try {
    const { token, studentId, deviceId, location } = req.body;
    const normalizedLocation = normalizeLocation(location);
    if (!token || !studentId) return res.status(400).json({ error: 'token and studentId required' });

    // Fetch session from Supabase
    const { data: sessions, error: sErr } = await supabase
      .from('sessions').select('*').eq('token', token).eq('started', true).eq('ended', false).limit(1);
    if (sErr) throw sErr;
    const session = sessions?.[0] || null;

    // Fetch student
    const { data: students, error: stErr } = await supabase
      .from('students').select('*').eq('id', studentId).limit(1);
    if (stErr) throw stErr;
    const student = students?.[0];
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // Fraud detection
    const fraudResult = fraudDetection.check({ token, session, student, deviceId, location: normalizedLocation });

    if (fraudResult.isFraud) {
      const fraudId = uuidv4();
      const fraudLog = {
        id: fraudId,
        student_id: studentId,
        student_name: student.name,
        reason: fraudResult.reason,
        device: deviceId,
        location: normalizedLocation || null,
        risk_score: fraudResult.riskScore,
        status: 'pending'
      };

      const { error: fraudErr } = await supabase.from('fraud_logs').insert([fraudLog]);
      if (fraudErr) console.error('[fraud-log insert]', fraudErr);

      const eventPayload = {
        id: fraudId,
        studentId,
        studentName: student.name,
        reason: fraudResult.reason,
        riskScore: fraudResult.riskScore,
        location: normalizedLocation || null,
        token,
        subject: session?.subject || null,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      if (session) req.io.to(`teacher-${session.teacher_id}`).emit('fraud-alert', eventPayload);
      req.io.to('admins').emit('fraud-alert', eventPayload);
      return res.status(403).json({ success: false, fraud: true, reason: fraudResult.reason, riskScore: fraudResult.riskScore });
    }

    // Duplicate check
    const today = new Date().toISOString().split('T')[0];
    // Prefer session-token scoped duplicate prevention.
    // We store the token inside the JSONB `location` field so we don't require a DB migration.
    let alreadyMarked = false;
    try {
      const { data: existing, error: dupErr } = await supabase
        .from('attendance')
        .select('id')
        .eq('student_id', studentId)
        .gte('timestamp', `${today}T00:00:00Z`)
        .contains('location', { token })
        .limit(1);
      if (dupErr) throw dupErr;
      alreadyMarked = (existing || []).length > 0;
    } catch (e) {
      // Fallback for older schemas / RLS policies that block JSON contains.
      const { data: existingFallback, error: dupFallbackErr } = await supabase
        .from('attendance')
        .select('id')
        .eq('student_id', studentId)
        .eq('subject', session.subject)
        .gte('timestamp', `${today}T00:00:00Z`)
        .limit(1);
      if (dupFallbackErr) throw dupFallbackErr;
      alreadyMarked = (existingFallback || []).length > 0;
    }
    if (alreadyMarked) return res.status(409).json({ success: false, error: 'Attendance already marked for this session' });

    // Insert attendance record
    const record = {
      id: uuidv4(), student_id: studentId, student_name: student.name,
      subject: session.subject, timestamp: new Date().toISOString(),
      status: 'present', device_id: deviceId,
      location: normalizedLocation ? { ...normalizedLocation, token } : { token }
    };
    const { error: attErr } = await supabase.from('attendance').insert([record]);
    if (attErr) throw attErr;

    // Emit real-time events
    req.io.to(`teacher-${session.teacher_id}`).emit('attendance-update', {
      ...record, studentId, studentName: student.name
    });
    req.io.to(`student-${studentId}`).emit('attendance-confirmed', record);

    res.json({ success: true, record });
  } catch (err) {
    console.error('[mark-attendance]', err);
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
});

/**
 * GET /api/student-dashboard?studentId=s1
 */
router.get('/student-dashboard', async (req, res) => {
  try {
    const { studentId } = req.query;
    const { data: students } = await supabase.from('students').select('*').eq('id', studentId).limit(1);
    const student = students?.[0];
    if (!student) return res.status(404).json({ error: 'Student not found' });

    const { data: attRecords } = await supabase.from('attendance').select('*').eq('student_id', studentId);
    const { data: allSessions } = await supabase.from('sessions').select('subject, ended, created_at');

    const todayFilter = new Date().toISOString().split('T')[0];
    const validSessions = (allSessions || []).filter(s => s.ended === true || s.created_at.startsWith(todayFilter));

    // Calculate subject stats dynamically based on ALL VALID generated sessions
    const subjectMap = {};
    validSessions.forEach(s => {
      if (!subjectMap[s.subject]) subjectMap[s.subject] = { present: 0, total: 0 };
      subjectMap[s.subject].total += 1;
    });

    (attRecords || []).forEach(r => {
      // Fallback if attendance somehow exists without a session record
      if (!subjectMap[r.subject]) subjectMap[r.subject] = { present: 0, total: 1 };
      if (r.status === 'present') subjectMap[r.subject].present += 1;
    });

    const stats = Object.keys(subjectMap).map(subject => {
      const { present, total } = subjectMap[subject];
      const percent = total > 0 ? Math.round((present / total) * 100) : 0;
      return { subject, present, total, percent, status: percent >= 75 ? 'safe' : percent >= 60 ? 'warning' : 'danger' };
    });

    const overallPercent = stats.length > 0 ? Math.round(stats.reduce((sum, s) => sum + s.percent, 0) / stats.length) : 0;

    // Fetch actual today's sessions
    const today = new Date().toISOString().split('T')[0];
    const { data: sessions } = await supabase.from('sessions').select('*').gte('created_at', `${today}T00:00:00Z`).order('created_at', { ascending: true });
    
    const todaySchedule = (sessions || []).map(s => {
       const timeObj = new Date(s.created_at);
       const time = timeObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
       return {
         subject: s.subject,
         time,
         room: 'Campus',
         status: s.ended ? 'completed' : 'current'
       };
    });

    res.json({ student, overallPercent, subjectStats: stats, todaySchedule, notifications: [] });
  } catch (err) {
    console.error('[student-dashboard]', err);
    res.status(500).json({ error: 'Failed to load dashboard' });
  }
});

/**
 * PUT /api/teacher-dashboard/start
 * Teacher starts an assigned session (sets started=true)
 */
router.put('/teacher-dashboard/start', async (req, res) => {
  try {
    const { token, latitude, longitude, radius, lat, lng } = req.body;
    if (!token) return res.status(400).json({ error: 'token is required' });

    const expirySeconds = parseInt(process.env.QR_TOKEN_EXPIRY) || 60;
    const expiry = Date.now() + expirySeconds * 1000;
    
    const startedAt = new Date().toISOString();
    const updatePayload = { started: true, expiry, started_at: startedAt };
    const useLat = (latitude ?? lat);
    const useLng = (longitude ?? lng);
    if (useLat != null && useLng != null && radius != null) {
      updatePayload.latitude = Number(useLat);
      updatePayload.longitude = Number(useLng);
      updatePayload.allowed_radius = Number(radius);
    }

    let data = null;
    let error = null;

    ({ data, error } = await supabase
      .from('sessions')
      .update(updatePayload)
      .eq('token', token)
      .eq('ended', false)
      .select()
      .single());

    if (error) {
      const retryPayload = { ...updatePayload, created_at: startedAt };
      delete retryPayload.started_at;
      ({ data, error } = await supabase
        .from('sessions')
        .update(retryPayload)
        .eq('token', token)
        .eq('ended', false)
        .select()
        .single());
    }

    if (error) throw error;
    res.json({ success: true, session: data });
  } catch (err) {
    console.error('[teacher-dashboard/start]', err);
    res.status(500).json({ error: 'Failed to start session' });
  }
});

/**
 * PUT /api/teacher-dashboard/stop
 * Teacher stops a running session (sets started=false, ended=true)
 */
router.put('/teacher-dashboard/stop', async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'token is required' });

    const { data, error } = await supabase
      .from('sessions')
      .update({ started: false, ended: true })
      .eq('token', token)
      .select()
      .single();
      
    if (error) throw error;
    res.json({ success: true, session: data });
  } catch (err) {
    console.error('[teacher-dashboard/stop]', err);
    res.status(500).json({ error: 'Failed to stop session' });
  }
});

/**
 * GET /api/teacher-dashboard
 */
router.get('/teacher-dashboard', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const [studentsRes, attRes, fraudRes, sessionsRes] = await Promise.all([
      supabase.from('students').select('*'),
      supabase.from('attendance').select('*').gte('timestamp', `${today}T00:00:00Z`),
      supabase.from('fraud_logs').select('*').gte('timestamp', `${today}T00:00:00Z`),
      supabase.from('sessions').select('*').gte('created_at', `${today}T00:00:00Z`).order('created_at', { ascending: true })
    ]);

    const allStudents = studentsRes.data || [];
    const todayAtt = attRes.data || [];
    const fraudLogs = fraudRes.data || [];
    const todaysSessions = sessionsRes.data || [];
    const presentToday = todayAtt.filter(a => a.status === 'present').length;
    
    // Scale total possible for today based on how many valid sessions are run today
    const validToday = todaysSessions.filter(s => s.ended === true || s.created_at.startsWith(today));
    const activeSessionsToday = validToday.length > 0 ? validToday.length : 1;
    const maxPossibleToday = allStudents.length * activeSessionsToday;

    res.json({
      stats: {
        totalStudents: allStudents.length,
        presentToday,
        attendancePercent: Math.round((presentToday / (maxPossibleToday || 1)) * 100),
        fraudAlerts: fraudLogs.length
      },
      recentAttendance: todayAtt.slice(-10).reverse(),
      allAttendance: todayAtt,
      fraudAlerts: fraudLogs.slice(-5).reverse(),
      students: allStudents,
      todaysSessions: todaysSessions
    });
  } catch (err) {
    console.error('[teacher-dashboard]', err);
    res.status(500).json({ error: 'Failed to load dashboard' });
  }
});

module.exports = router;
