
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

const TestimonialsPage = () => {
  React.useEffect(() => {
    document.title = "Testimonials | Roos Media";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about our services and results
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
