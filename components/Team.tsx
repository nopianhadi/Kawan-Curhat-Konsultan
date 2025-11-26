import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, XIcon } from './Icons';

const teamMembers = [
  {
    id: 'andi-firmansyah',
    name: 'Andi Firmansyah, S.H., M.H.',
    role: 'Konsultan Hukum Bisnis Senior',
    imgSrc: '/aset/Gambar WhatsApp 2025-11-20 pukul 19.41.39_1671753d.jpg',
    photos: [
      '/aset/Gambar WhatsApp 2025-11-20 pukul 19.41.39_1671753d.jpg',
      '/aset/Gambar WhatsApp 2025-11-20 pukul 19.41.39_a67ea4d6.jpg',
      '/aset/Gambar WhatsApp 2025-11-20 pukul 19.41.39_dfe4335f.jpg'
    ],
    socials: { 
      linkedin: 'https://www.linkedin.com/in/andi-firmansyah', 
      x: 'https://twitter.com/kawancurhat',
      instagram: 'https://www.instagram.com/kawancurhat',
      whatsapp: 'https://wa.me/6285678862510',
      tiktok: 'https://www.tiktok.com/@kawancurhat'
    },
    bio: 'Konsultan hukum bisnis dengan pengalaman lebih dari 15 tahun dalam memberikan solusi hukum strategis untuk berbagai perusahaan.'
  }
];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0]; index: number }> = ({ member, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(member.imgSrc);

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
            className={`group text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105" style={{ aspectRatio: '3/4' }}>
                <img src={currentPhoto} alt={member.name} className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 sm:p-3 md:p-4">
                    <div className="flex space-x-2 sm:space-x-3">
                        <a 
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-brand-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </a>
                        <a 
                            href={member.socials.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-brand-accent transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <XIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </a>
                        <a 
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-brand-accent transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a 
                            href={member.socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-brand-accent transition-colors"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </a>
                        <a 
                            href={member.socials.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-brand-accent transition-colors"
                            aria-label="TikTok"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Photo Gallery - Small thumbnails */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-2">
                {member.photos.map((photo, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentPhoto(photo)}
                    className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${
                      currentPhoto === photo ? 'ring-2 ring-brand-accent ring-offset-2' : ''
                    }`}
                  >
                    <img 
                      src={photo} 
                      alt={`${member.name} - Foto ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>

            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-text mb-1">{member.name}</h3>
            <p className="text-brand-accent text-xs sm:text-sm md:text-base mb-3">{member.role}</p>
            
            {member.bio && (
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 mb-4">
                {member.bio}
              </p>
            )}

            {/* Certificates and Documents */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 px-2">
              <h4 className="text-xs sm:text-sm font-semibold text-brand-text mb-2 sm:mb-3">Sertifikat & Dokumen</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <a 
                  href="/aset/Seritifikat PKPA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-card border border-gray-200 rounded-lg hover:border-brand-accent hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-brand-accent">Sertifikat PKPA</span>
                </a>

                <a 
                  href="/aset/Sertifikat Ujian Advokat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-card border border-gray-200 rounded-lg hover:border-brand-accent hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-brand-accent">Sertifikat Ujian Advokat</span>
                </a>

                <a 
                  href="/aset/Profil Advokat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-card border border-gray-200 rounded-lg hover:border-brand-accent hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-brand-accent">Profil Advokat</span>
                </a>

                <a 
                  href="/aset/Gambar WhatsApp 2025-11-21 pukul 13.05.26_1c85e01b.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-card border border-gray-200 rounded-lg hover:border-brand-accent hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-brand-accent">Dokumen Lainnya</span>
                </a>
              </div>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Tim Kami</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                Temui Konsultan Ahli Kami
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-[10px] sm:text-xs md:text-sm lg:text-base px-2">
                Konsultan hukum bisnis berpengalaman siap memberikan solusi cerdas dan aman untuk setiap keputusan bisnis Anda.
            </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {teamMembers.map((member, index) => (
                <TeamMemberCard 
                    key={index} 
                    member={member} 
                    index={index}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
