// Mock data for Cassferr Media website
// This file contains all the mock data used throughout the application
// It will be replaced with real backend API calls later

export const mockData = {
  // Company Information
  company: {
    name: "Cassferr Media",
    tagline: "Bringing Your Vision to Life",
    description: "Professional media production and digital marketing services that captivate audiences and drive results for your brand.",
    location: "Moti Residency, Ghaziabad, Meerut Road - 201003",
    phone: "+91 9905159591",
    email: "Cassferrofficial@gmail.com",
    linkedin: "https://www.linkedin.com/in/cassferr-media-a461a1346"
  },

  // Services Data
  services: [
    {
      id: 1,
      name: "Short Form Videos",
      description: "Engaging short-form content for social media platforms, perfect for TikTok, Instagram Reels, and YouTube Shorts.",
      priceRange: "₹700 - ₹5,000",
      features: [
        "Up to 60 seconds",
        "Social media optimized", 
        "Quick turnaround",
        "Multiple formats"
      ],
      category: "video"
    },
    {
      id: 2,
      name: "Long Form Videos", 
      description: "Comprehensive video content including documentaries, interviews, promotional videos, and corporate presentations.",
      priceRange: "₹1,500 - ₹10,000",
      features: [
        "Up to 10 minutes",
        "Professional editing",
        "Color grading", 
        "Sound design"
      ],
      category: "video"
    },
    {
      id: 3,
      name: "Ad Shoots",
      description: "Professional commercial photography and videography for advertising campaigns and brand promotions.", 
      priceRange: "Quote Based",
      features: [
        "HD/4K shooting",
        "Professional lighting",
        "Multiple takes",
        "Raw footage included"
      ],
      category: "photography"
    },
    {
      id: 4,
      name: "Website Development",
      description: "Modern, responsive websites that showcase your brand and drive conversions across all devices.",
      priceRange: "Custom Pricing", 
      features: [
        "Responsive design",
        "SEO optimized",
        "Fast loading",
        "Content management"
      ],
      category: "web"
    },
    {
      id: 5,
      name: "Digital Marketing",
      description: "Strategic digital marketing campaigns that boost your online presence and drive engagement.",
      priceRange: "Custom Pricing",
      features: [
        "Social media strategy",
        "Content planning", 
        "Analytics tracking",
        "Campaign optimization"
      ],
      category: "marketing"
    }
  ],

  // Portfolio/Previous Work
  portfolio: [
    {
      id: 1,
      title: "The Activist Podcast - Episode 15",
      category: "podcast",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "2.5K",
      publishedDate: "2024-12-15",
      description: "Deep dive into social activism and community engagement"
    },
    {
      id: 2,
      title: "Castonati - Brand Story",
      category: "commercial", 
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "1.8K",
      publishedDate: "2024-12-01",
      description: "Professional brand storytelling and commercial production"
    },
    {
      id: 3,
      title: "The Activist - Behind the Scenes",
      category: "documentary",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID  
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "3.2K",
      publishedDate: "2024-11-28", 
      description: "Documentary-style behind the scenes content"
    },
    {
      id: 4,
      title: "Castonati - Product Launch",
      category: "commercial",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
      views: "4.1K",
      publishedDate: "2024-11-15",
      description: "High-impact product launch campaign"
    }
  ],

  // Testimonials (mock data)
  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar", 
      company: "Tech Startup",
      rating: 5,
      comment: "Cassferr Media transformed our brand story into compelling visual content. Their attention to detail and creative vision exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Fashion Brand", 
      rating: 5,
      comment: "The team delivered exceptional short-form content that significantly boosted our social media engagement. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2fd9b1f?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Restaurant Chain",
      rating: 5, 
      comment: "Professional ad shoots that perfectly captured our brand essence. The team was efficient, creative, and delivered on time.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ],

  // Stats/Achievements
  stats: {
    videosCreated: 500,
    happyClients: 100, 
    yearsExperience: 5,
    projectsCompleted: 300
  },

  // Contact form options
  contactFormOptions: {
    services: [
      "Short Form Videos (₹700-₹5,000)",
      "Long Form Videos (₹1,500-₹10,000)", 
      "Ad Shoots (Quote Based)",
      "Website Development", 
      "Digital Marketing",
      "Post Production"
    ],
    budgetRanges: [
      "₹500 - ₹2,000",
      "₹2,000 - ₹5,000",
      "₹5,000 - ₹10,000",
      "₹10,000 - ₹25,000", 
      "₹25,000+"
    ]
  }
};

// Helper functions for mock data
export const getServiceById = (id) => {
  return mockData.services.find(service => service.id === id);
};

export const getPortfolioByCategory = (category) => {
  if (category === 'all') return mockData.portfolio;
  return mockData.portfolio.filter(item => item.category === category);
};

export const getYouTubeEmbedUrl = (videoId) => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  return `${Math.ceil(diffDays / 30)} months ago`;
};