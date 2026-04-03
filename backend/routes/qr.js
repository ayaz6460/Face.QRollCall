const express = require('express');
const QRCode = require('qrcode');
const supabase = require('../supabase');
const router = express.Router();

/**
 * POST /api/generate-qr
 * Only generates QR codes for sessions that have been started by the teacher.
 * Does NOT create new sessions — admin creates sessions, teacher starts them.
 */
router.post('/generate-qr', async (req, res) => {
  try {
    const { subject, teacherId } = req.body;
    if (!subject || !teacherId) return res.status(400).json({ error: 'subject and teacherId are required' });

    const expirySeconds = parseInt(process.env.QR_TOKEN_EXPIRY) || 60;
    const expiry = Date.now() + expirySeconds * 1000;

    // Find an active (started but not ended) session for this teacher and subject
    const { data: activeSessions } = await supabase
      .from('sessions')
      .select('*')
      .eq('teacher_id', teacherId)
      .eq('subject', subject)
      .eq('started', true)
      .eq('ended', false)
      .limit(1);

    if (!activeSessions || activeSessions.length === 0) {
      return res.status(404).json({ error: 'No active session found. Please start a session first.' });
    }

    // Reuse token and update expiry for QR rotation
    const token = activeSessions[0].token;
    const session_code = activeSessions[0].session_code || null;
    await supabase.from('sessions').update({ expiry }).eq('token', token);

    const payload = JSON.stringify({ token, subject, expiry });
    const qrImage = await QRCode.toDataURL(payload, {
      errorCorrectionLevel: 'H', margin: 2,
      color: { dark: '#1e40af', light: '#ffffff' }, width: 400
    });

    res.json({ token, qrImage, expiry, subject, expirySeconds, session_code });
  } catch (err) {
    console.error('[generate-qr]', err);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

/**
 * GET /api/sessions/active
 */
router.get('/sessions/active', async (req, res) => {
  try {
    const now = Date.now();
    const { data, error } = await supabase
      .from('sessions')
      .select('*')
      .eq('started', true)
      .eq('ended', false)
      .gt('expiry', now);
    if (error) throw error;
    res.json({ sessions: data || [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get sessions' });
  }
});

/**
 * POST /api/verify-code
 * Allows students to manually join a session using an 8-digit session code.
 */
router.post('/verify-code', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: 'Session code is required' });

    const { data: sessions } = await supabase
      .from('sessions')
      .select('token, subject, ended, started')
      .ilike('session_code', code.trim())
      .limit(1);

    const session = sessions?.[0];

    if (!session) return res.status(404).json({ error: 'Invalid session code' });
    if (!session.started || session.ended) return res.status(403).json({ error: 'Session is not currently active' });

    // Extend the token's active expiry window so it effectively acts like a fresh QR scan
    const expirySeconds = parseInt(process.env.QR_TOKEN_EXPIRY) || 60;
    const expiry = Date.now() + expirySeconds * 1000;
    await supabase.from('sessions').update({ expiry }).eq('token', session.token);

    res.json({ token: session.token, subject: session.subject, expiry, expirySeconds });
  } catch (err) {
    console.error('[verify-code]', err);
    res.status(500).json({ error: 'Failed to verify session code' });
  }
});

module.exports = router;
