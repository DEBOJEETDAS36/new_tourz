import Link from 'next/link';
// Removed lucide-react icons due to export issues; using emoji fallbacks for social icons

export default function Footer() {
  return (
    <footer className="bg-[#0F2942] text-[#94A3B8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Tourz</h3>
            <p className="text-sm leading-relaxed">
              Discover amazing destinations and create unforgettable memories with our curated travel packages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Home</Link></li>
              <li><Link href="/tours" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Tours</Link></li>
              <li><Link href="/destinations" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Destinations</Link></li>
              <li><Link href="/blog" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Help Center</Link></li>
              <li><Link href="#" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Contact Us</Link></li>
              <li><Link href="#" className="text-[#94A3B8] hover:text-[#14B8A6] transition">FAQ</Link></li>
              <li><Link href="#" className="text-[#94A3B8] hover:text-[#14B8A6] transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-[#94A3B8] hover:text-[#14B8A6] transition">📘</a>
              <a href="#" aria-label="Twitter" className="text-[#94A3B8] hover:text-[#14B8A6] transition">🐦</a>
              <a href="#" aria-label="Instagram" className="text-[#94A3B8] hover:text-[#14B8A6] transition">📸</a>
              <a href="#" aria-label="LinkedIn" className="text-[#94A3B8] hover:text-[#14B8A6] transition">💼</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#374151] pt-8 text-center text-sm text-[#94A3B8]">
          <p>&copy; 2024 Tourz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}