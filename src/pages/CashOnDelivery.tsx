import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

// Common Components
import PageHero from "../components/common/PageHero";
import InfoGrid from "../components/common/InfoGrid"; 
import SplitContentSection from "../components/common/SplitContentSection";

const CashOnDelivery = () => {
  const theme = configThemes.home;
  const config = brandConfig.meta.Features.codPage;

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
        keyword="Cash On Delivery"
        description={config.hero.description}
        image={config.hero.image}
      />

      {/* 2. How Does It Work (2x2 Grid) */}
      <InfoGrid
        title={
          <>
            How Does <span style={{ color: theme.brandMainColor }}>Cash on Delivery</span> Work?
          </>
        }
        description="Our Cash On Delivery process is simple and easy. Here is how it works:"
        items={config.howItWorks}
        columns={2}
      />

      {/* 3. Benefits Section (Image Left, Text Right) */}
      <SplitContentSection
        title={
          <>
            Benefits of <span style={{ color: theme.brandMainColor }}>Cash On Delivery</span>
          </>
        }
        subHeading="Choosing Cash On Delivery as your payment method with Shipdartexpress comes with several benefits:"
        image={config.benefits.image}
        reverse={true} 
        features={config.benefits.data}
      />

      {/* 4. Using COD With Shipdartexpress (Process Image) */}
      
      <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto mb-12">
             <h2 className="text-2xl text-left md:text-4xl font-bold text-black mb-6">
                Using COD With <span style={{ color: theme.brandMainColor }}>Shipdartexpress</span>
             </h2>
             <p className="text-gray-600 text-left text-lg leading-relaxed">
               {config.usingCod.text}
             </p>
          </div>
          
          <div className="flex justify-center w-full">
            <img 
              src={config.usingCod.image} 
              alt="Using COD Process" 
              className="w-full max-w-6xl h-auto object-contain drop-shadow-sm" 
            />
          </div>
        </div>
      </section>

      {/* 5. Additional Information */}
      <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-10 text-center">
            Additional <span style={{ color: theme.brandMainColor }}>Information</span>
          </h2>
          <p 
            className="leading-relaxed text-left text-lg whitespace-pre-line"
            style={{ color: theme.paragraphTextColor }}
          >
            {config.additionalInfo}
          </p>
        </div>
      </section>

    </main>
  );
};

export default CashOnDelivery;