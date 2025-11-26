import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  isDetailPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isDetailPage = false }) => {
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

  const shouldShowSolid = isDetailPage || isScrolled;

  return (
    <>
    <header className={`sticky top-0 z-50 transition-all duration-500 ease-out ${shouldShowSolid ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-gradient-to-r from-amber-600/90 via-orange-600/90 to-yellow-600/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('home')} aria-label="Kawan Curhat Home" className={`text-xl md:text-2xl font-bold transition-all duration-300 ${shouldShowSolid ? 'text-gradient-primary' : 'text-white drop-shadow-lg'}`}>
              Kawan Curhat
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.page} 
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors duration-200 ${shouldShowSolid ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-gray-200'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={() => handleNavClick('login')}
              className={`px-6 py-2 border-2 rounded-lg transition-all duration-300 ${shouldShowSolid ? 'border-brand-accent text-brand-accent hover:bg-gradient-primary hover:text-white hover:border-transparent' : 'border-white text-white hover:bg-white hover:text-brand-accent'}`}
            >
              Login
            </button>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className={shouldShowSolid ? 'text-brand-text' : 'text-white'}>
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
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium bg-gradient-primary text-white hover:opacity-90"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={() => handleNavClick('login')}
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium border-2 border-brand-accent text-brand-accent hover:bg-gradient-primary hover:text-white hover:border-transparent"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/6281234567890?text=Halo%20Admin%20Kawan%20Curhat,%20saya%20ingin%20bertanya"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
      aria-label="Chat WhatsApp Admin"
    >
      <svg 
        className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"></span>
    </a>
    </>
  );
};

export default Header;
