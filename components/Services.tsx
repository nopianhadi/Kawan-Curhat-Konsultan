import React, { useState, useEffect, useRef } from 'react';

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
            className={`flex flex-row items-start gap-3 sm:gap-4 md:gap-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{transitionDelay: `${index * 100}ms`}}
            onClick={onClick}
        >
            <div className="flex-1 min-w-0">
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-1">0{index + 1}</div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-text mb-2 sm:mb-3">{service.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
            <div className="flex-shrink-0 self-center sm:self-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:opacity-90 transition-all">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

interface ServicesProps {
  id?: string;
  onServiceClick?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ id, onServiceClick }) => {
  return (
    <section id={id} className="bg-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-16">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">Layanan</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                Jelajahi Layanan Kami
            </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              service={service} 
              index={index}
              onClick={() => onServiceClick && onServiceClick(service.id)}
            />
          ))}
        </div>

        <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <button className="inline-block bg-gradient-primary text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-lg shadow-md hover:shadow-xl hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent">
            Lihat Semua Layanan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
