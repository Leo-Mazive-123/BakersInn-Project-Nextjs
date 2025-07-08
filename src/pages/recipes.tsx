'use client';
import React from 'react';
import Image from 'next/image';
import BasicTabs from '@/components/recipes';

const Recipes: React.FC = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-10 lg:mt-20">
        {/* Text Content */}
        <div className="text-left lg:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#00184C]">
            The Finest of <br /> Baker’s Tik Tok <br /> Community Recipes
          </h1>
          <p className="font-medium text-[#00184C] pt-4">
            Make the finest croissants worthy of 💡Paris from your 🏠home <br />
            #Croissant #Zimbabwe #Paris #Baker’s_Inn
          </p>
          <p className="mt-2 text-[#00184C]">😶@The_Bakers_Inn</p>
        </div>

        {/* Image Grid */}
        <div className="flex gap-4 justify-center lg:justify-end lg:w-1/2">
          <div className="flex flex-col gap-4">
            <Image
              src="/recipe1.png"
              alt="Recipe 1"
              width={240}
              height={240}
              className="rounded object-cover"
            />
            <Image
              src="/recipe3.png"
              alt="Recipe 3"
              width={240}
              height={240}
              className="rounded object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/recipe2.png"
              alt="Recipe 2"
              width={240}
              height={240}
              className="rounded object-cover"
            />
            <Image
              src="/recipe4.png"
              alt="Recipe 4"
              width={240}
              height={240}
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>

      {/* Recipes Tab Section */}
      <div className="text-center mt-20 mb-10">
        <h2 className="font-bold text-3xl text-[#00184C]">Our Recipes</h2>
      </div>

      <div className="mb-20">
        <BasicTabs />
      </div>
    </main>
  );
};

export default Recipes;



