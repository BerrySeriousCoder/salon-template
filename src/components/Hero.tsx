import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Your Beauty, Our Passion
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience luxury beauty services tailored just for you. Our expert team is dedicated 
            to bringing out your natural beauty and helping you feel confident and radiant.
          </p>
          <div className="space-x-4 space-y-6 lg:space-y-0">
            <button 
              onClick={onBookNow}
              className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-700 transition transform hover:scale-105"
            >
              Book Your Appointment
            </button>
            <a 
              href="#services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;