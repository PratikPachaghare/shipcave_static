import React from "react";

interface PageHeroProps {
  title: React.ReactNode;
  keyword: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  keyword,
  description,
  image,
  imageAlt = "Hero Image",
  className = "",
}) => {
  const hasImage = Boolean(image);

  return (
    <section className={`w-full py-10 lg:py-18 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            hasImage ? "lg:flex-row" : ""
          } items-center gap-12 lg:gap-20`}
        >
          {/* Text Side */}
          <div
            className={`w-full ${
              hasImage ? "lg:w-1/2" : ""
            } text-left animate-fade-in-up`}
          >
            <p className="text-xl md:text-2xl text-black font-bold mb-6 md:mb-10 tracking-wide opacity-80">
              {keyword}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              {title}
            </h1>

            <p
              className={`text-gray-700 text-lg leading-relaxed ${
                hasImage ? "max-w-2xl" : "max-w-full"
              }`}
            >
              {description}
            </p>
          </div>

          {/* Image Side */}
          {hasImage && (
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
