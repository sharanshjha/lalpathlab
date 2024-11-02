import React from 'react';
import { Microscope, TestTube, Heart, Activity, Dna, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Pathology Tests',
    description: 'Comprehensive range of laboratory diagnostic tests'
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: 'Blood Tests',
    description: 'Complete blood count and specialized blood analysis'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Cardiac Tests',
    description: 'Advanced cardiac risk assessment and monitoring'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Health Packages',
    description: 'Customized preventive health check-up packages'
  },
  {
    icon: <Dna className="w-8 h-8" />,
    title: 'Genetic Testing',
    description: 'Advanced molecular diagnostics and genetic analysis'
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Home Collection',
    description: 'Convenient sample collection at your doorstep'
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive diagnostic solutions for all your healthcare needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-blue-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;