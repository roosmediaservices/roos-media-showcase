
import React from 'react';
import ServiceLayout from '@/layouts/ServiceLayout';
import { Camera, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PhotoEditing = () => {
  React.useEffect(() => {
    document.title = "Real Estate Photo Editing | Roos Media Services";
  }, []);

  const benefits = [
    "Enhance property appeal with professional editing techniques",
    "Increase viewer engagement with stunning visuals",
    "Improve selling price by up to 20% with quality imagery",
    "Save time with quick turnaround on bulk edits",
    "Maintain consistent quality across all property listings"
  ];

  return (
    <ServiceLayout 
      title="Real Estate Photo Editing" 
      description="Transform ordinary property photos into stunning visual assets that capture attention and drive engagement."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-roos-50 p-6 rounded-xl mb-6 inline-flex">
            <Camera size={48} className="text-roos-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Professional Photo Editing Services</h2>
          <p className="text-gray-700 mb-6">
            Our professional photo editing services transform ordinary real estate photography into stunning visual assets that help properties stand out in competitive markets. Using advanced techniques and industry-leading software, our editors enhance every aspect of your property images to showcase homes in their best light.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="mt-4 bg-roos-600 hover:bg-roos-700">
              Get Started Today
            </Button>
          </Link>
        </div>
        
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80" 
              alt="Before and after real estate photo editing" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" 
                alt="Interior photo editing" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Exterior photo editing" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Photo Editing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-roos-100 text-roos-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-gray-600">Upload your property photos through our secure client portal.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-roos-100 text-roos-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Edit</h3>
            <p className="text-gray-600">Our team of experts applies professional editing techniques to enhance your photos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-roos-100 text-roos-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Deliver</h3>
            <p className="text-gray-600">Receive your professionally edited photos within 24 hours.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Editing Services Include</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {["HDR Enhancement", "Sky Replacement", "Color Correction", "Object Removal", "Virtual Staging"].map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Property Photos?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your real estate photo editing needs and discover how our services can help you showcase properties at their best.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-roos-600 hover:bg-roos-700">
              Get a Quote
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default PhotoEditing;
