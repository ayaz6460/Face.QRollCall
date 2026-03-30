import { useEffect, useState } from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useAuth } from '../context/AuthContext';
import { getNotifications } from '../api/api';

export default function StudentNotifications() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const studentId = user?.id || 's1';
    getNotifications(studentId)
      .then((res) => setNotifications(res?.notifications || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user?.id]);

  return (
    <div className="app-layout">
      <Sidebar role="student" userName={user?.name || 'Student'} />
      <div className="main-content">
        <Topbar title="My Notifications" subtitle="Updates sent to your account" userName={user?.name || 'Student'} />
        <div className="page-content fade-in">
          <div className="card">
            <div className="card-header">
              <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Bell size={16} /> Notifications
              </span>
            </div>
            <div className="card-body" style={{ padding: 0 }}>
              {loading ? (
                <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)' }}>Loading notifications...</div>
              ) : notifications.length === 0 ? (
                <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)' }}>No notifications yet.</div>
              ) : (
                notifications.map((n, i) => (
                  <div
                    key={n.id || i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderBottom: i < notifications.length - 1 ? '1px solid var(--border)' : 'none'
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: n.type === 'email' ? 'var(--primary-light)' : 'var(--warning-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {n.type === 'email' ? <Mail size={14} color="var(--primary)" /> : <MessageSquare size={14} color="var(--warning)" />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: 'var(--text-primary)' }}>{n.message}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{new Date(n.timestamp).toLocaleString('en-IN')}</div>
                    </div>
                    <span className={`badge ${n.status === 'sent' ? 'badge-success' : 'badge-danger'}`}>{n.status}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
