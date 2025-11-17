import React, { useState, useEffect, useRef } from 'react';

const values = [
  {
    title: 'Integritas',
    description: 'Menjunjung tinggi kejujuran dan tanggung jawab dalam setiap layanan konsultasi bisnis.',
    imgSrc: '/aset/HA37E48AB0E8Pdno3Rgfn3NpA.jpg'
  },
  {
    title: 'Kerahasiaan',
    description: 'Menjamin keamanan dan privasi seluruh data serta informasi klien dengan standar tertinggi.',
    imgSrc: '/aset/0GfHSok4FpwF794IxxL1j5cJOc (1).jpg'
  },
  {
    title: 'Profesionalisme',
    description: 'Memberikan layanan konsultasi hukum yang profesional dan mudah dipahami.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg'
  },
  {
    title: 'Solusi Praktis',
    description: 'Memberikan solusi aman, praktis, dan berintegritas bagi setiap keputusan bisnis Anda.',
    imgSrc: '/aset/vzTxyib8zsujRxdOR62McXyhxhg.jpg'
  }
];

const AboutCard: React.FC<{ title: string; description: string; imgSrc: string; index: number }> = ({ title, description, imgSrc, index }) => {
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

    // Icon mapping untuk setiap card
    const getIcon = (title: string) => {
        switch(title) {
            case 'Integritas':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                );
            case 'Kerahasiaan':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                );
            case 'Profesionalisme':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                );
            case 'Solusi Praktis':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                );
            default:
                return null;
        }
    };
    
    return (
        <div 
            ref={ref}
            className={`relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms`}}
        >
            <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 w-full">
                <div className="absolute -top-4 sm:-top-5 md:-top-6 left-3 sm:left-4 md:left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-brand-accent rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-all duration-500">
                    {getIcon(title)}
                </div>
                <div className="relative bg-white/90 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md border border-white/20 group-hover:bg-white transition-all duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-text mb-1">{title}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};


interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="bg-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Tentang Kami</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
            Kawan Curhat Konsultan
            </h2>
            <p className="max-w-3xl mx-auto text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 mt-1 sm:mt-2 md:mt-3 lg:mt-4 px-2">
                Kawan Curhat Konsultan adalah lembaga profesional yang bergerak di bidang konsultasi hukum bisnis dan legal kontrak. Kami membantu pelaku usaha dan perusahaan dalam menjaga legalitas, keamanan bisnis, serta memastikan setiap langkah bisnis terlindungi dari risiko hukum. Dengan pendekatan yang komunikatif dan solutif, kami berkomitmen menjadi mitra terpercaya dalam setiap keputusan bisnis Anda.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
                <AboutCard key={index} {...value} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;