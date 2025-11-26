import React, { useState, useEffect, useRef } from 'react';
import { PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5, PartnerLogo6 } from './Icons';

const partners = [
  <PartnerLogo1 />, <PartnerLogo2 />, <PartnerLogo3 />, <PartnerLogo4 />, <PartnerLogo5 />, <PartnerLogo6 />
];

const Partners: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="bg-white py-6 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div ref={ref} className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:gap-x-8 md:gap-y-6 lg:gap-x-16 opacity-70">
          {partners.map((Partner, index) => (
            <div 
              key={index} 
              className={`text-gray-400 font-bold text-sm sm:text-base md:text-lg tracking-wider transition-all duration-500 hover:opacity-100 hover:scale-110 ${
                isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {Partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
