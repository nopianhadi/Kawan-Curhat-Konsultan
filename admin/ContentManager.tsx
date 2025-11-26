import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Search } from 'lucide-react';
import { loadSampleData, initializeSampleData, DATA_VERSION } from './sampleData';

interface ContentManagerProps {
  contentType: string;
}

interface ContentItem {
  id: string;
  title?: string;
  description?: string;
  content?: string;
  quote?: string;
  image?: string;
  author?: string;
  date?: string;
  category?: string;
  question?: string;
  answer?: string;
  name?: string;
  role?: string;
  rating?: number;
  videoUrl?: string;
  duration?: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({ contentType }) => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load data dari localStorage atau sample data
  useEffect(() => {
    // Initialize/update sample data if version changed
    initializeSampleData();
    
    const storageKey = `admin_${contentType}_data`;
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      setItems(JSON.parse(savedData));
    } else {
      // Load sample data jika belum ada data
      const sampleData = loadSampleData(contentType);
      setItems(sampleData);
      localStorage.setItem(storageKey, JSON.stringify(sampleData));
    }
  }, [contentType]);

  // Save data ke localStorage setiap kali items berubah
  useEffect(() => {
    if (items.length > 0) {
      const storageKey = `admin_${contentType}_data`;
      localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, contentType]);

  const getContentConfig = () => {
    switch (contentType) {
      case 'blog':
        return {
          title: 'Kelola Blog',
          fields: ['title', 'category', 'image'],
          emptyState: 'Belum ada artikel blog'
        };
      case 'services':
        return {
          title: 'Kelola Layanan',
          fields: ['title', 'description'],
          emptyState: 'Belum ada layanan'
        };
      case 'testimonials':
        return {
          title: 'Kelola Testimoni',
          fields: ['name', 'role', 'quote', 'rating', 'image'],
          emptyState: 'Belum ada testimoni'
        };
      case 'videos':
        return {
          title: 'Kelola Video Testimoni',
          fields: ['name', 'role', 'videoUrl', 'description', 'image', 'duration'],
          emptyState: 'Belum ada video testimoni'
        };
      case 'faq':
        return {
          title: 'Kelola FAQ',
          fields: ['question', 'answer', 'category'],
          emptyState: 'Belum ada FAQ'
        };
      case 'gallery':
        return {
          title: 'Kelola Galeri',
          fields: ['title', 'description', 'image'],
          emptyState: 'Belum ada foto galeri'
        };
      case 'settings':
        return {
          title: 'Pengaturan',
          fields: ['title', 'description'],
          emptyState: 'Belum ada pengaturan'
        };
      default:
        return {
          title: 'Kelola Konten',
          fields: ['title', 'description'],
          emptyState: 'Belum ada konten'
        };
    }
  };

  const config = getContentConfig();

  const handleAdd = () => {
    setEditingItem({
      id: Date.now().toString(),
      title: '',
      description: '',
      content: '',
    });
    setIsEditing(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingItem) {
      const existingIndex = items.findIndex(item => item.id === editingItem.id);
      if (existingIndex >= 0) {
        const newItems = [...items];
        newItems[existingIndex] = editingItem;
        setItems(newItems);
      } else {
        setItems([...items, editingItem]);
      }
    }
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus item ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingItem(null);
  };

  const updateField = (field: string, value: any) => {
    if (editingItem) {
      setEditingItem({ ...editingItem, [field]: value });
    }
  };

  const handleImageUpload = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField(field, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderField = (field: string) => {
    const value = editingItem?.[field as keyof ContentItem] || '';

    // Field dengan textarea
    if (field === 'description' || field === 'quote' || field === 'answer') {
      return (
        <div key={field} className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {field === 'description' ? 'Deskripsi' : 
             field === 'quote' ? 'Testimoni' :
             field === 'answer' ? 'Jawaban' : field}
          </label>
          <textarea
            value={value as string}
            onChange={(e) => updateField(field, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={field === 'description' ? 4 : 6}
            placeholder={`Masukkan ${field === 'description' ? 'deskripsi' : field === 'quote' ? 'testimoni' : 'jawaban'}`}
          />
        </div>
      );
    }

    // Field rating
    if (field === 'rating') {
      return (
        <div key={field} className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={value as number || 5}
            onChange={(e) => updateField(field, parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }

    // Field image dengan upload
    if (field === 'image') {
      return (
        <div key={field} className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gambar
          </label>
          
          {/* Preview Image */}
          {value && (
            <div className="mb-3 relative inline-block">
              <img 
                src={value as string} 
                alt="Preview" 
                className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
              />
              <button
                type="button"
                onClick={() => updateField(field, '')}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          )}

          {/* Upload Button */}
          <div className="flex gap-2">
            <label className="flex-1 cursor-pointer">
              <div className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg border-2 border-dashed border-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="text-sm font-medium">Upload Gambar</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(field, e)}
                className="hidden"
              />
            </label>
          </div>

          {/* URL Input Alternative */}
          <div className="mt-2">
            <input
              type="text"
              value={value as string}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Atau masukkan URL gambar"
            />
          </div>
        </div>
      );
    }

    // Field text biasa
    return (
      <div key={field} className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {field === 'title' ? 'Judul' : 
           field === 'category' ? 'Kategori' :
           field === 'name' ? 'Nama' :
           field === 'role' ? 'Perusahaan/Jabatan' :
           field === 'question' ? 'Pertanyaan' :
           field === 'videoUrl' ? 'URL Video (YouTube/Vimeo)' :
           field === 'duration' ? 'Durasi (contoh: 2:45)' : field}
        </label>
        <input
          type="text"
          value={value as string}
          onChange={(e) => updateField(field, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={`Masukkan ${field === 'title' ? 'judul' : 
                                   field === 'category' ? 'kategori' :
                                   field === 'name' ? 'nama' :
                                   field === 'role' ? 'perusahaan/jabatan' :
                                   field === 'videoUrl' ? 'URL video' :
                                   field === 'duration' ? 'durasi' : field}`}
        />
      </div>
    );
  };

  const filteredItems = items.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.title?.toLowerCase().includes(searchLower) ||
      item.name?.toLowerCase().includes(searchLower) ||
      item.question?.toLowerCase().includes(searchLower) ||
      item.description?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{config.title}</h2>
        {!isEditing && (
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Tambah Baru
          </button>
        )}
      </div>

      {/* Search */}
      {!isEditing && items.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      {/* Editor Form */}
      {isEditing && editingItem && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              {items.find(i => i.id === editingItem.id) ? 'Edit' : 'Tambah'} {config.title}
            </h3>
            <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {config.fields.map(field => renderField(field))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save size={20} />
              Simpan
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X size={20} />
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Content List */}
      {!isEditing && (
        <div className="bg-white rounded-lg shadow">
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-lg">{config.emptyState}</p>
              <p className="text-sm mt-2">Klik tombol "Tambah Baru" untuk memulai</p>
            </div>
          ) : contentType === 'gallery' ? (
            // Grid layout untuk galeri
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title || 'Gallery image'} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1">
                      {item.title || 'Tanpa Judul'}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List layout untuk konten lainnya
            <div className="divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    {/* Image thumbnail untuk item dengan gambar */}
                    {item.image && (
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title || item.name || 'Thumbnail'} 
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title || item.name || item.question}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {item.description || item.quote || item.answer}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        {item.category && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {item.category}
                          </span>
                        )}
                        {item.role && (
                          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {item.role}
                          </span>
                        )}
                        {item.rating && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < item.rating! ? 'text-yellow-400' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                        )}
                        {item.duration && (
                          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                            ⏱ {item.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentManager;
