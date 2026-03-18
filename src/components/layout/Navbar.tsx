import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme"; 
import Button from "../common/Button";

type NavChild = {
  label: string;
  path: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  
  const location = useLocation();
  const theme = configThemes.home;
  const navConfig = brandConfig.meta.nav;

  // Helper to check if a dropdown is active based on its children
  const isDropdownActive = (children: NavChild[]) => 
    children.some(child => location.pathname === child.path);

  // Helper for link styles
  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? theme.brandMainColor : "",
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none",
      textDecorationThickness: "2px",
      underlineOffset: "8px"
    };
  };

  return (
    <>
      {/* Top Banner */}
      {/* <div 
        className="text-center py-3.5 text-sm px-4 transition-colors duration-300"
        style={{ backgroundColor: theme.brandMainColor, color: theme.bannerText }}
      >
        {navConfig.banner.text}{" "}
        <span className="font-bold" style={{ color: theme.brandAccent }}>
          {navConfig.banner.highlight}
        </span>{" "}
        {navConfig.banner.suffix}
      </div> */}
      <div
        className="marquee-container py-3.5 text-sm"
        style={{ backgroundColor: theme.brandMainColor, color: theme.bannerText }}
      >
        <div className="marquee-track" aria-label="Top shipping banner">
          {[0, 1].map((loopIndex) => (
            <div key={loopIndex} className="marquee-item">
              {navConfig.banner.text}{" "}
              <span className="font-bold" style={{ color: "black" }}>
                {navConfig.banner.highlight}
              </span>{"      "}
              {navConfig.banner.suffix}
              <span className="marquee-separator">        </span>
            </div>
          ))}
        </div>
      </div>



      <header className="font-heading w-full sticky top-0 z-50">
        <div className="bg-white shadow-sm">
          <div className="container-custom h-17 flex items-center justify-between py-4">
            
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                src={brandConfig.assets.logo}
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm">
              {navConfig.menuItems.map((item) => {
                if (item.isDropdown) {
                  const active = isDropdownActive(item.children || []);
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        type="button"
                        className="flex items-center px-3 py-2 text-sm transition-all duration-200"
                        style={{ 
                          color: active ? theme.brandMainColor : "#1f2937",
                          fontWeight: active ? "700" : "500"
                        }}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-52 py-2 z-20 border border-gray-100 top-full animate-fadeIn">
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm transition-colors"
                            style={{ 
                              color: location.pathname === child.path ? theme.brandMainColor : "#374151",
                              backgroundColor: location.pathname === child.path ? theme.dropdownHoverBg : "transparent"
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="transition-all hover:opacity-80"
                    style={getLinkStyle(item.path)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={brandConfig.links.login}
                className="font-semibold transition-colors hover:opacity-80"
                style={{ color: theme.brandMainColor  }}
              >
                {navConfig.buttons.login}
              </a>

              <Button to={brandConfig.links.signup} className="w-32 ml-6 py-2">
                {navConfig.buttons.signup}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button type="button" className="lg:hidden text-gray-700 p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2 shadow-2xl absolute w-full z-40 animate-fadeIn">
            {navConfig.menuItems.map((item) => {
              if (item.isDropdown) {
                const active = isDropdownActive(item.children || []);
                return (
                  <div key={item.label} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                      className="w-full flex justify-between items-center p-2 rounded-lg"
                      style={{ color: active ? theme.brandMainColor : "#374151" }}
                    >
                      <span className={active ? "font-bold" : "font-medium"}>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileFeaturesOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block p-2 text-sm"
                            style={{ color: location.pathname === child.path ? theme.brandMainColor : "#4b5563" }}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="block p-2 rounded-lg"
                  style={getLinkStyle(item.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t mt-4 flex flex-col gap-3">
              <a 
                href={brandConfig.links.login} 
                className="text-center font-semibold py-2"
                style={{ color: theme.brandMainColor }}
              >
                {navConfig.buttons.login}
              </a>
              <Button to={brandConfig.links.signup}>
                {navConfig.buttons.signup}
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;