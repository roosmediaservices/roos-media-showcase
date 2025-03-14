
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';
import { getBlogPostBySlug } from '@/blog/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post data by slug
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | Roos Media Blog`;
    } else {
      document.title = "Blog Post Not Found | Roos Media";
    }
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center text-roos-600 hover:text-roos-800 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to all articles
          </Link>
          
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-roos-100 text-roos-800 mb-4">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <div className="flex items-center mr-6">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-roos-200 flex items-center justify-center text-roos-700 font-bold mr-3">
                {post.author.split(' ')[0][0]}{post.author.split(' ')[1][0]}
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-8">
            <span className="font-medium">Share this article:</span>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-roos-600">
                <Share2 className="h-5 w-5" />
              </a>
              {/* Add more social share icons here */}
            </div>
          </div>
          
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <ul className="space-y-4">
                {post.relatedPosts.map((relatedPost, index) => (
                  <li key={index}>
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="flex items-center text-gray-700 hover:text-roos-600 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-roos-600" />
                      {relatedPost.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
