import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          >
            <Shield className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ethan Li Insurance</h1>
              <p className="text-sm text-gray-600">Personal Lines Agent</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-700 focus:outline-none ${
                  currentPage === item.id ? 'text-blue-700 underline font-bold' : 'text-gray-700 rounded px-2 py-1'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+16504651676"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Call us at 650-465-1676"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="font-semibold">(650) 465-1676</span>
            </motion.a>
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-colors duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-700 focus:outline-none ${
                  currentPage === item.id ? 'text-blue-700 underline font-bold' : 'text-gray-700 rounded px-2 py-1'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <motion.a
                href="tel:+16505551234"
                className="flex items-center space-x-2 px-4 py-3 text-blue-700 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus-visible:outline-none active:outline-none"
                aria-label="Call us at 650-555-1234"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span className="font-semibold">(650) 555-1234</span>
              </motion.a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;