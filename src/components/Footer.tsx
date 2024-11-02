import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dr. Lal PathLabs</h3>
            <p className="mb-4">
              Leading diagnostic center providing quality healthcare services since 1949
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Book a Test</a></li>
              <li><a href="#" className="hover:text-white">Download Reports</a></li>
              <li><a href="#" className="hover:text-white">Find a Lab</a></li>
              <li><a href="#" className="hover:text-white">Health Packages</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tests</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Pathology Tests</a></li>
              <li><a href="#" className="hover:text-white">Blood Tests</a></li>
              <li><a href="#" className="hover:text-white">Diabetes Tests</a></li>
              <li><a href="#" className="hover:text-white">Thyroid Tests</a></li>
              <li><a href="#" className="hover:text-white">COVID-19 Tests</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>support@lalpathlabs.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>1800-XXX-XXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Dr. Lal PathLabs. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;