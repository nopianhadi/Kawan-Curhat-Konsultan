import React, { useState, useEffect } from 'react';
import { AwardIcon } from './Icons';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative bg-cover bg-center bg-no-repeat -mt-20 pt-20 overflow-hidden" 
      style={{ 
        backgroundImage: "url('/aset/0GfHSok4FpwF794IxxL1j5cJOc.jpg')",
        backgroundPositionY: `${scrollY * 0.5}px`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-amber-900/40 to-brand-dark/85"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center text-white py-20 sm:py-32 md:py-40 lg:py-48">
        <div className="inline-flex items-center justify-center bg-white/10 rounded-full px-2 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm border border-white/20 animate-slideDown">
          <AwardIcon className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-[10px] sm:text-xs md:text-sm font-medium">Member of PERADI</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 animate-slideUp">
          Solusi Cerdas dan Aman
        </h1>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 px-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          untuk Konsultasi Bisnis Anda
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-primary text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 btn-ripple"
          >
            Hubungi Kami
          </a>
          <a 
            href="#services" 
            className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base rounded-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            Layanan Kami
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto mt-6 sm:mt-10 md:mt-12 lg:mt-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-accent mb-0.5 sm:mb-1 md:mb-2">10+</div>
            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-300">Tahun<br className="sm:hidden"/> Pengalaman</div>
          </div>
          <div className="text-center border-x border-white/20">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-accent mb-0.5 sm:mb-1 md:mb-2">500+</div>
            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-300">Klien<br className="sm:hidden"/> Terlayani</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-accent mb-0.5 sm:mb-1 md:mb-2">1000+</div>
            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-300">Kontrak<br className="sm:hidden"/> Disusun</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
