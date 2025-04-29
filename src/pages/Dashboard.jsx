import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('current');

  // Sample user data
  const userData = {
    name: "Sarah Johnson",
    membershipId: "MEM123456",
    memberSince: "January 2022",
    membershipType: "Premium",
    currentLoans: 2,
    maxLoans: 5,
    booksRead: 15,
    favoriteGenres: ["Fiction", "Science", "History"],
    currentBooks: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "/mockingbird.jpg",
        issuedDate: "2023-10-15T10:30:00",
        dueDate: "2023-11-05T10:30:00",
        status: "Due in 3 days",
        progress: 75
      },
      {
        id: 2,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        cover: "/habit.jpg",
        issuedDate: "2023-10-22T14:15:00",
        dueDate: "2023-11-12T14:15:00",
        status: "Due in 10 days",
        progress: 30
      }
    ],
    recentlyReturned: [
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        returnDate: "2023-10-01",
        rating: 5
      },
      {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        returnDate: "2023-09-25",
        rating: 4
      }
    ],
    readingStats: {
      thisMonth: 2,
      thisYear: 15,
      total: 42,
      averagePerMonth: 3.5
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 w-full mt-0">
          <main className="max-w-7xl mx-auto py-0 lg:py-1 px-3 ">
            {/* Top Section */}
            <div className="mb-4 mt-0 ">
              <div className="bg-gradient-to-r h-48 from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-4">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                      <img
                        src="https://placekitten.com/120/120"
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                      />
                      <div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Welcome back, {userData.name}!</h1>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          <span className="px-3 py-1 bg-blue-500 rounded-full text-sm text-white">
                            {userData.membershipType} Member
                          </span>
                          <span className="text-blue-100 text-sm">
                            Member since {userData.memberSince}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate('/profile')}
                      className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                
                {/* Quick Stats Bar */}
                <div className="bg-blue-700 px-4 sm:px-6 lg:px-8 py-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-white">
                      <p className="text-sm text-blue-200">Current Loans</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold">{userData.currentLoans} / {userData.maxLoans}</p>
                    </div>
                    <div className="text-white">
                      <p className="text-sm text-blue-200">Books Read</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold">{userData.readingStats.thisYear}</p>
                    </div>
                    <div className="text-white">
                      <p className="text-sm text-blue-200">Reading Streak</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold">15 days</p>
                    </div>
                    <div className="text-white">
                      <p className="text-sm text-blue-200">Favorite Genre</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold">{userData.favoriteGenres[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation - Made scrollable for mobile */}
            <div className="mb-6 -mx-4 px-4 overflow-x-auto">
              <div className="inline-flex min-w-full border-b border-gray-200">
                <nav className="flex space-x-4 lg:space-x-8">
                  <button
                    onClick={() => setActiveTab('current')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'current'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Current Books
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'history'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Reading History
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'stats'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Reading Stats
                  </button>
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'current' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {userData.currentBooks.map((book) => (
                      <div key={book.id} className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-24 h-36 bg-gray-200 rounded-lg flex-shrink-0"></div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{book.author}</p>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm text-gray-500">Issued on</p>
                                <p className="text-sm font-medium">
                                  {new Date(book.issuedDate).toLocaleDateString()}
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-500">Due date</p>
                                <p className="text-sm font-medium">
                                  {new Date(book.dueDate).toLocaleDateString()}
                                </p>
                              </div>

                              <div>
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span className="text-gray-500">Reading Progress</span>
                                  <span className="font-medium">{book.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${book.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                book.status.includes('3 days')
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {book.status}
                              </span>
                              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Renew Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Recently Returned Books</h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {userData.recentlyReturned.map((book) => (
                      <div key={book.id} className="p-4 lg:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-16 bg-gray-200 rounded"></div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">{book.title}</h3>
                            <p className="text-sm text-gray-500">{book.author}</p>
                            <p className="text-xs text-gray-400">Returned on {book.returnDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Books Read This Month</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{userData.readingStats.thisMonth}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Books Read This Year</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{userData.readingStats.thisYear}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Total Books Read</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{userData.readingStats.total}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Average per Month</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{userData.readingStats.averagePerMonth}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Favorite Genres</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.favoriteGenres.map((genre, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;