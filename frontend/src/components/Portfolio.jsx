import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, ExternalLink, Calendar, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock data for now - will be replaced with real YouTube videos
  const portfolioItems = [
    {
      id: 1,
      title: "The Activist Podcast - Episode 15",
      category: "podcast",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "2.5K",
      date: "2 weeks ago",
      description: "Deep dive into social activism and community engagement"
    },
    {
      id: 2,
      title: "Castonati - Brand Story",
      category: "commercial",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder  
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "1.8K",
      date: "1 month ago",
      description: "Professional brand storytelling and commercial production"
    },
    {
      id: 3,
      title: "The Activist - Behind the Scenes",
      category: "documentary", 
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "3.2K",
      date: "3 weeks ago",
      description: "Documentary-style behind the scenes content"
    },
    {
      id: 4,
      title: "Castonati - Product Launch",
      category: "commercial",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      views: "4.1K",
      date: "2 months ago",
      description: "High-impact product launch campaign"
    },
    {
      id: 5,
      title: "The Activist Podcast - Special Edition",
      category: "podcast",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "5.7K",
      date: "1 month ago", 
      description: "Special edition podcast with guest interviews"
    },
    {
      id: 6,
      title: "Castonati - Event Coverage",
      category: "event",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "2.9K", 
      date: "3 weeks ago",
      description: "Professional event coverage and highlights"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'podcast', label: 'Podcasts' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'event', label: 'Events' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openVideoInNewTab = (videoUrl) => {
    const youtubeUrl = videoUrl.replace('/embed/', '/watch?v=');
    window.open(youtubeUrl, '_blank');
  };

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems(prevCount => prevCount + 3);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest work featuring content from The Activist Podcast 
            and Castonati videos, showcasing our diverse range of media production capabilities.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                } transition-all duration-200`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-800 overflow-hidden cursor-pointer">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay on hover */}
                <div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  onClick={() => openVideoInNewTab(item.videoUrl)}
                >
                  <Play className="w-12 h-12 text-white cursor-pointer" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views} views
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => openVideoInNewTab(item.videoUrl)}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Full Video
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={loadMoreItems}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 transition-all duration-200"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;