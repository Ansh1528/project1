import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Catalog from "./pages/Catalog";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/services" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Services isDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/about" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <About isDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/contact" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Contact isDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
