import { useLocation, useNavigate } from 'react-router-dom';

export default function AttendanceResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const success = state?.success ?? true;
  const subject = state?.record?.subject || state?.subject || 'Unknown Subject';
  const reason  = state?.reason  || 'QR code has expired';
  const isExpired = !success && reason.toLowerCase().includes('expired');

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ background: '#f7f9fb', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif", WebkitTapHighlightColor: 'transparent' }}>

      {/* Match Stitch: TopAppBar */}
      <header style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 64, background: 'rgba(247,249,251,.80)', backdropFilter: 'blur(24px)', zIndex: 50, boxShadow: '0 1px 0 #e5e9f0' }}>
        <button onClick={() => navigate(-1)} style={{ color: '#005ac2', background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: '50%', display: 'flex', alignItems: 'center' }}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, color: '#005ac2', fontSize: 18, letterSpacing: '-.02em' }}>QRollCall</h1>
        <div style={{ width: 40 }} />
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 120px', position: 'relative', overflow: 'hidden' }}>

        {/* Decorative blobs (matching Stitch) */}
        <div style={{ position: 'absolute', top: '25%', right: -80, width: 256, height: 256, background: 'rgba(0,88,190,.05)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '25%', left: -80, width: 192, height: 192, background: 'rgba(146,71,0,.05)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }} />

        <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {success ? (
            <>
              {/* ── SUCCESS STATE (matches Stitch "Attendance Marked Successfully") ── */}
              <div style={{ position: 'relative', marginBottom: 40 }}>
                {/* Pulse rings */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 192, height: 192, border: '1px solid #bbf7d0', borderRadius: '50%', animation: 'pulse 2s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 256, height: 256, border: '1px solid rgba(187,247,208,.5)', borderRadius: '50%' }} />
                <div style={{ width: 128, height: 128, borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 96, height: 96, borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 56, color: '#059669', fontVariationSettings: "'wght' 600, 'FILL' 1" }}>check_circle</span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, color: '#191c1e', letterSpacing: '-.02em', marginBottom: 8 }}>Attendance Marked Successfully</h2>
                <p style={{ color: '#424754', lineHeight: 1.6 }}>Your presence has been verified and recorded in the digital registrar.</p>
              </div>

              {/* Glassmorphism detail card (matching Stitch) */}
              <div style={{ width: '100%', background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 16, padding: 24, boxShadow: '0 -12px 40px rgba(0,88,190,.06)', border: '1px solid rgba(255,255,255,.2)' }}>
                {/* Subject */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
                  <div style={{ padding: 12, background: '#d8e2ff', borderRadius: 10, color: '#0058be' }}>
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 600, color: '#424754', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>Subject</p>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: '#191c1e' }}>{subject}</p>
                  </div>
                </div>
                {/* Time + Date grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[{ icon: 'schedule', label: 'Time', value: timeStr }, { icon: 'calendar_today', label: 'Date', value: dateStr }].map(({ icon, label, value }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ padding: 8, background: '#e6e8ea', borderRadius: 10, color: '#424754' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 600, color: '#424754', textTransform: 'uppercase', letterSpacing: '.08em' }}>{label}</p>
                        <p style={{ fontWeight: 700, fontSize: 14, color: '#191c1e' }}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ width: '100%', marginTop: 48 }}>
                <button onClick={() => navigate('/student')} style={{ width: '100%', background: 'linear-gradient(135deg,#0058be,#2170e4)', color: 'white', fontFamily: "'Manrope', sans-serif", fontWeight: 700, padding: '16px', borderRadius: 12, border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,88,190,.2)', transition: 'all .2s', fontSize: 15 }}>
                  Go Back to Dashboard
                </button>
                <button onClick={() => navigate('/student')} style={{ width: '100%', marginTop: 16, padding: '12px', fontWeight: 600, color: '#0058be', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 10, transition: 'all .2s' }}>
                  View History
                </button>
              </div>
            </>
          ) : (
            <>
              {/* ── ERROR STATE (matches Stitch "Error: Expired QR Code") ── */}
              <div style={{ position: 'relative', marginBottom: 32 }}>
                <div style={{ width: 128, height: 128, borderRadius: '50%', background: '#ffdcc6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 64, color: '#924700' }}>
                    {isExpired ? 'schedule' : 'location_off'}
                  </span>
                </div>
                {/* Glassmorphism ring */}
                <div style={{ position: 'absolute', inset: -6, border: '4px solid rgba(255,255,255,.2)', borderRadius: '50%', filter: 'blur(1px)' }} />
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, color: '#191c1e', letterSpacing: '-.02em', marginBottom: 12 }}>
                  {isExpired ? 'Expired QR Code' : 'Attendance Failed'}
                </h2>
                <p style={{ color: '#424754', lineHeight: 1.6, padding: '0 16px' }}>
                  {isExpired
                    ? 'This QR code is no longer valid for attendance marking.'
                    : reason}
                </p>
              </div>

              {/* Bento-style detail card (matching Stitch expired-qr) */}
              <div style={{ width: '100%', background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 -12px 40px rgba(0,88,190,.03)', border: '1px solid rgba(194,198,214,.15)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 14, color: '#424754' }}>Subject</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#191c1e' }}>{subject}</span>
                </div>
                <div style={{ height: 1, background: '#f2f4f6', marginBottom: 16 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#424754' }}>Reason</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#924700' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>timer</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{isExpired ? 'Token expired' : 'Check failed'}</span>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', marginTop: 40 }}>
                <button onClick={() => navigate('/scanner')} style={{ width: '100%', background: 'linear-gradient(135deg,#0058be,#2170e4)', color: 'white', fontFamily: "'Manrope', sans-serif", fontWeight: 700, padding: '16px', borderRadius: 12, border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,88,190,.2)', transition: 'all .2s', fontSize: 15 }}>
                  Try Again
                </button>
              </div>

              <p style={{ marginTop: 24, fontSize: 12, color: '#424754', fontWeight: 500, textAlign: 'center', opacity: .7 }}>
                Please contact your instructor if you believe this is an error.
              </p>
            </>
          )}
        </div>
      </main>

      {/* Bottom nav bar (matches Stitch success screen) */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '12px 16px 24px', background: 'rgba(255,255,255,.8)', backdropFilter: 'blur(24px)', borderRadius: '16px 16px 0 0', boxShadow: '0 -12px 40px rgba(0,88,190,.06)' }}>
        {[
          { icon: 'qr_code_scanner', label: 'Scan', path: '/scanner' },
          { icon: 'history',          label: 'History', path: '/student', active: true },
          { icon: 'person',           label: 'Profile', path: '/student' },
        ].map(({ icon, label, path, active }) => (
          <button key={label} onClick={() => navigate(path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, background: active ? '#eff6ff' : 'none', color: active ? '#005ac2' : '#64748b', padding: '6px 20px', borderRadius: 12, border: 'none', cursor: 'pointer', transition: 'all .2s' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: active ? "'FILL' 1" : undefined }}>{icon}</span>
            <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</span>
          </button>
        ))}
      </nav>

      <style>{`@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.5; } }`}</style>
    </div>
  );
}
