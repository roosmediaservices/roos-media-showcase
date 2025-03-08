
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
    
    <p className="text-gray-600 mb-8">
      Ready to elevate your real estate media? Contact us today for a consultation or quote. Our team is ready to help you deliver exceptional visual content to your clients.
    </p>
    
    <div className="space-y-4">
      <div className="flex items-start">
        <Mail className="w-5 h-5 text-roos-600 mt-1 mr-3" />
        <div>
          <p className="font-medium">Email Us</p>
          <a href="mailto:info@roosmedia.com" className="text-gray-600 hover:text-roos-600 transition-colors">
            info@roosmedia.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Phone className="w-5 h-5 text-roos-600 mt-1 mr-3" />
        <div>
          <p className="font-medium">Call Us</p>
          <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-roos-600 transition-colors">
            +1 (555) 123-4567
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-roos-600 mt-1 mr-3" />
        <div>
          <p className="font-medium">Visit Us</p>
          <address className="text-gray-600 not-italic">
            123 Editing Studio Ln.<br />
            San Francisco, CA 94103
          </address>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="w-5 h-5 text-roos-600 mt-1 mr-3" />
        <div>
          <p className="font-medium">Business Hours</p>
          <p className="text-gray-600">Monday - Friday: 9am - 6pm PST</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Your email" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="Your phone number" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="photo-editing">Photo Editing</SelectItem>
            <SelectItem value="video-editing">Video Editing</SelectItem>
            <SelectItem value="virtual-staging">Virtual Staging</SelectItem>
            <SelectItem value="other">Other Services</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your project and requirements" 
          rows={5} 
          required 
        />
      </div>
      
      <Button type="submit" className="button-primary w-full">
        Send Message
      </Button>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Ready to transform your real estate media? Get in touch with our team today
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
