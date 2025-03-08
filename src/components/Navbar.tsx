
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const NavItem = ({ href, label, onClick }: NavItemProps) => (
  <li>
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
        onClick();
      }}
      className="text-gray-700 hover:text-roos-600 transition-colors px-3 py-2 text-sm font-medium"
    >
      {label}
    </a>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <span className="text-2xl font-bold text-roos-600">Roos Media</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <NavItem href="#services" label="Services" onClick={closeMenu} />
              <NavItem href="#about" label="About" onClick={closeMenu} />
              <NavItem href="#portfolio" label="Portfolio" onClick={closeMenu} />
              <NavItem href="#testimonials" label="Testimonials" onClick={closeMenu} />
              <NavItem href="#team" label="Our Team" onClick={closeMenu} />
              <NavItem href="#contact" label="Contact" onClick={closeMenu} />
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Button className="button-primary">Get a Quote</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-roos-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-3">
            <ul className="flex flex-col space-y-2">
              <NavItem href="#services" label="Services" onClick={closeMenu} />
              <NavItem href="#about" label="About" onClick={closeMenu} />
              <NavItem href="#portfolio" label="Portfolio" onClick={closeMenu} />
              <NavItem href="#testimonials" label="Testimonials" onClick={closeMenu} />
              <NavItem href="#team" label="Our Team" onClick={closeMenu} />
              <NavItem href="#contact" label="Contact" onClick={closeMenu} />
              <li className="pt-2">
                <Button className="button-primary w-full">Get a Quote</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
