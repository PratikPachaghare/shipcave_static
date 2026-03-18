// src/components/common/SplitContentSection.tsx
import React from "react";

interface FeatureItem {
  id: number | string;
  title: string;
  description: string;
}

interface SplitContentProps {
  title: React.ReactNode;
  subHeading?: string;
  description?: React.ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean; // If true, Image is on the Left
  features?: FeatureItem[]; // If provided, renders the Numbered List
  isheadingDescriptionSameBox?: boolean;
  bottomMargin?:Number;
}

const SplitContentSection: React.FC<SplitContentProps> = ({
  title,
  subHeading,
  description,
  image,
  imageAlt = "Illustration",
  reverse = false,
  features,
  isheadingDescriptionSameBox = false,
  bottomMargin=1,
}) => {
  const renderDescriptionContent = () => {
    if (!description) return null;

    if (typeof description !== "string") {
      return <div className="text-gray-600 text-lg leading-relaxed mb-8">{description}</div>;
    }

    const normalized = description.replace(/\r\n/g, "\n").trim();
    if (!normalized) return null;

    const numberedBlocks = normalized
      .split(/\n(?=\d+\.\s)/)
      .map((block) => block.trim())
      .filter(Boolean);

    const isNumberedContent = numberedBlocks.length > 1 && numberedBlocks.every((block) => /^\d+\.\s/.test(block));

    if (isNumberedContent) {
      return (
        <ol className="mb-8 space-y-5 text-left">
          {numberedBlocks.map((block, index) => {
            const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
            const heading = lines[0].replace(/^\d+\.\s*/, "");
            const body = lines.slice(1).join(" ");

            return (
              <li key={`${heading}-${index}`} className="text-gray-600 text-lg leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{heading}</h3>
                {body && <p className="text-gray-600 leading-relaxed">{body}</p>}
              </li>
            );
          })}
        </ol>
      );
    }

    const paragraphs = normalized
      .split(/\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    return (
      <div className="mb-8 space-y-4 text-left">
        {paragraphs.map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 20)}-${index}`} className="text-gray-600 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-transperent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`max-w-7xl p-5 text-left mx-auto mb-${bottomMargin}`}>
          <h2 className={`text-2xl md:text-4xl font-bold text-black text-left mb-4 leading-snug ${isheadingDescriptionSameBox ? "mb-8 absolute" : ""}`}>
            {title}
          </h2>
          {subHeading && (
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {subHeading}
            </p>
          )}
        </div>
        <div
          className={`flex flex-col gap-12 lg:gap-20 items-center ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Text/Content Column */}
          <div className="w-full lg:w-1/2">
          {renderDescriptionContent()}
            {/* Render Features List if provided (Used in 'Why Use' section) */}
            {features && (
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    className="flex gap-4 p-8 rounded-xl border border-transparent shadow-lg hover:border-blue-100 hover:shadow-sm hover:bg-blue-50/30 transition-all duration-300"
                  >
                    
                    <div>
                      <h3 className="text-lg font-bold text-black mb-1">
                        {idx+1}{". "+feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 font-semibold">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitContentSection;
