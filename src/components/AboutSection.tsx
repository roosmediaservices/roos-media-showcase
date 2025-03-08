
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-roos-600" />,
      title: "Quality First",
      description: "We maintain the highest standards in every project we undertake, ensuring consistent excellence."
    },
    {
      icon: <Clock className="h-8 w-8 text-roos-600" />,
      title: "Quick Turnaround",
      description: "We understand the importance of timely delivery in real estate marketing."
    },
    {
      icon: <Users className="h-8 w-8 text-roos-600" />,
      title: "Dedicated Team",
      description: "Our editors are trained specifically in real estate visual enhancement techniques."
    },
    {
      icon: <Award className="h-8 w-8 text-roos-600" />,
      title: "Industry Expertise",
      description: "Years of specialized experience in real estate photography and videography editing."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Roos Media Services</h2>
          
          <p className="text-lg text-gray-700">
            Founded with a passion for real estate imagery, Roos Media Services has established itself as a trusted partner for real estate photographers and videographers seeking to elevate their visual content.
          </p>
          
          <p className="text-lg text-gray-700">
            Our team consists of skilled editors who understand the unique demands of real estate marketing. We focus exclusively on enhancing property visuals, allowing our clients to concentrate on capturing the perfect shot while we handle the post-production process.
          </p>
          
          <div className="flex items-center space-x-2 pt-4">
            <div className="h-1 w-20 bg-roos-600 rounded"></div>
            <p className="text-roos-600 font-medium">Our Mission</p>
          </div>
          
          <p className="text-lg text-gray-700 italic">
            "To help real estate visual professionals deliver exceptional content through meticulous editing services, enhancing property presentations and contributing to successful sales."
          </p>
          
          <Button className="button-primary mt-4">Learn More About Us</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
