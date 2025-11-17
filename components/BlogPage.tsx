import React, { useState } from 'react';

interface BlogPageProps {
  onClose?: () => void;
  onPostClick?: (postId: string) => void;
}

const blogPosts = [
  {
    id: '10-pertanyaan-kunci',
    category: 'Bisnis',
    title: '10 Pertanyaan Kunci Sebelum Menyewa Firma Hukum',
    excerpt: 'Panduan lengkap untuk memilih firma hukum yang tepat untuk kebutuhan bisnis Anda.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg',
    date: '15 November 2024',
    author: 'Jessica Miller',
    readTime: '5 menit'
  },
  {
    id: 'melindungi-bisnis-anda',
    category: 'Keuangan',
    title: 'Bagaimana Firma Hukum Dapat Membantu Melindungi Bisnis Anda',
    excerpt: 'Pelajari cara firma hukum dapat membantu melindungi aset dan kepentingan bisnis Anda.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ-1.jpg',
    date: '12 November 2024',
    author: 'Marcus Johnson',
    readTime: '7 menit'
  },
  {
    id: 'menyelesaikan-sengketa',
    category: 'Perpajakan',
    title: 'Peran Firma Hukum dalam Menyelesaikan Sengketa',
    excerpt: 'Memahami bagaimana pengacara profesional dapat membantu menyelesaikan sengketa hukum.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ-2.jpg',
    date: '10 November 2024',
    author: 'Emily Chen',
    readTime: '6 menit'
  },
  {
    id: 'hukum-keluarga-modern',
    category: 'Keluarga',
    title: 'Hukum Keluarga di Era Modern: Apa yang Perlu Anda Ketahui',
    excerpt: 'Panduan komprehensif tentang hukum keluarga dan bagaimana melindungi hak Anda.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg',
    date: '8 November 2024',
    author: 'David Rodriguez',
    readTime: '8 menit'
  },
  {
    id: 'investasi-properti',
    category: 'Properti',
    title: 'Aspek Hukum dalam Investasi Properti',
    excerpt: 'Hal-hal penting yang harus diperhatikan sebelum berinvestasi di properti.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ-1.jpg',
    date: '5 November 2024',
    author: 'Jessica Miller',
    readTime: '10 menit'
  },
  {
    id: 'hak-karyawan',
    category: 'Ketenagakerjaan',
    title: 'Memahami Hak-Hak Karyawan di Tempat Kerja',
    excerpt: 'Panduan lengkap tentang hak-hak karyawan dan cara melindunginya.',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ-2.jpg',
    date: '3 November 2024',
    author: 'Marcus Johnson',
    readTime: '6 menit'
  }
];

const BlogPage: React.FC<BlogPageProps> = ({ onClose, onPostClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-text text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {onClose && (
            <button
              onClick={onClose}
              className="mb-6 flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Kembali ke Beranda
            </button>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Kami</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Artikel, tips, dan wawasan hukum terkini untuk membantu Anda
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-accent text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onPostClick && onPostClick(post.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="overflow-hidden h-48">
                  <img 
                    src={post.imgSrc} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-brand-accent font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada artikel yang ditemukan sesuai kriteria Anda.</p>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-brand-accent text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Berlangganan Newsletter Kami</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Dapatkan artikel terbaru, tips hukum, dan update langsung ke email Anda
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-brand-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
