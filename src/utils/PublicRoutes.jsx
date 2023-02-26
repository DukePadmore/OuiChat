import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoutes = () => {
  const { currentUser } = useAuth();

  return !currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default PublicRoutes;
