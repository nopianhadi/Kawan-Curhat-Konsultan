import React, { useState } from 'react';

const testimonials = [
  {
    id: 'asg',
    quote: 'Konsultasi yang sangat membantu! Kawan Curhat memberikan solusi praktis untuk masalah kontrak bisnis kami. Sangat profesional dan mudah dipahami.',
    name: 'ASG',
    company: 'Klien Kawan Curhat',
    imgSrc: '/aset/Folder Baru/ASG.jpg',
    rating: 5
  },
  {
    id: 'kh-yusuf-mansur',
    quote: 'Tim yang sangat responsif dan komunikatif. Mereka membantu kami dalam penyusunan kontrak kerjasama dengan sangat detail dan aman.',
    name: 'KH Yusuf Mansur',
    company: 'Tokoh Nasional',
    imgSrc: '/aset/Folder Baru/KH Yusuf Mansur.jpg',
    rating: 5
  },
  {
    id: 'ahmad-wijaya',
    quote: 'Pendampingan hukum bisnis yang luar biasa! Kawan Curhat membantu kami menghindari risiko hukum yang tidak kami sadari sebelumnya.',
    name: 'Ahmad Wijaya',
    company: 'UD Sejahtera Abadi',
    imgSrc: '/aset/FQGwjWxFujEGoR5UIhNoCDGNls.png',
    rating: 5
  },
  {
    id: 'rina-kusuma',
    quote: 'Layanan audit kontrak yang sangat teliti. Mereka menemukan celah-celah yang bisa merugikan bisnis kami. Terima kasih atas perlindungannya!',
    name: 'Rina Kusuma',
    company: 'PT Karya Mandiri',
    imgSrc: '/aset/nYaGB97fhZHzf1oxKf5s0vj4.png',
    rating: 5
  },
  {
    id: 'dedi-prasetyo',
    quote: 'Konsultan yang benar-benar memahami kebutuhan bisnis. Solusi yang diberikan praktis dan langsung bisa diterapkan. Highly recommended!',
    name: 'Dedi Prasetyo',
    company: 'Toko Elektronik Jaya',
    imgSrc: '/aset/qejt4Jf3i6rJpIMKhN4RkQhG0.png',
    rating: 5
  },
  {
    id: 'linda-permata',
    quote: 'Pendekatan yang komunikatif dan solutif membuat kami merasa nyaman. Kawan Curhat benar-benar mitra bisnis yang terpercaya.',
    name: 'Linda Permata',
    company: 'Startup Digital Indonesia',
    imgSrc: '/aset/FQGwjWxFujEGoR5UIhNoCDGNls.png',
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
    return (
        <div 
            className="bg-gradient-to-br from-orange-50/50 to-white p-2 sm:p-3 md:p-4 lg:p-6 rounded-md sm:rounded-lg md:rounded-xl shadow-sm relative transition-all duration-300 hover:shadow-lg border border-orange-100/50 h-full"
        >
            {/* Quote Icon */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
            </div>
            
            <div className="relative flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 h-full">
                {/* Customer Photo - Left Side */}
                <div className="flex-shrink-0">
                    <div className="relative w-14 sm:w-18 md:w-24 lg:w-36" style={{ paddingBottom: '125%' }}>
                        <img 
                            src={testimonial.imgSrc} 
                            alt={testimonial.name} 
                            className="absolute inset-0 w-full h-full rounded-md sm:rounded-lg object-cover object-top" 
                        />
                    </div>
                </div>
                
                {/* Content - Right Side */}
                <div className="flex flex-col flex-1 pr-4 sm:pr-5 md:pr-6 lg:pr-8 min-w-0">
                    {/* Quote Text */}
                    <p className="text-gray-600 text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-tight sm:leading-relaxed mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 line-clamp-4 sm:line-clamp-5">
                        {testimonial.quote}
                    </p>
                    
                    {/* Customer Info */}
                    <div className="mt-auto">
                        <p className="font-semibold text-gray-900 text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-tight">{testimonial.name}</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-500 leading-tight">{testimonial.company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Testimonials: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const displayedTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const loadMore = () => {
    setVisibleCount((prev: number) => Math.min(prev + 4, testimonials.length));
  };

  return (
    <section className="bg-white py-6 sm:py-10 md:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-orange-500 font-medium text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1 md:mb-2 uppercase tracking-wide">Testimoni</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Klien yang Puas
            </h2>
        </div>

        {/* Grid 2x2 */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={loadMore}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;