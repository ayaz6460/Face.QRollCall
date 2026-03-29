const express = require('express');
const router = express.Router();
const supabase = require('../supabase');

/**
 * GET /api/analytics
 */
router.get('/analytics', async (req, res) => {
  try {
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English'];

    const [studentsRes, attRes, sessionsRes, fraudRes] = await Promise.all([
      supabase.from('students').select('id, name, roll, email'),
      supabase.from('attendance').select('*'),
      supabase.from('sessions').select('*'),
      supabase.from('fraud_logs').select('*').order('timestamp', { ascending: false }).limit(10)
    ]);

    const students = studentsRes.data || [];
    const allAtt = attRes.data || [];
    const today = new Date().toISOString().split('T')[0];
    const allSessions = (sessionsRes.data || []).filter(s => s.ended === true || s.created_at.startsWith(today));
    const fraudLogs = fraudRes.data || [];

    // Dynamically derive subjects from actual attendance + active sessions
    const subjectNames = [...new Set([...allAtt.map(a => a.subject), ...allSessions.map(s => s.subject)].filter(Boolean))];
    if (subjectNames.length === 0) subjectNames.push(...subjects); // fallback

    // Subject-wise attendance
    const subjectData = subjectNames.map(subject => {
      const subjSessions = allSessions.filter(s => s.subject === subject).length;
      const totalPossible = students.length * subjSessions;
      
      const subjectAtt = allAtt.filter(a => a.subject === subject);
      const present = subjectAtt.filter(a => a.status === 'present').length;
      const dbAbsent = subjectAtt.filter(a => a.status === 'absent').length;
      
      // True absent count factors in active unmarked students in running sessions
      const absent = Math.max(dbAbsent, totalPossible - present);

      return { 
        subject, 
        present, 
        absent,
        total: totalPossible, 
        percent: totalPossible > 0 ? Math.round((present / totalPossible) * 100) : 0 
      };
    });

    // Overall counts
    const totalPresent = allAtt.filter(a => a.status === 'present').length;
    const globalTotalPossible = students.length * allSessions.length;
    const totalAbsent = Math.max(allAtt.filter(a => a.status === 'absent').length, globalTotalPossible - totalPresent);

    // Weekly trend (last 7 days)
    const now = new Date();
    const weeklyTrend = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now);
      d.setDate(d.getDate() - (6 - i));
      const dayStr = d.toISOString().split('T')[0];
      const count = allAtt.filter(a => a.timestamp?.startsWith(dayStr) && a.status === 'present').length;
      return { day: d.toLocaleDateString('en', { weekday: 'short' }), present: count };
    });

    // At-risk students based on REAL attendance ratio
    const atRisk = students.map(student => {
      const stuAtt = allAtt.filter(a => a.student_id === student.id);
      const stuPresent = stuAtt.filter(a => a.status === 'present').length;
      const totalPoss = allSessions.length; // 1 possible presence per logged session
      
      const percent = totalPoss > 0 ? Math.round((stuPresent / totalPoss) * 100) : 100; // default 100 if no data
      const stuAbsent = Math.max(stuAtt.filter(a => a.status === 'absent').length, totalPoss - stuPresent);
      return { ...student, attendancePercent: percent, totalAbsences: stuAbsent };
    }).filter(s => s.attendancePercent < 75 && s.totalAbsences > 0);

    // Sort by most at risk
    atRisk.sort((a, b) => a.attendancePercent - b.attendancePercent);

    res.json({ subjectData, overallPresent: totalPresent, overallAbsent: totalAbsent, weeklyTrend, atRisk, fraudLogs });
  } catch (err) {
    console.error('[analytics]', err);
    res.status(500).json({ error: 'Failed to load analytics' });
  }
});

/**
 * GET /api/student-dashboard
 */
router.get('/student-dashboard', async (req, res) => {
  try {
    const { studentId } = req.query;
    if (!studentId) return res.status(400).json({ error: 'studentId required' });

    // 1. Fetch data
    const [attRes, sessionsRes] = await Promise.all([
      supabase.from('attendance').select('subject, status').eq('student_id', studentId),
      supabase.from('sessions').select('*')
    ]);

    const stuAtt = attRes.data || [];
    const allSessions = sessionsRes.data || [];
    const endedSessions = allSessions.filter(s => s.ended === true);
    
    // 2. Derive distinct subjects from sessions
    const subjectNames = [...new Set(allSessions.map(s => s.subject))].filter(Boolean);
    if (subjectNames.length === 0) {
      subjectNames.push('Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English');
    }

    // 3. Subject-wise attendance breakdown
    const subjectStats = subjectNames.map(subject => {
      const subjSessions = endedSessions.filter(s => s.subject === subject).length;
      const presents = stuAtt.filter(a => a.subject === subject && a.status === 'present').length;
      return {
        subject,
        present: presents,
        total: subjSessions,
        percent: subjSessions > 0 ? Math.round((presents / subjSessions) * 100) : 100
      };
    });

    // 4. Overall Percentage
    const totalPresents = subjectStats.reduce((sum, s) => sum + s.present, 0);
    const globalTotal = subjectStats.reduce((sum, s) => sum + s.total, 0);
    const overallPercent = globalTotal > 0 ? Math.round((totalPresents / globalTotal) * 100) : 100;

    // 5. Today's schedule
    const today = new Date().toISOString().split('T')[0];
    let todaysSessions = allSessions.filter(s => s.created_at.startsWith(today));
    
    // Mock schedule if no live sessions today for demo purposes
    if (todaysSessions.length === 0) {
      todaysSessions = [
        { subject: 'Mathematics', room: 'Room 301', ended: true },
        { subject: 'Computer Science', room: 'Lab 4', ended: false },
        { subject: 'Physics', room: 'Room 205', ended: false }
      ];
    }

    let hasFoundCurrent = false;
    const todaySchedule = todaysSessions.map(s => {
      let status = 'future';
      if (s.ended) {
        status = 'completed';
      } else if (!hasFoundCurrent && !s.ended) {
        status = 'current';
        hasFoundCurrent = true;
      }
      return {
        subject: s.subject,
        time: s.time || '10:00 AM', // Provide fallback
        room: s.room || 'Main Hall',
        status
      };
    });

    res.json({
      subjectStats,
      overallPercent,
      todaySchedule
    });

  } catch (err) {
    console.error('[student-dashboard]', err);
    res.status(500).json({ error: 'Failed to load student dashboard' });
  }
});

module.exports = router;
