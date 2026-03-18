import React from "react";

interface FeatureItem {
  id: number | string;
  icon: string;
  title: string;
  description?: string;
}

interface FeaturesGridProps {
  title: React.ReactNode;
  description?: string;
  features: FeatureItem[];
  columns?: 3 | 4;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  title,
  description,
  features,
  columns = 3,
}) => {
  const gridColsClass = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="max-w-7xl p-5 text-left mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 ${gridColsClass} gap-10 justify-items-center`}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center group max-w-xs"
            >
              <div className="w-60 h-60 mb-6 rounded-full bg-blue-50/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain rounded-full drop-shadow-sm"
                />
              </div>

              <h3 className="text-xl font-bold text-black text-center capitalize">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-gray-700 py-4 px-7 text-left">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
