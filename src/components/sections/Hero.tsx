import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";

import back_image from "../../assets/images/shipcave_back_hero.png";
import "./hero.css"; // Import the CSS file for hero-specific styles
const config = brandConfig.meta.Home.hero;
const theme = configThemes.home;

const Hero = () => {
  return (
    <section
      className="relative w-full pt-16 pb-24 overflow-hidden"
      style={{
        background: `linear-gradient(50deg, ${theme.pageGradientLight}, #ffffff, ${theme.pageGradientLight})`,
      }}
    >
      <img
        src={back_image}
        alt="Hero background"
        className="absolute inset-0 h-10/12 w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="container-custom relative z-10 flex flex-col-reverse items-center gap-10 md:flex-row md:gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 px-2 md:px-0">
          <h1
            className="hero-heading text-3xl font-extrabold leading-[1.12] text-center md:text-left md:text-4xl lg:text-5xl"
            style={{ color: theme.headingTextColor }}
          >
            <span
              style={{
                color: theme.brandMainColor,
                textShadow: "0 4px 12px rgba(17, 37, 62, 0.35)",
              }}
            >
              {config.taglin1}
            </span>
            <br />
            {config.taglin2}
          </h1>

          <p
            className="mt-5 text-base font-medium text-center md:text-left md:text-lg"
            style={{ color: theme.paragraphTextColor }}
          >
            {config.subTagline}
          </p>

          <div
            className="mt-8 w-full rounded-3xl p-3 sm:p-4"
            style={{
              backgroundColor: "#ffffff",
              border: `1px solid ${theme.accentBorder}`,
              boxShadow: "0 10px 30px rgba(17, 37, 62, 0.12)",
            }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="AWB Number"
                className="h-12 w-full rounded-xl border px-4 text-sm outline-none focus:ring-2 sm:text-base"
                style={{
                  borderColor: theme.accentBorder,
                  color: theme.headingTextColor,
                }}
              />
              <button
                type="button"
                className="h-12 shrink-0 cursor-pointer hover:bg-[#F37021] rounded-xl px-6 text-sm font-semibold sm:text-base"
                style={{
                  backgroundColor: theme.headingTextColor,
                  color: "#ffffff",
                }}
              >
                Track Shipment {"->"}
              </button>
            </div>
          </div>

        </div>

        <div className="w-full md:w-1/2 mt-3 md:mt-0 relative flex justify-center">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full blur-3xl -z-10"
            style={{ backgroundColor: theme.heroBlob }}
          ></div>

          <img
            src={config.image}
            alt="Courier Man"
            style={{
              
            }}
            className="hero-image relative z-12 mb-4 ml-80 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl h-auto object-contain drop-shadow-2xl lg:-mr-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;