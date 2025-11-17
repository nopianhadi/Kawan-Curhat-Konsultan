import React from 'react';

interface AboutPageProps {
  onClose?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a2332] text-white py-16 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-text/50 to-transparent"></div>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-6 left-6 flex items-center text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Kembali
            </button>
          )}
          <p className="text-brand-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider animate-fade-in">Tentang Kami</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in-up px-2">
            Solusi Hukum Bisnis yang Aman, Praktis, dan Berintegritas.
          </h1>
          <button 
            onClick={() => {
              if (onClose) onClose();
              setTimeout(() => {
                window.location.href = '/#contact';
              }, 100);
            }}
            className="bg-brand-accent hover:bg-brand-accent/90 hover:scale-105 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up text-sm sm:text-base"
          >
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* Main About Section */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-brand-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Tentang Kawan Curhat Konsultan</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
              Konsultan Hukum Bisnis Terpercaya
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Kawan Curhat Konsultan adalah lembaga profesional yang bergerak di bidang konsultasi hukum bisnis dan legal kontrak. Kami membantu pelaku usaha dan perusahaan dalam menjaga legalitas, keamanan bisnis, serta memastikan setiap langkah bisnis terlindungi dari risiko hukum.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Dengan pendekatan yang komunikatif dan solutif, kami berkomitmen menjadi mitra terpercaya dalam setiap keputusan bisnis Anda. Kami memahami bahwa setiap bisnis memiliki tantangan unik, oleh karena itu kami menyediakan solusi yang disesuaikan dengan kebutuhan spesifik Anda.
            </p>
            <button 
              onClick={() => {
                if (onClose) onClose();
                setTimeout(() => {
                  window.location.href = '/#contact';
                }, 100);
              }}
              className="bg-brand-accent hover:bg-brand-accent/90 hover:scale-105 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl mt-3 sm:mt-4 text-sm sm:text-base"
            >
              Hubungi Kami
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=600&fit=crop" 
                  alt="Business consultation" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=600&fit=crop" 
                  alt="Legal consultation" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Founder */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* Founder Card */}
            <div className="bg-brand-accent text-white rounded-3xl p-10 lg:col-span-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 ring-4 ring-white/30">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
                    alt="Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Kawan Curhat Konsultan</h3>
                  <p className="text-white/80 text-sm">Konsultan Hukum Bisnis</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-base">
                Keahlian kami mencakup konsultasi hukum bisnis, penyusunan dan audit kontrak, mitigasi risiko, negosiasi, dan pendampingan hukum. Tim kami terus mengikuti perkembangan regulasi bisnis terkini untuk memastikan klien kami mendapatkan nasihat yang paling relevan dan efektif.
              </p>
            </div>

            {/* Justice Image */}
            <div className="lg:col-span-1 overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=500&fit=crop" 
                alt="Lady Justice" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Stats */}
            <div className="lg:col-span-1 space-y-10">
              <div className="group hover:translate-x-2 transition-transform duration-300">
                <div className="text-6xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Tahun Pengalaman dalam memberikan konsultasi hukum bisnis dan legal kontrak untuk berbagai jenis usaha.
                </p>
              </div>
              <div className="group hover:translate-x-2 transition-transform duration-300">
                <div className="text-6xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Klien Terlayani dengan solusi hukum yang aman, praktis, dan berintegritas untuk kebutuhan bisnis mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-24">
          <div className="relative rounded-3xl overflow-hidden h-96 md:h-[450px] group shadow-2xl hover:shadow-3xl transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop" 
              alt="Our Mission" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-10 group-hover:from-black/95 transition-all duration-500">
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:translate-y-[-8px] transition-transform duration-500">Misi Kami</h3>
              <ul className="text-white/90 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  <span>Memberikan layanan konsultasi hukum yang profesional dan mudah dipahami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  <span>Mendampingi pelaku usaha dalam setiap aspek hukum bisnis dengan integritas tinggi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2">•</span>
                  <span>Membangun budaya kepatuhan hukum dalam setiap aktivitas bisnis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-96 md:h-[450px] group shadow-2xl hover:shadow-3xl transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
              alt="Our Vision" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-10 group-hover:from-black/95 transition-all duration-500">
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:translate-y-[-8px] transition-transform duration-500">Visi Kami</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Menjadi konsultan hukum bisnis terpercaya yang memberikan solusi aman, praktis, dan berintegritas bagi setiap klien.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-brand-accent text-sm font-semibold mb-4 uppercase tracking-wider">Tentang Kawan Curhat Konsultan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Dedicated to Justice, Driven by Integrity.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kawan Curhat Konsultan adalah lembaga profesional yang bergerak di bidang konsultasi hukum bisnis dan legal kontrak. Kami membantu pelaku usaha dan perusahaan dalam menjaga legalitas, keamanan bisnis, serta memastikan setiap langkah bisnis terlindungi dari risiko hukum.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dengan pendekatan yang komunikatif dan solutif, kami berkomitmen menjadi mitra terpercaya dalam setiap keputusan bisnis Anda.
            </p>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
          {/* Card 1 - Integritas */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] group shadow-xl hover:shadow-2xl transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop" 
              alt="Integritas" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5 group-hover:from-black/95 transition-all duration-500">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-500">Integritas</h3>
              <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                Menjunjung tinggi kejujuran dan tanggung jawab dalam setiap layanan konsultasi bisnis.
              </p>
            </div>
          </div>

          {/* Card 2 - Kerahasiaan */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] group shadow-xl hover:shadow-2xl transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop" 
              alt="Kerahasiaan" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5 group-hover:from-black/95 transition-all duration-500">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-500">Kerahasiaan</h3>
              <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                Menjamin keamanan dan privasi seluruh data serta informasi klien dengan standar tertinggi.
              </p>
            </div>
          </div>

          {/* Card 3 - Profesionalisme */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] group shadow-xl hover:shadow-2xl transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop" 
              alt="Profesionalisme" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5 group-hover:from-black/95 transition-all duration-500">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-500">Profesionalisme</h3>
              <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                Memberikan layanan konsultasi hukum yang profesional dan mudah dipahami.
              </p>
            </div>
          </div>

          {/* Card 4 - Solusi Praktis */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] group shadow-xl hover:shadow-2xl transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=800&fit=crop" 
              alt="Solusi Praktis" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5 group-hover:from-black/95 transition-all duration-500">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-500">Solusi Praktis</h3>
              <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                Memberikan solusi aman, praktis, dan berintegritas bagi setiap keputusan bisnis Anda.
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-br from-brand-text to-brand-text/90 text-white rounded-3xl p-12 md:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="group hover:scale-110 transition-transform duration-500">
              <div className="text-6xl md:text-7xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-white/90 text-lg">Tahun Pengalaman</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-500">
              <div className="text-6xl md:text-7xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-white/90 text-lg">Klien Terlayani</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-500">
              <div className="text-6xl md:text-7xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-white/90 text-lg">Kontrak Disusun</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-500">
              <div className="text-6xl md:text-7xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-white/90 text-lg">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
