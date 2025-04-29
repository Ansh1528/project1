import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import '../styles/animations.css';
import Navbar from '../components/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    adminId: '',
  });
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const credentials = isAdmin
        ? { adminId: formData.adminId, password: formData.password, isAdmin: true }
        : { email: formData.email, password: formData.password, isAdmin: false };

      const data = await login(credentials);
      navigate(data.user.isAdmin ? '/admin/dashboard' : '/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    }
  };

  const toggleAdminLogin = () => {
    setIsAdmin(!isAdmin);
    setError(''); // Clear any existing errors when switching modes
    // Clear form data when switching modes
    setFormData({
      email: '',
      password: '',
      adminId: '',
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/public/253332.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative mt-6 z-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl font-serif text-amber-400 mb-2 animate-slideDown">Knowledge Haven</h1>
            <p className="text-gray-300 text-sm animate-fadeIn opacity-0 [animation-delay:300ms]">Your gateway to endless discoveries</p>
          </div>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white animate-slideUp">
            {isAdmin ? 'Admin Login' : 'Sign in to your account'}
          </h2>
          {!isAdmin && (
            <p className="mt-2 text-center text-sm text-gray-300 animate-fadeIn opacity-0 [animation-delay:500ms]">
              Or{' '}
              <Link to="/signup" className="font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300">
                create a new account
              </Link>
            </p>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-blue-100 backdrop-blur-sm py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border-amber-200/30 animate-fadeIn opacity-0 [animation-delay:700ms] rounded">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative animate-shake" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              {isAdmin ? (
                // Admin Login Form
                <>
                  <div className="animate-slideUp opacity-0 [animation-delay:900ms]">
                    <label htmlFor="adminId" className="block text-sm font-medium text-gray-700">
                      Admin ID
                    </label>
                    <div className="mt-1">
                      <input
                        id="adminId"
                        name="adminId"
                        type="text"
                        required
                        value={formData.adminId}
                        onChange={handleChange}
                        className="appearance-none bg-amber-50 focus:bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300 hover:border-amber-300"
                        placeholder="Enter your admin ID"
                      />
                    </div>
                  </div>

                  <div className="animate-slideUp opacity-0 [animation-delay:1100ms]">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none bg-amber-50 focus:bg-white block w-full px-3 py-2 text-gray-700 font-medium border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300 hover:border-amber-300 pr-10"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // User Login Form
                <>
                  <div className="animate-slideUp opacity-0 [animation-delay:900ms]">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none bg-amber-50 focus:bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300 hover:border-amber-300"
                      />
                    </div>
                  </div>

                  <div className="animate-slideUp opacity-0 [animation-delay:1100ms]">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none bg-amber-50 focus:bg-white block w-full px-3 py-2 text-gray-700 font-medium border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300 hover:border-amber-300 pr-10"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between animate-fadeIn opacity-0 [animation-delay:1300ms]">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded transition-colors duration-300"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-amber-600 hover:text-amber-500 transition-colors duration-300">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                </>
              )}

              <div className="animate-slideUp opacity-0 [animation-delay:1500ms]">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  {isAdmin ? 'Sign in as Admin' : 'Sign in'}
                </button>
              </div>
            </form>

            {/* Admin Login Toggle Button */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={toggleAdminLogin}
                className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-md shadow-sm text-sm font-medium text-amber-600 bg-transparent hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300"
              >
                <svg 
                  className={`-ml-1 mr-2 h-5 w-5 transform transition-transform duration-300 ${isAdmin ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738.695a1 1 0 01-.894 1.79l-1.738-.695 1.233.616a1 1 0 11-.894 1.79l-1.599-.8L10 13.502V15a1 1 0 102 0v-1.323l-3.954-1.582-1.599.8a1 1 0 01-.894-1.79l1.233-.616-1.738-.695a1 1 0 01.894-1.79l1.738.695-1.233-.616a1 1 0 11.894-1.79l1.599.8L10 4.498V3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {isAdmin ? 'Switch to User Login' : 'Switch to Admin Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
