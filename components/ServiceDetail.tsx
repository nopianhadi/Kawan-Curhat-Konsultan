import React, { useState, useEffect } from 'react';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  imgSrc: string;
  fullDescription: string[];
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

const servicesData: Service[] = [
  {
    id: 'konsultasi-hukum-bisnis',
    name: 'Konsultasi Hukum Bisnis',
    category: 'Layanan Utama',
    description: 'Konsultasi hukum bisnis yang komprehensif untuk membantu Anda mengambil keputusan bisnis yang tepat dan sesuai dengan regulasi yang berlaku.',
    imgSrc: '/aset/jiTLFEV4a4qaz2NNwdcRqyNjA.jpg',
    fullDescription: [
      'Layanan konsultasi hukum bisnis kami dirancang untuk memberikan panduan strategis dalam setiap aspek operasional bisnis Anda.',
      'Tim ahli kami memiliki pengalaman mendalam dalam berbagai sektor industri dan memahami kompleksitas regulasi bisnis di Indonesia.',
      'Kami berkomitmen untuk memberikan solusi hukum yang praktis, efisien, dan sesuai dengan tujuan bisnis Anda.'
    ],
    benefits: [
      'Analisis Hukum Bisnis yang mendalam',
      'Strategi Legal yang terukur',
      'Kepatuhan Regulasi yang terjamin',
      'Minimalisasi risiko hukum',
      'Dukungan pengambilan keputusan bisnis'
    ],
    process: [
      'Konsultasi awal untuk memahami kebutuhan bisnis Anda',
      'Analisis mendalam terhadap aspek hukum bisnis',
      'Penyusunan strategi legal yang komprehensif',
      'Implementasi dan monitoring berkelanjutan',
      'Evaluasi dan penyesuaian strategi'
    ],
    faqs: [
      {
        question: 'Kapan saya perlu konsultasi hukum bisnis?',
        answer: 'Anda memerlukan konsultasi hukum bisnis ketika memulai usaha baru, melakukan ekspansi, menghadapi perubahan regulasi, atau ketika ingin memastikan operasional bisnis sesuai dengan hukum yang berlaku.'
      },
      {
        question: 'Berapa biaya konsultasi hukum bisnis?',
        answer: 'Biaya bervariasi tergantung kompleksitas kebutuhan bisnis Anda. Kami menawarkan konsultasi awal untuk mengevaluasi kebutuhan dan memberikan estimasi biaya yang transparan.'
      }
    ]
  },
  {
    id: 'perlindungan-bisnis',
    name: 'Perlindungan Bisnis',
    category: 'Layanan Utama',
    description: 'Perlindungan bisnis dari risiko hukum dan potensi sengketa melalui strategi preventif yang terukur dan komprehensif.',
    imgSrc: '/aset/FmBH1mh1N2oC25JeIJBfAe2ZPhE.jpg',
    fullDescription: [
      'Layanan perlindungan bisnis kami fokus pada pencegahan dan mitigasi risiko hukum yang dapat mengancam kelangsungan usaha Anda.',
      'Kami menggunakan pendekatan proaktif untuk mengidentifikasi potensi masalah sebelum berkembang menjadi sengketa yang merugikan.',
      'Tim kami akan membantu Anda membangun sistem perlindungan yang kuat untuk aset dan operasional bisnis.'
    ],
    benefits: [
      'Identifikasi Risiko secara dini',
      'Pencegahan Sengketa yang efektif',
      'Perlindungan Aset bisnis',
      'Sistem keamanan hukum yang komprehensif',
      'Strategi preventif jangka panjang'
    ],
    process: [
      'Audit risiko hukum menyeluruh',
      'Identifikasi area rentan dalam bisnis',
      'Penyusunan strategi perlindungan',
      'Implementasi sistem keamanan hukum',
      'Monitoring dan evaluasi berkelanjutan'
    ],
    faqs: [
      {
        question: 'Apa saja yang dilindungi dalam layanan ini?',
        answer: 'Kami melindungi berbagai aspek bisnis termasuk aset perusahaan, kekayaan intelektual, kontrak bisnis, dan operasional dari risiko hukum yang dapat merugikan.'
      },
      {
        question: 'Bagaimana cara kerja perlindungan bisnis?',
        answer: 'Kami melakukan audit menyeluruh, mengidentifikasi risiko, dan membangun sistem perlindungan preventif yang disesuaikan dengan kebutuhan spesifik bisnis Anda.'
      }
    ]
  },
  {
    id: 'penyusunan-kontrak',
    name: 'Penyusunan dan Audit Kontrak',
    category: 'Layanan Utama',
    description: 'Penyusunan dan audit kontrak secara profesional untuk memastikan kepentingan bisnis Anda terlindungi dengan baik.',
    imgSrc: '/aset/rlVzXYOqX40nNf1WB0T02RCvmL4.jpg',
    fullDescription: [
      'Kontrak yang baik adalah fondasi dari setiap hubungan bisnis yang sukses. Kami menyediakan layanan penyusunan dan audit kontrak yang detail dan komprehensif.',
      'Tim kami memastikan setiap klausul dalam kontrak melindungi kepentingan Anda dan meminimalkan risiko di masa depan.',
      'Dengan pengalaman dalam berbagai jenis kontrak bisnis, kami siap membantu Anda dalam setiap tahap proses kontraktual.'
    ],
    benefits: [
      'Drafting Kontrak yang profesional',
      'Review Kontrak yang menyeluruh',
      'Audit Kontrak yang detail',
      'Perlindungan kepentingan maksimal',
      'Minimalisasi celah hukum'
    ],
    process: [
      'Konsultasi untuk memahami kebutuhan kontrak',
      'Penyusunan draft kontrak yang komprehensif',
      'Review dan revisi bersama klien',
      'Finalisasi dan pengesahan kontrak',
      'Dukungan implementasi dan monitoring'
    ],
    faqs: [
      {
        question: 'Jenis kontrak apa saja yang bisa disusun?',
        answer: 'Kami menyusun berbagai jenis kontrak termasuk kontrak kerjasama, perjanjian jual beli, kontrak kerja, NDA, dan kontrak bisnis lainnya sesuai kebutuhan Anda.'
      },
      {
        question: 'Berapa lama proses penyusunan kontrak?',
        answer: 'Durasi bervariasi tergantung kompleksitas kontrak, biasanya 3-7 hari kerja untuk kontrak standar dan lebih lama untuk kontrak yang kompleks.'
      }
    ]
  },
  {
    id: 'mitigasi-risiko',
    name: 'Mitigasi Risiko',
    category: 'Layanan Utama',
    description: 'Mitigasi risiko hukum dan bisnis untuk menjaga kelangsungan dan pertumbuhan usaha Anda secara berkelanjutan.',
    imgSrc: '/aset/vzTxyib8zsujRxdOR62McXyhxhg.jpg',
    fullDescription: [
      'Layanan mitigasi risiko kami membantu bisnis mengidentifikasi, mengevaluasi, dan mengelola risiko hukum yang dapat mempengaruhi operasional dan pertumbuhan perusahaan.',
      'Kami menggunakan metodologi yang terbukti untuk menganalisis risiko dan mengembangkan strategi mitigasi yang efektif.',
      'Dengan pendekatan proaktif, kami membantu Anda menghindari masalah hukum sebelum terjadi dan mempersiapkan respons yang tepat jika risiko terwujud.'
    ],
    benefits: [
      'Risk Assessment yang komprehensif',
      'Compliance Management yang terstruktur',
      'Preventive Measures yang efektif',
      'Sistem peringatan dini',
      'Strategi respons risiko'
    ],
    process: [
      'Identifikasi dan pemetaan risiko hukum',
      'Analisis dampak dan probabilitas risiko',
      'Penyusunan strategi mitigasi',
      'Implementasi kontrol dan prosedur',
      'Monitoring dan evaluasi berkelanjutan'
    ],
    faqs: [
      {
        question: 'Apa perbedaan mitigasi risiko dengan perlindungan bisnis?',
        answer: 'Mitigasi risiko fokus pada identifikasi dan pengelolaan risiko yang sudah ada atau potensial, sementara perlindungan bisnis lebih luas mencakup sistem keamanan hukum secara menyeluruh.'
      },
      {
        question: 'Seberapa sering perlu dilakukan review risiko?',
        answer: 'Kami merekomendasikan review risiko minimal setiap 6 bulan atau ketika ada perubahan signifikan dalam bisnis atau regulasi.'
      }
    ]
  },
  {
    id: 'negosiasi',
    name: 'Negosiasi',
    category: 'Layanan Utama',
    description: 'Negosiasi dalam penyelesaian kesepakatan atau konflik untuk mencapai solusi yang menguntungkan semua pihak.',
    imgSrc: '/aset/jiTLFEV4a4qaz2NNwdcRqyNjA.jpg',
    fullDescription: [
      'Negosiasi yang efektif adalah kunci untuk mencapai kesepakatan bisnis yang menguntungkan dan menyelesaikan konflik tanpa litigasi.',
      'Tim kami memiliki keahlian dalam berbagai teknik negosiasi dan mediasi untuk membantu Anda mencapai hasil terbaik.',
      'Kami berkomitmen untuk menemukan solusi win-win yang menjaga hubungan bisnis jangka panjang.'
    ],
    benefits: [
      'Negosiasi Kesepakatan yang strategis',
      'Penyelesaian Konflik yang efektif',
      'Mediasi Bisnis yang profesional',
      'Solusi win-win solution',
      'Penghematan biaya litigasi'
    ],
    process: [
      'Analisis posisi dan kepentingan semua pihak',
      'Persiapan strategi negosiasi',
      'Fasilitasi diskusi dan mediasi',
      'Pencapaian kesepakatan',
      'Dokumentasi dan implementasi hasil'
    ],
    faqs: [
      {
        question: 'Kapan sebaiknya menggunakan jasa negosiasi?',
        answer: 'Gunakan jasa negosiasi ketika menghadapi kesepakatan bisnis penting, konflik dengan mitra bisnis, atau sengketa yang ingin diselesaikan tanpa jalur pengadilan.'
      },
      {
        question: 'Berapa tingkat keberhasilan negosiasi?',
        answer: 'Tingkat keberhasilan sangat tinggi, lebih dari 80% kasus berhasil mencapai kesepakatan tanpa perlu litigasi, menghemat waktu dan biaya.'
      }
    ]
  },
  {
    id: 'pendampingan-hukum',
    name: 'Pendampingan Hukum',
    category: 'Layanan Utama',
    description: 'Pendampingan hukum untuk pelaku usaha dan profesional dalam setiap tahapan proses bisnis yang Anda jalani.',
    imgSrc: '/aset/FmBH1mh1N2oC25JeIJBfAe2ZPhE.jpg',
    fullDescription: [
      'Layanan pendampingan hukum kami memberikan dukungan berkelanjutan untuk memastikan setiap keputusan dan tindakan bisnis Anda sesuai dengan hukum yang berlaku.',
      'Kami bertindak sebagai mitra strategis yang siap memberikan nasihat hukum kapan pun Anda membutuhkannya.',
      'Dengan pendampingan yang konsisten, bisnis Anda akan lebih siap menghadapi tantangan hukum dan memanfaatkan peluang dengan percaya diri.'
    ],
    benefits: [
      'Legal Advisory yang berkelanjutan',
      'Pendampingan Pelaku Usaha yang personal',
      'Dokumentasi Legal yang lengkap',
      'Akses konsultasi kapan saja',
      'Dukungan dalam setiap tahap bisnis'
    ],
    process: [
      'Pemahaman mendalam tentang bisnis Anda',
      'Penyusunan rencana pendampingan',
      'Konsultasi dan advisory berkelanjutan',
      'Dukungan dalam transaksi dan keputusan',
      'Review dan update strategi legal'
    ],
    faqs: [
      {
        question: 'Apa yang termasuk dalam pendampingan hukum?',
        answer: 'Pendampingan mencakup konsultasi reguler, review dokumen, nasihat dalam transaksi bisnis, dukungan dalam meeting penting, dan bantuan dalam setiap aspek hukum bisnis.'
      },
      {
        question: 'Bagaimana sistem pendampingan bekerja?',
        answer: 'Kami menyediakan akses langsung ke tim legal kami melalui berbagai channel komunikasi, dengan respons cepat untuk setiap pertanyaan atau kebutuhan hukum Anda.'
      }
    ]
  }
];

interface ServiceDetailProps {
  serviceId?: string;
  onClose?: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId = 'hukum-pajak', onClose }) => {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === serviceId);
    setService(foundService || servicesData[0]);
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={service.imgSrc}
          alt={service.name}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-3 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          {onClose && (
            <button
              onClick={onClose}
              className="mb-3 sm:mb-4 flex items-center text-white/80 hover:text-white transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Kembali ke Layanan
            </button>
          )}
          <span className="inline-block px-2 sm:px-3 py-1 bg-brand-accent text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {service.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{service.name}</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 sm:mb-6">Tentang Layanan</h2>
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 sm:mb-6">Manfaat</h2>
              <ul className="space-y-2 sm:space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 sm:mb-6">Proses Kami</h2>
              <div className="space-y-3 sm:space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 sm:mb-6">Pertanyaan Umum</h2>
              <div className="space-y-4 sm:space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-text mb-2">{faq.question}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* CTA Card */}
            <div className="bg-brand-accent text-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Butuh Layanan Ini?</h3>
              <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm">
                Konsultasikan kebutuhan Anda dengan tim ahli kami.
              </p>
              <button 
                onClick={() => {
                  if (onClose) onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-white text-brand-accent font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 sm:mb-3 text-sm sm:text-base"
              >
                Jadwalkan Konsultasi
              </button>
              <button 
                onClick={() => {
                  if (onClose) onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-transparent border-2 border-white text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Hubungi Kami
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Informasi Kontak</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Telepon</p>
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">08567886251</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">info@kawancurhat.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Layanan Lainnya</h3>
              <div className="space-y-3 sm:space-y-4">
                {servicesData
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map((s) => (
                    <div key={s.id} className="cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded-lg transition-colors">
                      <p className="font-semibold text-brand-text text-xs sm:text-sm mb-1">{s.name}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{s.description}</p>
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

export default ServiceDetail;
