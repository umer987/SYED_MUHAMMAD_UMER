import { createContext, useState, useEffect, useContext } from 'react';
import api from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('/admin/me');
        setIsAuthenticated(true);
      } catch (error) {
        // Axios jumps here automatically if the server returns 401 Unauthorized
        console.error("Auth check failed", error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false); 
      }
    };
    checkAuth();
  }, []);
  
  const login = async (email, password) => {
    try {
      // Axios auto-stringifies the body and sets the Content-Type header
      const response = await api.post('/admin/login', { email, password });

      if (response.status === 200) {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed", error.response?.data?.message || error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await api.post('/admin/logout');
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error.response?.data?.message || error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);