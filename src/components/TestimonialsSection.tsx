
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial = ({ quote, author, position, company, image }: TestimonialProps) => (
  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full">
    <CardContent className="p-8">
      <Quote className="h-10 w-10 text-roos-300 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author}
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Roos Media has transformed my real estate photography business. Their attention to detail and quick turnaround time have allowed me to take on more clients while delivering premium results.",
      author: "Sarah Johnson",
      position: "Owner",
      company: "Pristine Property Photography",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      quote: "The virtual staging services have been a game-changer for my vacant property listings. Clients are amazed by the transformation, and homes are selling faster than ever.",
      author: "Michael Rodriguez",
      position: "Real Estate Photographer",
      company: "Elite Realty Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      quote: "What sets Roos Media apart is their understanding of real estate marketing. They don't just edit photos—they enhance them specifically to highlight a property's best features.",
      author: "Emily Chen",
      position: "Director",
      company: "Skyline Media Productions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
    },
    {
      quote: "Their video editing services have elevated my property tours to a professional level I couldn't achieve on my own. The results speak for themselves—my client base has grown significantly.",
      author: "David Thompson",
      position: "Videographer",
      company: "Thompson Visual Media",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-container">
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="section-subtitle">
        Don't just take our word for it—hear from the real estate professionals who trust us with their visual content
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Testimonial 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
