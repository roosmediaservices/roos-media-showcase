
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Camera } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  onClick: () => void;
  isExact?: boolean;
  isLink?: boolean;
}

const NavItem = ({ to, label, onClick, isExact = false, isLink = false }: NavItemProps) => {
  const location = useLocation();
  const isActive = isExact ? location.pathname === to : location.pathname.startsWith(to);
  
  if (isLink) {
    return (
      <li>
        <Link
          to={to}
          onClick={onClick}
          className={`relative group text-gray-700 hover:text-roos-600 transition-colors px-3 py-2 text-sm font-medium flex items-center ${isActive ? 'text-roos-600' : ''}`}
        >
          {label}
          <span className={`absolute left-0 bottom-0 h-0.5 ${isActive ? 'w-full bg-roos-600' : 'w-0 bg-roos-600 transition-all duration-300 group-hover:w-full'}`}></span>
        </Link>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={to}
        onClick={(e) => {
          if (to.startsWith('/#')) {
            e.preventDefault();
            const target = document.querySelector(to.substring(1));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
          onClick();
        }}
        className={`relative group text-gray-700 hover:text-roos-600 transition-colors px-3 py-2 text-sm font-medium flex items-center ${isActive ? 'text-roos-600' : ''}`}
      >
        {label}
        <span className={`absolute left-0 bottom-0 h-0.5 ${isActive ? 'w-full bg-roos-600' : 'w-0 bg-roos-600 transition-all duration-300 group-hover:w-full'}`}></span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Camera className="h-8 w-8 text-roos-600 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-roos-800 to-roos-500 bg-clip-text text-transparent">Roos Media</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem to="/services" label="Services" onClick={closeMenu} isLink={true} />
              <NavItem to="/about" label="About" onClick={closeMenu} isLink={true} />
              <NavItem to="/portfolio" label="Portfolio" onClick={closeMenu} isLink={true} />
              <NavItem to="/testimonials" label="Testimonials" onClick={closeMenu} isLink={true} />
              <NavItem to="/team" label="Our Team" onClick={closeMenu} isLink={true} />
              <NavItem to="/blog" label="Blog" onClick={closeMenu} isLink={true} />
              <NavItem to="/contact" label="Contact" onClick={closeMenu} isLink={true} />
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-roos-600 hover:bg-roos-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get a Quote
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-roos-600 hover:text-roos-700 focus:outline-none bg-white/90 p-2 rounded-md shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg animate-fade-in">
            <ul className="flex flex-col space-y-3 px-4 py-2">
              <NavItem to="/services" label="Services" onClick={closeMenu} isLink={true} />
              <NavItem to="/about" label="About" onClick={closeMenu} isLink={true} />
              <NavItem to="/portfolio" label="Portfolio" onClick={closeMenu} isLink={true} />
              <NavItem to="/testimonials" label="Testimonials" onClick={closeMenu} isLink={true} />
              <NavItem to="/team" label="Our Team" onClick={closeMenu} isLink={true} />
              <NavItem to="/blog" label="Blog" onClick={closeMenu} isLink={true} />
              <NavItem to="/contact" label="Contact" onClick={closeMenu} isLink={true} />
              <li className="pt-3">
                <Button className="bg-roos-600 hover:bg-roos-700 text-white w-full font-medium shadow-md">
                  Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
