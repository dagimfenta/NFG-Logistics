import { Link } from 'react-router-dom';
import { MEDIA } from '../constants/media';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src={MEDIA.logo2}
                alt="NFG Logistics"
                className="h-10 w-auto max-w-[160px] object-contain object-left"
              />
            </div>
            <div className="flex gap-4 mt-2">
              <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-sm hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <p className="text-sm leading-relaxed">
              301 S. Perimeter Park Drive
              <br />
              Suite 100
              <br />
              Nashville, TN 37211
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm leading-relaxed">
              Tel: <a href="tel:+16293451110" className="hover:text-white transition-colors">+1 629-345-1110</a>
            </p>
            <p className="text-sm mt-1">Opening Hours: 6am – 6pm</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} by NFG Logistics
        </p>
      </div>
    </footer>
  );
}
