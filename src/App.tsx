import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import ServiceablePincodes from "./pages/ServicablePincodes";
import LabelPrinting from "./pages/LabelPrinting";
import CashOnDelivery from "./pages/CashOnDelivery";
import Partners from "./pages/Parteners";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/common/ScrollToTop";

// 404 Component
const NotFound = () => (
  <div className="h-[60vh] flex flex-col items-center justify-center">
    <h1 className="text-6xl font-bold text-gray-300">404</h1>
    <p className="text-xl text-gray-600 mt-4">Page not found</p>
    <a href="/" className="mt-6 text-primary hover:underline">
      Go back home
    </a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Parent Route: Applies Layout (Navbar/Footer) to all children */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="serviceable-pincodes"
            element={<ServiceablePincodes />}
          />
          <Route path="print-shipping-labels" element={<LabelPrinting />} />
          <Route path="cash-on-delivery" element={<CashOnDelivery />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="partners" element={<Partners />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="terms-of-service" element={<TermsOfService />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
