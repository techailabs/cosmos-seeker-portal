
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'user' | 'admin';
}

const ProtectedRoute = ({ children, requiredRole = 'user' }: ProtectedRouteProps) => {
  // TODO: Implement actual authentication check with Supabase
  const isAuthenticated = false; // This will be replaced with actual auth state
  const userRole: 'user' | 'admin' = 'user'; // This will be fetched from auth context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole === 'admin' && userRole !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
