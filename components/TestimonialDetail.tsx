import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  imgSrc: string;
  rating: number;
  quote: string;
  fullStory: string[];
  caseType: string;
  result: string;
  date: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 'budi-santoso',
    name: 'Budi Santoso',
    position: 'Direktur Utama',
    company: 'PT Maju Bersama',
    imgSrc: '/aset/FQGwjWxFujEGoR5UIhNoCDGNls.png',
    rating: 5,
    quote: 'Konsultasi yang sangat membantu! Kawan Curhat Konsultan memberikan solusi praktis untuk masalah kontrak bisnis kami. Sangat profesional dan mudah dipahami.',
    fullStory: [
      'Ketika perusahaan kami menghadapi negosiasi kontrak bisnis yang kompleks dengan mitra internasional, kami membutuhkan konsultan yang memahami aspek legal dan bisnis secara menyeluruh.',
      'Tim Kawan Curhat Konsultan menunjukkan profesionalisme tinggi dalam menganalisis setiap klausul kontrak. Mereka tidak hanya menjelaskan risiko hukum, tetapi juga memberikan solusi praktis yang mudah diterapkan.',
      'Yang paling kami hargai adalah kemampuan mereka menjelaskan konsep hukum yang rumit dengan bahasa yang mudah dipahami oleh tim manajemen kami yang tidak memiliki latar belakang hukum.',
      'Berkat pendampingan Kawan Curhat Konsultan, kontrak bisnis kami berhasil disepakati dengan syarat yang menguntungkan dan melindungi kepentingan perusahaan.'
    ],
    caseType: 'Kontrak Bisnis Internasional',
    result: 'Kontrak berhasil disepakati dengan klausul yang melindungi kepentingan perusahaan dan meningkatkan nilai kerjasama 20%',
    date: '10 November 2025'
  },
  {
    id: 'siti-nurhaliza',
    name: 'Siti Nurhaliza',
    position: 'Direktur',
    company: 'CV Berkah Jaya',
    imgSrc: '/aset/nYaGB97fhZHzf1oxKf5s0vj4.png',
    rating: 5,
    quote: 'Tim yang sangat responsif dan komunikatif. Mereka membantu kami dalam penyusunan kontrak kerjasama dengan sangat detail dan aman.',
    fullStory: [
      'Sebagai perusahaan yang sedang berkembang, kami membutuhkan kontrak kerjasama yang solid dengan berbagai vendor dan mitra bisnis. Namun, kami tidak memiliki tim legal internal.',
      'Kawan Curhat Konsultan hadir sebagai solusi yang tepat. Mereka sangat responsif terhadap setiap pertanyaan kami dan selalu memberikan penjelasan yang detail.',
      'Tim mereka membantu kami menyusun berbagai jenis kontrak - dari kontrak vendor, kerjasama distribusi, hingga perjanjian kerahasiaan. Setiap kontrak disusun dengan sangat teliti dan mempertimbangkan kepentingan bisnis kami.',
      'Komunikasi yang baik dan pendekatan yang profesional membuat kami merasa nyaman dan percaya. Sekarang kami memiliki fondasi legal yang kuat untuk mengembangkan bisnis.'
    ],
    caseType: 'Penyusunan Kontrak Kerjasama',
    result: 'Berhasil menyusun 15+ kontrak bisnis yang aman dan melindungi kepentingan perusahaan',
    date: '25 Oktober 2025'
  },
  {
    id: 'ahmad-wijaya',
    name: 'Ahmad Wijaya',
    position: 'Pemilik',
    company: 'UD Sejahtera Abadi',
    imgSrc: '/aset/qejt4Jf3i6rJpIMKhN4RkQhG0.png',
    rating: 5,
    quote: 'Pendampingan hukum bisnis yang luar biasa! Kawan Curhat Konsultan membantu kami menghindari risiko hukum yang tidak kami sadari sebelumnya.',
    fullStory: [
      'Sebagai pengusaha UKM, saya sering mengabaikan aspek legal dalam menjalankan bisnis. Saya pikir itu hanya untuk perusahaan besar. Ternyata saya salah.',
      'Ketika menghadapi masalah dengan supplier yang wanprestasi, saya baru menyadari pentingnya kontrak yang baik. Kawan Curhat Konsultan tidak hanya membantu menyelesaikan masalah tersebut, tetapi juga membuka mata saya tentang berbagai risiko hukum yang selama ini tidak saya sadari.',
      'Mereka melakukan audit menyeluruh terhadap semua aspek legal bisnis saya - dari perizinan, kontrak, hingga perlindungan aset. Hasilnya mengejutkan, ada banyak celah yang bisa merugikan bisnis saya.',
      'Dengan pendampingan mereka, sekarang bisnis saya memiliki fondasi legal yang kuat. Saya bisa fokus mengembangkan usaha tanpa khawatir dengan risiko hukum yang tidak perlu.'
    ],
    caseType: 'Audit & Pendampingan Hukum Bisnis',
    result: 'Berhasil mengidentifikasi dan menutup 10+ celah hukum, menyelesaikan sengketa dengan supplier, dan memperkuat struktur legal bisnis',
    date: '5 Oktober 2025'
  },
  {
    id: 'rina-kusuma',
    name: 'Rina Kusuma',
    position: 'Direktur Operasional',
    company: 'PT Karya Mandiri',
    imgSrc: '/aset/FQGwjWxFujEGoR5UIhNoCDGNls.png',
    rating: 5,
    quote: 'Layanan audit kontrak yang sangat teliti. Mereka menemukan celah-celah yang bisa merugikan bisnis kami. Terima kasih atas perlindungannya!',
    fullStory: [
      'Perusahaan kami akan menandatangani kontrak proyek besar senilai miliaran rupiah. Sebelum menandatangani, kami meminta Kawan Curhat Konsultan untuk melakukan audit kontrak.',
      'Keputusan itu sangat tepat! Tim mereka menemukan beberapa klausul yang sangat merugikan dan berisiko tinggi bagi perusahaan kami. Ada klausul penalti yang tidak wajar, ketentuan force majeure yang tidak seimbang, dan beberapa pasal yang ambigu.',
      'Mereka tidak hanya mengidentifikasi masalah, tetapi juga memberikan rekomendasi revisi yang konkret dan membantu kami dalam negosiasi ulang dengan klien.',
      'Berkat ketelitian mereka, kami berhasil merevisi kontrak dengan syarat yang jauh lebih adil dan melindungi kepentingan perusahaan. Mereka benar-benar menyelamatkan kami dari potensi kerugian besar.'
    ],
    caseType: 'Audit Kontrak Proyek',
    result: 'Mengidentifikasi 8 klausul berisiko tinggi, berhasil negosiasi ulang kontrak dengan syarat yang lebih menguntungkan, menghindari potensi kerugian hingga 30%',
    date: '15 September 2025'
  },
  {
    id: 'dedi-prasetyo',
    name: 'Dedi Prasetyo',
    position: 'Pemilik',
    company: 'Toko Elektronik Jaya',
    imgSrc: '/aset/nYaGB97fhZHzf1oxKf5s0vj4.png',
    rating: 5,
    quote: 'Konsultan yang benar-benar memahami kebutuhan bisnis. Solusi yang diberikan praktis dan langsung bisa diterapkan. Highly recommended!',
    fullStory: [
      'Sebagai pemilik toko elektronik, saya menghadapi berbagai tantangan legal - dari masalah garansi produk, sengketa dengan pelanggan, hingga kontrak dengan distributor.',
      'Kawan Curhat Konsultan memberikan solusi yang sangat praktis dan aplikatif. Mereka tidak hanya memberikan nasihat teoritis, tetapi solusi yang bisa langsung saya terapkan di lapangan.',
      'Mereka membantu saya menyusun SOP penanganan komplain pelanggan yang sesuai dengan UU Perlindungan Konsumen, template kontrak dengan supplier yang melindungi kepentingan saya, dan sistem dokumentasi yang rapi.',
      'Yang paling saya suka adalah pendekatan mereka yang sangat memahami realita bisnis retail. Mereka tahu bahwa solusi harus praktis, efisien, dan tidak menghambat operasional bisnis sehari-hari.'
    ],
    caseType: 'Konsultasi Hukum Bisnis Retail',
    result: 'Berhasil menyusun sistem legal yang praktis, mengurangi sengketa pelanggan 60%, dan meningkatkan efisiensi operasional',
    date: '20 Agustus 2025'
  },
  {
    id: 'linda-permata',
    name: 'Linda Permata',
    position: 'Co-Founder & CEO',
    company: 'Startup Digital Indonesia',
    imgSrc: '/aset/qejt4Jf3i6rJpIMKhN4RkQhG0.png',
    rating: 5,
    quote: 'Pendekatan yang komunikatif dan solutif membuat kami merasa nyaman. Kawan Curhat Konsultan benar-benar mitra bisnis yang terpercaya.',
    fullStory: [
      'Sebagai startup teknologi, kami menghadapi tantangan legal yang unik - dari perlindungan IP, perjanjian dengan investor, kontrak dengan developer, hingga compliance data privacy.',
      'Kawan Curhat Konsultan menunjukkan pemahaman yang mendalam tentang ekosistem startup. Mereka tidak hanya memberikan solusi legal, tetapi juga memahami dinamika bisnis startup yang bergerak cepat.',
      'Tim mereka membantu kami dalam berbagai tahap pertumbuhan - dari pendirian PT, penyusunan shareholder agreement, negosiasi dengan investor, hingga penyusunan term sheet untuk funding round.',
      'Yang paling kami hargai adalah pendekatan mereka yang komunikatif dan fleksibel. Mereka memahami bahwa startup memiliki keterbatasan budget dan timeline yang ketat, sehingga mereka selalu memberikan solusi yang efisien dan tepat sasaran. Mereka benar-benar mitra yang terpercaya dalam perjalanan bisnis kami.'
    ],
    caseType: 'Legal Advisory untuk Startup',
    result: 'Berhasil mendampingi dari pendirian hingga closing Series A funding, melindungi IP perusahaan, dan membangun struktur legal yang solid untuk pertumbuhan',
    date: '1 November 2025'
  }
];

interface TestimonialDetailProps {
  testimonialId?: string;
  onClose?: () => void;
}

const TestimonialDetail: React.FC<TestimonialDetailProps> = ({ testimonialId = 'budi-santoso', onClose }) => {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    const found = testimonialsData.find(t => t.id === testimonialId);
    setTestimonial(found || testimonialsData[0]);
  }, [testimonialId]);

  if (!testimonial) return null;

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
              Kembali ke Testimoni
            </button>
          )}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">{testimonial.name}</h1>
              <p className="text-base sm:text-lg md:text-xl text-brand-accent mb-2">{testimonial.position}, {testimonial.company}</p>
              <div className="flex gap-1 justify-center md:justify-start mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-xs sm:text-sm">{testimonial.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Quote */}
            <div className="bg-brand-accent text-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/30 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">{testimonial.quote}</p>
            </div>

            {/* Full Story */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 sm:mb-6">Cerita Lengkap</h2>
              <div className="space-y-3 sm:space-y-4">
                {testimonial.fullStory.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3 sm:mb-4">Hasil yang Dicapai</h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{testimonial.result}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Case Info */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Informasi Kasus</h3>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Jenis Kasus</p>
                  <p className="text-sm sm:text-base font-semibold text-brand-text">{testimonial.caseType}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Perusahaan</p>
                  <p className="text-sm sm:text-base font-semibold text-brand-text">{testimonial.company}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Tanggal</p>
                  <p className="text-sm sm:text-base font-semibold text-brand-text">{testimonial.date}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-accent text-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Butuh Bantuan Serupa?</h3>
              <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm">
                Dapatkan hasil yang sama memuaskan untuk kasus Anda.
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
                Konsultasi Sekarang
              </button>
            </div>

            {/* Other Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Testimoni Lainnya</h3>
              <div className="space-y-3 sm:space-y-4">
                {testimonialsData
                  .filter(t => t.id !== testimonial.id)
                  .map((t) => (
                    <div key={t.id} className="cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded-lg transition-colors">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <img src={t.imgSrc} alt={t.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-top" />
                        <div>
                          <p className="font-semibold text-brand-text text-xs sm:text-sm">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.company}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">{t.quote}</p>
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

export default TestimonialDetail;
