import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Cassferr <span className="text-red-500">Media</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span>9905159591</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2 text-red-500" />
              <span>Cassferrofficial@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="pt-4 mt-4 border-t border-gray-800 space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                <span>9905159591</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <span>Cassferrofficial@gmail.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;