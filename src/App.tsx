import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import { ThemeProvider } from './components/ThemeProvider';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
        <Toaster position="top-center" />
      </Router>
    </ThemeProvider>
  );
}

export default App;