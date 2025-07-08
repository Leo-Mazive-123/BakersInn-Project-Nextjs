import React from 'react';


const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content */}
      <main className="flex-grow">
        {/* Section 1: Hero Image */}
        <div className="relative w-full h-[540px]">
          <img
            src="/about-pic.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-lg">
            About Us
          </h3>
        </div>

          {/* Section 2: Mission & Vision */}
              <div className="bg-[#d8d5d5] py-30 px-6 md:px-20 mt-30 ml-5 mr-5">
                <div className="flex flex-col md:flex-row justify-center items-start gap-10">

                     {/* Mission */}
                    <div className="flex items-start gap-4 max-w-xl">
                    <img className="w-20 h-20 object-contain" src="mission.png" alt="Mission" />
                 <div>
                   <h2 className="text-3xl font-bold text-[#1b1464] mb-2">Our Mission</h2>
                     <p className="text-gray-700">
                      To sharpen our edge in the manufacture <br />
                      and marketing of quality baked products.
                     </p>
                 </div>
               </div>

                   {/* Vision */}
                <div className="flex items-start gap-4 max-w-xl">
                    <img className="w-20 h-20 object-contain" src="vision.png" alt="Vision" />
                      <div>
                          <h2 className="text-3xl font-bold text-[#1b1464] mb-2">Our Vision</h2>
                            <p className="text-gray-700">
                            To provide a nourishing, convenient and <br />
                            accessible answer to hunger’s call.
                          </p>
                      </div>
                 </div>

                </div>
              </div>


        <section className='flex justify-center mt-30'>
          {/* <h2 className='mt-15 flex justify-center text-2xl md:text-3xl font-bold text-[#2F2160]'>Our Core Values</h2> */}
          <img className='w-300' src="corevalues.png" alt="" />
        </section>


        <section className='flex justify-center mt-20'>
          <img className='w-300' src="promise.png" alt="" />
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
