import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

// Common Components
import PageHero from "../components/common/PageHero";
import ProcessSteps from "../components/common/ProcessSteps";
import SplitContentSection from "../components/common/SplitContentSection";
import InfoGrid from "../components/common/InfoGrid";

const LabelPrinting = () => {
  const theme = configThemes.home;
  const config = brandConfig.meta.Features.labelPrintingPage;

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
        keyword="Print Shipping Labels"
        description={config.hero.description}
        image={config.hero.image}
      />

      {/* 2. Process Section (6 Steps) */}
      
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

      {/* 3. Benefits Section (Puzzle Image Left) */}
      <SplitContentSection
        title={
          <>
            Benefits of Printing with <span style={{ color: theme.brandMainColor }}>Shipdartexpress</span>
          </>
        }
        subHeading="Using our platform to print your shipping labels offers several advantages:"
        image={config.benefits.image}
        reverse={true} 
        features={config.benefits.features}
      />

      {/* 4. Tips Section (2-Column Grid) */}
      <InfoGrid
        title={
          <>
            Label Printing <span style={{ color: theme.brandMainColor }}>Tips</span>
          </>
        }
        description="To ensure the best results when printing your shipping labels, consider the following:"
        items={config.tips}
        columns={2} 
      />

      {/* 5. Ready To Ship Section */}
      <SplitContentSection
        title={
          <>
            Ready To <span style={{ color: theme.brandMainColor }}>Ship?</span>
          </>
        }
        description={config.readyToShip.text}
        image={config.readyToShip.image}
        reverse={false} 
        isheadingDescriptionSameBox={true}
      />
    </main>
  );
};

export default LabelPrinting;