// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin } from '../api/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('qrc_user');
    const token = localStorage.getItem('qrc_token');
    if (stored && token) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('qrc_user');
        localStorage.removeItem('qrc_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (id, password) => {
    const data = await apiLogin(id, password);
    localStorage.setItem('qrc_token', data.token);
    localStorage.setItem('qrc_user', JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem('qrc_token');
    localStorage.removeItem('qrc_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
