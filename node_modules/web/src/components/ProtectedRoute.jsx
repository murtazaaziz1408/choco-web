import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { seller } = useAdminAuth();

  // If no seller is detected in our local login state, redirect back to login
  if (!seller) {
    return <Navigate to="/admin" replace />;
  }

  // If a seller is found, open the gates and load the dashboard!
  return children;
};

export default ProtectedRoute;