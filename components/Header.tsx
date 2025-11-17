import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang Kami", page: "about" },
    { label: "Layanan", page: "services" },
    { label: "Blog", page: "blog" }
  ];

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex-shrink-0">
            <a href="#" aria-label="Kawan Curhat Konsultan Home" className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled ? 'text-brand-accent' : 'text-white'}`}>
              Kawan Curhat Konsultan
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.page} 
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors duration-200 ${isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-gray-200'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 bg-brand-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={() => handleNavClick('login')}
              className={`px-6 py-2 border-2 rounded-lg transition-all ${isScrolled ? 'border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-text'}`}
            >
              Login
            </button>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className={isScrolled ? 'text-brand-text' : 'text-white'}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button 
                key={link.page} 
                onClick={() => handleNavClick(link.page)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-brand-text hover:text-brand-accent hover:bg-gray-50"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium bg-brand-accent text-white hover:opacity-90"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={() => handleNavClick('login')}
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
