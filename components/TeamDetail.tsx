import React, { useState, useEffect } from 'react';
import { LinkedInIcon, XIcon } from './Icons';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imgSrc: string;
  bio: string;
  education: string[];
  expertise: string[];
  experience: string;
  email: string;
  phone: string;
  socials: { linkedin: string; x: string };
}

const teamMembersData: TeamMember[] = [
  {
    id: 'andi-firmansyah',
    name: 'Andi Firmansyah, S.H., M.H.',
    role: 'Konsultan Hukum Bisnis Senior',
    imgSrc: '/aset/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg.png',
    bio: 'Andi Firmansyah adalah Konsultan Hukum Bisnis Senior dengan pengalaman lebih dari 15 tahun dalam konsultasi hukum bisnis dan strategi legal. Beliau telah membantu ratusan perusahaan dalam penyusunan kontrak, perizinan usaha, dan kepatuhan regulasi.',
    education: [
      'S.H., Universitas Indonesia',
      'M.H., Universitas Gadjah Mada',
      'Sertifikasi Konsultan Hukum Bisnis'
    ],
    expertise: [
      'Strategi Legal Bisnis',
      'Perizinan Usaha',
      'Kepatuhan Hukum',
      'Konsultasi Rutin',
      'Analisis Hukum Bisnis'
    ],
    experience: '15+ tahun',
    email: 'andi.firmansyah@kawancurhat.com',
    phone: '08567886251',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'dewi-lestari',
    name: 'Dewi Lestari, S.H.',
    role: 'Spesialis Kontrak & Legal Drafting',
    imgSrc: '/aset/TqS3UseOtZCu5QAnynTXnZIP60.png',
    bio: 'Dewi Lestari adalah spesialis kontrak dan legal drafting dengan keahlian dalam penyusunan dan review kontrak bisnis. Beliau membantu klien memastikan setiap kontrak melindungi kepentingan bisnis mereka secara maksimal.',
    education: [
      'S.H., Universitas Gadjah Mada',
      'Sertifikasi Legal Drafting',
      'Pelatihan Audit Kontrak Internasional'
    ],
    expertise: [
      'Drafting Kontrak',
      'Review Kontrak',
      'Audit Legal',
      'Perjanjian Kerjasama',
      'Legal Due Diligence'
    ],
    experience: '12+ tahun',
    email: 'dewi.lestari@kawancurhat.com',
    phone: '08567886251',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'rudi-hartono',
    name: 'Rudi Hartono, S.H., M.Kn.',
    role: 'Ahli Mitigasi Risiko Bisnis',
    imgSrc: '/aset/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg (1).png',
    bio: 'Rudi Hartono adalah ahli mitigasi risiko bisnis dengan keahlian dalam mengidentifikasi dan mengelola risiko hukum dan bisnis. Beliau membantu perusahaan menjaga kelangsungan dan pertumbuhan usaha secara berkelanjutan.',
    education: [
      'S.H., Universitas Padjadjaran',
      'M.Kn., Universitas Indonesia',
      'Sertifikasi Risk Management'
    ],
    expertise: [
      'Risk Assessment',
      'Compliance Management',
      'Preventive Measures',
      'Business Continuity',
      'Crisis Management'
    ],
    experience: '10+ tahun',
    email: 'rudi.hartono@kawancurhat.com',
    phone: '08567886251',
    socials: { linkedin: '#', x: '#' }
  },
  {
    id: 'maya-sari',
    name: 'Maya Sari, S.H.',
    role: 'Konsultan Kepatuhan & Compliance',
    imgSrc: '/aset/TqS3UseOtZCu5QAnynTXnZIP60 (1).png',
    bio: 'Maya Sari adalah konsultan kepatuhan dan compliance dengan keahlian dalam memastikan bisnis mematuhi regulasi yang berlaku. Beliau membantu perusahaan menghindari sanksi dan menjaga reputasi bisnis.',
    education: [
      'S.H., Universitas Airlangga',
      'Sertifikasi Compliance Officer',
      'Pelatihan Corporate Governance'
    ],
    expertise: [
      'Kepatuhan Hukum',
      'Audit Legal',
      'Corporate Governance',
      'Regulatory Compliance',
      'Internal Control'
    ],
    experience: '13+ tahun',
    email: 'maya.sari@kawancurhat.com',
    phone: '08567886251',
    socials: { linkedin: '#', x: '#' }
  }
];

interface TeamDetailProps {
  memberId?: string;
  onClose?: () => void;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ memberId = 'jessica-miller', onClose }) => {
  const [member, setMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const foundMember = teamMembersData.find(m => m.id === memberId);
    setMember(foundMember || teamMembersData[0]);
  }, [memberId]);

  if (!member) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-text text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          {onClose && (
            <button
              onClick={onClose}
              className="mb-4 sm:mb-6 flex items-center text-white/80 hover:text-white transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Kembali ke Tim
            </button>
          )}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-base sm:text-lg md:text-xl text-brand-accent mb-3 sm:mb-4">{member.role}</p>
              <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-4">{member.experience} Pengalaman</p>
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                <a href={member.socials.linkedin} className="text-white hover:text-brand-accent transition-colors">
                  <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href={member.socials.x} className="text-white hover:text-brand-accent transition-colors">
                  <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Bio */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3 sm:mb-4">Tentang</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.bio}</p>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3 sm:mb-4">Keahlian</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-accent/10 text-brand-accent rounded-full font-medium text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3 sm:mb-4">Pendidikan</h2>
              <ul className="space-y-2 sm:space-y-3">
                {member.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Hubungi</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href={`mailto:${member.email}`} className="text-xs sm:text-sm text-gray-600 hover:text-brand-accent transition-colors break-all">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href={`tel:${member.phone}`} className="text-xs sm:text-sm text-gray-600 hover:text-brand-accent transition-colors">
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-accent text-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Butuh Konsultasi?</h3>
              <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm">
                Jadwalkan konsultasi dengan {member.name.split(' ')[0]} untuk mendiskusikan kasus Anda.
              </p>
              <button 
                onClick={() => {
                  if (onClose) onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-white text-brand-accent font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Jadwalkan Konsultasi
              </button>
            </div>

            {/* Related Team Members */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Tim Lainnya</h3>
              <div className="space-y-3 sm:space-y-4">
                {teamMembersData
                  .filter(m => m.id !== member.id)
                  .slice(0, 3)
                  .map((m) => (
                    <div 
                      key={m.id} 
                      className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      onClick={() => window.location.hash = `team/${m.id}`}
                    >
                      <img src={m.imgSrc} alt={m.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top" />
                      <div>
                        <p className="font-semibold text-brand-text text-xs sm:text-sm">{m.name}</p>
                        <p className="text-xs text-gray-500">{m.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
