import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import { Sun, Moon, ShoppingCart, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, signOut } = useAuthStore();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            PCGenixAI
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/build-pc" className="nav-link">Build PC</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/faq" className="nav-link">FAQs</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <ShoppingCart className="w-5 h-5" />
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <User className="w-5 h-5" />
                </Link>
                <button
                  onClick={signOut}
                  className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signin" className="nav-link">Sign In</Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;