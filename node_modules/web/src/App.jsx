import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductCategoryPage from './pages/ProductCategoryPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { AdminAuthProvider } from './contexts/AdminAuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <AdminAuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<ProductCategoryPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AdminAuthProvider>
    </Router>
  );
}

export default App;