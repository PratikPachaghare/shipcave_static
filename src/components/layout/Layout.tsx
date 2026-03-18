import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadPopup from '../common/LeadPopup';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-body text-text-main">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Page Content - This is where Home/About/Pricing renders */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Global Floating Elements */}
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
};

export default Layout;