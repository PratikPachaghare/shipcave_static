import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme"; 
import Button from "../common/Button";

const config = brandConfig.meta.Home.trustSection;
const theme = configThemes.home;

const TrustSection = () => {
  const features = config.feturesCards;

  return (
    <section 
      className="py-20"
      style={{ 
        background: `linear-gradient(50deg, ${theme.pageGradientLight}, white, ${theme.pageGradientLight})` 
      }}
    >
      <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image */}
        <div className="w-full lg:w-5/12 relative">
          <div 
            className="absolute inset-0 rounded-full opacity-5 transform translate-x-4 translate-y-4"
            style={{ backgroundColor: theme.brandMainColor }}
          ></div>
          <img
            src={config.trustImage}
            alt="Building Trust"
            className="relative rounded-2xl w-full object-cover mt-5 z-10"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-7/12 lg:ml-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.headingTextColor }}>
            <span style={{ color: theme.brandMainColor }}> Building Trust</span> Through <br />
            Every Step
          </h2>
          <p className="mb-10 text-lg" style={{ color: theme.paragraphTextColor }}>
            {config.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 rounded-xl border hover:shadow-md transition"
                style={{ 
                  backgroundColor: theme.accentLight, 
                  borderColor: theme.accentBorder 
                }}
              >
                <div 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4"
                  style={{ color: theme.brandMainColor }}
                >
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold" style={{ color: theme.headingTextColor }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/about" className="py-2.5 px-8">
              About Us <span className="ml-1">{">"}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;