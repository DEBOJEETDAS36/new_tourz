'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Leisure', 
      href: '/leisure',
      subLinks: [
        { name: 'Beach Tours', href: '/leisure/beach' },
        { name: 'Mountain Tours', href: '/leisure/mountain' },
        { name: 'Adventure Tours', href: '/leisure/adventure' },
      ]
    },
    { 
      name: 'MICE', 
      href: '/mice',
      subLinks: [
        { name: 'Corporate Events', href: '/mice/corporate' },
        { name: 'Conferences', href: '/mice/conferences' },
        { name: 'Team Building', href: '/mice/team-building' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0F2942] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0d9488] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-white">Tourz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {'subLinks' in link ? (
                  /* Dropdown Menu Item (Kept as a button for hover behavior) */
                  <button className="px-3 py-2 text-[#94A3B8] hover:text-[#14B8A6] transition font-medium flex items-center space-x-1">
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  /* Standard Nav Link (Now correctly links using Next.js Link) */
                  <Link 
                    href={link.href} 
                    className="px-3 py-2 text-[#94A3B8] hover:text-[#14B8A6] transition font-medium block"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {'subLinks' in link && (
                  <div className="absolute left-0 mt-0 w-48 bg-[#1a3a52] shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-3 text-[#94A3B8] hover:bg-[#0F2942] hover:text-[#14B8A6] text-sm first:rounded-t-lg last:rounded-b-lg transition"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-[#1a3a52] rounded-lg transition">
              <Search size={20} className="text-[#94A3B8]" />
            </button>
            <button className="p-2 hover:bg-[#1a3a52] rounded-lg transition">
              <User size={20} className="text-[#94A3B8]" />
            </button>
            <Link 
              href="/contact" 
              className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold px-4 py-2 rounded-lg transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-[#1a3a52] rounded-lg"
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#94A3B8]" />
            ) : (
              <Menu size={24} className="text-[#94A3B8]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {'subLinks' in link ? (
                  /* Mobile Dropdown Trigger Button */
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="w-full text-left px-4 py-2 text-[#94A3B8] hover:bg-[#1a3a52] rounded transition font-medium flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  /* Standard Mobile Nav Link (Now correctly links using Next.js Link) */
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} // Closes mobile drawer automatically on click
                    className="block px-4 py-2 text-[#94A3B8] hover:bg-[#1a3a52] rounded transition font-medium"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mobile Dropdown Options */}
                {'subLinks' in link && openDropdown === link.name && (
                  <div className="bg-[#1a3a52]">
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setIsMenuOpen(false)} // Closes mobile drawer automatically on click
                        className="block px-6 py-2 text-[#94A3B8] hover:text-[#14B8A6] text-sm transition"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
