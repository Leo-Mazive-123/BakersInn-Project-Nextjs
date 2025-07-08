'use client';

import React from 'react';
import Image from 'next/image';
import BasicTabs from '@/components/products';

const Products: React.FC = () => {
  return (
    <main className="p-0">
      {/* Relative container with fixed height */}
      <div className="relative w-full h-[540px]">
        {/* Optimized Image */}
        <Image
          src="/products-pic.png"
          alt="Our Product Range"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Text positioned at bottom-left with background */}
        <h3 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
          Our Product Range
        </h3>
      </div>

      <section>
        <h2 className="mt-15 flex justify-center text-2xl md:text-3xl font-bold text-[#2F2160]">
          Our products
        </h2>

        <div className="mb-25">
          <BasicTabs />
        </div>
      </section>
    </main>
  );
};

export default Products;

