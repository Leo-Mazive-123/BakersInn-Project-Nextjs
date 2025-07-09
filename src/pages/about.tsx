import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* Section 1: Hero Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[540px]">
          <img
            src="/about-pic.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-4 left-4 text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">
            About Us
          </h3>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="bg-[#d8d5d5] py-16 px-4 sm:px-10 md:px-20 mt-10 mx-5 md:mx-20 rounded-lg">
          <div className="flex flex-col md:flex-row justify-center items-start gap-10">
            {/* Mission */}
            <div className="flex items-start gap-4 max-w-xl">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="mission.png"
                alt="Mission"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1464] mb-2">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  To sharpen our edge in the manufacture <br />
                  and marketing of quality baked products.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4 max-w-xl">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="vision.png"
                alt="Vision"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1464] mb-2">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  To provide a nourishing, convenient and <br />
                  accessible answer to hunger’s call.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section - Full Width */}
        <section className="mt-10 md:mt-20">
          <img
            src="corevalues.png"
            alt="Core Values"
            className="w-full h-auto"
          />
        </section>

        {/* Promise Section - Full Width */}
        <section className="mt-10 md:mt-20 mb-10">
          <img
            src="promise.png"
            alt="Promise"
            className="w-full h-auto"
          />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;













// import React from 'react';

// const AboutPage: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Image container with relative position and fixed height */}
//       <div className="relative w-full h-[400px]">
//         <img
//           src="/about-pic.png"
        
//           className="w-400 h-140 "
//         />
//         <h3 className="absolute flex justify-center mb-6 left-5  text-black font-bold text-4xl">
//           About Us
//         </h3>
//       </div>

//      hhfjdjd

//     </main>
//   );
// };

// export default AboutPage;


// pages/about.tsx or components/AboutPage.tsx
