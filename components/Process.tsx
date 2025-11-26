import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi Awal',
    description: 'Diskusi mendalam untuk memahami kebutuhan bisnis dan tantangan hukum yang Anda hadapi.',
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor" opacity="0.2"/>
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H17M7 11H17M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    step: '02',
    title: 'Analisis & Strategi',
    description: 'Menganalisis risiko dan menyusun strategi legal yang praktis dan aplikatif untuk bisnis Anda.',
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L15 14L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="16" r="2" fill="currentColor"/>
        <circle cx="12" cy="11" r="2" fill="currentColor"/>
        <circle cx="15" cy="14" r="2" fill="currentColor"/>
        <circle cx="21" cy="8" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    step: '03',
    title: 'Implementasi & Pendampingan',
    description: 'Melaksanakan solusi hukum dan memberikan pendampingan berkelanjutan untuk keamanan bisnis Anda.',
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const ProcessCard: React.FC<{ step: string; title: string; description: string; icon: React.ReactNode; index: number; }> = ({ step, title, description, icon, index }) => {
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
            className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100 group transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms`}}
        >
            <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-brand-accent transition-transform duration-500 group-hover:scale-110">
                    {icon}
                </div>
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-brand-accent/10 text-brand-accent font-bold text-lg sm:text-xl rounded-full mb-4">
                    {step}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-text mb-3">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};


const Process: React.FC = () => {
  return (
    <section className="bg-brand-light py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Proses</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                Jelajahi Proses Kami
            </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
                <ProcessCard key={index} {...item} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;