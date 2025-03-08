
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')` 
        }}
      ></div>
      
      {/* Hero content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Transform Your Real Estate Media
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Professional photo and video editing services for real estate photographers and videographers
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-roos-600 hover:bg-roos-700 text-white font-medium py-3 px-8 rounded-md text-lg"
            onClick={scrollToServices}
          >
            Explore Our Services
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent hover:bg-white/10 text-white border-white font-medium py-3 px-8 rounded-md text-lg"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce"
        onClick={scrollToServices}
      >
        <ChevronDown size={36} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
