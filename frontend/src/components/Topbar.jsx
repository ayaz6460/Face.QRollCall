import { useState } from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Topbar({ title, subtitle }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userName = user?.name || 'Administrator';
  const role = user?.role || 'admin';
  const initials = userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navToNotifications = () => {
    if (role === 'teacher') navigate('/teacher/dashboard'); // Currently points back to dashboard maybe, or an alerts page. If we have analytics, we can go there. Or simply scroll to bottom? Let's go admin/communications for admin, or just nowhere for now if not implemented.
    if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div>
          <div className="page-title">{title}</div>
          {subtitle && <div className="page-subtitle">{subtitle}</div>}
        </div>
      </div>
      <div className="topbar-right">
        <button className="btn-icon btn">
          <Search size={16} color="var(--text-secondary)" />
        </button>
        <button className="btn-icon btn" style={{ position: 'relative' }} onClick={navToNotifications}>
          <Bell size={16} color="var(--text-secondary)" />
          <span style={{
            position: 'absolute', top: 6, right: 6,
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--danger)', border: '1.5px solid white'
          }} />
        </button>
        <div style={{ position: 'relative' }}>
          <div className="topbar-avatar" onClick={() => setShowProfile(!showProfile)}>
            {initials}
          </div>
          {showProfile && (
            <div className="card pop-in" style={{ position: 'absolute', top: '120%', right: 0, width: 220, padding: 8, zIndex: 100 }}>
               <div style={{ padding: '12px 12px', borderBottom: '1px solid var(--border)', marginBottom: 8 }}>
                 <div style={{ fontWeight: 600, fontSize: 14 }}>{userName}</div>
                 <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'capitalize' }}>{role}</div>
               </div>
               <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', color: '#ef4444' }} onClick={handleLogout}>
                 <LogOut size={14} style={{ marginRight: 8 }} /> Sign Out
               </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
