'use client';

import { useState, useEffect } from 'react';
import { Loader, Save, AlertCircle } from 'lucide-react';

interface Settings {
  _id?: string;
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  metaDescription: string;
  metaKeywords: string[];
  googleAnalyticsId: string;
  smtpHost: string;
  smtpPort: number;
  smtpEmail: string;
  aboutUsTitle: string;
  aboutUsDescription: string;
  aboutUsImage: string;
  maintenanceMode: boolean;
  maintenanceMessage: string;
  currency: string;
  defaultLanguage: string;
}

export default function SettingsForm() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/settings', {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to fetch settings');

      const data = await response.json();
      setSettings(data.settings);
    } catch (error) {
      console.error('Error fetching settings:', error);
      setErrorMessage('Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (!settings) return;

    setSettings(prev => prev ? {
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    } : null);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save settings');
      }

      const data = await response.json();
      setSettings(data.settings);
      setSuccessMessage('Settings saved successfully!');

      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="animate-spin text-[#14B8A6]" size={40} />
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 rounded-lg">
        Failed to load settings
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Messages */}
      {successMessage && (
        <div className="bg-[#10B981]/20 border border-[#10B981] text-[#10B981] p-4 rounded-lg flex items-center gap-2">
          <AlertCircle size={20} />
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-[#EF4444]/20 border border-[#EF4444] text-[#EF4444] p-4 rounded-lg flex items-center gap-2">
          <AlertCircle size={20} />
          {errorMessage}
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#374151] overflow-x-auto">
        {[
          { id: 'general', label: 'General Settings' },
          { id: 'contact', label: 'Contact Information' },
          { id: 'social', label: 'Social Media' },
          { id: 'seo', label: 'SEO Settings' },
          { id: 'email', label: 'Email Configuration' },
          { id: 'about', label: 'About Us' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-semibold whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'text-[#14B8A6] border-b-2 border-[#14B8A6]'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#1a3a52] rounded-lg border border-[#374151] p-6">
        
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">General Settings</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={settings.tagline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-white font-semibold mb-2 text-sm">Description</label>
                <textarea
                  name="description"
                  value={settings.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Logo URL</label>
                <input
                  type="url"
                  name="logo"
                  value={settings.logo}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Currency</label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Default Language</label>
                <select
                  name="defaultLanguage"
                  value={settings.defaultLanguage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-[#374151] bg-[#0F2942] accent-[#14B8A6]"
                  />
                  <span className="text-white font-semibold">Maintenance Mode</span>
                </label>
              </div>

              {settings.maintenanceMode && (
                <div className="sm:col-span-2">
                  <label className="block text-white font-semibold mb-2 text-sm">Maintenance Message</label>
                  <textarea
                    name="maintenanceMessage"
                    value={settings.maintenanceMessage}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contact Information */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-white font-semibold mb-2 text-sm">Address</label>
                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">City</label>
                <input
                  type="text"
                  name="city"
                  value={settings.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Country</label>
                <input
                  type="text"
                  name="country"
                  value={settings.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={settings.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Social Media */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Social Media Links</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={settings.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={settings.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Twitter</label>
                <input
                  type="url"
                  name="twitter"
                  value={settings.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">YouTube</label>
                <input
                  type="url"
                  name="youtube"
                  value={settings.youtube}
                  onChange={handleChange}
                  placeholder="https://youtube.com/..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={settings.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        )}

        {/* SEO Settings */}
        {activeTab === 'seo' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">SEO Settings</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Google Analytics ID</label>
                <input
                  type="text"
                  name="googleAnalyticsId"
                  value={settings.googleAnalyticsId}
                  onChange={handleChange}
                  placeholder="GA-XXXXXXXXX-X"
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Email Configuration */}
        {activeTab === 'email' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Email Configuration</h3>

            <div className="bg-[#0F2942]/50 border border-[#374151] rounded-lg p-4 mb-4">
              <p className="text-[#94A3B8] text-sm">Configure SMTP settings for sending emails</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">SMTP Host</label>
                <input
                  type="text"
                  name="smtpHost"
                  value={settings.smtpHost}
                  onChange={handleChange}
                  placeholder="smtp.gmail.com"
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">SMTP Port</label>
                <input
                  type="number"
                  name="smtpPort"
                  value={settings.smtpPort}
                  onChange={handleChange}
                  placeholder="587"
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-white font-semibold mb-2 text-sm">SMTP Email</label>
                <input
                  type="email"
                  name="smtpEmail"
                  value={settings.smtpEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        )}

        {/* About Us */}
        {activeTab === 'about' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Title</label>
                <input
                  type="text"
                  name="aboutUsTitle"
                  value={settings.aboutUsTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Description</label>
                <textarea
                  name="aboutUsDescription"
                  value={settings.aboutUsDescription}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Image URL</label>
                <input
                  type="url"
                  name="aboutUsImage"
                  value={settings.aboutUsImage}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={isSaving}
        className="flex items-center justify-center gap-2 w-full bg-[#14B8A6] hover:bg-[#0d9488] disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        {isSaving ? (
          <>
            <Loader size={20} className="animate-spin" />
            Saving Settings...
          </>
        ) : (
          <>
            <Save size={20} />
            Save All Settings
          </>
        )}
      </button>
    </div>
  );
}