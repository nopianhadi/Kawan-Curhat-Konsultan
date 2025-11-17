
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Icons';

const Footer: React.FC = () => {
  const menuLinks = ['Tentang Kami', 'Layanan', 'Hubungi Kami'];
  const otherLinks = ['Blog', 'Error 404', 'Syarat & Ketentuan'];
  const socialLinks = ['LinkedIn', 'Instagram', 'Behance', 'X'];
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <footer className="bg-white text-brand-text overflow-hidden">
      <div ref={ref} className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className={`lg:col-span-2 md:col-span-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-accent mb-2">Kawan Curhat Konsultan</div>
            <p className="mt-3 sm:mt-4 max-w-xs text-xs sm:text-sm md:text-base text-gray-600">
              Solusi Cerdas dan Aman untuk Konsultasi Bisnis Anda. Konsultan hukum bisnis terpercaya dengan pendekatan komunikatif dan solutif.
            </p>
            <p className="mt-2 sm:mt-3 text-brand-accent font-semibold text-xs sm:text-sm md:text-base">
              WhatsApp: 08567886251
            </p>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Menu</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {menuLinks.map(link => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Halaman Lain</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {otherLinks.map(link => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Ikuti Kami</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {socialLinks.map(link => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; 2024 Kawan Curhat Konsultan. All Rights Reserved.</p>
          <p className="mt-1.5 sm:mt-2">
            <a href="/admin" className="text-gray-400 hover:text-gray-600 transition-colors text-[10px] sm:text-xs">Admin</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
