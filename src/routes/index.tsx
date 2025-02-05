import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { protectedRoutes } from './protectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes}
      {protectedRoutes}
    </Routes>
  );
};

export default AppRoutes;