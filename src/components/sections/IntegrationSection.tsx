import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";
import Button from "../common/Button";

const IntegrationSection = () => {
  const config = brandConfig.meta.Home.integrations;
  const theme = configThemes.home;

  return (
    <section 
      className="w-[90%] m-auto py-16 lg:py-24 overflow-hidden rounded-xl"
      style={{ 
        background: `linear-gradient(to bottom right, white, ${theme.pageGradientLight}50, white)` 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- Left Column: Text Content --- */}
          <div className="w-full lg:w-6/12 text-left">
            <span 
              className="block font-semibold tracking-wide uppercase text-sm mb-3"
              style={{ color: theme.headingTextColor }}
            >
              {config.tagline}
            </span>

            <h2 
              className="text-3xl md:text-5xl font-bold mb-6 leading-[1.15]"
              style={{ color: theme.headingTextColor }}
            >
              <span style={{ color: theme.brandMainColor }}>{config.heading.highlight}</span> {config.heading.rest}
            </h2>

            <p 
              className="text-[1rem] mb-8 leading-relaxed max-w-lg"
              style={{ color: theme.paragraphTextColor }}
            >
              {config.description}
            </p>

            <Button className="py-2.5 px-8">
              Explore More <span className="ml-1">{">"}</span>
            </Button>
          </div>

          {/* --- Right Column: Single Image --- */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative">
            {/* Background Glow using brand color with low opacity */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-3xl rounded-full -z-10" 
              style={{ backgroundColor: `${theme.brandMainColor}20` }}
            />

            <img
              src={config.image}
              alt="Channel Integrations"
              className="w-[90%] max-w-xl h-auto object-contain drop-shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;