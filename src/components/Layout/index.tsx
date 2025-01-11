import { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ChatBot from '../ChatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-orange-400 to-purple-600 bg-fixed">
      <Navbar />
      <main className="flex-grow content-area">
        {children}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Layout;