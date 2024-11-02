import React, { useState } from 'react';
import { Menu, X, Phone, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">Dr. Lal PathLabs</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Book a Test</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Health Packages</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Find a Lab</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Reports</a>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-700">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-700">
                <User size={20} />
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                <Phone size={16} className="mr-2" />
                <span>1800-XXX-XXX</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Book a Test</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Health Packages</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Find a Lab</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Reports</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;