import React from 'react';
import BasicTabs from '@/components/products';

const Products: React.FC = () => {
  return (
    <main className="p-4">
      {/* Relative container with fixed height for desktop, smaller for mobile */}
      <div className="relative w-full h-60 sm:h-[540px]">
        {/* Image fills container */}
        <img
          src="/products-pic.png"
          alt="Our Product Range"
          className="w-full h-full object-cover"
        />
        {/* Text positioned bottom-left with background for readability */}
        <h3 className="absolute bottom-2 left-2 text-white text-xl sm:text-4xl font-bold  bg-opacity-50 px-2 rounded">
          Our Product Range
        </h3>
      </div>

      <section>
        <h2 className="mt-6 sm:mt-15 text-center text-xl sm:text-3xl font-bold text-[#2F2160]">
          Our products
        </h2>

        <div className="mb-10 sm:mb-25">
          <BasicTabs />
        </div>
      </section>
    </main>
  );
};

export default Products;


