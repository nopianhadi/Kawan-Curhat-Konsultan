import React, { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  imgSrc: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
  tags: string[];
}

const blogPostsData: BlogPost[] = [
  {
    id: '10-pertanyaan-kunci',
    category: 'Bisnis',
    title: '10 Pertanyaan Kunci Sebelum Menyewa Firma Hukum',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg',
    author: 'Jessica Miller',
    date: '15 November 2025',
    readTime: '8 menit',
    content: [
      'Memilih firma hukum yang tepat adalah keputusan penting yang dapat mempengaruhi hasil kasus Anda. Berikut adalah 10 pertanyaan kunci yang harus Anda tanyakan sebelum membuat keputusan.',
      '1. Apa spesialisasi firma hukum Anda? - Pastikan firma memiliki keahlian dalam bidang hukum yang relevan dengan kasus Anda.',
      '2. Berapa lama pengalaman Anda menangani kasus serupa? - Pengalaman adalah faktor penting dalam menentukan kemampuan firma.',
      '3. Siapa yang akan menangani kasus saya? - Ketahui apakah partner senior atau associate junior yang akan bertanggung jawab.',
      '4. Bagaimana struktur biaya Anda? - Pahami dengan jelas biaya per jam, biaya tetap, atau persentase kontingensi.',
      '5. Apa strategi Anda untuk kasus saya? - Firma yang baik harus dapat menjelaskan pendekatan mereka dengan jelas.',
      '6. Berapa lama estimasi waktu penyelesaian? - Dapatkan gambaran realistis tentang timeline kasus Anda.',
      '7. Bagaimana komunikasi akan dilakukan? - Pastikan ada jalur komunikasi yang jelas dan responsif.',
      '8. Apa track record Anda? - Tanyakan tentang tingkat keberhasilan dalam kasus serupa.',
      '9. Apakah ada konflik kepentingan? - Firma harus transparan tentang potensi konflik.',
      '10. Apa yang membedakan firma Anda dari kompetitor? - Pahami nilai unik yang ditawarkan firma tersebut.'
    ],
    tags: ['Firma Hukum', 'Konsultasi', 'Tips Hukum', 'Bisnis']
  },
  {
    id: 'melindungi-bisnis',
    category: 'Keuangan',
    title: 'Bagaimana Firma Hukum Dapat Membantu Melindungi Bisnis Anda',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ-1.jpg',
    author: 'David Rodriguez',
    date: '12 November 2025',
    readTime: '10 menit',
    content: [
      'Dalam dunia bisnis yang kompleks, perlindungan hukum adalah investasi penting. Firma hukum yang tepat dapat menjadi mitra strategis dalam melindungi aset dan kepentingan bisnis Anda.',
      'Perlindungan Kekayaan Intelektual - Firma hukum membantu mendaftarkan dan melindungi merek dagang, paten, dan hak cipta Anda.',
      'Penyusunan Kontrak - Kontrak yang solid adalah fondasi hubungan bisnis yang sehat. Pengacara memastikan kontrak Anda melindungi kepentingan Anda.',
      'Kepatuhan Regulasi - Navigasi peraturan yang kompleks memerlukan keahlian hukum untuk menghindari sanksi dan denda.',
      'Manajemen Risiko - Identifikasi dan mitigasi risiko hukum sebelum menjadi masalah besar.',
      'Penyelesaian Sengketa - Ketika konflik muncul, firma hukum dapat menyelesaikannya melalui negosiasi, mediasi, atau litigasi.',
      'Restrukturisasi Bisnis - Dukungan hukum dalam merger, akuisisi, atau perubahan struktur perusahaan.',
      'Perlindungan Data - Memastikan kepatuhan terhadap regulasi perlindungan data dan privasi.',
      'Kesimpulan - Investasi dalam layanan hukum preventif jauh lebih murah daripada menangani masalah hukum yang sudah terjadi.'
    ],
    tags: ['Bisnis', 'Perlindungan', 'Hukum Korporat', 'Manajemen Risiko']
  }
];

interface BlogDetailProps {
  postId?: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ postId = '10-pertanyaan-kunci' }) => {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPostsData.find(p => p.id === postId);
    setPost(foundPost || blogPostsData[0]);
  }, [postId]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gray-900 mt-16">
        <img
          src={post.imgSrc}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-3 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-8">
          <span className="inline-block px-2 sm:px-3 py-1 bg-brand-accent text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {post.category}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-white/90 text-xs sm:text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              {post.author}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {post.date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {post.readTime} baca
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-brand-text mb-3 sm:mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-brand-accent hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-brand-text mb-3 sm:mb-4">Bagikan Artikel</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                    Facebook
                  </button>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-xs sm:text-sm">
                    Twitter
                  </button>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Author Card */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Tentang Penulis</h3>
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-accent rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-brand-text">{post.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">Partner Senior</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                Ahli hukum dengan pengalaman lebih dari 15 tahun dalam memberikan solusi hukum terbaik.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 sm:mb-4">Artikel Terkait</h3>
              <div className="space-y-3 sm:space-y-4">
                {blogPostsData
                  .filter(p => p.id !== post.id)
                  .slice(0, 3)
                  .map((p) => (
                    <div key={p.id} className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <img src={p.imgSrc} alt={p.title} className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2" />
                      <p className="text-xs text-brand-accent font-semibold mb-1">{p.category}</p>
                      <p className="font-semibold text-brand-text text-xs sm:text-sm line-clamp-2">{p.title}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-accent text-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Butuh Bantuan Hukum?</h3>
              <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm">
                Konsultasikan masalah hukum Anda dengan tim ahli kami.
              </p>
              <a 
                href="mailto:info@kawancurhat.com"
                className="w-full bg-white text-brand-accent font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base text-center block"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
