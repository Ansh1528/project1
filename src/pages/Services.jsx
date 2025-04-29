import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

const Services = ({ isDashboard = false }) => {
  const servicesList = [
    {
      title: "Book Borrowing",
      description: "Access our extensive collection of books, magazines, and digital resources.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: ["5 books at a time", "3-week borrowing period", "Online renewal", "Book reservations"]
    },
    {
      title: "Digital Resources",
      description: "Access our extensive collection of e-books, academic journals, databases, and digital archives from anywhere, anytime.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["24/7 online access", "Thousands of e-books", "Academic databases", "Research tools"]
    },
    {
      title: "Study Spaces",
      description: "Modern study rooms equipped with WiFi, power outlets, and comfortable seating. Perfect for individual study or group collaboration.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Individual study rooms", "Group study areas", "Quiet zones", "Computer stations"]
    },
    {
      title: "Research Assistance",
      description: "Get help from our expert librarians for research projects, literature reviews, and academic writing.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: ["One-on-one consultations", "Research workshops", "Citation help", "Database training"]
    },
    {
      title: "Events & Workshops",
      description: "Join our regular events, including author talks, book clubs, writing workshops, and educational programs.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Author meetups", "Book clubs", "Writing workshops", "Educational programs"]
    },
    {
      title: "Interlibrary Loan",
      description: "Access books and materials from other libraries through our interlibrary loan service.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: ["Borrow from other libraries", "Digital document delivery", "Extended borrowing periods", "No additional cost"]
    }
  ];

  const renderContent = () => (
    <div className={`${isDashboard ? '' : 'pt-20'} pb-16`}>
      {/* Header Section */}
      <div className="relative bg-amber-900 py-16">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Discover the wide range of services we offer to support your learning journey
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isDashboard) {
    return (
      <>
        <DashboardNavbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {renderContent()}
    </>
  );
};

export default Services;