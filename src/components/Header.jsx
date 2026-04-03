import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { MEDIA } from '../constants/media';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="relative flex items-center h-20 px-4 sm:px-6 lg:px-10">
        {/* Logo — pinned left */}
        <Link to="/" className="absolute left-4 sm:left-6 lg:left-10 flex items-center h-12">
          <img
            src={MEDIA.logo1}
            alt="NFG Logistics"
            className="h-12 w-auto max-w-[180px] object-contain object-left"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute inset-0 pointer-events-none">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`pointer-events-auto text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.path ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Group — pinned right */}
        <div className="hidden lg:flex items-center gap-4 absolute right-4 sm:right-6 lg:right-10">
          <Link
            to="/quote"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Get A Quote
          </Link>
          <a
            href="tel:+16293451110"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors"
          >
            <Phone size={16} />
            +1 629-345-1110
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden ml-auto p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                  pathname === link.path ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full text-center"
            >
              Get A Quote
            </Link>
            <a
              href="tel:+16293451110"
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-700"
            >
              <Phone size={16} />
              +1 629-345-1110
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
