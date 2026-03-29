import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, ZapOff, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { markAttendance } from '../api/api';

// Device fingerprint generator
function getDeviceId() {
  const stored = localStorage.getItem('qrc_device_id');
  if (stored) return stored;
  const id = btoa([
    navigator.userAgent,
    screen.width, screen.height,
    navigator.language,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ].join('|')).slice(0, 32);
  localStorage.setItem('qrc_device_id', id);
  return id;
}

// Get GPS location
function getLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);

    const resolvePosition = (pos) => {
      resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy
      });
    };

    navigator.geolocation.getCurrentPosition(
      resolvePosition,
      () => {
        navigator.geolocation.getCurrentPosition(
          resolvePosition,
          () => resolve(null),
          { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
        );
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  });
}

export default function QRScanner() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [scanning, setScanning] = useState(false);
  const [flash, setFlash] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const scannerRef = useRef(null);

  useEffect(() => {
    let html5QrCode;
    if (scanning) {
      import('html5-qrcode').then(({ Html5Qrcode }) => {
        html5QrCode = new Html5Qrcode('qr-reader');
        html5QrCode.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          async (decodedText) => {
            try {
              if (html5QrCode.isScanning || (html5QrCode.getState && html5QrCode.getState() === 2)) {
                 await html5QrCode.stop();
              }
            } catch (err) {
              console.log('Scanner stop skipped:', err.message);
            }
            setScanning(false);
            setProcessing(true);
            setStatusMsg('Verifying QR code…');

            try {
              const data = JSON.parse(decodedText);

              if (!data.token) {
                navigate('/result', { state: { success: false, reason: 'Invalid QR code format' } });
                return;
              }

              // Client-side expiry pre-check
              if (Date.now() > data.expiry) {
                navigate('/result', { state: { success: false, reason: 'QR code has expired' } });
                return;
              }

              setStatusMsg('Getting your location…');
              const location = await getLocation();
              const deviceId = getDeviceId();
              const studentId = user?.id || 's1';

              setStatusMsg('Marking attendance…');
              const result = await markAttendance({
                token: data.token,
                studentId,
                deviceId,
                location
              });

              if (result.success) {
                navigate('/result', { state: { success: true, subject: data.subject, record: result.record } });
              } else {
                navigate('/result', { state: { success: false, reason: result.error || 'Attendance marking failed' } });
              }
            } catch (err) {
              if (err.response) {
                const d = err.response.data;
                if (d.fraud) {
                  navigate('/result', { state: { success: false, reason: `Rejected: ${d.reason}`, riskScore: d.riskScore } });
                } else {
                  navigate('/result', { state: { success: false, reason: d.error || 'Server error' } });
                }
              } else {
                // No internet or parse error
                try {
                  const parsed = JSON.parse(decodedText);
                  navigate('/result', { state: { success: false, reason: 'Cannot connect to server. Are you offline?' } });
                } catch {
                  navigate('/result', { state: { success: false, reason: 'Invalid QR code' } });
                }
              }
            } finally {
              setProcessing(false);
            }
          },
          () => {}
        ).catch(() => setScanning(false));
        scannerRef.current = html5QrCode;
      });
    }
    return () => {
      if (scannerRef.current) {
        try {
          if (scannerRef.current.isScanning || (scannerRef.current.getState && scannerRef.current.getState() === 2)) {
            scannerRef.current.stop().catch(() => {});
          }
        } catch (err) {}
      }
    };
  }, [scanning, navigate, user]);

  return (
    <div className="scanner-container">
      <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

        {/* Back */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-icon" style={{ background: 'rgba(255,255,255,.12)', color: 'white' }} onClick={() => navigate('/student')}>
            <ArrowLeft size={18} />
          </button>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 18 }}>Scan QR Code</span>
        </div>

        {/* Camera Frame */}
        <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 24, padding: 24, border: '1px solid rgba(255,255,255,.12)', textAlign: 'center', width: '100%' }}>
          <div id="qr-reader" style={{ width: '100%', borderRadius: 16, overflow: 'hidden', minHeight: scanning ? 300 : 0 }} />

          {processing && (
            <div style={{ padding: 40 }}>
              <div style={{ width: 64, height: 64, border: '3px solid rgba(255,255,255,.2)', borderTopColor: '#22C55E', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin .8s linear infinite' }} />
              <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>{statusMsg}</p>
            </div>
          )}

          {!scanning && !processing && (
            <div style={{ padding: 40 }}>
              <div style={{ width: 120, height: 120, border: '3px dashed rgba(255,255,255,.3)', borderRadius: 16, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={40} color="rgba(255,255,255,.5)" />
              </div>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, marginBottom: 24 }}>Point camera at the QR code displayed by your teacher</p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => setScanning(true)}>
                Start Scanning
              </button>
            </div>
          )}

          {scanning && !processing && (
            <div style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', display: 'inline-block', animation: 'ping 1.2s ease-in-out infinite' }} />
                <span style={{ color: 'rgba(255,255,255,.8)', fontSize: 14, fontWeight: 500 }}>Scanning… Hold steady</span>
              </div>
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 16 }} onClick={() => setScanning(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Flash toggle */}
        <button className="btn" style={{ background: 'rgba(255,255,255,.1)', color: 'white', gap: 8 }} onClick={() => setFlash(f => !f)}>
          {flash ? <><ZapOff size={16} /> Flash Off</> : <><Zap size={16} /> Flash On</>}
        </button>

        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 12, textAlign: 'center', maxWidth: 280 }}>
          QR codes expire in 60 seconds. Make sure you're inside the classroom for location verification.
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } } @keyframes ping { 0%, 100% { opacity: 1 } 50% { opacity: .3 } }`}</style>
    </div>
  );
}
