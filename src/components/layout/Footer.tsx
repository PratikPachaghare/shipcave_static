import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ChevronRight, 
  
  FileBadge
} from 'lucide-react';
import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";

const Footer = () => {
  const theme = configThemes.home;
  const footerConfig = brandConfig.meta.footer;

  // Social Icon Mapper
  const socialIcons: { [key: string]: any } = {
    Twitter, Facebook, Instagram, Linkedin
  };

  return (
    <footer className="w-full font-sans">
      
      {/* --- Main Footer Section (Themed) --- */}
     <div
  className="text-white py-16 px-4 md:px-8"
  style={{
    background: `linear-gradient(
      to bottom,
      ${theme.footerGradientTo},
      ${theme.footerGradientFrom}
    )`
  }}
>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Info & Contact */}
          <div className="space-y-6">
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm">
              {footerConfig.companyDesc}
            </p>

            <div className="space-y-4 mt-6">
              {[
                { Icon: MapPin, label: 'Address', val: footerConfig.contact.address },
                { Icon: FileBadge, label: 'GST Number', val: footerConfig.contact.GST_number },
                { Icon: Phone, label: 'Phone', val: footerConfig.contact.phone },
                { Icon: Mail, label: 'Email', val: footerConfig.contact.email },
                { Icon: Globe, label: '', val: footerConfig.contact.website },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div 
                    className="p-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: `${theme.brandAccent}20` }} // 20% opacity accent
                  >
                    <item.Icon className="w-5 h-5" style={{ color: theme.brandAccent }} />
                  </div>
                  <span className="text-sm md:text-base text-gray-200">
                    {item.label && <span className="font-semibold text-white">{item.label}: </span>}
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-bold mb-6 text-white">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About us', path: '/about' },
                { label: 'Terms of service', path: '/terms-of-service' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 transition-colors group-hover:text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Cash On Delivery', path: '/cash-on-delivery' },
                { label: 'Serviceable Pincodes', path: '/serviceable-pincodes' },
                { label: 'Print Shipping Labels', path: '/print-shipping-labels' },
                { label: 'Partners', path: '/partners' },
                // { label: 'Return Policy', path: '/return-policy' },
                // { label: 'Shipping Policy', path: '/shipping-policy' }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 transition-colors group-hover:text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar (Lighter Accent Bar) --- */}
      <div 
        className="py-4 px-4 md:px-8 border-t border-white/10"
        style={{ backgroundColor: theme.brandMainColor, filter: 'brightness(1.2)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left opacity-80">
            {footerConfig.copyright}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {footerConfig.socials.map((social, index) => {
              const IconComp = socialIcons[social.Icon];
              return (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/30 rounded-md text-white transition-all backdrop-blur-sm"
                >
                  <IconComp size={18} className="opacity-90" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
