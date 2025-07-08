import React from 'react';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D0F50] text-white py-12 px-4 sm:px-6 font-sans mt-20">
      {/* Logo */}
      <div className="w-full flex items-center justify-center mb-10">
        <div className="flex w-full items-center">
          <div className="flex-grow border-t border-white opacity-30"></div>
          <div className="px-6">
            <Image src="/footer-logo.png" alt="Footer Logo" width={100} height={100} />
          </div>
          <div className="flex-grow border-t border-white opacity-30"></div>
        </div>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto mb-12 text-center lg:text-left">
        {/* Instagram Feed */}
        <div>
          <h4 className="text-lg font-bold mb-4">Instagram Feed</h4>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <Image src="/footer-pic1.png" alt="Instagram Image 1" width={100} height={100} className="w-full h-auto" />
            <Image src="/footer-pic2.png" alt="Instagram Image 2" width={100} height={100} className="w-full h-auto" />
            <Image src="/footer-pic3.png" alt="Instagram Image 3" width={100} height={100} className="w-full h-auto" />
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-bold mb-4">Our Location</h4>
          <p className="text-sm">1 Shepperton Road,</p>
          <p className="text-sm">Graniteside,<br />Harare</p>
          <p className="text-sm">Zimbabwe</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4">Get In Touch With Us</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <FaPhone /> 08080151 / 08080152
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <FaPhone /> +263 242 751 481 / 710 334
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <FaEnvelope />
              <a href="mailto:marketing@bakersinnzim.com" className="hover:underline">
                marketing@bakersinnzim.com
              </a>
            </p>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg font-bold mb-4">Sitemap</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Recipes</a></li>
            <li><a href="#" className="hover:underline">Kids Corner</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center lg:justify-start gap-6 text-xl mb-8">
        <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter /></a>
        <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn /></a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-center gap-3 px-4">
        <div className="flex items-center gap-2">
          Subsidiary of
          <Image src="/inscor.png" alt="Inscor Logo" width={50} height={30} />
        </div>
        <div>© {currentYear} Bakers Inn. All rights reserved.</div>
        <div>
          Site by{' '}
          <a
            href="https://www.nowalls.africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            NoWalls Pan Africa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





// import React from 'react';
// import Image from 'next/image';
// import { FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     // Outer footer container
//     <footer className="bg-[#2D0F50] text-white py-10 px-5 flex flex-col items-center font-sans">
//       {/* Top Section: Logo/Icon */}
//       <div className="mb-10">
//         {/* Placeholder for your baker's hat/oven mitt icon */}
//         {/* Make sure the SVG itself is suitable for color changes, or use a white PNG */}
//         <img src="/footer-logo.png"  width={100} height={100}/>
          
//       </div>

//       {/* Main Content Section - Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mb-10 px-5 text-left md:text-left">
//         {/* Instagram Feed Section */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Instagram Feed</h4>
//           <div className="grid grid-cols-3 gap-3">
//             {/* Replace with actual image paths and dynamic fetching */}
//             <img src="/footer-pic1.png"  width={100} height={100} className="w-full h-auto object-cover rounded" />
//             <img src="/footer-pic2.png"  width={100} height={100} className="w-full h-auto object-cover rounded" />
//             <img src="/footer-pic3.png"  width={100} height={100} className="w-full h-auto object-cover rounded" />

//           </div>
//         </div>

//         {/* Our Location Section */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Our Location</h4>
//           <p className="text-sm leading-relaxed mb-1">1 Shepperton Road,</p>
//           <p className="text-sm leading-relaxed mb-1">Graniteside,</p>
//           <p className="text-sm leading-relaxed mb-1">Harare,</p>
//           <p className="text-sm leading-relaxed">Zimbabwe.</p>
//         </div>

//         {/* Get In Touch With Us Section */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Get In Touch With Us</h4>
//           <p className="text-sm leading-relaxed flex items-center mb-1"><FaPhone className="mr-2" /> 08080151</p>
//           <p className="text-sm leading-relaxed flex items-center mb-1"><FaPhone className="mr-2" /> 08080152</p>
//           <p className="text-sm leading-relaxed flex items-center mb-1"><FaPhone className="mr-2" /> +263 242 751 481</p>
//           <p className="text-sm leading-relaxed flex items-center mb-1"><FaPhone className="mr-2" /> +263 242 710 334</p>
//           <p className="text-sm leading-relaxed flex items-center"><FaEnvelope className="mr-2" /> <a href="mailto:marketing@bakersinnzim.com" className="hover:underline">marketing@bakersinnzim.com</a></p>
//         </div>

//         {/* Sitemap Section */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Sitemap</h4>
//           <ul className="list-none p-0 m-0">
//             <li className="mb-1"><a href="#" className="text-sm hover:underline">Home</a></li>
//             <li className="mb-1"><a href="#" className="text-sm hover:underline">About Us</a></li>
//             <li className="mb-1"><a href="#" className="text-sm hover:underline">Products</a></li>
//             <li className="mb-1"><a href="#" className="text-sm hover:underline">Recipes</a></li>
//             <li><a href="#" className="text-sm hover:underline">Kids Corner</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex gap-6 mb-10 justify-start">
//         <a href="#" aria-label="Twitter" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaTwitter /></a>
//         <a href="#" aria-label="Facebook" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaFacebookF /></a>
//         <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-gray-300 transition-colors duration-200"><FaLinkedinIn /></a>
//       </div>

//       {/* Bottom Bar */}
//       <div className="w-full max-w-7xl border-t border-gray-700 pt-5 flex flex-col md:flex-row flex-wrap justify-between items-center text-sm text-center md:text-left px-5">
//         <div className="mb-4 md:mb-0 flex items-center">
//           Subsidiary of {' '}
//           <Image
//             src="/images/innscor-logo.svg" // Replace with your actual Innscor logo path
//             alt="Innscor Logo"
//             width={80}
//             height={20}
//             className="ml-2"
//           />
//         </div>
//         <div className="mb-4 md:mb-0">
//           Copyright © {currentYear} Bakers Inn. All rights reserved.
//         </div>
//         <div>
//           Site by <a href="https://www.nowalls.africa/" target="_blank" rel="noopener noreferrer" className="hover:underline">NoWalls Pan Africa</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
