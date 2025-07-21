import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <h1 className="text-2xl font-bold text-white">
              Cassferr <span className="text-red-500">Media</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a href="tel:+919905159591" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span>9905159591</span>
            </a>
            <a href="mailto:Cassferrofficial@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4 mr-2 text-red-500" />
              <span>Cassferrofficial@gmail.com</span>
            </a>
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
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                About
              </button>
            </nav>
            <div className="pt-4 mt-4 border-t border-gray-800 space-y-2">
              <a href="tel:+919905159591" className="flex items-center text-gray-300 text-sm hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                <span>9905159591</span>
              </a>
              <a href="mailto:Cassferrofficial@gmail.com" className="flex items-center text-gray-300 text-sm hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <span>Cassferrofficial@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;