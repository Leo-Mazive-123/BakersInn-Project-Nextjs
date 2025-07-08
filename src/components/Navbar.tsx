'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Baker's Inn Logo" width={120} height={120} />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#00184C] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#00184C]">
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/kids-corner">Kids Corner</Link>
          <Link href="/contact">
            <span className="ml-4 bg-[#A98141] text-white px-4 py-2 rounded hover:bg-[#8b6b34] transition">
              CONTACT US
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col bg-[#f9f9f9] rounded-md mt-4 p-4 space-y-4 text-sm font-semibold text-[#00184C] shadow-md">
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/recipes" onClick={() => setIsOpen(false)}>Recipes</Link>
          <Link href="/kids-corner" onClick={() => setIsOpen(false)}>Kids Corner</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <span className="inline-block bg-[#A98141] text-white px-4 py-2 rounded hover:bg-[#8b6b34] transition">
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;











// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <header className="flex items-center justify-between p-4 shadow-md">
//       <div className="flex items-center gap-2">
//         <Image src="/logo.png" alt="Baker's Inn Logo" width={120} height={120} />
        
//       </div>
//       <nav className="hidden md:flex gap-6 text-sm font-medium text-[#00184C]">
//         <Link href="/about">About Us</Link>
//         <Link href="/products">Products</Link>
//         <Link href="/recipes">Recipes</Link>
//         <Link href="/kids-corner">Kid's Corner</Link>
//         <Link
//           href="/contact"
//           className="ml-4 bg-[#A98141] text-white px-4 py-2 rounded hover:bg-[#8b6b34]"
//         >
//           CONTACT US
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;