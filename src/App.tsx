import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import TeamShowcase from './components/Team';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBookNow={handleBookNow} />
      <Hero onBookNow={handleBookNow} />
      <Services />
      <About />
      <Gallery />
      <TeamShowcase onBookNow={handleBookNow} ></TeamShowcase>
      <Testimonials />
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}

export default App;