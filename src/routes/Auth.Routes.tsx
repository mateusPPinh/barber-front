import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AuthRoutes;