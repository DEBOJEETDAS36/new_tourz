import Link from 'next/link';
// Removed lucide-react icons due to export issues; using emoji fallbacks for social icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
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
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/tours" className="hover:text-white transition">Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition">Destinations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-white transition" aria-label="Facebook">📘</a>
              <a href="#" className="hover:text-white transition" aria-label="Twitter">🐦</a>
              <a href="#" className="hover:text-white transition" aria-label="Instagram">📸</a>
              <a href="#" className="hover:text-white transition" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Tourz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}