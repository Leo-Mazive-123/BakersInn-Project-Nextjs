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

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Clickable logo and name */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Baker's Inn Logo" width={120} height={120} />
      
      </Link>

      {/* Navigation links */}
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
    </header>
  );
};

export default Navbar;

