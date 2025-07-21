import React from 'react';
import { Button } from './ui/button';
import { Film, Camera, Globe, Megaphone, Play, Edit, Palette } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Short Form Videos",
      description: "Engaging short-form content for social media platforms, perfect for TikTok, Instagram Reels, and YouTube Shorts.",
      priceRange: "₹700 - ₹5,000",
      features: ["Up to 60 seconds", "Social media optimized", "Quick turnaround", "Multiple formats"],
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/20"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Long Form Videos",
      description: "Comprehensive video content including documentaries, interviews, promotional videos, and corporate presentations.",
      priceRange: "₹1,500 - ₹10,000",
      features: ["Up to 10 minutes", "Professional editing", "Color grading", "Sound design"],
      gradient: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/20"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Ad Shoots",
      description: "Professional commercial photography and videography for advertising campaigns and brand promotions.",
      priceRange: "Quote Based",
      features: ["HD/4K shooting", "Professional lighting", "Multiple takes", "Raw footage included"],
      gradient: "from-yellow-500/20 to-green-500/20",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Modern, responsive websites that showcase your brand and drive conversions across all devices.",
      priceRange: "Custom Pricing",
      features: ["Responsive design", "SEO optimized", "Fast loading", "Content management"],
      gradient: "from-green-500/20 to-blue-500/20",
      borderColor: "border-green-500/20"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that boost your online presence and drive engagement.",
      priceRange: "Custom Pricing",
      features: ["Social media strategy", "Content planning", "Analytics tracking", "Campaign optimization"],
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Post Production",
      description: "Professional video editing, color correction, sound design, and motion graphics services.",
      priceRange: "₹500 - ₹3,000",
      features: ["Video editing", "Color grading", "Audio mixing", "Motion graphics"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive media production 
            and digital marketing services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-8 rounded-2xl border ${service.borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">{service.priceRange}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <Palette className="w-3 h-3 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200"
                variant="outline"
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            Contact us today for a free consultation and quote.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;