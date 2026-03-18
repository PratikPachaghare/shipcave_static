import { brandConfig } from "../../config/brandConfig";


// Using placeholder URLs - replace with local assets or imports
const logos = brandConfig.meta.Home.logoScroll.infinitScrollImage;

const LogoScroll = () => {
  return (
    <section className="w-full py-8 bg-white overflow-hidden mt-3 ">
      <div className="mx-auto px-4 md:px-6 lg:px-8 overflow-hidden relative">
        <div className="flex w-[200%] animate-scroll items-center space-x-16">
          {/* First set - fixed container so all logos (including Shadowfx, Shree Maruti) get same space */}
          {logos.map((src, index) => (
            <div
              key={`1-${index}`}
              className="flex shrink-0 items-center justify-center h-16 md:h-20 w-36 md:w-40 mx-20 overflow-visible"
            >
              <img
                src={src}
                alt="Partner"
                className="max-h-full max-w-full object-contain transition scale-125"
              />
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {logos.map((src, index) => (
            <div
              key={`2-${index}`}
              className="flex shrink-0 items-center justify-center h-16 md:h-20 w-36 md:w-40 mx-20 overflow-visible"
            >
              <img
                src={src}
                alt="Partner"
                className="max-h-full max-w-full object-contain transition scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

//     <section className="w-full py-10 bg-white mt-3">
//   <div className="mx-auto px-6 overflow-hidden">
//     <div className="flex animate-scroll items-center space-x-20 whitespace-nowrap">
//       {logos.concat(logos).map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt="Partner"
//           className="h-12 md:h-16 object-contain"
//         />
//       ))}
//     </div>
//   </div>
// </section>
  );
};

export default LogoScroll;


// import React from "react";
// import { brandConfig } from "../../config/brandConfig";

// const logos = brandConfig.meta.Home.logoScroll.infinitScrollImage;

// const LogoScroll = () => {
//   return (
//     <section className="w-full py-8 bg-white overflow-hidden mt-3">
//       <div className="mx-auto px-4 md:px-6 lg:px-8 overflow-hidden relative">
//         <div className="flex w-[200%] animate-scroll items-center space-x-16">

//           {/* First set */}
//           {logos.map((src, index) => (
//             <div
//               key={`1-${index}`}
//               className="flex items-center justify-center h-16 w-36"
//             >
//               <img
//                 src={src}
//                 alt="Partner"
//                 className="max-h-16 max-w-full object-contain"
//               />
//             </div>
//           ))}

//           {/* Duplicate set for infinite loop */}
//           {logos.map((src, index) => (
//             <div
//               key={`2-${index}`}
//               className="flex items-center justify-center h-16 w-36"
//             >
//               <img
//                 src={src}
//                 alt="Partner"
//                 className="max-h-16 max-w-full object-contain"
//               />
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoScroll;


// import React from "react";
// import { brandConfig } from "../../config/brandConfig";

// const logos = brandConfig.meta.Home.logoScroll.infinitScrollImage;

// const LogoScroll = () => {
//   return (
//     <section className="w-full py-8 bg-white overflow-hidden mt-3">
//       <div className="mx-auto px-4 overflow-hidden">
//         <div className="flex items-center justify-center gap-24">

//           {logos.map((src, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center w-[180px] h-[60px]"
//             >
//               <img
//                 src={src}
//                 alt="Partner"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoScroll;




