import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';
import Navbar from '../components/Navbar';

// Sample book data - in a real app, this would come from an API
const sampleBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    rating: 4.5,
    available: true
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "The story of racial injustice and the loss of innocence in the American South.",
    rating: 4.8,
    available: true
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "Science Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A dystopian social science fiction novel and cautionary tale.",
    rating: 4.7,
    available: false
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A romantic novel of manners that satirizes 19th century society.",
    rating: 4.6,
    available: true
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A fantasy novel about the adventures of the hobbit Bilbo Baggins.",
    rating: 4.9,
    available: true
  },
  {
    id: 6,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A mystery thriller novel that follows symbologist Robert Langdon.",
    rating: 4.2,
    available: true
  },
  {
    id: 7,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "An exploration of cosmology for the general reader.",
    rating: 4.4,
    available: true
  },
  {
    id: 8,
    title: "The Psychology of Success",
    author: "Dr. Jane Smith",
    category: "Psychology",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Understanding the mental frameworks that lead to achievement.",
    rating: 4.3,
    available: true
  },
  {
    id: 9,
    title: "The Art of War",
    author: "Sun Tzu",
    category: "History",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "An ancient Chinese text on military strategy and tactics.",
    rating: 4.6,
    available: true
  },
  {
    id: 10,
    title: "The Joy of Cooking",
    author: "Irma S. Rombauer",
    category: "Cooking",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A comprehensive cookbook with thousands of recipes.",
    rating: 4.7,
    available: true
  },
  {
    id: 11,
    title: "The Complete Poems of Emily Dickinson",
    author: "Emily Dickinson",
    category: "Poetry",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A collection of all known poems by the American poet.",
    rating: 4.5,
    available: true
  },
  {
    id: 12,
    title: "The Business of Success",
    author: "Michael Johnson",
    category: "Business",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Strategies for building and scaling successful businesses.",
    rating: 4.4,
    available: true
  },
  // Adding more books to demonstrate pagination
  {
    id: 13,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A story of teenage alienation and loss of innocence in post-war America.",
    rating: 4.3,
    available: true
  },
  {
    id: 14,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Science Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A dystopian novel envisioning a future society of technological advancement and social control.",
    rating: 4.6,
    available: true
  },
  {
    id: 15,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Romance",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A novel following the emotions and experiences of its eponymous heroine.",
    rating: 4.7,
    available: true
  },
  {
    id: 16,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "An epic high-fantasy novel about the quest to destroy a powerful ring.",
    rating: 4.9,
    available: true
  },
  {
    id: 17,
    title: "The Shining",
    author: "Stephen King",
    category: "Mystery",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A horror novel about a family's stay at an isolated hotel.",
    rating: 4.5,
    available: true
  },
  {
    id: 18,
    title: "The Origin of Species",
    author: "Charles Darwin",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A foundational work of evolutionary biology.",
    rating: 4.8,
    available: true
  }
];

// Get unique categories from the sample books
const categories = ["All", ...new Set(sampleBooks.map(book => book.category))];

const Catalog = () => {
  const [books, setBooks] = useState(sampleBooks);
  const [filteredBooks, setFilteredBooks] = useState(sampleBooks);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  // Filter books based on category and search term
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let result = books;
      
      // Filter by category
      if (activeCategory !== "All") {
        result = result.filter(book => book.category === activeCategory);
      }
      
      // Filter by search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        result = result.filter(
          book => 
            book.title.toLowerCase().includes(term) || 
            book.author.toLowerCase().includes(term) ||
            book.description.toLowerCase().includes(term)
        );
      }
      
      setFilteredBooks(result);
      
      // Reset pagination when filters change
      setCurrentPage(1);
      setShowAllBooks(false);
      
      // Set displayed books based on pagination
      if (showAllBooks) {
        setDisplayedBooks(result);
      } else {
        setDisplayedBooks(result.slice(0, booksPerPage));
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm, books, showAllBooks]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewAll = () => {
    setShowAllBooks(true);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    const nextBooks = filteredBooks.slice(
      currentPage * booksPerPage, 
      (currentPage + 1) * booksPerPage
    );
    setDisplayedBooks(prevBooks => [...prevBooks, ...nextBooks]);
  };

  const hasMoreBooks = filteredBooks.length > displayedBooks.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Book Collection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our vast collection of books across various genres and categories.
              Find your next favorite read or research material.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 animate-slideUp opacity-0 [animation-delay:200ms]">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, author, or description..."
                  className="w-full px-4 py-3 rounded-lg border text-orange-700 font-medium border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 animate-slideUp opacity-0 [animation-delay:400ms]">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600 animate-fadeIn opacity-0 [animation-delay:600ms]">
            <p>
              Showing {displayedBooks.length} of {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              {searchTerm ? ` matching "${searchTerm}"` : ""}
            </p>
          </div>

          {/* Books Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : displayedBooks.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn opacity-0 [animation-delay:800ms]">
                {displayedBooks.map((book) => (
                  <div 
                    key={book.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          book.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {book.available ? "Available" : "Borrowed"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                      <div className="flex items-center mb-2">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(book.rating) ? "text-amber-400" : "text-gray-300"}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">{book.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">{book.category}</span>
                        <Link 
                          to={`/book/${book.id}`} 
                          className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View All / Load More Button */}
              {!showAllBooks && filteredBooks.length > booksPerPage && (
                <div className="mt-10 text-center animate-fadeIn opacity-0 [animation-delay:1000ms]">
                  <button
                    onClick={handleViewAll}
                    className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium 
                             hover:bg-amber-600 transition-all duration-300 transform 
                             hover:scale-105 hover:-translate-y-1 shadow-lg
                             hover:shadow-xl active:scale-95"
                  >
                    View All Books
                  </button>
                </div>
              )}
              
              {/* Load More Button (for pagination) */}
              {showAllBooks && hasMoreBooks && (
                <div className="mt-10 text-center animate-fadeIn opacity-0 [animation-delay:1000ms]">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-white text-amber-600 border border-amber-500 rounded-lg font-medium 
                             hover:bg-amber-50 transition-all duration-300 transform 
                             hover:scale-105 hover:-translate-y-1 shadow-lg
                             hover:shadow-xl active:scale-95"
                  >
                    Load More Books
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 animate-fadeIn opacity-0 [animation-delay:800ms]">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No books found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog; 