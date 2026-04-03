import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookNowTab from './BookNowTab';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <BookNowTab />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
