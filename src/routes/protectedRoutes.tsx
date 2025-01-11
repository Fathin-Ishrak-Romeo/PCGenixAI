import { Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import OrderHistory from '../pages/OrderHistory';
import BuildPC from '../pages/BuildPC';

export const protectedRoutes = (
  <>
    <Route path="/cart" element={<AuthGuard><Cart /></AuthGuard>} />
    <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
    <Route path="/order-history" element={<AuthGuard><OrderHistory /></AuthGuard>} />
    <Route path="/build-pc" element={<BuildPC />} />
  </>
);