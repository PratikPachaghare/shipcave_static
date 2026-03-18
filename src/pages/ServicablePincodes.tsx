import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

// Common Components
import PageHero from "../components/common/PageHero";
import ProcessSteps from "../components/common/ProcessSteps";
import SplitContentSection from "../components/common/SplitContentSection";

const ServiceablePincodes = () => {
  const theme = configThemes.home;
  const config = brandConfig.meta.Features.pincodePage;

  return (
    <main 
      className="w-full"
      style={{ 
        background: `linear-gradient(100deg, ${theme.pageGradientLight} 9%, white 30%, white 85%, ${theme.pageGradientLight} 100%)` 
      }}
    >
      {/* 1. Hero Section */}
      <PageHero
        title={
          <>
            {config.hero.title.rest} <span style={{ color: theme.brandMainColor }}>{config.hero.title.highlight}</span>
          </>
        }
        keyword="Serviceable Pincodes"
        description={config.hero.description}
        image={config.hero.image}
      />

      {/* 2. Process Section */}
      <ProcessSteps
        title={
          <>
            {config.process.title.rest} <span style={{ color: theme.brandMainColor }}>{config.process.title.highlight}</span>
          </>
        }
        description={config.process.description}
        description2={config.process.description2}
        steps={config.process.steps}
      />

      {/* 3. Why Use Section (Image Left, Features Right) */}
      <SplitContentSection
        title={
          <>
            Why Use the <span style={{ color: theme.brandMainColor }}>Pin Codes Checker?</span>
          </>
        }
        subHeading="Our Serviceable Pin Codes Checker serves several purposes:"
        image={config.whyUse.image}
        reverse={true} 
        features={config.whyUse.features}
      />

      {/* 4. Expansion Section (Image Right, Text Left) */}
      
      <SplitContentSection
        title={
          <>
            {config.expansion.title.rest} <span style={{ color: theme.brandMainColor }}>{config.expansion.title.highlight}</span>
          </>
        }
        description={config.expansion.description}
        image={config.expansion.image}
        reverse={false} 
        isheadingDescriptionSameBox={true}
      />

      {/* 5. Simple Text Contact Section */}
      <section className="py-16 text-center bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-black mb-6 text-left">
            <span style={{ color: theme.brandMainColor }}>Contact Us</span> for Assistance
          </h2>
          <p 
            className="text-left text-lg leading-relaxed whitespace-pre-line"
            style={{ color: theme.paragraphTextColor }}
          >
            If you have any questions or require assistance regarding serviceable pin codes, please don't hesitate to contact our customer support team. We are here to help you and provide guidance on the shipping options available to you.
            {"\n\n"}
            Thank you for considering Shipdartexpress for your shipping needs. We look forward to serving you and expanding our reach to include more pin codes in the future.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ServiceablePincodes;