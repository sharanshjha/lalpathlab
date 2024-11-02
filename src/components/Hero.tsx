import React from 'react';
import { Search, Calendar, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              India's leading diagnostic center with over 4000+ test parameters and
              comprehensive health check-up packages
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                <Search size={20} className="mr-2" />
                Find Tests
              </button>
              <button className="flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition">
                <Calendar size={20} className="mr-2" />
                Book Now
              </button>
              <button className="flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition">
                <FileText size={20} className="mr-2" />
                View Reports
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80"
              alt="Medical Laboratory"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;