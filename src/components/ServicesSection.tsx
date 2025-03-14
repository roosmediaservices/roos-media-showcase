
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Camera, Video, PenTool, LayoutGrid, Image, Ruler, Film, Layers, Box } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

const ServiceCard = ({ icon, title, description, features, slug }: ServiceCardProps) => (
  <Card className="service-card h-full flex flex-col">
    <CardHeader>
      <div className="mb-4 text-roos-600">{icon}</div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckSquare className="h-5 w-5 text-roos-600 mr-2 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <Link to={`/services/${slug}`}>
          <Button variant="outline" className="w-full">Learn More</Button>
        </Link>
      </div>
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
      ],
      slug: "real-estate-photo-editing"
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
      ],
      slug: "video-editing"
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
      ],
      slug: "advanced-retouching"
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
      ],
      slug: "virtual-staging"
    },
    {
      icon: <Ruler size={40} />,
      title: "Floor Plan Design",
      description: "Create precise, visually appealing floor plans to showcase property layouts",
      features: [
        "2D Floor Plan Creation",
        "3D Floor Plan Rendering",
        "Measurements & Dimensions",
        "Room Labels & Annotations",
        "Custom Branding Options"
      ],
      slug: "floor-plan-design"
    },
    {
      icon: <Film size={40} />,
      title: "Short Form Video Editing",
      description: "Craft engaging short-form videos optimized for social media platforms",
      features: [
        "Social Media Optimized Formats",
        "Quick Property Highlights",
        "Vertical Video Editing",
        "Caption & Text Integration",
        "Engaging Transitions & Effects"
      ],
      slug: "short-form-video-editing"
    },
    {
      icon: <Box size={40} />,
      title: "3D Animation & CGI",
      description: "Create immersive 3D animations and computer-generated imagery for properties",
      features: [
        "3D Property Visualization",
        "Walkthrough Animations",
        "Architectural Rendering",
        "Realistic Lighting & Textures",
        "Custom Animation Projects"
      ],
      slug: "3d-animation-cgi"
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
      ],
      slug: "360-panorama-editing"
    },
    {
      icon: <Layers size={40} />,
      title: "Marketing Materials",
      description: "Create cohesive visual marketing assets for property listings",
      features: [
        "Property Flyers",
        "Social Media Graphics",
        "Branded Templates",
        "Floor Plan Enhancement",
        "Custom Collateral Design"
      ],
      slug: "marketing-materials"
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
            slug={service.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
