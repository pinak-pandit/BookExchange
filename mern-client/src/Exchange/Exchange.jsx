import React, { useContext, useEffect, useState } from 'react';
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../contexts/AuthProvider';

export default function Exchange() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetching data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data); 
      });
  }, [loading]);

  // Loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter books based on search query
    const filtered = books.filter(
      (book) =>
        book.bookTitle.toLowerCase().includes(query) ||
        book.authorName.toLowerCase().includes(query) ||
        book.bookDescription.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-200 min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">All Books are Available Here</h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="search"
            placeholder="Search for a book"
            value={searchQuery}
            onChange={handleSearchChange}
            className="py-2 px-4 rounded-sm outline-none w-full md:w-1/2 text-gray-700 shadow-lg"
          />
        </div>

        {/* Display filtered books */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Card key={book._id} className="shadow-lg bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img src={book.imageURL} alt={book.bookTitle} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-gray-800">{book.bookTitle}</h5>
                  <p className="text-gray-600 mt-2 line-clamp-2">{book.bookDescription}</p>
                  <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-200">
                    Request this book!
                  </button>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">No books found for this search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
