
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  React.useEffect(() => {
    document.title = "Blog | Roos Media Services";
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "10 Ways Professional Photo Editing Can Increase Your Property's Value",
      slug: "10-ways-professional-photo-editing-increase-property-value",
      excerpt: "Discover how professional photo editing services can significantly increase the perceived value of your real estate listings.",
      date: "June 15, 2023",
      readTime: "7 min read",
      category: "Photo Editing",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Virtual Staging for Real Estate Professionals",
      slug: "ultimate-guide-virtual-staging-real-estate-professionals",
      excerpt: "Learn everything you need to know about virtual staging and how it can transform empty spaces into appealing, furnished properties.",
      date: "July 3, 2023",
      readTime: "8 min read",
      category: "Virtual Staging",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 3,
      title: "How to Create Compelling Video Tours That Sell Properties Faster",
      slug: "how-to-create-compelling-video-tours-sell-properties-faster",
      excerpt: "Step-by-step guide to creating engaging video tours that showcase properties effectively and lead to faster sales.",
      date: "July 28, 2023",
      readTime: "6 min read",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 4,
      title: "The Future of Real Estate Marketing: 3D Animation and CGI",
      slug: "future-real-estate-marketing-3d-animation-cgi",
      excerpt: "Explore how 3D animation and CGI are revolutionizing real estate marketing and giving agents a competitive edge.",
      date: "August 15, 2023",
      readTime: "9 min read",
      category: "3D Animation",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 5,
      title: "Essential Floor Plan Design Tips for Real Estate Marketing",
      slug: "essential-floor-plan-design-tips-real-estate-marketing",
      excerpt: "Learn the essential elements of effective floor plan design and how it can enhance your property listings.",
      date: "September 2, 2023",
      readTime: "5 min read",
      category: "Floor Plan Design",
      image: "https://images.unsplash.com/photo-1536437075651-5e9d0a19370f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 6,
      title: "Mastering Short-Form Video Content for Real Estate",
      slug: "mastering-short-form-video-content-real-estate",
      excerpt: "How to create engaging short-form videos that capture attention and drive interest in your property listings.",
      date: "September 20, 2023",
      readTime: "6 min read",
      category: "Short Form Video",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 7,
      title: "The Impact of High-Quality Images on Real Estate Listings",
      slug: "impact-high-quality-images-real-estate-listings",
      excerpt: "Research-backed insights on how high-quality images directly impact listing performance and buyer interest.",
      date: "October 5, 2023",
      readTime: "7 min read",
      category: "Photo Editing",
      image: "https://images.unsplash.com/photo-1560520031-5a969fd00824?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 8,
      title: "How to Choose the Right Photo Editing Service for Your Real Estate Business",
      slug: "how-to-choose-right-photo-editing-service-real-estate-business",
      excerpt: "A comprehensive guide to selecting the ideal photo editing service that meets your specific real estate marketing needs.",
      date: "October 22, 2023",
      readTime: "8 min read",
      category: "Photo Editing",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 9,
      title: "360° Photography: Creating Immersive Property Experiences",
      slug: "360-photography-creating-immersive-property-experiences",
      excerpt: "Learn how 360° photography and panoramic editing can create immersive viewing experiences that engage potential buyers.",
      date: "November 10, 2023",
      readTime: "6 min read",
      category: "360° & Panorama",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 10,
      title: "Effective Marketing Materials for Luxury Real Estate",
      slug: "effective-marketing-materials-luxury-real-estate",
      excerpt: "Specialized strategies and design principles for creating marketing materials that appeal to luxury property buyers.",
      date: "November 28, 2023",
      readTime: "9 min read",
      category: "Marketing Materials",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 11,
      title: "Seasonal Photo Editing Techniques for Real Estate Marketing",
      slug: "seasonal-photo-editing-techniques-real-estate-marketing",
      excerpt: "Tailored photo editing approaches for each season to ensure your property listings always look their best year-round.",
      date: "December 15, 2023",
      readTime: "7 min read",
      category: "Photo Editing",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 12,
      title: "Emerging Trends in Real Estate Photography for 2024",
      slug: "emerging-trends-real-estate-photography-2024",
      excerpt: "Stay ahead of the curve with insights into the latest technological advancements and creative approaches in real estate photography.",
      date: "January 5, 2024",
      readTime: "8 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Roos Media Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tips, and trends for real estate photography and marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-roos-100 text-roos-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full">Read More</Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
