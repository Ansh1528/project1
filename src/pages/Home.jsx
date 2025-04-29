import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar /> {/* Correctly placed Navbar */}
      <div className=" mt-10  min-h-screen bg-gray-50 w-full">
        {/* Hero Section with Library Background */}
        <div 
          className="relative h-[85vh] bg-cover bg-center bg-no-repeat w-full animate-fadeIn"
          style={{
            backgroundImage: `url('/253332.jpg')`
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Hero Content */}
          <div className="relative h-full flex items-center w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slideDown">
                  Welcome to
                  <span className="block text-amber-400 animate-slideUp">Knowledge Haven</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-100 animate-fadeIn opacity-0 [animation-delay:500ms]">
                  Your gateway to endless discoveries through books and learning
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fadeIn opacity-0 [animation-delay:800ms]">
                  <Link 
                    to="/catalog"
                    className="px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold 
                             hover:bg-amber-600 transition-all duration-300 transform 
                             hover:scale-105 hover:-translate-y-1 shadow-lg inline-block
                             hover:shadow-xl active:scale-95"
                  >
                    Explore Our Collection
                  </Link>
                  <Link 
                    to="/signup"
                    className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold 
                             hover:bg-gray-100 transition-all duration-300 transform 
                             hover:scale-105 hover:-translate-y-1 shadow-lg inline-block
                             hover:shadow-xl active:scale-95"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full py-20 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slideUp opacity-0 [animation-delay:200ms]">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Our Library?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Discover the perfect blend of traditional charm and modern convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[2000px] mx-auto px-4">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                            transform hover:scale-105 hover:-translate-y-2 animate-slideUp opacity-0 [animation-delay:400ms]">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6
                              transform transition-transform duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-amber-600 transition-transform duration-300 hover:scale-110" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Vast Collection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access thousands of books, journals, and digital resources spanning every field of knowledge.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                            transform hover:scale-105 hover:-translate-y-2 animate-slideUp opacity-0 [animation-delay:600ms]">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6
                              transform transition-transform duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-amber-600 transition-transform duration-300 hover:scale-110" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Study Spaces
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy our quiet reading rooms and collaborative spaces designed for focused learning.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                            transform hover:scale-105 hover:-translate-y-2 animate-slideUp opacity-0 [animation-delay:800ms]">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6
                              transform transition-transform duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-amber-600 transition-transform duration-300 hover:scale-110" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Modern Amenities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  High-speed WiFi, digital catalogs, and state-of-the-art research tools at your disposal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-amber-50 py-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fadeIn opacity-0 [animation-delay:200ms]">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ready to Start Your Journey?
              </h2>
              <Link 
                to="/signup"
                className="inline-block px-8 py-4 bg-amber-500 text-white rounded-lg 
                         font-semibold hover:bg-amber-600 transition-all duration-500 
                         transform hover:scale-105 hover:-translate-y-1 shadow-lg
                         hover:shadow-xl active:scale-95"
              >
                Join Our Library Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
