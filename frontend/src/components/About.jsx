import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
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

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/cassferr-media-a461a1346" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <p className="text-white font-semibold">LinkedIn</p>
              <p className="text-gray-400 text-sm">Professional Network</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;