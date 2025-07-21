import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission - will be replaced with real backend integration
    console.log('Form submitted:', formData);
    
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      budget: ''
    });
  };

  const services = [
    'Short Form Videos (₹700-₹5,000)',
    'Long Form Videos (₹1,500-₹10,000)', 
    'Ad Shoots (Quote Based)',
    'Website Development',
    'Digital Marketing',
    'Post Production'
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Contact us today for a free consultation 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-red-500" />
                Send us an Enquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-700/50 border-gray-600 text-white focus:border-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-700/50 border-gray-600 text-white focus:border-red-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-700/50 border-gray-600 text-white focus:border-red-500"
                      placeholder="+91 9905159591"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-gray-300">Budget Range</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 bg-gray-700/50 border-gray-600 text-white focus:border-red-500"
                      placeholder="₹5,000 - ₹10,000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-300">Service Required *</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2 bg-gray-700/50 border-gray-600 text-white focus:border-red-500 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border-red-500/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-4 text-red-500" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p>+91 9905159591</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-4 text-red-500" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p>Cassferrofficial@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 mr-4 text-red-500 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p>Moti Residency, Ghaziabad<br />Meerut Road - 201003</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-4 text-red-500" />
                    <div>
                      <p className="font-semibold text-white">Business Hours</p>
                      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">Quick Response Promise</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We understand that time is valuable. That's why we guarantee:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Response within 2 hours during business hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Free consultation within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Detailed quote within 48 hours
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">Connect on LinkedIn</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Follow our professional journey and latest projects
                </p>
                <a 
                  href="https://www.linkedin.com/in/cassferr-media-a461a1346" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Connect with us
                  <Phone className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;