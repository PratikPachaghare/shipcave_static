import { useState } from "react";
import { brandConfig } from "../../config/brandConfig";
import configThemes from "../../config/theme";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Data and Theme extraction
  const { featureTabs } = brandConfig.meta.Home;
  const theme = configThemes.home; 
  const currentFeature = featureTabs.features[activeTab];

  return (
    <section className="w-full py-16" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold" style={{ color: theme.brandMainColor }}>
            {featureTabs.title} <span style={{ color: theme.headingTextColor }}>{featureTabs.titleHighlight}</span>
          </h2>
        </div>

        {/* --- 1. Tab Navigation --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">
          {featureTabs.features.map((feature, index) => {
            const isActive = activeTab === index;
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center p-8 rounded-xl border transition-all duration-300 text-left group
                  ${isActive ? "shadow-lg scale-[1.02]" : "bg-white hover:shadow-sm"}`}
                style={{
                  backgroundColor: isActive ? theme.brandMainColor : "white",
                  borderColor: isActive ? theme.brandMainColor : "#f3f4f6"
                }}
              >
                <div className="mr-3">
                  <Icon
                    className="w-10 h-10 transition-all duration-300"
                    style={{ fill: isActive ? "white" : "#9ca3af" }}
                  />
                </div>
                <span
                  className="font-semibold text-lg leading-tight"
                  style={{ color: isActive ? "white" : theme.paragraphTextColor }}
                >
                  {feature.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- 2. Main Content Card --- */}
        <div 
          className="relative w-full lg:w-[85%] rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-blue-100 min-h-[500px] flex flex-col items-center text-left mx-auto overflow-hidden"
          style={{ background: `linear-gradient(50deg, ${theme.pageGradientLight}, white, ${theme.pageGradientLight})` }}
        >
          {/* Header Text */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: theme.headingTextColor }}>
              <span style={{ color: theme.brandMainColor }}>{currentFeature.headline}</span>{" "}
              {currentFeature.subHeadline}
            </h2>
            <p className="md:text-lg leading-relaxed" style={{ color: theme.paragraphTextColor }}>
              {currentFeature.description}
            </p>
          </div>

          {/* Visualization Area */}
          <div className="relative flex-1 w-full flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-xl z-0">
              {/* Background Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] blur-[60px] rounded-full pointer-events-none"
                style={{ backgroundColor: theme.brandMainColor, opacity: 0.1 }}
              />

              <img
                key={currentFeature.image}
                src={currentFeature.image}
                alt={currentFeature.headline}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;