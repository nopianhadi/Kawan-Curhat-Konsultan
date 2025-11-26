
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Icons';
import { useSettings } from '../hooks/useSettings';

const Footer: React.FC = () => {
  const settings = useSettings();
  const menuLinks = ['Tentang Kami', 'Layanan', 'Hubungi Kami'];
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className={`md:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-accent mb-2">{settings.siteName}</div>
            <p className="mt-3 sm:mt-4 max-w-xs text-xs sm:text-sm md:text-base text-gray-600">
              {settings.siteDescription}
            </p>
            <div className="mt-2 sm:mt-3 space-y-1">
              <p className="text-brand-accent font-semibold text-xs sm:text-sm md:text-base">
                WhatsApp: {settings.whatsapp}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Email: {settings.email}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                {settings.address}
              </p>
            </div>
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
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Ikuti Kami</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {settings.facebook && (
                <li>
                  <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">
                    Facebook
                  </a>
                </li>
              )}
              {settings.instagram && (
                <li>
                  <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">
                    Instagram
                  </a>
                </li>
              )}
              {settings.linkedin && (
                <li>
                  <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">
                    LinkedIn
                  </a>
                </li>
              )}
              {settings.youtube && (
                <li>
                  <a href={settings.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">
                    YouTube
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; 2024 {settings.siteName}. All Rights Reserved.</p>
          <p className="mt-1.5 sm:mt-2">
            <a href="/admin" className="text-gray-400 hover:text-gray-600 transition-colors text-[10px] sm:text-xs">Admin</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
