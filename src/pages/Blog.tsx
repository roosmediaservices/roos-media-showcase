
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Tag } from 'lucide-react';
import { getAllBlogPosts } from '@/blog/blogPosts';

const BlogPage = () => {
  React.useEffect(() => {
    document.title = "Blog | Roos Media Services";
  }, []);

  const blogPosts = getAllBlogPosts();

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
