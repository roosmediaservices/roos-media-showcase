
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  React.useEffect(() => {
    document.title = "About Us | Roos Media";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Roos Media</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission, values, and journey
            </p>
          </div>
          <AboutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
