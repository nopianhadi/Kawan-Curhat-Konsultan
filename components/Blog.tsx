import React, { useState, useEffect, useRef } from 'react';

const blogPosts = [
  {
    id: 'pentingnya-audit-kontrak',
    category: 'Layanan Utama',
    title: 'Pentingnya Audit Kontrak Bisnis untuk Melindungi Perusahaan Anda',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg'
  },
  {
    id: 'mitigasi-risiko-hukum',
    category: 'Layanan Utama',
    title: '5 Strategi Mitigasi Risiko Hukum yang Wajib Diketahui Pengusaha',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ (1).jpg'
  },
  {
    id: 'tips-negosiasi-kontrak',
    category: 'Layanan Utama',
    title: 'Tips Negosiasi dalam Penyelesaian Kesepakatan Bisnis',
    imgSrc: '/aset/zi9l7tvMWofjPzhdHi0yrHjmkHQ (2).jpg'
  }
];

const BlogCard: React.FC<{ post: typeof blogPosts[0], index: number, onClick: () => void }> = ({ post, index, onClick }) => {
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

    return(
        <div 
            ref={ref}
            className={`group cursor-pointer bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms`}}
            onClick={onClick}
        >
            <div className="overflow-hidden">
                <img src={post.imgSrc} alt={post.title} className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                <p className="text-brand-accent font-medium mb-0.5 sm:mb-1 text-[10px] sm:text-xs md:text-sm">{post.category}</p>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors duration-300">
                    {post.title}
                </h3>
            </div>
        </div>
    );
}

interface BlogProps {
  onPostClick?: (postId: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
  return (
    <section className="bg-white py-6 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-12">
            <p className="text-brand-accent font-semibold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">Blog</p>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-text">
                Baca Dari Blog Kami
            </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index} 
              post={post} 
              index={index}
              onClick={() => onPostClick && onPostClick(post.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-4 sm:mt-6 md:mt-10 lg:mt-16">
          <a href="#" className="inline-block bg-brand-accent text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            Lihat Semua Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;