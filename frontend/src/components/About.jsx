import React from 'react';
import { Award, Users, Target, Zap, Instagram, Twitter, Youtube, Linkedin, MessageCircle, Globe } from 'lucide-react';

const About = () => {
  // Social media links for CassFerr Media
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-6 h-6" />, 
      url: 'https://www.linkedin.com/in/cassferr-media-a461a1346',
      color: 'bg-blue-600'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6" />, 
      url: 'https://instagram.com/cassferrmedia',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-6 h-6" />, 
      url: 'https://youtube.com/@cassferrmedia',
      color: 'bg-red-600'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-6 h-6" />, 
      url: 'https://twitter.com/cassferrmedia',
      color: 'bg-blue-400'
    },
    { 
      name: 'Telegram', 
      icon: <MessageCircle className="w-6 h-6" />, 
      url: 'https://t.me/cassferrmedia',
      color: 'bg-blue-500'
    },
    { 
      name: 'Linktree', 
      icon: <Globe className="w-6 h-6" />, 
      url: 'https://linktr.ee/cassferrmedia',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="text-red-500">Cassferr Media</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a creative media agency based in Ghaziabad, specializing in 
            video production, digital marketing, and brand storytelling that 
            connects with audiences on an emotional level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded with a passion for visual storytelling, Cassferr Media has grown 
              into a trusted partner for brands looking to make their mark in the digital 
              landscape. From our base in Moti Residency, Ghaziabad, we serve clients 
              across the region with innovative content solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our team combines technical expertise with creative vision to deliver 
              content that not only looks stunning but also drives real business results. 
              Whether it's a viral social media campaign or a corporate documentary, 
              we bring the same level of passion and professionalism to every project.
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Our Location</h4>
              <p className="text-gray-300">
                Moti Residency, Ghaziabad<br />
                Meerut Road - 201003
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-xl border border-red-500/20">
              <Award className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Quality First</h4>
              <p className="text-gray-300 text-sm">
                Every project meets our high standards of excellence
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-6 rounded-xl border border-orange-500/20">
              <Users className="w-8 h-8 text-orange-500 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Client Focus</h4>
              <p className="text-gray-300 text-sm">
                Your vision and goals drive everything we create
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-green-500/20 p-6 rounded-xl border border-yellow-500/20">
              <Target className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Results Driven</h4>
              <p className="text-gray-300 text-sm">
                Content that delivers measurable business impact
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/20">
              <Zap className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
              <p className="text-gray-300 text-sm">
                Cutting-edge techniques and creative solutions
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Connect With CassFerr Media</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow us across all platforms to stay updated with our latest work, 
            behind-the-scenes content, and industry insights.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${social.color} p-6 rounded-2xl border border-gray-700/50 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center min-h-[120px]`}
              >
                <div className="text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <p className="text-white font-semibold text-sm">{social.name}</p>
                <p className="text-white/80 text-xs mt-1">@cassferrmedia</p>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's bring your creative vision to life with professional media production 
            and strategic digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919905159591"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Call Now: +91 9905159591
            </a>
            <a 
              href="mailto:Cassferrofficial@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;