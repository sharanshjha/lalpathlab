import React from 'react';
import { Award, Clock, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'NABL Accredited Labs',
    description: 'Highest quality standards and accurate results'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Quick Results',
    description: 'Get your test results within 24-48 hours'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Qualified pathologists and technicians'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Wide Network',
    description: '4000+ collection centers across India'
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            Leading diagnostic center trusted by millions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-blue-700 flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-lg mb-6">
            Our customer support team is available 24/7 to assist you
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Home Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;