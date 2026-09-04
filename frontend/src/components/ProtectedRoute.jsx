import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Wait for the backend to verify the cookie before making a decision
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center font-bebas-neue tracking-widest text-2xl">
        VERIFYING SESSION...
      </div>
    );
  }

  // If the server says they are not logged in, kick them back to login
  if (!isAuthenticated) {
    return <Navigate to="/ad" replace />;
  }

  // If authenticated, render the requested page (Dashboard, Add Project, etc.)
  return <Outlet />;
};

export default ProtectedRoute;