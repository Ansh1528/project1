import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

const About = ({ isDashboard = false }) => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Library Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "With over 20 years of experience in library science, Dr. Johnson leads our institution with passion and vision."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Digital Resources",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Expert in digital library systems and electronic resource management, Michael ensures our digital collections are cutting-edge."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Community Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Dedicated to bringing the library to the community through engaging programs and partnerships."
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Research Services Librarian",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Specializes in academic research support and information literacy instruction."
    }
  ];

  const values = [
    {
      id: 1,
      title: "Accessibility",
      description: "Making knowledge accessible to everyone in our community.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Innovation",
      description: "Embracing new technologies and methods to serve our community better.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Community",
      description: "Building a vibrant community of learners and readers.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Excellence",
      description: "Maintaining the highest standards in our services and collections.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const renderContent = () => (
    <div className={`min-h-screen bg-gray-50 ${isDashboard ? '' : 'pt-20'} pb-16`}>
      {/* Hero Section */}
      <div className="relative bg-amber-900 py-16">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideDown">
            About Our Library
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:200ms]">
            A century of knowledge, community, and learning in the heart of our city.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp opacity-0 [animation-delay:400ms]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1923, our library began as a small collection of books in a historic building downtown. 
              Over the decades, we've grown into a modern institution serving thousands of members while preserving 
              our rich heritage and commitment to knowledge sharing.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we house over 100,000 books, digital resources, and special collections, making us one of 
              the most comprehensive libraries in the region. Our historic building has been carefully restored 
              and expanded to meet modern needs while maintaining its architectural charm.
            </p>
            <p className="text-gray-600">
              We take pride in being more than just a repository of books – we're a vibrant community hub where 
              people come to learn, discover, and connect.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-slideUp opacity-0 [animation-delay:600ms]">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Historic Library Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeIn">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.id}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-amber-50 
                         transition-all duration-300 transform hover:-translate-y-1
                         animate-slideUp opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4
                                transform transition-transform duration-300 group-hover:rotate-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeIn">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden
                       transition-all duration-300 transform hover:-translate-y-1
                       animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fadeIn">
            Join Our Community
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold 
                       hover:bg-amber-600 transition-all duration-300 transform 
                       hover:scale-105 hover:-translate-y-1 shadow-lg
                       hover:shadow-xl active:scale-95"
            >
              Become a Member
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold 
                       hover:bg-gray-100 transition-all duration-300 transform 
                       hover:scale-105 hover:-translate-y-1 shadow-lg
                       hover:shadow-xl active:scale-95"
            >
              Explore Services
            </Link>
          </div>
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

export default About;

