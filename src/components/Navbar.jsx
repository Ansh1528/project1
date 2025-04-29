import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-100 shadow-md z-50">
      <div className="max-w-full mx-auto px-4 ml-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Library Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="public\download.png"
                alt="Library Logo"
                className=" h-12 w-12"
              />
              <span className="text-xl font-bold text-gray-900">
              Knowledge Haven
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
                  location.pathname === link.path
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden  md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md text-sm  font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
                location.pathname === '/login'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === '/signup'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4  space-y-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/login'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
              }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/signup'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
