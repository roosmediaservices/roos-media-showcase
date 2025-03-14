
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

const TeamPage = () => {
  React.useEffect(() => {
    document.title = "Our Team | Roos Media";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented professionals behind our exceptional services
            </p>
          </div>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
