import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

// Common Components
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const ContactUs = () => {
  const theme = configThemes.home;
  const config = brandConfig.meta.contactPage;

  return (
    <main
      className="w-full min-h-screen pt-24 pb-20"
      style={{
        background: `linear-gradient(120deg, ${theme.pageGradientLight} 1%, white 20%, white 85%, ${theme.pageGradientLight} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* --- 1. Page Header --- */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-xl text-black mb-4 tracking-wide font-medium">
            Contact
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            {config.hero.title.rest}{" "}
            <span style={{ color: theme.brandMainColor }}>
              {config.hero.title.highlight}
            </span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {config.hero.description}
          </p>
        </div>

        {/* --- 2. Content Grid --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Info & Attractive Content Block */}
          <div className="w-full lg:w-[60%] space-y-8">
            
            {/* --- REPLACEMENT: Attractive Info Card (Replaces Map) --- */}
            <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative min-h-[350px] flex flex-col items-center justify-center p-8 md:p-12 text-center group">
              
              {/* Abstract Background */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.brandMainColor}08 0%, white 100%)`
                }}
              />
              
              {/* Decorative Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-md mb-2">
                   <MessageCircle size={40} style={{ color: theme.brandMainColor }} />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    We're here to help
                  </h3>
                  <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
                    Have a question or just want to say hi? We'd love to hear from you. Our team is ready to assist.
                  </p>
                </div>

                {/* Quick Stats / Icons */}
                <div className="flex justify-center gap-6 pt-4 text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <Globe size={20} />
                    <span className="text-xs font-medium uppercase tracking-wider">Global</span>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock size={20} />
                    <span className="text-xs font-medium uppercase tracking-wider">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Contact Details List --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 px-2">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm"
                  style={{ backgroundColor: `${theme.brandMainColor}15` }}
                >
                  <MapPin
                    className="w-6 h-6"
                    style={{ color: theme.brandMainColor }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    {config.companyName}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    {config.address}
                  </p>
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 pt-2">
                <div className="flex items-center gap-5 group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: `${theme.brandMainColor}15` }}
                  >
                    <Phone
                      className="w-6 h-6"
                      style={{ color: theme.brandMainColor }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-lg font-medium text-black">
                      {config.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: `${theme.brandMainColor}15` }}
                  >
                    <Mail
                      className="w-6 h-6"
                      style={{ color: theme.brandMainColor }}
                    />
                  </div>
                   <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-lg font-medium text-black">
                      {config.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="w-full lg:w-[40%] bg-white p-8 rounded-2xl shadow-xl border border-gray-50 h-fit sticky top-32">
            <h3 className="text-xl font-bold mb-6 text-black">
              Send us a message
            </h3>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="!border-gray-200 !text-gray-800 placeholder:text-gray-500 focus:!border-blue-500"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="!border-gray-200 !text-gray-800 placeholder:text-gray-500 focus:!border-blue-500"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="!border-gray-200 !text-gray-800 placeholder:text-gray-500 focus:!border-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 shadow-sm resize-none bg-gray-50/50"
                style={{
                  boxShadow: `0 0 0 2px ${theme.brandMainColor}20`,
                }}
              ></textarea>

              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;