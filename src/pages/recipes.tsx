'use client';
import React from 'react';
import Image from 'next/image';
import BasicTabs from '@/components/recipes';

const Recipes: React.FC = () => {
  return (
    <main>
      <div className="ml-5 flex flex-col lg:flex-row justify-between">
        {/* Text Section */}
        <div className="items-center justify-center mt-20 lg:mt-40">
          <h1 className="font-bold text-4xl lg:text-5xl text-[#00184C]">
            The Finest of <br /> Baker’s Tik Tok <br /> Community Recipes
          </h1>
          <p className="font-medium text-[#00184C] pt-3">
            Make the finest croissants worthy of 💡Paris from your 🏠home <br />
            #Croissant #Zimbabwe #Paris #Baker’s_Inn
          </p>
          <p className="mt-2">😶@The_Bakers_Inn</p>
        </div>

        {/* Image Grid */}
        <div className="flex gap-2 justify-end mt-10 lg:mt-0">
          <div className="flex flex-col gap-2">
            <Image
              src="/recipe1.png"
              alt="Recipe 1"
              width={240}
              height={240}
              className="rounded"
            />
            <Image
              src="/recipe3.png"
              alt="Recipe 3"
              width={240}
              height={240}
              className="rounded"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/recipe2.png"
              alt="Recipe 2"
              width={240}
              height={240}
              className="rounded"
            />
            <Image
              src="/recipe4.png"
              alt="Recipe 4"
              width={235}
              height={235}
              className="rounded"
            />
          </div>
        </div>
      </div>

      {/* Recipes Tab Section */}
      <div className="text-center mt-20 mb-10">
        <h2 className="font-bold text-3xl text-[#00184C]">Our Recipes</h2>
      </div>

      <div className="mb-25">
        <BasicTabs />
      </div>
    </main>
  );
};

export default Recipes;


