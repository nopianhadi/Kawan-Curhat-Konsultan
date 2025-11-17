import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            if (start === end) return;

            const duration = 1500;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setDisplayValue(Math.ceil(start));
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-accent">{displayValue}+</span>;
};

const stats = [
  { value: 10, label: 'Tahun Pengalaman' },
  { value: 500, label: 'Klien Terlayani' },
  { value: 1000, label: 'Kontrak Disusun' }
];

const features = [
  {
    icon: '💼',
    title: 'Konsultan Profesional',
    description: 'Tim ahli dengan pengalaman konsultasi bisnis terbukti'
  },
  {
    icon: '🤝',
    title: 'Pendekatan Komunikatif',
    description: 'Solusi yang mudah dipahami dan aplikatif'
  },
  {
    icon: '🛡️',
    title: 'Perlindungan Bisnis',
    description: 'Melindungi bisnis dari risiko hukum'
  },
  {
    icon: '🔒',
    title: 'Kerahasiaan Terjamin',
    description: 'Privasi dan keamanan data klien prioritas utama'
  }
];

const WhyChooseUs: React.FC = () => {
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
    <section className="bg-gradient-to-b from-brand-light to-white py-6 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <p className="text-brand-accent font-semibold mb-1 sm:mb-2 text-[10px] sm:text-xs md:text-sm">Mengapa Memilih Kami</p>
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text mb-2 sm:mb-3 md:mb-4">
                    Keunggulan Konsultasi Bisnis Kami
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
                    Kami menawarkan layanan konsultasi hukum bisnis yang profesional, praktis, dan berintegritas untuk melindungi setiap keputusan bisnis Anda.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-10 md:mb-12 lg:mb-16">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className={`bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg text-center transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <AnimatedNumber value={stat.value} />
                        <span className="mt-1 sm:mt-2 md:mt-3 text-gray-600 block font-medium text-[10px] sm:text-xs md:text-sm lg:text-base">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
                        <h3 className="font-bold text-brand-text mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{feature.title}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                 <a 
                    href="#contact" 
                    className="inline-block bg-brand-accent text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
                    >
                    Hubungi Kami
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
