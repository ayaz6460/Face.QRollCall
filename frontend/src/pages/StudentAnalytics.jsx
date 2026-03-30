import { useEffect, useState } from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useAuth } from '../context/AuthContext';
import { getStudentDashboard } from '../api/api';

export default function StudentAnalytics() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [subjectStats, setSubjectStats] = useState([]);
  const [overallPercent, setOverallPercent] = useState(0);

  useEffect(() => {
    const studentId = user?.id || 's1';
    getStudentDashboard(studentId)
      .then((data) => {
        setSubjectStats(data?.subjectStats || []);
        setOverallPercent(data?.overallPercent ?? 0);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user?.id]);

  return (
    <div className="app-layout">
      <Sidebar role="student" userName={user?.name || 'Student'} />
      <div className="main-content">
        <Topbar
          title="My Analytics"
          subtitle="Track your attendance performance"
          userName={user?.name || 'Student'}
        />
        <div className="page-content fade-in">
          {loading ? (
            <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>Loading analytics...</div>
          ) : (
            <>
              <div className="stat-card" style={{ marginBottom: 20 }}>
                <div className="stat-icon">
                  <TrendingUp size={20} />
                </div>
                <div className="stat-value">{overallPercent}%</div>
                <div className="stat-label">Overall Attendance</div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <BarChart2 size={16} /> Subject-wise Attendance
                  </span>
                </div>
                <div className="card-body">
                  {subjectStats.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)' }}>No subject analytics available yet.</p>
                  ) : (
                    subjectStats.map((s) => (
                      <div key={s.subject} style={{ marginBottom: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                          <span style={{ fontWeight: 600 }}>{s.subject}</span>
                          <span style={{ fontWeight: 700 }}>{s.percent}%</span>
                        </div>
                        <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 999 }}>
                          <div
                            style={{
                              height: '100%',
                              width: `${s.percent}%`,
                              borderRadius: 999,
                              background: s.percent >= 75 ? 'var(--success)' : s.percent >= 60 ? 'var(--warning)' : 'var(--danger)'
                            }}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
