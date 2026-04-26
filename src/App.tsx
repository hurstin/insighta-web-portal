import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import ProfilesList from './pages/ProfilesList';
import ProfileDetail from './pages/ProfileDetail';
import Account from './pages/Account';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes Wrapper */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/profiles"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilesList />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profiles/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfileDetail />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Layout>
                  <Account />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
