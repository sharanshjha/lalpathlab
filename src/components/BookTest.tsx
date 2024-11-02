import React from 'react';
import { Search } from 'lucide-react';

const BookTest = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a Test</h2>
          <p className="text-lg text-gray-600">
            Search from our wide range of diagnostic tests and book instantly
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for tests..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-blue-800 transition">
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Popular Tests:</h3>
              <div className="flex flex-wrap gap-2">
                {['Complete Blood Count', 'Diabetes', 'Thyroid', 'Vitamin D', 'Liver Function'].map((test, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition"
                  >
                    {test}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTest;