import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi Awal',
    description: 'Diskusi mendalam untuk memahami kebutuhan bisnis dan tantangan hukum yang Anda hadapi.',
    imgSrc: '/aset/t6khcfc7c4GsuUlYG7bfTPKye18.png'
  },
  {
    step: '02',
    title: 'Analisis & Strategi',
    description: 'Menganalisis risiko dan menyusun strategi legal yang praktis dan aplikatif untuk bisnis Anda.',
    imgSrc: '/aset/t6khcfc7c4GsuUlYG7bfTPKye18 (1).png'
  },
  {
    step: '03',
    title: 'Implementasi & Pendampingan',
    description: 'Melaksanakan solusi hukum dan memberikan pendampingan berkelanjutan untuk keamanan bisnis Anda.',
    imgSrc: '/aset/t6khcfc7c4GsuUlYG7bfTPKye18 (2).png'
  }
];

const ProcessCard: React.FC<{ step: string; title: string; description: string; imgSrc: string; index: number; }> = ({ step, title, description, imgSrc, index }) => {
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
            className={`relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms`}}
        >
            <img src={imgSrc} alt={title} className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-2 sm:p-3 md:p-4 lg:p-6 w-full">
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl shadow-md">
                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-brand-accent text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-full mb-2 sm:mb-3 md:mb-4 -mt-8 sm:-mt-10 md:-mt-12 border-2 sm:border-3 md:border-4 border-brand-light">{step}</span>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-text mb-0.5 sm:mb-1">{title}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600">{description}</p>
                </div>
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