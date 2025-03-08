
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BeforeAfterImageProps {
  before: string;
  after: string;
  title: string;
  description: string;
}

const BeforeAfterImage = ({ before, after, title, description }: BeforeAfterImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="space-y-3">
      <div 
        className="before-after-image group cursor-pointer" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={before} 
          alt={`${title} - Before`} 
          className={cn("before transition-opacity duration-500", {
            "opacity-0": isHovered
          })}
        />
        <img 
          src={after} 
          alt={`${title} - After`} 
          className="after"
        />
        
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
          <div className="flex justify-between">
            <span className={cn("font-medium transition-opacity duration-300", {
              "opacity-0": isHovered
            })}>
              Before
            </span>
            <span className={cn("font-medium transition-opacity duration-300", {
              "opacity-100": isHovered,
              "opacity-0": !isHovered
            })}>
              After
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const PortfolioSection = () => {
  // Mock portfolio data
  const portfolioItems = {
    photoEditing: [
      {
        before: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80",
        after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
        title: "Luxury Home Enhancement",
        description: "HDR processing and color correction to highlight architectural details"
      },
      {
        before: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        title: "Interior Lighting Correction",
        description: "Balanced exposure and enhanced interior lighting"
      },
      {
        before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80",
        title: "Sky Replacement",
        description: "Dramatic sky replacement to enhance curb appeal"
      }
    ],
    videoEditing: [
      {
        before: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        title: "Cinematic Color Grading",
        description: "Professional color treatment for promotional property video"
      },
      {
        before: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Drone Footage Enhancement",
        description: "Stabilization and color enhancement of aerial property shots"
      },
      {
        before: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Virtual Tour Editing",
        description: "Smooth transitions and information overlay for interactive tour"
      }
    ],
    virtualStaging: [
      {
        before: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Living Room Staging",
        description: "Contemporary furniture and decor added to empty living space"
      },
      {
        before: "https://images.unsplash.com/photo-1615876237586-2bca4da906cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        after: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Bedroom Transformation",
        description: "Virtual staging with luxurious bedroom furnishings"
      },
      {
        before: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        after: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Office Space Design",
        description: "Home office virtual staging for multi-purpose room"
      }
    ]
  };

  return (
    <section id="portfolio" className="section-container bg-gray-50">
      <h2 className="section-title">Our Portfolio</h2>
      <p className="section-subtitle">
        View our before and after transformations to see the Roos Media difference
      </p>
      
      <Tabs defaultValue="photoEditing" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="photoEditing">Photo Editing</TabsTrigger>
          <TabsTrigger value="videoEditing">Video Editing</TabsTrigger>
          <TabsTrigger value="virtualStaging">Virtual Staging</TabsTrigger>
        </TabsList>
        
        {Object.entries(portfolioItems).map(([category, items]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <BeforeAfterImage 
                  key={index}
                  before={item.before}
                  after={item.after}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="button-secondary">
                View Full Portfolio
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default PortfolioSection;
