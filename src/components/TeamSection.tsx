
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, position, bio, image }: TeamMemberProps) => (
  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
    <div className="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
    </div>
    <CardContent className="p-6">
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <p className="text-roos-600 mb-4">{position}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex space-x-3">
        <a href="#" className="text-gray-600 hover:text-roos-600 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-roos-600 transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </CardContent>
  </Card>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Roos",
      position: "Founder & Lead Editor",
      bio: "With over 15 years in professional photography and 10 years specializing in real estate, Alex leads our editing team with unparalleled expertise and vision.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Jessica Martinez",
      position: "Senior Photo Editor",
      bio: "Jessica specializes in HDR processing and color correction, bringing her fine art background to every property photo she enhances.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
    },
    {
      name: "Marcus Chen",
      position: "Video Editing Director",
      bio: "With experience in commercial videography, Marcus oversees our video editing department, ensuring cinematic quality for every property tour.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Sophia Williams",
      position: "Virtual Staging Specialist",
      bio: "With a background in interior design, Sophia creates stunning virtual staging that helps potential buyers envision the full potential of any space.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80"
    }
  ];

  return (
    <section id="team" className="section-container bg-gray-50">
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtitle">
        The talented professionals behind our exceptional editing services
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            position={member.position}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
