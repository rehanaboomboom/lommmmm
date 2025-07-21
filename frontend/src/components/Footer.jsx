import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter, Globe, MessageCircle, Camera } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social media links for CassFerr Media
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://instagram.com/cassferrmedia',
      handle: '@cassferrmedia'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-5 h-5" />, 
      url: 'https://youtube.com/@cassferrmedia',
      handle: '@cassferrmedia'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      url: 'https://twitter.com/cassferrmedia',
      handle: '@cassferrmedia'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      url: 'https://facebook.com/cassferrmedia',
      handle: 'CassFerr Media'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/cassferr-media-a461a1346',
      handle: 'Cassferr Media'
    },
    { 
      name: 'Telegram', 
      icon: <MessageCircle className="w-5 h-5" />, 
      url: 'https://t.me/cassferrmedia',
      handle: '@cassferrmedia'
    },
    { 
      name: 'Discord', 
      icon: <MessageCircle className="w-5 h-5" />, 
      url: 'https://discord.gg/cassferrmedia',
      handle: 'CassFerr Media'
    },
    { 
      name: 'Snapchat', 
      icon: <Camera className="w-5 h-5" />, 
      url: 'https://snapchat.com/add/cassferrmedia',
      handle: '@cassferrmedia'
    },
    { 
      name: 'Linktree', 
      icon: <Globe className="w-5 h-5" />, 
      url: 'https://linktr.ee/cassferrmedia',
      handle: 'All Links'
    }
  ];

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
            
            {/* Main Social Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.slice(0, 5).map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700"
                  title={social.handle}
                >
                  {social.icon}
                </a>
              ))}
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

          {/* Contact & Social Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm mb-6">
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
            
            {/* Additional Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-2">More Platforms</h5>
              <div className="space-y-2 text-xs">
                {socialLinks.slice(5).map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                    <span className="ml-2">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Follow CassFerr Media</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-red-500 transition-all duration-200 text-gray-300 hover:text-white group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                  <span className="ml-2 text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
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