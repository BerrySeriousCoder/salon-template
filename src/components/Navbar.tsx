import React, { useState } from 'react';
import { Menu,  X } from 'lucide-react';

interface NavbarProps {
  onBookNow: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-serif text-2xl">
            Elegance
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-pink-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition">Gallery</a>
            <button 
              onClick={onBookNow}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition">About</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition">Gallery</a>
            <button 
              onClick={() => {
                onBookNow();
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-pink-600 hover:text-pink-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;