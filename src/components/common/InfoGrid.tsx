import React from 'react';

interface InfoItem {
  id: number | string;
  title: string;
  desc: string;
}

interface InfoGridProps {
  title: React.ReactNode;
  description?: string;
  items: InfoItem[];
  columns?: 2 | 3 | 4; // Flexible column count
}

const InfoGrid: React.FC<InfoGridProps> = ({ 
  title, 
  description, 
  items,
  columns = 3 
}) => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl">
              {description}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-black mb-3 flex gap-2">
              {item.id}{". "}
                {item.title}
              </h3>
              <p className="pl-6 text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;