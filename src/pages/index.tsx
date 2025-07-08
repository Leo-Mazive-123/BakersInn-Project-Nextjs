'use client';
import React, { useState } from 'react';
import BasicTabs from '@/components/recipes';
import Link from 'next/link';
import Modal from '../components/Modal';
import DonationModal from '../components/DonationModal';
import ProceedModal from '../components/ProceedModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDonationOpen, setDonationOpen] = useState(false);
  const [isProceedOpen, setProceedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      {/* <Hero /> */}

      <section className="relative flex items-start justify-center w-full h-screen overflow-x-hidden">
        <img className="absolute ml-10 max-w-full" src="/first.png" alt="Hero" />

        {/* Button */}
        <div className="absolute inset-0 flex items-center justify-start ml-4 md:ml-18 mt-20 md:mt-76">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#A98141] text-white px-6 md:px-15 py-3 md:py-4 rounded font-semibold hover:bg-[#8b6b34] transition"
          >
            READ MORE
          </button>
        </div>
      </section>

      {/* About Baker’s Inn Section */}
      <section id="about" className="py-12 md:py-36 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:justify-between md:items-start mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
              About Baker’s Inn
            </h2>
            <div className="md:w-2/3 text-gray-700">
              <p className="mb-4">
                It all started back in the eighties when Baker’s Inn was just a small
                confectionery company that employed 40 people and produced about
                30,000 loaves a day.
                <strong>
                  {' '}
                  We now aim to provide a nourishing, convenient and accessible
                  answer to hunger’s call.
                </strong>
              </p>
              <Link href="/about">
                <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* Images Row - flex-wrap added, images max width */}
          <div className="flex flex-wrap items-center gap-3 mx-6 justify-center">
            <img
              className="rounded-md object-cover w-full max-w-[200px] h-48"
              src="/sandwich.png"
              alt="Sandwich"
            />
            <img
              className="rounded-md object-cover w-full max-w-[200px] h-48"
              src="/pie.png"
              alt="Pie"
            />
            <img
              className="rounded-md object-cover w-full max-w-[200px] h-48"
              src="/tea.png"
              alt="Tea"
            />
            <img
              className="rounded-md object-cover w-full max-w-[200px] h-48"
              src="/bread.png"
              alt="Bread"
            />
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section>
        <div className="flex justify-center py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
            OUR PRODUCT RANGE
          </h1>
        </div>

        {/* Images flex-wrap + max-width for images */}
        <div className="flex flex-wrap items-center gap-5 py-10 justify-center mx-6">
          <div>
            <img
              className="rounded-md object-cover w-full max-w-[300px] h-48"
              src="/bread.png"
              alt="Bread"
            />
          </div>
          <div>
            <img
              className="rounded-md object-cover w-full max-w-[300px] h-48"
              src="/pie.png"
              alt="Pie"
            />
          </div>
          <div>
            <img
              className="rounded-md object-cover w-full max-w-[300px] h-48"
              src="/scones.png"
              alt="Scones"
            />
          </div>
          <div>
            <img
              className="rounded-md object-cover w-full max-w-[300px] h-48"
              src="/donuts.png"
              alt="Donuts"
            />
          </div>
        </div>

        <div className="flex items-center justify-center py-5">
          <Link href="/contact">
            <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition">
              VIEW COMPLETE RANGE
            </button>
          </Link>
        </div>
      </section>

      {/* BOOK A FACTORY TOUR Section */}
      <section className="flex flex-col md:flex-row mr-6 md:mr-20 ml-6 md:ml-20 justify-between py-12 md:py-24">
        <div className="mt-12 md:mt-24 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
            Book A Factory Tour
          </h1>
          <p className="py-5 text-gray-700">
            Keen on seeing how Baker’s inn products are <br />
            made? Are you interested in a field trip day for your school’s class?
            <br />
            Get in touch with us to book a tour of our factory that is <br />
            closest to you. Fill in the booking form and we will get back to you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition"
          >
            BOOK A FACTORY TOUR
          </button>
        </div>

        <div>
          <img
            className="w-full max-w-[400px] h-auto"
            src="factory .png"
            alt="Factory"
          />
        </div>
      </section>

      {/* REQUEST A DONATION Section */}
      <section className="flex flex-col md:flex-row-reverse mr-6 md:mr-20 ml-6 md:ml-20 justify-between py-12 md:py-24">
        <div className="mt-12 md:mt-24 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
            REQUEST A DONATION
          </h1>
          <p className="py-5 text-gray-700">
            If you are holding an event that you wish to have us <br />
            donate to, we’re more than glad to help. Fill in the <br /> donation
            request form for us to best understand how we <br />
            can increase your event’s impact in the local community.
          </p>
          <button
            onClick={() => setDonationOpen(true)}
            className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition"
          >
            REQUEST A DONATION
          </button>
        </div>

        <div>
          <img
            className="w-full max-w-[400px] h-auto"
            src="request.png"
            alt="Request Donation"
          />
        </div>
      </section>

      {/* PLAY GAMES Section */}
      <section className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover mr-10"
          src="/frame.png"
          alt="Game frame"
        />
        <div className="absolute inset-0 flex items-center justify-end mr-4 md:mr-57 mt-8">
          <Link href="/kids-corner">
            <button className="bg-[#d82121] text-white px-6 md:px-10 py-2 md:py-3 rounded font-semibold hover:bg-[#ad1212] transition">
              PLAY GAMES
            </button>
          </Link>
        </div>
      </section>

      {/* Baker’s Recipes Section */}
      <section>
        <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-[#2F2160] mb-10 md:mb-15">
          Baker’s Recipes
        </h2>
        <div className="mb-10 md:mb-25">
          <BasicTabs />
        </div>
      </section>

      {/* Promotions Section */}
      <section>
        <div className="flex flex-col md:flex-row justify-between bg-[#A98141] mx-4 md:mx-20 py-10 md:py-20">
          <div className="mb-10 md:mb-0 md:ml-20 mt-10 md:mt-40">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-0">
              Get Notified about <br /> promotions WE OFFER
            </h1>

            <div className="flex w-full max-w-md mt-4 md:mt-10">
              <input
                type="email"
                placeholder="your email"
                className="flex-1 px-4 py-2 bg-[#c49a53] text-white placeholder-white outline-none"
              />
              <button className="px-4 md:px-6 py-2 bg-[#1b1464] text-white font-bold hover:bg-[#2e2b4d]">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              className="w-full max-w-[400px] h-auto mr-0 md:mr-10"
              src="zvingwa.png"
              alt="Zvingwa"
            />
          </div>
        </div>
      </section>

     

      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <DonationModal isOpen={isDonationOpen} onClose={() => setDonationOpen(false)} />
      <ProceedModal isOpen={isProceedOpen} onClose={() => setProceedOpen(false)} />
    </div>
  );
};

export default HomePage;




















// import React from 'react';
// import Hero from '../components/Hero';
// import Image from 'next/image';
// import BasicTabs from '@/components/recipes'
// import Link from 'next/link'


// const HomePage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Hero Section */}
//       <Hero />
//           {/* ✅ About Baker’s Inn Section */}
//           <section id="about" className="py-36 px-4 md:px-20">
//             <div className="max-w-7xl mx-auto">
//               <div className="md:flex md:justify-between md:items-start mb-10">
//                 <h2 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
//                   About Baker’s Inn
//                 </h2>
//                 <div className="md:w-2/3 text-gray-700">
//                   <p className="mb-4">
//                     It all started back in the eighties when Baker’s Inn was just a small
//                     confectionery company that employed 40 people and produced about
//                     30,000 loaves a day.
//                     <strong>
//                       We now aim to provide a nourishing, convenient and accessible
//                       answer to hunger’s call.
//                     </strong>
//                   </p>
//                   <Link href="/about">
//                 <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
//                 READ MORE
//               </button>
//             </Link>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 mr-6 ml-6">
//                 <img className="rounded-md object-cover w-full h-48" src="/sandwich.png" width={400} height={200} />
//                 <img className="rounded-md object-cover w-full h-48" src="/pie.png" width={400} height={200} />
//                 <img className="rounded-md object-cover w-full h-48" src="/tea.png" width={400} height={200} />
//                 <img className="rounded-md object-cover w-full h-48" src="/bread.png" width={400} height={200} />
//               </div>
//             </div>
//           </section> 

//       <section>
//         {/* Product Range Section */}


//         <div className='flex justify-center py-8'>
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">OUR PRODUCT RANGE</h1>
//         </div>

        
//           <div className='flex items-center gap-5 py-10 justify-between ml-6 mr-4 '>
            
//             <div>
//                 <img  className="rounded-md object-cover w-90 h-48"  src="/bread.png" width={200} height={200} />
//             </div>

//              <div>
//                 <img  className="rounded-md object-cover w-90 h-48"  src="/pie.png" width={200} height={200} />
//             </div>

//              <div>
//                 <img  className="rounded-md object-cover w-90 h-48"  src="/scones.png" width={200} height={200} />
//             </div>

            
//              <div>
//                 <img  className="rounded-md object-cover w-90 h-48"  src="/donuts.png" width={200} height={200} />
//             </div>
           
//           </div>


//           <div className='flex items-center justify-center py-5'>
//             <Link href="/contact">
//               <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition">
//                 VIEW COMPLETE RANGE
//               </button>
//            </Link>
//           </div>

//       </section>
 

//  {/* BOOK A FACTORY SECTION */}
//       <section className='flex mr-20 ml-20 justify-between py-25' >
        

//         <div className=' mt-25'>
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">Book A Factory Tour</h1>
//           <p className='py-5  text-gray-700'>Keen on seeing how Baker’s inn products are <br />
//             made? Are you interested in a field trip day for your school’s class?<br />
//              Get in touch with us to book a tour of our factory that is <br />
//              closest to you. Fill in the booking form and we will get
//               back to you.</p>
//           <button className="  bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
//                 BOOK A FACTORY TOUR
//             </button>
//         </div>

//         <div>
//           <img className='w-120 h-110' src="factory .png" alt="" />
//         </div>

//       </section>


      
//  {/* BOOK A FACTORY SECTION */}
//       <section className='flex flex-row-reverse mr-20 ml-20 justify-between py-25' >
        

//         <div className=' mt-25'>
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">REQUEST A DONATION</h1>
//           <p className='py-5  text-gray-700'>If you are holding an event that you wish to have us <br />
//            donate to, we’re more than glad to help. Fill in the <br /> donation request form for us to best 
//            understand how we <br />can increase your event’s impact in the local community.</p>
//           <button className="  bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
//                 REQUEST A DONATION
//             </button>
//         </div>

//         <div>
//           <img className='w-120 h-110' src="request.png" alt="" />
//         </div>

//       </section>

//       {/* <section>
//         <div className='mr-5 ml-0'>
//           <img className='absolute flex justify-end items-end' src="/frame.png" alt="" />
//             <button className=" relative -top-10/12 bg-[#d82121] text-white px-5 py-2 rounded font-semibold hover:bg-[#ad1212] -700 transition">
//                 PLAY GAMES
//             </button>
//         </div>
//       </section> */}

//     <section className="relative w-full h-screen">
//           {/* Fullscreen Image */}
//         <img className="absolute inset-0 w-full h-full object-cover mr-10" src="/frame.png" alt="Game frame" />
//        {/* BUTTON */}
//       <div className="absolute inset-0 flex items-center justify-center ml-170 mt-8">
//          <Link href="/kids-corner">
//         <button className="bg-[#d82121] text-white px-10 py-3 px- rounded font-semibold hover:bg-[#ad1212] transition">
//           PLAY GAMES
//         </button>
//         </Link>
//       </div>
//     </section>

//     <section>
//       <h2 className='flex justify-center text-2xl md:text-3xl font-bold text-[#2F2160] mb-15'>Baker’s Recipes</h2>
//         <div className='mb-25'>
//         <BasicTabs/>
//       </div>
  
//     </section>

//     <section>
//         <div className='flex justify-between bg-[#A98141]  ml-4 mr-4' >
//           <div className=' ml-20 mt-40'>
//               <h1 className="text-2xl md:text-4xl font-bold text-[white] mb-4 md:mb-0">Get Notified about <br /> promotions WE OFFER</h1>
              

//                 {/* <button className="mt-4 bg-[#2F2160] text-white px-7 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
//                     Submit
//                 </button> */}

//                 <div className="flex w-full max-w-md mt-10">

//                    <input
//                     type="email"
//                     placeholder="your email"
//                     className="flex-1 px-4 py-2 bg-[#c49a53] text-white placeholder-white outline-none"/>
//                     <button className="px-6 py-2  bg-[#1b1464] text-white font-bold hover:bg-[#2e2b4d]">
//                        SUBMIT
//                      </button>
//                 </div>

//           </div>

//           <div>
//             <img className='w-150 h-110 mr-10' src="zvingwa.png" alt="" />
//           </div>
          
//         </div>
//     </section>

    

    

//     </div>
//   );
// };

// export default HomePage;

























// 'use client';

// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import BasicTabs from '@/components/recipes';
// import Link from 'next/link';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// // Generic modal component for reuse
// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg p-6 max-w-3xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//         <button
//           onClick={onClose}
//           className="mt-4 text-gray-500 hover:text-gray-700 font-semibold"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// const HomePage: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDonationOpen, setDonationOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Hero Section */}
//       <Hero />

//       {/* About Baker’s Inn Section */}
//       <section id="about" className="py-36 px-4 md:px-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="md:flex md:justify-between md:items-start mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
//               About Baker’s Inn
//             </h2>
//             <div className="md:w-2/3 text-gray-700">
//               <p className="mb-4">
//                 It all started back in the eighties when Baker’s Inn was just a small
//                 confectionery company that employed 40 people and produced about
//                 30,000 loaves a day.{' '}
//                 <strong>
//                   We now aim to provide a nourishing, convenient and accessible answer to
//                   hunger’s call.
//                 </strong>
//               </p>
//               <Link href="/about">
//                 <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition">
//                   READ MORE
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 mr-6 ml-6">
//             <img
//               className="rounded-md object-cover w-full h-48"
//               src="/sandwich.png"
//               width={400}
//               height={200}
//               alt="Sandwich"
//             />
//             <img
//               className="rounded-md object-cover w-full h-48"
//               src="/pie.png"
//               width={400}
//               height={200}
//               alt="Pie"
//             />
//             <img
//               className="rounded-md object-cover w-full h-48"
//               src="/tea.png"
//               width={400}
//               height={200}
//               alt="Tea"
//             />
//             <img
//               className="rounded-md object-cover w-full h-48"
//               src="/bread.png"
//               width={400}
//               height={200}
//               alt="Bread"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Product Range Section */}
//       <section>
//         <div className="flex justify-center py-8">
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
//             OUR PRODUCT RANGE
//           </h1>
//         </div>

//         <div className="flex items-center gap-5 py-10 justify-between ml-6 mr-4">
//           <div>
//             <img
//               className="rounded-md object-cover w-90 h-48"
//               src="/bread.png"
//               width={200}
//               height={200}
//               alt="Bread"
//             />
//           </div>
//           <div>
//             <img
//               className="rounded-md object-cover w-90 h-48"
//               src="/pie.png"
//               width={200}
//               height={200}
//               alt="Pie"
//             />
//           </div>
//           <div>
//             <img
//               className="rounded-md object-cover w-90 h-48"
//               src="/scones.png"
//               width={200}
//               height={200}
//               alt="Scones"
//             />
//           </div>
//           <div>
//             <img
//               className="rounded-md object-cover w-90 h-48"
//               src="/donuts.png"
//               width={200}
//               height={200}
//               alt="Donuts"
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-center py-5">
//           <Link href="/contact">
//             <button className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition">
//               VIEW COMPLETE RANGE
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* BOOK A FACTORY TOUR Section */}
//       <section className="flex mr-20 ml-20 justify-between py-24">
//         <div className="mt-24">
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
//             Book A Factory Tour
//           </h1>
//           <p className="py-5 text-gray-700">
//             Keen on seeing how Baker’s inn products are <br />
//             made? Are you interested in a field trip day for your school’s class?
//             <br />
//             Get in touch with us to book a tour of our factory that is <br />
//             closest to you. Fill in the booking form and we will get back to you.
//           </p>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition"
//           >
//             BOOK A FACTORY TOUR
//           </button>
//         </div>

//         <div>
//           <img
//             className="w-120 h-110"
//             src="factory .png"
//             alt="Factory"
//           />
//         </div>
//       </section>

//       {/* REQUEST A DONATION Section */}
//       <section className="flex flex-row-reverse mr-20 ml-20 justify-between py-24">
//         <div className="mt-24">
//           <h1 className="text-2xl md:text-3xl font-bold text-[#2F2160] mb-4 md:mb-0">
//             REQUEST A DONATION
//           </h1>
//           <p className="py-5 text-gray-700">
//             If you are holding an event that you wish to have us <br />
//             donate to, we’re more than glad to help. Fill in the <br /> donation
//             request form for us to best understand how we <br />
//             can increase your event’s impact in the local community.
//           </p>
//           <button
//             onClick={() => setDonationOpen(true)}
//             className="bg-[#A98141] text-white px-5 py-2 rounded font-semibold hover:bg-[#8b6b34] transition"
//           >
//             REQUEST A DONATION
//           </button>
//         </div>

//         <div>
//           <img
//             className="w-120 h-110"
//             src="request.png"
//             alt="Request Donation"
//           />
//         </div>
//       </section>

//       {/* PLAY GAMES Section */}
//       <section className="relative w-full h-screen">
//         <img
//           className="absolute inset-0 w-full h-full object-cover mr-10"
//           src="/frame.png"
//           alt="Game frame"
//         />
//         <div className="absolute inset-0 flex items-center justify-center ml-40 mt-8">
//           <Link href="/kids-corner">
//             <button className="bg-[#d82121] text-white px-10 py-3 rounded font-semibold hover:bg-[#ad1212] transition">
//               PLAY GAMES
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Baker’s Recipes Section */}
//       <section>
//         <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-[#2F2160] mb-15">
//           Baker’s Recipes
//         </h2>
//         <div className="mb-25">
//           <BasicTabs />
//         </div>
//       </section>

//       {/* Promotions Section */}
//       <section>
//         <div className="flex justify-between bg-[#A98141] ml-4 mr-4">
//           <div className="ml-20 mt-40">
//             <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-0">
//               Get Notified about <br /> promotions WE OFFER
//             </h1>

//             <div className="flex w-full max-w-md mt-10">
//               <input
//                 type="email"
//                 placeholder="your email"
//                 className="flex-1 px-4 py-2 bg-[#c49a53] text-white placeholder-white outline-none"
//               />
//               <button className="px-6 py-2 bg-[#1b1464] text-white font-bold hover:bg-[#2e2b4d]">
//                 SUBMIT
//               </button>
//             </div>
//           </div>

//           <div>
//             <img
//               className="w-150 h-110 mr-10"
//               src="zvingwa.png"
//               alt="Zvingwa"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Modal for Booking Form */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <h2 className="text-2xl font-bold mb-4 text-[#2F2160]">Book A Factory Tour</h2>
//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Name of Organization"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Name of Contact Person"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="tel"
//             placeholder="Organization Address"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="email"
//             placeholder="Organization's Resident Town"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="tel"
//             placeholder="Contact Person's Telephone"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="email"
//             placeholder="Contact Person's E-mail"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="date"
//             placeholder="Date of visit"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <select className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2">
//             <option>Number of Participants</option>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>5</option>
//           </select>
//           <select className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2">
//             <option>Age Range of Participants</option>
//             <option>20 and Below</option>
//             <option>20-30</option>
//             <option>30-40</option>
//             <option>40 and Above</option>
//           </select>
//           <button
//             type="submit"
//             className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg rounded"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </Modal>

//       {/* Modal for Donation Form */}
//       <Modal isOpen={isDonationOpen} onClose={() => setDonationOpen(false)}>
//         <h2 className="text-2xl font-bold mb-4 text-[#2F2160]">Request a Donation</h2>
//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Event Name"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="date"
//             placeholder="Event Date"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <textarea
//             placeholder="Describe your event and how we can help"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg rounded"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;
