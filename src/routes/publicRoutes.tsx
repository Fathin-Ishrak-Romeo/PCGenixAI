import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<FAQ />} />
  </>
);