const OurHappyCustomers = () => {
  return (
    // <section 
    //   className="py-20" 
    //   style={{ backgroundColor: `${theme.brandMainColor}08` }} // Very light version of brand color (8% opacity)
    // >

      <section>
      {/* <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div>
        {/* Heading */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: theme.headingTextColor }}>
            <span style={{ color: theme.brandMainColor }}>{config.heading.main}</span> {config.heading.highlight}
          </h2>
        </div> */}

        {/* Brand Grid */}
        {/* <div className="flex flex-wrap justify-center gap-10 mb-16 items-center w-full">
          {config.brands.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 flex items-center justify-center w-60 h-32 hover:shadow-md transition-all duration-300 drop-shadow-sm"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div> */}

        {/* Testimonial Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {config.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-1 transition duration-300"
              style={{ 
                background: `linear-gradient(150deg, ${theme.pageGradientLight}, white, ${theme.pageGradientLight})` 
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full bg-transparent shadow-lg mb-6 object-cover"
              />

              <h3 className="text-xl font-bold" style={{ color: theme.headingTextColor }}>
                {item.name}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: theme.brandMainColor }}>
                {item.role}
              </p>

              <p className="italic leading-relaxed" style={{ color: theme.paragraphTextColor }}>
                "{item.quote}"
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OurHappyCustomers;