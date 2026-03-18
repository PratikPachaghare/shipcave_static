// src/components/common/ProcessSteps.tsx
import type { FC, ReactNode } from "react";

interface Step {
  id: number | string;
  icon: string;
  title: string;
  description?: string;
}

interface ProcessStepsProps {
  title: ReactNode;
  description?: string;
  description2?: string;
  steps: Step[];
  gridCols?: number;
}

const ProcessSteps: FC<ProcessStepsProps> = ({
  title,
  description,
  description2,
  steps,
}) => {
  return (
    <section className="w-full py-16 bg-transperent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-full mx-auto mb-16 text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg">{description}</p>
          )}
        </div>

        {/* Steps Row */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {/* Decorative Dashed Line (Visible only on Desktop) */}
          <div className="hidden lg:block absolute top-9 left-0 w-full h-0.5 border-t-2 border-dashed border-primary -z-0" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Icon */}

              <img
                src={step.icon}
                alt={step.title}
                className={`
        w-15 h-15 mb-5 transition-transform group-hover:scale-110
        ${index === 0 ? "" : "bg-white"}
      `}
              />

              {/* Content */}
              <h3 className="text-lg font-bold text-black mb-2 px-2">
                {step.title}
              </h3>
              {step.description && (
                <p className="text-gray-700 py-2 px-7 text-left">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-full mx-auto mb-16 text-left mt-10">
          {description2 && (
            <p className="text-gray-600 text-lg">{description2}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
