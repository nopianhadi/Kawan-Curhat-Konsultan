import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Search } from 'lucide-react';
import { loadSampleData } from './sampleData';

interface ContentManagerProps {
  contentType: string;
}

interface ContentItem {
  id: string;
  title?: string;
  description?: string;
  content?: string;
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
          fields: ['title', 'description', 'content', 'author', 'category', 'image'],
          emptyState: 'Belum ada artikel blog'
        };
      case 'services':
        return {
          title: 'Kelola Layanan',
          fields: ['title', 'description', 'content', 'image'],
          emptyState: 'Belum ada layanan'
        };
      case 'testimonials':
        return {
          title: 'Kelola Testimoni',
          fields: ['name', 'role', 'content', 'rating', 'image'],
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

  const renderField = (field: string) => {
    const value = editingItem?.[field as keyof ContentItem] || '';

    switch (field) {
      case 'content':
        return (
          <div key={field} className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">
              {field === 'content' ? 'Konten' : field}
            </label>
            <textarea
              value={value as string}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={6}
              placeholder={`Masukkan ${field}`}
            />
          </div>
        );
      case 'rating':
        return (
          <div key={field} className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              value={value as number}
              onChange={(e) => updateField(field, parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );
      default:
        return (
          <div key={field} className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">
              {field === 'title' ? 'Judul' : 
               field === 'description' ? 'Deskripsi' :
               field === 'author' ? 'Penulis' :
               field === 'category' ? 'Kategori' :
               field === 'image' ? 'URL Gambar' :
               field === 'name' ? 'Nama' :
               field === 'role' ? 'Jabatan' :
               field === 'question' ? 'Pertanyaan' :
               field === 'answer' ? 'Jawaban' :
               field === 'videoUrl' ? 'URL Video' :
               field === 'duration' ? 'Durasi' : field}
            </label>
            <input
              type="text"
              value={value as string}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Masukkan ${field}`}
            />
          </div>
        );
    }
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
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title || item.name || item.question}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description || item.content || item.answer}
                      </p>
                      {item.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                      )}
                      {item.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < item.rating! ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
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
