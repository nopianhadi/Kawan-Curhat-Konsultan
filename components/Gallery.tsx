import React, { useState, useEffect, useRef } from 'react';

const Gallery: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

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
    <section className="bg-gradient-to-br from-gray-50 to-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">Galeri</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text mb-2 sm:mb-4">
              Momen Bersama Klien
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Dokumentasi kegiatan konsultasi dan kolaborasi bersama klien-klien kami
            </p>
          </div>

          {/* Gallery Grid - Masonry Layout */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <img 
                src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.04.36_c2a78587.jpg" 
                alt="Galeri 1" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <img 
                src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.04.53_9bb8993b.jpg" 
                alt="Galeri 2" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Image 3 */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <img 
                src="/aset/0GfHSok4FpwF794IxxL1j5cJOc.jpg" 
                alt="Galeri 3" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Image 4 */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <img 
                src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.07.19_38d88533.jpg" 
                alt="Galeri 4" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Video 1 */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <video 
                controls
                className="w-full h-auto object-cover"
                poster="/aset/Folder Baru/ASG.jpg"
              >
                <source src="/aset/Folder Baru/Video WhatsApp 2025-11-24 pukul 12.22.14_5784c61c.mp4" type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Video
              </div>
            </div>

            {/* Image 5 - KH Yusuf Mansur */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
              <img 
                src="/aset/KH Yusuf Mansur.jpg" 
                alt="KH Yusuf Mansur" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                <p className="text-white font-semibold text-xs sm:text-sm">KH Yusuf Mansur</p>
              </div>
            </div>

            {/* Additional Images - Show when "showMore" is true */}
            {showMore && (
              <>
                {/* Image 6 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.05.26_1c85e01b.jpg" 
                    alt="Galeri 6" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Image 7 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.05.26_06a370f4.jpg" 
                    alt="Galeri 7" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Image 8 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.09.30_78b09449.jpg" 
                    alt="Galeri 8" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Image 9 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-21 pukul 13.09.30_b8e35de5.jpg" 
                    alt="Galeri 9" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Image 10 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-24 pukul 12.18.20_01e63665.jpg" 
                    alt="Galeri 10" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Image 11 */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/aset/Gambar WhatsApp 2025-11-24 pukul 12.22.04_acc3b090.jpg" 
                    alt="Galeri 11" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </>
            )}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="inline-block bg-brand-accent text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              {showMore ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
