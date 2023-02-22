import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoutes;
