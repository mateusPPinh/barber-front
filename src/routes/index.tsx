import { useAuth } from '../contexts/auth';
import AuthRoutes from './Auth.Routes';
import PublicRoutes from './Public.Route';

const AppRoutes = () => {
  const { user } = useAuth();

  return user ? <AuthRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
