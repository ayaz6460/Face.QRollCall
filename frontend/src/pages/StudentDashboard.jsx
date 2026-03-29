import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScanLine, BookOpen, Clock, TrendingUp, Bell, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useAuth } from '../context/AuthContext';
import { getStudentDashboard, getNotifications } from '../api/api';
import { useSocket } from '../hooks/useSocket';

function ProgressRing({ pct, size = 110, stroke = 8, color }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const filled = circ * (pct / 100);
  const col = color || (pct >= 75 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)');
  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-secondary)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={col} strokeWidth={stroke}
          strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" style={{ transition: 'stroke-dasharray .6s ease' }} />
      </svg>
      <span className="progress-ring-value" style={{ fontSize: size < 90 ? 14 : 22, color: col }}>{pct}%</span>
    </div>
  );
}

export { ProgressRing };

export default function StudentDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [time, setTime] = useState(new Date());
  const [dashData, setDashData] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const studentId = user?.id || 's1';
  const userName = user?.name || 'Student';

  const fetchData = async () => {
    try {
      const [dash, notifs] = await Promise.all([
        getStudentDashboard(studentId),
        getNotifications(studentId)
      ]);
      setDashData(dash);
      setNotifications(notifs.notifications?.slice(0, 3) || []);
    } catch (err) {
      console.error('Student dashboard fetch failed', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  // Real-time: listen for attendance confirmations
  useSocket(`student-${studentId}`, {
    'attendance-confirmed': () => fetchData(),
    'attendance-update': () => fetchData(),
  });

  const subjectStats = dashData?.subjectStats || [];
  const overall = dashData?.overallPercent ?? 0;
  const todaySchedule = dashData?.todaySchedule || [];
  const statusColor = overall >= 75 ? 'var(--success)' : overall >= 60 ? 'var(--warning)' : 'var(--danger)';
  const statusBadge = overall >= 75 ? 'badge-success' : overall >= 60 ? 'badge-warning' : 'badge-danger';
  const statusLabel = overall >= 75 ? 'Safe' : overall >= 60 ? 'Warning' : 'Danger';

  const currentClass = todaySchedule.find(s => s.status === 'current');
  const classesAttended = subjectStats.reduce((s, x) => s + x.present, 0);
  const classesMissed = subjectStats.reduce((s, x) => s + (x.total - x.present), 0);

  if (loading) return (
    <div className="app-layout">
      <Sidebar role="student" userName={userName} />
      <div className="main-content"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}><div style={{ color: 'var(--text-muted)' }}>Loading dashboard…</div></div></div>
    </div>
  );

  return (
    <div className="app-layout">
      <Sidebar role="student" userName={userName} onLogout={logout} />
      <div className="main-content">
        <Topbar title="My Dashboard" subtitle={time.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} userName={userName} />
        <div className="page-content fade-in">

          {/* Greeting */}
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700 }}>Good {time.getHours() < 12 ? 'Morning' : time.getHours() < 17 ? 'Afternoon' : 'Evening'}, {userName.split(' ')[0]}! 👋</h2>
            <p className="text-muted text-sm mt-4">Roll: {user?.roll || 'Student'} · Semester 4 · CSE</p>
          </div>

          <div className="grid grid-4 mb-24">
            <div className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <ProgressRing pct={overall} />
              <div>
                <div className="stat-label">Overall Attendance</div>
                <div className={`badge ${statusBadge} badge-dot mt-8`}>{statusLabel}</div>
                <div className="text-sm mt-8" style={{ color: 'var(--text-secondary)' }}>Min required: 75%</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><BookOpen size={20} /></div>
              <div className="stat-value">{classesAttended}</div>
              <div className="stat-label">Classes Attended</div>
            </div>
            <div className="stat-card warning">
              <div className="stat-icon warning"><AlertCircle size={20} /></div>
              <div className="stat-value">{classesMissed}</div>
              <div className="stat-label">Classes Missed</div>
            </div>
            <div className="stat-card success">
              <div className="stat-icon success"><TrendingUp size={20} /></div>
              <div className="stat-value">{overall >= 75 ? '+' : '-'}{Math.abs(overall - 75)}%</div>
              <div className="stat-label">vs 75% Threshold</div>
              <div className={`stat-change ${overall >= 75 ? 'up' : 'down'}`}>{overall >= 75 ? 'Above limit ↑' : 'Below limit ↓'}</div>
            </div>
          </div>

          <div className="grid grid-2 gap-20">
            {/* Today's Schedule */}
            <div className="card">
              <div className="card-header">
                <span className="card-title">Today's Schedule</span>
                <span className="badge badge-primary">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
              </div>
              <div className="card-body" style={{ padding: 0 }}>
                {todaySchedule.length === 0 && (
                  <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>No schedule today</div>
                )}
                {todaySchedule.map((cls, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < todaySchedule.length - 1 ? '1px solid var(--border)' : 'none', background: cls.status === 'current' ? 'var(--primary-light)' : '' }}>
                    <span style={{ fontSize: 22 }}>
                      {{ Mathematics: '📐', Physics: '⚛️', 'Computer Science': '💻', English: '📚', Chemistry: '🧪' }[cls.subject] || '📖'}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{cls.subject}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{cls.time} · {cls.room}</div>
                    </div>
                    <span className={`badge ${cls.status === 'completed' ? 'badge-success' : cls.status === 'current' ? 'badge-primary' : 'badge-gray'}`}>
                      {cls.status === 'completed' ? '✓ Done' : cls.status === 'current' ? '● Live' : 'Later'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Current Class CTA */}
              {currentClass && (
                <div style={{ background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', borderRadius: 'var(--radius-lg)', padding: 24, color: 'white', boxShadow: '0 8px 24px rgba(37,99,235,.35)' }}>
                  <div style={{ fontSize: 12, opacity: .8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>Current Class</div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{currentClass.subject}</div>
                  <div style={{ fontSize: 13, opacity: .8, marginBottom: 20 }}>{currentClass.room} · {currentClass.time}</div>
                  <button className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, width: '100%' }} onClick={() => navigate('/scanner')}>
                    <ScanLine size={16} /> Scan QR & Mark Attendance
                  </button>
                </div>
              )}

              {!currentClass && (
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: 24, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>📅</div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>No Live Class Right Now</div>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Your next class will appear here when it starts.</p>
                  <button className="btn btn-secondary" onClick={() => navigate('/scanner')}>
                    <ScanLine size={14} /> Open Scanner
                  </button>
                </div>
              )}

              {/* Subject Breakdown */}
              <div className="card">
                <div className="card-header"><span className="card-title">Subject Attendance</span></div>
                <div className="card-body">
                  {subjectStats.map(s => (
                    <div key={s.subject} style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                        <span style={{ fontWeight: 500 }}>{s.subject}</span>
                        <span style={{ fontWeight: 700, color: s.percent >= 75 ? 'var(--success)' : s.percent >= 60 ? 'var(--warning)' : 'var(--danger)' }}>{s.percent}%</span>
                      </div>
                      <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 999 }}>
                        <div style={{ height: '100%', width: `${s.percent}%`, background: s.percent >= 75 ? 'var(--success)' : s.percent >= 60 ? 'var(--warning)' : 'var(--danger)', borderRadius: 999, transition: 'width .6s ease' }} />
                      </div>
                    </div>
                  ))}
                  {subjectStats.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>No attendance data yet.</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="card mt-24">
            <div className="card-header">
              <span className="card-title"><Bell size={16} style={{ display: 'inline', marginRight: 6 }} />Notifications</span>
            </div>
            <div className="card-body">
              {notifications.length === 0 && (
                <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>No new notifications.</p>
              )}
              {notifications.map((n, i) => (
                <div key={n.id || i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: i < notifications.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: 20 }}>{n.type === 'email' ? '📩' : '💬'}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, color: 'var(--text-primary)' }}>{n.message}</p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{new Date(n.timestamp).toLocaleString('en-IN')}</p>
                  </div>
                  <span className={`badge ${n.status === 'sent' ? 'badge-success' : 'badge-danger'}`}>{n.status}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
