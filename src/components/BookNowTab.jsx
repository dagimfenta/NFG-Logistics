import { Link } from 'react-router-dom';

export default function BookNowTab() {
  return (
    <Link
      to="/quote"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-30 bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider uppercase px-3 py-4 rounded-r-md shadow-lg transition-colors"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Book Now
    </Link>
  );
}
