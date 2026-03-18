import { ChevronDown } from "lucide-react";
import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";
import Input from "../common/Input";
import Button from "../common/Button";

const ContactFormSection = () => {
  const config = brandConfig.meta.Home.contactForm;
  const theme = configThemes.home;

  return (
    <section className="relative w-full py-10 lg:py-28 mt-20 overflow-hidden px-0">
      {/* --- 1. Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.image}
          alt="Warehouse Background"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* --- 2. Dynamic Gradient Overlay --- */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `linear-gradient(to right, ${theme.formOverlayStart}, ${theme.formOverlayMid}, ${theme.formOverlayEnd})` 
        }}
      />

      {/* --- 3. Content Container --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: theme.brandMainColor }}
            >
              {config.heading}
            </h2>
            <p 
              className="text-black text-lg font-bold leading-relaxed max-w-md"
            >
              {config.subheading}
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2">
            <form className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input type="text" placeholder="Business owner name" />
                <Input type="text" placeholder="Business Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input type="email" placeholder="Business mail Address" />
                <Input type="tel" placeholder="Mobile number" />
              </div>

              {/* Row 3 - Dropdown */}
              <div className="relative">
                <select
                  className="w-full px-5 py-4 rounded-xl border border-white text-white
                             placeholder-white focus:outline-none focus:bg-white/10 
                             focus:border-white transition-all duration-200 
                             backdrop-blur-md shadow-sm appearance-none cursor-pointer"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-300 bg-[#1e3a8a] font-semibold">
                    Select Daily Shipments
                  </option>
                  {config.options.map((opt, i) => (
                    <option key={i} value={opt} className="text-gray-800 bg-white font-medium">
                      {opt}
                    </option>
                  ))}
                </select>

                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white">
                  <ChevronDown size={20} />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button type="button" className="py-3 px-8">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;