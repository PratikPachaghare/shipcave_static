import configThemes from "../config/theme";
import { brandConfig } from "../config/brandConfig";

// Common Components
import PageHero from "../components/common/PageHero";
import InfoGrid from "../components/common/InfoGrid";
import SplitContentSection from "../components/common/SplitContentSection";

const Partners = () => {
  const config = brandConfig.meta.partnersPage;
  const theme = configThemes.home;

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
        keyword="Partners"
        description={config.hero.description}
      />

      {/* 2. Partner Network (2x2 Grid Layout) */}
      <InfoGrid
        title={
          <>
            {config.network.title.rest} <span style={{ color: theme.brandMainColor }}>{config.network.title.highlight}</span>
          </>
        }
        description={config.network.description}
        items={config.network.items}
        columns={2}
      />

      {/* 3. Benefits Section (Text Left, Image Right) */}
      <SplitContentSection
        title={
          <>
            <span style={{ color: theme.brandMainColor }}>{config.benefits.title.highlight}</span> {config.benefits.title.rest}
          </>
        }
        subHeading={config.benefits.subHeading}
        image={config.benefits.image}
        reverse={false}
        features={config.benefits.data}
      />

      {/* 4. Become Our Partner (Image Left, Text Right) */}
      <SplitContentSection
        title={
          <>
            {config.becomePartner.title.rest} <span style={{ color: theme.brandMainColor }}>{config.becomePartner.title.highlight}</span>
          </>
        }
        description={config.becomePartner.description}
        image={config.becomePartner.image}
        reverse={true}
      />

      {/* 5. Our Commitment (Simple Text Block) */}
      <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            {config.commitment.title.rest} <span style={{ color: theme.brandMainColor }}>{config.commitment.title.highlight}</span>
          </h2>
          <p 
            className="leading-relaxed text-left text-lg whitespace-pre-line"
            style={{ color: theme.paragraphTextColor }}
          >
            {config.commitment.text}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Partners;