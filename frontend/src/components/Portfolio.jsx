import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, ExternalLink, Calendar, Eye, LinkedinIcon } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Real YouTube videos from castonati and The Activist Podcast
  const portfolioItems = [
    // Castonati Videos
    {
      id: 1,
      title: "Castonati - Professional Content #1",
      category: "commercial",
      videoId: "Ml4DOrXEBD4",
      thumbnail: "https://img.youtube.com/vi/Ml4DOrXEBD4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Ml4DOrXEBD4",
      youtubeLink: "https://youtu.be/Ml4DOrXEBD4?si=GDbcwjxEsU0qRFW2",
      views: "1.2K",
      date: "2 weeks ago",
      description: "Professional brand content creation and storytelling"
    },
    {
      id: 2,
      title: "Castonati - Creative Production #2", 
      category: "commercial",
      videoId: "9SW2FaWSoE4",
      thumbnail: "https://img.youtube.com/vi/9SW2FaWSoE4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/9SW2FaWSoE4",
      youtubeLink: "https://youtu.be/9SW2FaWSoE4?si=6-_zF0iovA2RmsXY",
      views: "2.1K",
      date: "3 weeks ago", 
      description: "High-quality video production and creative direction"
    },
    {
      id: 3,
      title: "Castonati - Brand Campaign #3",
      category: "commercial",
      videoId: "l2wEZ_oYPrc",
      thumbnail: "https://img.youtube.com/vi/l2wEZ_oYPrc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/l2wEZ_oYPrc", 
      youtubeLink: "https://youtu.be/l2wEZ_oYPrc?si=IQ1B_YisfJtQUZWN",
      views: "1.8K",
      date: "1 month ago",
      description: "Strategic brand campaign with compelling narrative"
    },
    {
      id: 4,
      title: "Castonati - Commercial Project #4",
      category: "commercial",
      videoId: "r64LoDC-PSA", 
      thumbnail: "https://img.youtube.com/vi/r64LoDC-PSA/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/r64LoDC-PSA",
      youtubeLink: "https://youtu.be/r64LoDC-PSA?si=WtxmnWdafPldmcbI",
      views: "3.4K",
      date: "1 month ago",
      description: "Commercial video production with professional execution"
    },
    
    // The Activist Podcast Videos
    {
      id: 5,
      title: "The Activist Podcast - Episode 1",
      category: "podcast",
      videoId: "kpcq3XA3E2A",
      thumbnail: "https://img.youtube.com/vi/kpcq3XA3E2A/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kpcq3XA3E2A",
      youtubeLink: "https://youtu.be/kpcq3XA3E2A?si=32OdVUPlvP_NQIw0",
      views: "4.2K",
      date: "2 weeks ago",
      description: "Deep conversations about social change and activism"
    },
    {
      id: 6,
      title: "The Activist Podcast - Episode 2", 
      category: "podcast",
      videoId: "tiXF3fx6kxI",
      thumbnail: "https://img.youtube.com/vi/tiXF3fx6kxI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tiXF3fx6kxI",
      youtubeLink: "https://youtu.be/tiXF3fx6kxI?si=Q___bbZxVxW2VzvS",
      views: "3.7K",
      date: "3 weeks ago",
      description: "Inspiring discussions with community leaders and activists"
    },
    {
      id: 7,
      title: "The Activist Podcast - Episode 3",
      category: "podcast", 
      videoId: "3RUnD2KJ4r8",
      thumbnail: "https://img.youtube.com/vi/3RUnD2KJ4r8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/3RUnD2KJ4r8",
      youtubeLink: "https://youtu.be/3RUnD2KJ4r8?si=-XYhchzTftP4Pv6d",
      views: "5.1K", 
      date: "1 month ago",
      description: "Thought-provoking conversations on current social issues"
    },
    {
      id: 8,
      title: "The Activist Podcast - Episode 4",
      category: "podcast",
      videoId: "sd7BfJDXZ0g",
      thumbnail: "https://img.youtube.com/vi/sd7BfJDXZ0g/maxresdefault.jpg", 
      videoUrl: "https://www.youtube.com/embed/sd7BfJDXZ0g",
      youtubeLink: "https://youtu.be/sd7BfJDXZ0g?si=I7oIex491BfB4PIp",
      views: "2.9K",
      date: "6 weeks ago",
      description: "Engaging podcast content with expert guests and insights"
    },

    // Graphical/Design Work (LinkedIn posts)
    {
      id: 9,
      title: "Birds of a Feather - Billie Eilish Edit",
      category: "graphics",
      isLinkedIn: true,
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop",
      linkedinUrl: "https://www.linkedin.com/posts/bardia-jebelli-821701351_edit-birdsofafeather-billieilish-activity-7352996795385348098-mhoW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKU2O4BgLbKKZvgjEBQMMNrkxKrk3pOrh8",
      views: "1.5K",
      date: "1 week ago",
      description: "Professional music video edit and motion graphics work"
    },
    {
      id: 10, 
      title: "After Effects Brand Animation",
      category: "graphics",
      isLinkedIn: true,
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop",
      linkedinUrl: "https://www.linkedin.com/posts/bardia-jebelli-821701351_edit-aftereffects-brand-activity-7352550554063052800-kR2l?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKU2O4BgLbKKZvgjEBQMMNrkxKrk3pOrh8",
      views: "2.3K", 
      date: "2 weeks ago",
      description: "Advanced After Effects animation and brand identity work"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'commercial', label: 'Castonati' },
    { id: 'podcast', label: 'Podcast' }, 
    { id: 'graphics', label: 'Graphics' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openVideoInNewTab = (item) => {
    if (item.isLinkedIn) {
      window.open(item.linkedinUrl, '_blank');
    } else {
      window.open(item.youtubeLink, '_blank');
    }
  };

  const [visibleItems, setVisibleItems] = useState(8);

  const loadMoreItems = () => {
    setVisibleItems(prevCount => prevCount + 4);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest work featuring content from The Activist Podcast, 
            Castonati videos, and professional graphic design showcasing our diverse range of media production capabilities.
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
              {/* Video/Image Thumbnail */}
              <div className="relative aspect-video bg-gray-800 overflow-hidden cursor-pointer">
                {item.isLinkedIn ? (
                  // LinkedIn Post Preview
                  <div 
                    className="w-full h-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                    onClick={() => openVideoInNewTab(item)}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <LinkedinIcon className="w-12 h-12 text-blue-400" />
                    </div>
                  </div>
                ) : (
                  // YouTube Video Embed
                  <>
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
                      onClick={() => openVideoInNewTab(item)}
                    >
                      <Play className="w-12 h-12 text-white cursor-pointer" />
                    </div>
                  </>
                )}
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
                  onClick={() => openVideoInNewTab(item)}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  {item.isLinkedIn ? (
                    <>
                      <LinkedinIcon className="w-4 h-4 mr-2" />
                      View on LinkedIn
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Watch on YouTube
                    </>
                  )}
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