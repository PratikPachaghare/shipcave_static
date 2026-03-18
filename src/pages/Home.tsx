// Import all sections
import Hero from "../components/sections/Hero";
import LogoScroll from "../components/sections/LogoScroll";
import TrustSection from "../components/sections/TrustSection";
import Stats from "../components/sections/Stats";
import FeatureTabs from "../components/sections/FeatureTabs";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import OurHappyCustomers from "../components/sections/OurHappyCustomers";
import FAQ from "../components/sections/FAQ";
import IntegrationSection from "../components/sections/IntegrationSection";
import ContactFormSection from "../components/sections/ContactFormSection";
import { brandConfig } from "../config/brandConfig";
import TruckAnimation from "../components/sections/TruckAnimation.js";
import BoxPath from "./BoxPath.js";

const Home = () => {
  // FAQ Data for Home Page
  const homeFaqData = [
    {
      question: `How can I track my shipment with ${brandConfig.meta.name}?`,
      answer:
        "You can easily track your shipment by entering your AWB or Tracking ID on our homepage's tracking tool. You will get real-time updates on your package's location and estimated delivery status.",
    },
    {
      question: `What is the estimated delivery time for ${brandConfig.meta.name}' courier services?`,
      answer:
        "Delivery times vary based on the destination and service type selected. Typically, domestic shipments are delivered within 24-72 hours, while express services offer next-day delivery options.",
    },
    {
      question: "What should I do if my shipment is delayed?",
      answer:
        "If your shipment is delayed beyond the estimated delivery date, please check the tracking status for any alerts. If there is no update, contact our customer support team with your tracking ID for immediate assistance.",
    },
    {
      question: "Do you offer international shipping services?",
      answer: `Yes, ${brandConfig.meta.name} offers reliable international shipping services to over 200+ countries. We handle customs documentation and provide end-to-end tracking for global shipments.`,
    },
    {
      question: `How can I contact ${brandConfig.meta.name}' customer support?`,
      answer: `You can reach our customer support team 24/7 via the 'Contact Us' page, email us at ${brandConfig.contact.email}or call our toll-free helpline. We are here to assist you.`,
    },
    {
      question: `What types of packages does ${brandConfig.meta.name} ship?`,
      answer:
        "We ship a wide range of items including documents, ecommerce parcels, electronics, and bulk cargo. Please refer to our 'Prohibited Items' list to ensure your package complies with safety regulations.",
    },
  ];
  return (
    <>
    <BoxPath />
      {/* 1. Hero Section: "Ship Smarter..." + Courier Man Image */}
      <Hero />

      {/* 2. Partners Strip: Logos (BlueDart, DTDC, etc.) */}
      <LogoScroll />

      {/* 3. Trust Section: "Building Trust Through Every Step" */}
      <TrustSection />
      <TruckAnimation/>

      {/* 4. Stats Strip: Dark Blue Background (500+ Clients etc.) */}
      <Stats />

      {/* 5. Features: "Our Core Highlights" (Tabs for Control Tower, COD, etc.) */}
      <div className="py-8 bg-white mt-12">
        <FeatureTabs />
      </div>

      {/* 6. Why Choose Us: "Smart Shipping, Simplified" */}
      <WhyChooseUs />

      {/* 7. Testimonials: "Our Happy Customers" (Brand Logos + Reviews) */}
      <OurHappyCustomers />

      {/* 8. FAQ: "Frequently Asked Questions" */}
      <FAQ items={homeFaqData} />

      {/* 9. Integrations: "Multi-channel solutions" (Amazon, Shopify icons) */}
      <IntegrationSection />

      {/* 10. Contact Form: */}
      <ContactFormSection />
    </>
  );
};

export default Home;
