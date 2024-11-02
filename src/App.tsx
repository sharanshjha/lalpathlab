import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookTest from './components/BookTest';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <BookTest />
      <Packages />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;