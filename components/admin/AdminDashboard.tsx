'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Menu, X, Home, FileText, BookOpen, Users, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard({ admin }: { admin: any }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoggingOut(false);
    }
  };

  // const menuItems = [
  //   { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
  //   { icon: BookOpen, label: 'Tours', href: '/admin/dashboard/tours' },
  //   { icon: Users, label: 'Bookings', href: '#' },
  //   { icon: FileText, label: 'Blog Posts', href: '#' },
  //   { icon: Settings, label: 'Settings', href: '#' },
  // ];

    const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: BookOpen, label: 'Tours', href: '/admin/dashboard/tours' },
    { icon: Users, label: 'Bookings', href: '/admin/dashboard/bookings' },
    { icon: FileText, label: 'Blog Posts', href: '/admin/dashboard/blogs' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#0F2942]">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[#1a3a52] border-r border-[#374151] transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-[#374151]">
          <h1 className={`font-bold text-[#14B8A6] ${isSidebarOpen ? 'text-xl' : 'text-lg'}`}>
            {isSidebarOpen ? 'TOURZ' : 'T'}
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-[#94A3B8] hover:text-white hover:bg-[#0F2942] rounded-lg transition"
            >
              <Icon size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-4 right-4">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center gap-4 px-4 py-3 bg-[#EF4444]/20 text-[#EF4444] hover:bg-[#EF4444]/30 rounded-lg transition disabled:opacity-50"
          >
            <LogOut size={20} className="flex-shrink-0" />
            {isSidebarOpen && <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Bar */}
        <div className="h-20 bg-[#1a3a52] border-b border-[#374151] flex items-center justify-between px-8 sticky top-0 z-30">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white hover:text-[#14B8A6] transition"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-semibold">{admin.name}</p>
              <p className="text-[#94A3B8] text-sm">{admin.role}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0d9488] rounded-full flex items-center justify-center text-white font-bold">
              {admin.name.charAt(0)}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#0d9488] rounded-lg p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Welcome back, {admin.name}! 👋</h2>
            <p className="text-white/90">
              You're logged in as <span className="font-semibold">{admin.email}</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Tours Card */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#14B8A6]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Total Tours</h3>
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-[#94A3B8] text-sm mt-1">Active tours</p>
            </div>

            {/* Bookings Card */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <div className="w-12 h-12 bg-[#FCD34D]/20 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#FCD34D]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Bookings</h3>
              <p className="text-3xl font-bold text-white">12</p>
              <p className="text-[#94A3B8] text-sm mt-1">Pending confirmation</p>
            </div>

            {/* Blog Posts Card */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} className="text-[#10B981]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Blog Posts</h3>
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-[#94A3B8] text-sm mt-1">Published posts</p>
            </div>

            {/* Last Login Card */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <div className="w-12 h-12 bg-[#EF4444]/20 rounded-lg flex items-center justify-center mb-4">
                <Home size={24} className="text-[#EF4444]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Last Login</h3>
              <p className="text-lg font-bold text-white">Today</p>
              <p className="text-[#94A3B8] text-sm mt-1">
                {new Date().toLocaleString()}
              </p>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-[#1a3a52] rounded-lg p-8 border-2 border-dashed border-[#374151]">
            <h3 className="text-white font-bold text-xl mb-2">🚀 More Features Coming Soon</h3>
            <p className="text-[#94A3B8] mb-4">
              The admin dashboard is being built step by step. More management features will be added soon.
            </p>
            <div className="space-y-2 text-[#94A3B8] text-sm">
              <p>✓ Tours Management</p>
              <p>✓ Bookings Management</p>
              <p>✓ Blog Posts Management</p>
              <p>✓ Analytics & Reports</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}