import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";
import Button from "../common/Button";

const WhyChooseUs = () => {
  const config = brandConfig.meta.Home.whyChooseUs;
  const theme = configThemes.home;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Title */}
        <h2
          className="font-bold text-4xl mb-12 text-center"
          style={{ color: theme.brandMainColor }}
        >
          <span style={{ color: theme.headingTextColor }}>
            {config.heading.main}
          </span>{" "}
          {config.heading.highlight}
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- Left Column: Content --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h3
              className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: theme.brandMainColor }}
            >
              {config.subHeading.main}
              <span style={{ color: theme.headingTextColor }}>
                {" "}
                {config.subHeading.highlight}{" "}
              </span>
            </h3>

            <p
              className="text-md mb-10 max-w-xl leading-relaxed"
              style={{ color: theme.paragraphTextColor }}
            >
              {config.description}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 gap-y-8 mb-10 w-full">
              {config.features.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 mr-5"
                  />
                  <div>
                    <h4
                      className="font-semibold text-lg mb-1"
                      style={{ color: theme.headingTextColor }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: theme.paragraphTextColor }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="py-2.5 px-8">
              Explore More <span className="ml-1">{">"}</span>
            </Button>
          </div>

          {/* --- Right Column: Image with Blob --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Background Blob Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full filter blur-3xl opacity-40"
              style={{ backgroundColor: theme.brandMainColor }}
            />

            {/* Solid Circle Background */}
            <div
              className="absolute top-10 right-0 lg:right-10 w-72 h-72 md:w-96 md:h-96 rounded-full -z-10"
              style={{ backgroundColor: theme.sectionAccent }}
            />

            <img
              src={config.image}
              alt="Why Choose Us"
              /* drop-shadow-2xl for the main character, drop-shadow-sm can be used for smaller floating elements */
              className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
