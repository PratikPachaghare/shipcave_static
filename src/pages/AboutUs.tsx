// Common Components
import PageHero from "../components/common/PageHero";
import SplitContentSection from "../components/common/SplitContentSection";
import FeaturesGrid from "../components/common/FeaturesGrid";

// Feature Icons
import iconAutomated from "../assets/images/feat-automated.png";
import iconRealTime from "../assets/images/feat-tracking.png";
import iconAI from "../assets/images/feat-ai.png";

import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

const theme = configThemes.home;

const AboutUs = () => {

  const innovativeSolutions = [
    { id: 1, icon: iconAutomated, title: "Automated Label generation" },
    { id: 2, icon: iconRealTime, title: "Real-Time Tracking" },
    { id: 3, icon: iconAI, title: "AI-Based carrier recommendation" },
  ];

  return (
    <main
      className="w-full"
      style={{
        background: `linear-gradient(100deg,
          ${theme.pageGradientLight} 9%,
          white 30%,
          white 85%,
          ${theme.pageGradientLight} 100%)`
      }}
    >

      {/* Hero Section */}
      <PageHero
        keyword="About Us"
        title={
          <>
            Welcome To{" "}
            <span style={{ color: theme.brandMainColor }}>
              {brandConfig.meta.name}
            </span>
          </>
        }
        description={brandConfig.meta.about.discription}
        image={brandConfig.meta.about.image.aboutHero}
      />

      {/* Vision */}
      <SplitContentSection
        title={
          <>
            Our{" "}
            <span style={{ color: theme.brandMainColor }}>
              Vision
            </span>
          </>
        }
        description={brandConfig.meta.about.vision}
        image={brandConfig.meta.about.image.visionImage}
        reverse={true}
      />

      {/* Innovative Solutions */}
      <FeaturesGrid
        title={
          <>
            <span style={{ color: theme.brandMainColor }}>
              Innovative Solutions
            </span>{" "}
            for modern Businesses
          </>
        }
        description={brandConfig.meta.about.innovationSolutions}
        features={innovativeSolutions}
      />

      {/* Commitment */}
      <SplitContentSection
        title={
          <>
            Commitment to{" "}
            <span style={{ color: theme.brandMainColor }}>
              Customer Success
            </span>
          </>
        }
        description={brandConfig.meta.about.commitmentTo}
        image={brandConfig.meta.about.image.commitmentImage}
        reverse={false}
        isheadingDescriptionSameBox={true}
         bottomMargin={12}
      />

      {/* Journey */}
      <SplitContentSection
        title={
          <>
            Join Us on{" "}
            <span style={{ color: theme.brandMainColor }}>
              Our Journey
            </span>
          </>
        }
        description={brandConfig.meta.about.joinUsNow}
        image={brandConfig.meta.about.image.journeyImage}
        reverse={true}
       
      />

      {/* Contact Section */}
      <section className="w-full py-12 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto text-left">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.headingTextColor }}
          >
            Contact{" "}
            <span style={{ color: theme.brandMainColor }}>
              Us
            </span>
          </h2>

          <p
            className="text-xl"
            style={{ color: theme.paragraphTextColor }}
          >
            For inquiries or assistance, please don't hesitate to contact us at{" "}
            <a
              href={brandConfig.meta.about.contactUslink}
              style={{ color: theme.brandMainColor }}
              className="font-semibold underline"
            >
              {brandConfig.meta.about.contactUslink}
            </a>.
          </p>
        </div>
      </section>

      {/* Careers Section */}
      <section
        className="w-full py-12 px-4 md:px-6 lg:px-8 text-center mb-10"
        style={{ background: theme.sectionLightBackground }}
      >
        <div className="max-w-6xl text-left mx-auto">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.headingTextColor }}
          >
            Careers at{" "}
            <span style={{ color: theme.brandMainColor }}>
              {brandConfig.meta.name}
            </span>
          </h2>

          <p
            className="text-xl"
            style={{ color: theme.paragraphTextColor }}
          >
            Interested in joining our team? Explore career opportunities with us
            and become a part of a dynamic company that is transforming logistics.
            You can send your resume at{" "}
            <a
              href={brandConfig.meta.about.careerAt}
              style={{ color: theme.brandMainColor }}
              className="font-semibold underline"
            >
              {brandConfig.meta.about.careerAt}
            </a>
          </p>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
