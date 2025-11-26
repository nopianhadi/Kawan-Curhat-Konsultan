import React, { useState, useEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

const faqData = [
  {
    question: 'Apa saja layanan yang ditawarkan Kawan Curhat?',
    answer: 'Kami menyediakan layanan konsultasi hukum bisnis, perlindungan bisnis dari risiko hukum, penyusunan dan audit kontrak, mitigasi risiko, negosiasi & mediasi, serta pendampingan hukum untuk pelaku usaha dan profesional.'
  },
  {
    question: 'Bagaimana cara memulai konsultasi dengan Kawan Curhat?',
    answer: 'Anda dapat menghubungi kami melalui WhatsApp di 08567886251 atau mengisi formulir kontak di website. Kami akan menjadwalkan konsultasi awal untuk memahami kebutuhan bisnis Anda.'
  },
  {
    question: 'Apakah konsultasi pertama berbayar?',
    answer: 'Kami menawarkan konsultasi awal gratis untuk memahami kebutuhan Anda. Setelah itu, kami akan memberikan proposal layanan dengan biaya yang transparan sesuai dengan kompleksitas kebutuhan bisnis Anda.'
  },
  {
    question: 'Berapa lama proses penyusunan kontrak bisnis?',
    answer: 'Waktu penyusunan kontrak bervariasi tergantung kompleksitas, biasanya 3-7 hari kerja. Kami memastikan setiap kontrak disusun dengan teliti untuk melindungi kepentingan bisnis Anda secara maksimal.'
  },
  {
    question: 'Apakah data dan informasi bisnis saya dijamin kerahasiaannya?',
    answer: 'Tentu saja. Kerahasiaan adalah salah satu nilai utama kami. Semua data dan informasi klien dijamin keamanannya dengan standar kerahasiaan profesional tertinggi dan tidak akan dibagikan kepada pihak manapun.'
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-white rounded-md sm:rounded-lg md:rounded-xl mb-2 sm:mb-3 md:mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg ring-2 ring-brand-accent/20' : 'shadow-md hover:shadow-lg'}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-2 sm:p-3 md:p-4 lg:p-6 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded-md sm:rounded-lg md:rounded-xl"
        aria-expanded={isOpen}
      >
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-text pr-2 sm:pr-3 md:pr-4">{question}</h3>
        <span 
          aria-hidden="true" 
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4 lg:px-6 lg:pb-6 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-light py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
              <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">FAQ</p>
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                  Wawasan & Klarifikasi
              </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
