import React from 'react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types/auth';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallback?: React.ReactNode;
}

const RoleGate: React.FC<RoleGateProps> = ({ 
  children, 
  allowedRoles, 
  fallback = null 
}) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default RoleGate;
