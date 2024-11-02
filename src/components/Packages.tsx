import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic Health Check',
    price: '999',
    tests: ['Complete Blood Count', 'Diabetes Screening', 'Thyroid Profile', 'Liver Function Test'],
    recommended: false
  },
  {
    name: 'Comprehensive Package',
    price: '2499',
    tests: ['Complete Blood Count', 'Diabetes Screening', 'Thyroid Profile', 'Liver Function Test', 'Kidney Function Test', 'Lipid Profile', 'Vitamin D', 'Vitamin B12'],
    recommended: true
  },
  {
    name: 'Executive Health Check',
    price: '4999',
    tests: ['All Comprehensive Tests', 'Tumor Markers', 'Hormone Analysis', 'Cardiac Risk Markers', 'Heavy Metal Analysis', 'Immunity Status'],
    recommended: false
  }
];

const Packages = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Packages</h2>
          <p className="text-lg text-gray-600">
            Choose from our curated health check-up packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                pkg.recommended
                  ? 'bg-blue-50 border-2 border-blue-500 relative'
                  : 'bg-white border border-gray-200'
              } p-6 shadow-lg`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-700">₹{pkg.price}</span>
                <span className="text-gray-600">/person</span>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.tests.map((test, testIndex) => (
                  <li key={testIndex} className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span className="text-gray-600">{test}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg ${
                  pkg.recommended
                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                    : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'
                } transition duration-300`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;