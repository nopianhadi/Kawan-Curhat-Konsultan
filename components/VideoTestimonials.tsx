import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    thumbnail: '/aset/57bTNKjv9qxZyS3y3Um9B5nCRFg.png',
    title: 'Kisah Sukses - Penyusunan Kontrak Bisnis',
    name: 'Budi Santoso',
    company: 'PT Maju Bersama',
    duration: '2:45'
  },
  {
    id: 2,
    thumbnail: '/aset/HCPDxtAQXS7vgrwsd6svNhxA.png',
    title: 'Mitigasi Risiko untuk Startup',
    name: 'Linda Permata',
    company: 'Startup Digital Indonesia',
    duration: '3:12'
  },
  {
    id: 3,
    thumbnail: '/aset/57bTNKjv9qxZyS3y3Um9B5nCRFg-1.png',
    title: 'Pendampingan Hukum Bisnis',
    name: 'Ahmad Wijaya',
    company: 'UD Sejahtera Abadi',
    duration: '2:30'
  }
];

const VideoTestimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
    <section className="bg-brand-dark py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Testimoni Video</p>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
            Dengar Dari Klien Kami
          </h2>
          <p className="text-gray-300 mt-1 sm:mt-2 md:mt-3 lg:mt-4 max-w-2xl mx-auto text-[10px] sm:text-xs md:text-sm lg:text-base px-2">
            Tonton kisah nyata dari klien yang telah kami bantu mencapai kesuksesan
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 lg:bottom-4 lg:right-4 bg-black/70 text-white px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 rounded text-[10px] sm:text-xs md:text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2">{video.title}</h3>
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">{video.name}</p>
                <p className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs">{video.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <p className="text-white">Placeholder Pemutar Video</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
