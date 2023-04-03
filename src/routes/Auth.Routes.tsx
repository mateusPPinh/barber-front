import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/profile/:id' element={<Profile />} />
    </Routes>
  );
};

export default AuthRoutes;