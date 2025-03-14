
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ServiceLayout = ({ children, title, description }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/#services" className="inline-flex items-center text-roos-600 hover:text-roos-800 transition-colors mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to all services
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
        </div>
        
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceLayout;
