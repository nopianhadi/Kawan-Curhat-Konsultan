import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Briefcase, MessageSquare, Settings, LogOut, Menu, X, BarChart3, TrendingUp, Video, HelpCircle, Image } from 'lucide-react';
import ContentManager from './ContentManager';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const stats = [
    { label: 'Artikel Blog', value: '3', change: '+100%', icon: FileText, color: 'bg-blue-500' },
    { label: 'Layanan', value: '6', change: '+20%', icon: Briefcase, color: 'bg-green-500' },
    { label: 'Testimoni', value: '6', change: '+50%', icon: MessageSquare, color: 'bg-purple-500' },
    { label: 'Video Testimoni', value: '3', change: '+200%', icon: Video, color: 'bg-orange-500' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'services', label: 'Layanan', icon: Briefcase },
    { id: 'testimonials', label: 'Testimoni', icon: MessageSquare },
    { id: 'videos', label: 'Video Testimoni', icon: Video },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'gallery', label: 'Galeri', icon: Image },
    { id: 'settings', label: 'Pengaturan', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-3">
            {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {sidebarOpen && (
            <a 
              href="/" 
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Kembali ke Website
            </a>
          )}
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded mb-2 transition-colors ${
                activeMenu === item.id ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 hover:bg-gray-800 rounded text-red-400 hover:text-red-300"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare size={20} />
            </button>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeMenu === 'dashboard' ? (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                    <TrendingUp size={16} />
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Artikel Blog Terbaru</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-semibold text-gray-800">Pentingnya Audit Kontrak Bisnis</p>
                    <p className="text-sm text-gray-500">Layanan Utama</p>
                  </div>
                  <button onClick={() => setActiveMenu('blog')} className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Kelola</button>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-semibold text-gray-800">5 Strategi Mitigasi Risiko Hukum</p>
                    <p className="text-sm text-gray-500">Layanan Utama</p>
                  </div>
                  <button onClick={() => setActiveMenu('blog')} className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Kelola</button>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-semibold text-gray-800">Tips Negosiasi Kesepakatan Bisnis</p>
                    <p className="text-sm text-gray-500">Layanan Utama</p>
                  </div>
                  <button onClick={() => setActiveMenu('blog')} className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Kelola</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Testimoni Terbaru</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    BS
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Budi Santoso</p>
                    <p className="text-sm text-gray-500">PT Maju Bersama - ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    SN
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Siti Nurhaliza</p>
                    <p className="text-sm text-gray-500">CV Berkah Jaya - ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    AW
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Ahmad Wijaya</p>
                    <p className="text-sm text-gray-500">UD Sejahtera Abadi - ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </>
          ) : (
            <ContentManager contentType={activeMenu} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
