
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Camera, Video, PenTool, LayoutGrid, Image, FileImage } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => (
  <Card className="service-card h-full">
    <CardHeader>
      <div className="mb-4 text-roos-600">{icon}</div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckSquare className="h-5 w-5 text-roos-600 mr-2 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera size={40} />,
      title: "Real Estate Photo Editing",
      description: "Transform ordinary property photos into stunning visual assets",
      features: [
        "HDR Enhancement",
        "Sky Replacement",
        "Color Correction",
        "Object Removal",
        "Virtual Staging"
      ]
    },
    {
      icon: <Video size={40} />,
      title: "Video Editing",
      description: "Create polished, professional property videos that engage viewers",
      features: [
        "Color Grading",
        "Transitions & Effects",
        "Music Integration",
        "Title & Text Additions",
        "Drone Footage Enhancement"
      ]
    },
    {
      icon: <PenTool size={40} />,
      title: "Advanced Retouching",
      description: "Perfect every detail to create magazine-quality property imagery",
      features: [
        "Landscape Enhancement",
        "Perspective Correction",
        "Interior Lighting Adjustment",
        "Detailed Object Retouching",
        "Custom Editing Requests"
      ]
    },
    {
      icon: <LayoutGrid size={40} />,
      title: "Virtual Staging",
      description: "Furnish empty rooms with realistic virtual staging to enhance appeal",
      features: [
        "Furniture & Decor Addition",
        "Style Customization",
        "Multiple Design Options",
        "Exterior & Interior Staging",
        "Before & After Comparisons"
      ]
    },
    {
      icon: <Image size={40} />,
      title: "360° & Panorama Editing",
      description: "Enhance immersive property viewing experiences with expert editing",
      features: [
        "Panorama Stitching",
        "Exposure Balancing",
        "Virtual Tour Enhancement",
        "360° Photo Editing",
        "Interactive Element Addition"
      ]
    },
    {
      icon: <FileImage size={40} />,
      title: "Marketing Materials",
      description: "Create cohesive visual marketing assets for property listings",
      features: [
        "Property Flyers",
        "Social Media Graphics",
        "Branded Templates",
        "Floor Plan Enhancement",
        "Custom Collateral Design"
      ]
    }
  ];

  return (
    <section id="services" className="section-container bg-gray-50">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Elevate your real estate photography and videography with our professional editing services
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
