import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import QRScanner from './pages/QRScanner';
import AttendanceResult from './pages/AttendanceResult';
import QRDisplay from './pages/QRDisplay';
import LiveAttendance from './pages/LiveAttendance';
import FraudDetection from './pages/FraudDetection';
import Notifications from './pages/Notifications';
import Analytics from './pages/Analytics';
import StudentAnalytics from './pages/StudentAnalytics';
import StudentNotifications from './pages/StudentNotifications';
import StudentDetail from './pages/StudentDetail';
import Students from './pages/Students';
import AdminDashboard, { AdminTeachersPage, AdminStudentsPage, AdminSessionsPage, AdminAttendancePage, AdminCommsPage, AdminAdminsPage } from './pages/AdminDashboard';

function ProtectedRoute({ element, roles }) {
  const { user, loading } = useAuth();
  if (loading) return <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh' }}>Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  if (roles && !roles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />;
    return <Navigate to={user.role === 'teacher' ? '/teacher' : '/student'} replace />;
  }
  return element;
}

function AppRoutes() {
  const { user } = useAuth();

  const getHomeRoute = () => {
    if (user?.role === 'admin') return '/admin';
    if (user?.role === 'teacher') return '/teacher';
    return '/student';
  };

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to={getHomeRoute()} replace /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to={getHomeRoute()} replace /> : <Login />} />
      <Route path="/forgot-password" element={user ? <Navigate to={getHomeRoute()} replace /> : <ForgotPassword />} />
      <Route path="/reset-password" element={user ? <Navigate to={getHomeRoute()} replace /> : <ResetPassword />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} roles={['admin']} />} />
      <Route path="/admin/teachers" element={<ProtectedRoute element={<AdminTeachersPage />} roles={['admin']} />} />
      <Route path="/admin/students" element={<ProtectedRoute element={<AdminStudentsPage />} roles={['admin']} />} />
      <Route path="/admin/sessions" element={<ProtectedRoute element={<AdminSessionsPage />} roles={['admin']} />} />
      <Route path="/admin/attendance" element={<ProtectedRoute element={<AdminAttendancePage />} roles={['admin']} />} />
      <Route path="/admin/comms" element={<ProtectedRoute element={<AdminCommsPage />} roles={['admin']} />} />
      <Route path="/admin/admins" element={<ProtectedRoute element={<AdminAdminsPage />} roles={['admin']} />} />
      
      {/* Student Route */}
      <Route path="/student" element={<ProtectedRoute element={<StudentDashboard />} roles={['student']} />} />
      <Route path="/student/analytics" element={<ProtectedRoute element={<StudentAnalytics />} roles={['student']} />} />
      <Route path="/student/notifications" element={<ProtectedRoute element={<StudentNotifications />} roles={['student']} />} />
      <Route path="/teacher" element={<ProtectedRoute element={<TeacherDashboard />} roles={['teacher']} />} />
      <Route path="/scanner" element={<ProtectedRoute element={<QRScanner />} roles={['student']} />} />
      <Route path="/result" element={<ProtectedRoute element={<AttendanceResult />} roles={['student']} />} />
      <Route path="/qr-display" element={<ProtectedRoute element={<QRDisplay />} roles={['teacher']} />} />
      <Route path="/live-attendance" element={<ProtectedRoute element={<LiveAttendance />} roles={['teacher']} />} />
      <Route path="/fraud" element={<ProtectedRoute element={<FraudDetection />} roles={['teacher', 'admin']} />} />
      <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} roles={['teacher']} />} />
      <Route path="/analytics" element={<ProtectedRoute element={<Analytics />} roles={['teacher']} />} />
      <Route path="/students" element={<ProtectedRoute element={<Students />} roles={['teacher']} />} />
      <Route path="/student/:id" element={<ProtectedRoute element={<StudentDetail />} roles={['teacher', 'admin']} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
