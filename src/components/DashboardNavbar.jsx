import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Guest', email: 'guest@example.com' };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Services', path: '/dashboard/services' },
    { name: 'About', path: '/dashboard/about' },
    { name: 'Contact', path: '/dashboard/contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 sticky text-white shadow-md w-full">
      <div className="w-full px-4">
      </div>
        <div className="flex flex-col sm:flex-row items-center justify-between min-h-[4rem] py-2">
          {/* Logo and Navigation */}
          <div className="flex items-left space-x-8">
            {/* Logo */}
            <Link to="/dashboard" 
            
              className="text-xl sm:text-2xl ml-4 w-full flex font-bold text-amber-400 hover:text-amber-500">
                <img
                src="public\download.png"
                className="h-8 w-8 flex "
              />
              Knowledge Haven
            </Link>

            {/* Navigation Links */}
            <div className="hidden ml-20  sm:flex items-center space-x-6">           
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
                      </div>

          {/* User Info and Logout */}
          <div className="flex flex-col sm:flex-row items-center ml-95 gap-2 sm:gap-4">
            {/* User Info */}
            <div className="text-center sm:text-left">
              <p className="font-medium text-sm sm:text-base">{user.name}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden pb-2">
          <div className="flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;