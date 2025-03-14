
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';

// Sample blog post content
const blogPosts = {
  "10-ways-professional-photo-editing-increase-property-value": {
    title: "10 Ways Professional Photo Editing Can Increase Your Property's Value",
    date: "June 15, 2023",
    readTime: "7 min read",
    category: "Photo Editing",
    author: "Sarah Johnson",
    authorRole: "Senior Photo Editor",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    content: `
      <p class="lead">In today's competitive real estate market, the quality of your property's visual presentation can significantly impact its perceived value and selling price. Professional photo editing is no longer a luxury—it's a necessity for agents who want to maximize their listings' potential.</p>
      
      <h2>1. Enhanced First Impressions</h2>
      <p>Studies show that over 90% of home buyers begin their search online, making the quality of your listing photos crucial for creating powerful first impressions. Professional photo editing ensures that properties are presented in their best light, literally and figuratively. Techniques like proper exposure adjustment and color correction can transform an ordinary image into one that commands attention and interest.</p>
      
      <blockquote>
        <p>"The difference between amateur and professionally edited real estate photography can translate to thousands of dollars in the final selling price."</p>
        <cite>— National Association of Realtors Report, 2022</cite>
      </blockquote>
      
      <h2>2. Sky Replacement for Perfect Exteriors</h2>
      <p>Weather doesn't always cooperate on photo day. Professional editors can replace dull, overcast skies with bright blue ones, creating an instantly more appealing exterior shot. This seemingly simple change can dramatically alter the emotional response from potential buyers, making the property feel more inviting and desirable.</p>
      
      <h2>3. Virtual Twilight Transformations</h2>
      <p>Converting daytime exterior shots to twilight images has become increasingly popular in luxury real estate marketing. The warm, golden light emanating from windows against a dusky blue sky creates a romantic, aspirational quality that can elevate a property's perceived value. These transformations typically result in increased click-through rates on online listings.</p>
      
      <h2>4. Virtual Staging for Empty Spaces</h2>
      <p>Empty rooms can appear smaller and less inviting than furnished ones. Virtual staging allows empty properties to be digitally furnished with stylish, modern décor that helps buyers envision the space's potential. This cost-effective alternative to physical staging can increase perceived value without the expense and logistics of traditional staging.</p>
      
      <h2>5. Remove Distracting Elements</h2>
      <p>Professional photo editing can remove distracting elements like garbage bins, power lines, or personal items that might otherwise detract from a property's appeal. This clean, polished presentation helps buyers focus on the property's positive features rather than its flaws or distractions.</p>
      
      <h2>6. Fix Imperfections Without Renovations</h2>
      <p>Minor imperfections like wall marks, small cracks, or patches of dead grass can be digitally corrected, presenting the property in its ideal state without costly renovations or repairs. This approach helps sellers maximize their return on investment by addressing visual concerns without physical intervention.</p>
      
      <h2>7. Enhance Architectural Features</h2>
      <p>Professional editing can emphasize a property's architectural strengths. Techniques like perspective correction ensure that vertical lines appear straight, while subtle enhancements can draw attention to crown molding, built-in cabinetry, or other distinctive features that add value.</p>
      
      <h2>8. Improve Interior Lighting</h2>
      <p>Even in properties with abundant natural light, photography doesn't always capture the space as our eyes perceive it. Professional editors can balance lighting to ensure that interiors appear bright, welcoming, and spacious—qualities that directly correlate with higher perceived value.</p>
      
      <h2>9. Create Consistent Visual Branding</h2>
      <p>Consistency across listing photos creates a cohesive, professional presentation that reflects positively on both the property and the agent. Professional editing ensures that all images share a similar style, color profile, and quality level, reinforcing the property's brand and perceived value.</p>
      
      <h2>10. Seasonal Adaptations</h2>
      <p>Properties photographed during less appealing seasons can be digitally adjusted to show more favorable conditions. Spring greenery can be added to winter shots, fall foliage can be removed for a summery feel, or holiday decorations can be digitally removed to create a more neutral presentation that appeals to a broader audience.</p>
      
      <h3>Conclusion</h3>
      <p>The investment in professional photo editing services yields significant returns in terms of perceived property value, buyer interest, and ultimately, selling price. In a market where online presence drives in-person showings, the quality of your listing's visual presentation isn't just about making a good impression—it's about making a valuable one.</p>
      
      <p>For real estate professionals looking to maximize their listings' potential, professional photo editing provides one of the highest returns on investment in your marketing arsenal.</p>
    `,
    relatedPosts: [
      {
        title: "The Impact of High-Quality Images on Real Estate Listings",
        slug: "impact-high-quality-images-real-estate-listings"
      },
      {
        title: "How to Choose the Right Photo Editing Service for Your Real Estate Business",
        slug: "how-to-choose-right-photo-editing-service-real-estate-business"
      },
      {
        title: "Seasonal Photo Editing Techniques for Real Estate Marketing",
        slug: "seasonal-photo-editing-techniques-real-estate-marketing"
      }
    ]
  },
  // This is just a sample. In a production app, you would have all blog posts here or fetch them from an API
};

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post data by slug
  // In a real application, you would fetch this data from a backend
  const post = blogPosts[slug as keyof typeof blogPosts];
  
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
