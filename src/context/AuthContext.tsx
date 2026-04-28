import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import api from '../api/client';
import type { User, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const verifySession = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get<User>('/v1/users/me');
      setUser(response.data);
    } catch (error) {
      console.error('Session verification failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  const login = () => {
    // Redirect to backend OAuth endpoint
    const backendUrl = import.meta.env.VITE_API_URL || 'https://insighta-backend-hurstin6975-vqh74ndl.leapcell.dev';
    window.location.href = `${backendUrl}/v1/auth/github`;
  };

  const logout = async () => {
    try {
      await api.post('/v1/auth/logout');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      window.location.href = '/login';
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, verifySession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
