import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Camera, Film, Megaphone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Professional Media Production
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Bringing Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Vision to Life
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From cinematic storytelling to digital marketing excellence, 
              Cassferr Media crafts compelling content that captivates audiences 
              and drives results for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg transition-all duration-200"
              >
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Videos Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Services Preview */}
          <div className="space-y-6">
            <div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Video Production</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Professional short & long form content creation
              </p>
              <div className="text-red-400 font-semibold">₹700 - ₹10,000</div>
            </div>
            
            <div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              <div className="flex items-center mb-4">
                <Megaphone className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Digital Marketing</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Strategic campaigns that drive engagement
              </p>
              <div className="text-orange-400 font-semibold">Custom Pricing</div>
            </div>
            
            <div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Ad Shoots</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Commercial photography & videography
              </p>
              <div className="text-yellow-400 font-semibold">Quote Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;