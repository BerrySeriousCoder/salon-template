
import { Facebook, Instagram, Twitter, Mail, Clock, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Beauty Lane, NY 10001</p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> (555) 123-4567</p>
              <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@elegance.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" /> Mon-Fri: 9:00 AM - 8:00 PM
              </p>
              <p className="ml-7">Sat: 9:00 AM - 6:00 PM</p>
              <p className="ml-7">Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-pink-400">About Us</a></li>
              <li><a href="/services" className="hover:text-pink-400">Services</a></li>
              <li><a href="/gallery" className="hover:text-pink-400">Gallery</a></li>
              <li><a href="/contact" className="hover:text-pink-400">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for beauty tips and special offers!</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500"
              />
              <button className="w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-pink-400"><Facebook /></a>
          <a href="#" className="hover:text-pink-400"><Instagram /></a>
          <a href="#" className="hover:text-pink-400"><Twitter /></a>
        </div>

        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;