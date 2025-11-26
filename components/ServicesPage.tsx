import React, { useState, useEffect, useRef } from 'react';

interface ServicesPageProps {
  onServiceClick?: (serviceId: string) => void;
}

const services = [
  { id: 'konsultasi-hukum-bisnis', name: 'Konsultasi Hukum Bisnis', description: 'Konsultasi hukum bisnis yang komprehensif untuk membantu Anda mengambil keputusan bisnis yang tepat dan sesuai dengan regulasi yang berlaku.' },
  { id: 'perlindungan-bisnis', name: 'Perlindungan Bisnis', description: 'Perlindungan bisnis dari risiko hukum dan potensi sengketa melalui strategi preventif yang terukur dan komprehensif.' },
  { id: 'penyusunan-kontrak', name: 'Penyusunan dan Audit Kontrak', description: 'Penyusunan dan audit kontrak secara profesional untuk memastikan kepentingan bisnis Anda terlindungi dengan baik.' },
  { id: 'mitigasi-risiko', name: 'Mitigasi Risiko', description: 'Mitigasi risiko hukum dan bisnis untuk menjaga kelangsungan dan pertumbuhan usaha Anda secara berkelanjutan.' },
  { id: 'negosiasi', name: 'Negosiasi', description: 'Negosiasi dalam penyelesaian kesepakatan atau konflik untuk mencapai solusi yang menguntungkan semua pihak.' },
  { id: 'pendampingan-hukum', name: 'Pendampingan Hukum', description: 'Pendampingan hukum untuk pelaku usaha dan profesional dalam setiap tahapan proses bisnis yang Anda jalani.' }
];

const ServiceItem: React.FC<{ service: typeof services[0]; index: number; onClick: () => void }> = ({ service, index, onClick }) => {
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
            if(ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`flex flex-row items-start gap-3 sm:gap-4 md:gap-6 bg-gradient-card rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{transitionDelay: `${index * 100}ms`}}
            onClick={onClick}
        >
            <div className="flex-1">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">0{index + 1}</div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-2 sm:mb-3">{service.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
            </div>
            <div className="flex-shrink-0 self-center sm:self-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:opacity-90 transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

const ServicesPage: React.FC<ServicesPageProps> = ({ onServiceClick }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-secondary text-white py-8 sm:py-12 md:py-16 mt-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-brand-accent font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wide">Layanan</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">Jelajahi Layanan Kami</h1>
            <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto px-2">
              Solusi konsultasi hukum bisnis yang profesional, praktis, dan berintegritas
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              service={service} 
              index={index}
              onClick={() => onServiceClick && onServiceClick(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
