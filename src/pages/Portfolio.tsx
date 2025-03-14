
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';

const PortfolioPage = () => {
  React.useEffect(() => {
    document.title = "Portfolio | Roos Media";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our recent work and successful projects
            </p>
          </div>
          <PortfolioSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
