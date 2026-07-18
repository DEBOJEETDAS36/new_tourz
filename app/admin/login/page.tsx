'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, Loader } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@tourz.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await response.json();
      
      // Redirect to admin dashboard
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2942] to-[#1a3a52] flex items-center justify-center px-4 py-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCD34D]/10 rounded-full blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-white mb-2">
              Tourz <span className="text-[#14B8A6]">Admin</span>
            </h1>
          </Link>
          <p className="text-[#94A3B8]">Login to your admin dashboard</p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1a3a52] rounded-lg border border-[#374151] p-8 backdrop-blur-sm">
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-[#EF4444]/20 border border-[#EF4444] rounded-lg p-4 text-[#EF4444] text-sm">
              <p className="font-semibold">❌ {error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-[#94A3B8]" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tourz.com"
                  className="w-full pl-12 pr-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]/20 transition"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-[#94A3B8]" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]/20 transition"
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-[#94A3B8] hover:text-white transition"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#374151] bg-[#0F2942] accent-[#14B8A6] cursor-pointer"
                  disabled={isLoading}
                />
                <span className="text-[#94A3B8] hover:text-white transition">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-[#14B8A6] hover:text-[#0d9488] transition font-semibold"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#14B8A6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#06b494] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login to Dashboard'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#374151]" />
            <span className="text-[#94A3B8] text-xs uppercase">Demo Credentials</span>
            <div className="flex-1 h-px bg-[#374151]" />
          </div>

          {/* Demo Credentials Info */}
          <div className="bg-[#0F2942] rounded-lg p-4 border border-[#374151] text-sm">
            <p className="text-[#94A3B8] mb-2">
              <span className="text-white font-semibold">Email:</span> admin@tourz.com
            </p>
            <p className="text-[#94A3B8]">
              <span className="text-white font-semibold">Password:</span> admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[#94A3B8] text-sm">
            Back to{' '}
            <Link href="/" className="text-[#14B8A6] hover:text-[#0d9488] font-semibold transition">
              Home
            </Link>
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-8 bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-lg p-4 text-center">
          <p className="text-[#94A3B8] text-xs">
            🔒 This is a secure admin login. Your credentials are encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}