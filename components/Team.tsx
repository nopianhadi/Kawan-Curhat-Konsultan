import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, XIcon } from './Icons';

const teamMembers = [
  {
    id: 'andi-firmansyah',
    name: 'Andi Firmansyah, S.H., M.H.',
    role: 'Konsultan Hukum Bisnis Senior',
    imgSrc: '/aset/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg.png',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'dewi-lestari',
    name: 'Dewi Lestari, S.H.',
    role: 'Spesialis Kontrak & Legal Drafting',
    imgSrc: '/aset/TqS3UseOtZCu5QAnynTXnZIP60.png',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'rudi-hartono',
    name: 'Rudi Hartono, S.H., M.Kn.',
    role: 'Ahli Mitigasi Risiko Bisnis',
    imgSrc: '/aset/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg-1.png',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'maya-sari',
    name: 'Maya Sari, S.H.',
    role: 'Konsultan Kepatuhan & Compliance',
    imgSrc: '/aset/TqS3UseOtZCu5QAnynTXnZIP60-1.png',
    socials: { linkedin: '#', x: '#' }
  }
];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0]; index: number; onClick: () => void }> = ({ member, index, onClick }) => {
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
            className={`group text-center transition-all duration-500 ease-out cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onClick={onClick}
        >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <img src={member.imgSrc} alt={member.name} className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 sm:p-3 md:p-4">
                    <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                        <a 
                            href={member.socials.linkedin} 
                            className="text-white hover:text-brand-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </a>
                        <a 
                            href={member.socials.x} 
                            className="text-white hover:text-brand-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <XIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-text">{member.name}</h3>
            <p className="text-brand-accent text-xs sm:text-sm md:text-base">{member.role}</p>
        </div>
    );
};

interface TeamProps {
  onMemberClick?: (memberId: string) => void;
}

const Team: React.FC<TeamProps> = ({ onMemberClick }) => {
  const handleMemberClick = (memberId: string) => {
    if (onMemberClick) {
      onMemberClick(memberId);
    }
  };

  return (
    <section className="bg-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Tim Kami</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                Temui Konsultan Ahli Kami
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-[10px] sm:text-xs md:text-sm lg:text-base px-2">
                Tim konsultan hukum bisnis kami yang berpengalaman siap memberikan solusi cerdas dan aman untuk setiap keputusan bisnis Anda.
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
                <TeamMemberCard 
                    key={index} 
                    member={member} 
                    index={index}
                    onClick={() => handleMemberClick(member.id)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
