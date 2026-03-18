import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  description?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, description }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* --- Header --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        {description && <p className="mb-8 text-gray-700">{description}</p>}

        {/* --- Accordion Grid --- */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-xl overflow-hidden transition-all duration-300
                  ${
                    isOpen
                      ? "shadow-md ring-1 ring-blue-100"
                      : "shadow-sm hover:shadow-md border border-gray-100"
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span
                    className={`font-semibold text-lg ${
                      isOpen ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`
                    p-2 rounded-full transition-colors duration-200
                    ${isOpen ? "bg-blue-50 text-primary" : "text-gray-400"}
                  `}
                  >
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
