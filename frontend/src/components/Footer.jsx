import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              Cassferr <span className="text-red-500">Media</span>
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Professional media production and digital marketing services 
              that bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/cassferr-media-a461a1346" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Short Form Videos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Long Form Videos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Ad Shoots
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Post Production
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+919905159591" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 mr-3 text-red-500" />
                <span>+91 9905159591</span>
              </a>
              <a href="mailto:Cassferrofficial@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 mr-3 text-red-500" />
                <span>Cassferrofficial@gmail.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-red-500 mt-0.5" />
                <span>Moti Residency, Ghaziabad<br />Meerut Road - 201003</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Cassferr Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;