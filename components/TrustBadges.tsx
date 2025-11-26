import React, { useState, useEffect, useRef } from 'react';

const badges = [
  { icon: '🏆', title: 'Berpengalaman', subtitle: '10+ Tahun Konsultasi Bisnis' },
  { icon: '⭐', title: 'Rating Tertinggi', subtitle: 'Kepuasan Klien 95%' },
  { icon: '✓', title: 'Profesional', subtitle: 'Konsultan Bersertifikat' },
  { icon: '🛡️', title: 'Terpercaya', subtitle: '1000+ Kontrak Disusun' }
];

const TrustBadges: React.FC = () => {
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
    <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 border-y border-gray-100">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-2 sm:p-3 md:p-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{badge.icon}</div>
              <h4 className="font-bold text-brand-text mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">{badge.title}</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
