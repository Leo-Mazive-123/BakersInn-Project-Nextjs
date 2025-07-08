import React from 'react';
import BasicTabs from '@/components/recipes';

const Recipes: React.FC = () => {
  return (
    <main>

      <div className="ml-5 flex justify-between">
        
        <div className='items-center justify-center mt-40 '>
          <h1 className='font-bold text-5xl text-[#00184C]'>The Finest of <br/> Baker’s Tik Tok <br /> Community Recipes</h1>
          <p className='font-medium text-[#00184C] pt-3'>Make the finest croissants worthy of 💡Paris from your 🏠home <br />
         #Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
         <p className='mt-2'>😶@The_Bakers_Inn</p>
        </div>


        <div className='flex gap-2 justify-end'>
           <div>
             <img src="recipe1.png" width={240}/>
             <img src="recipe3.png" width={240}/>
                   
           </div>
      
           <div>
             <img className='mt-1' src="recipe2.png" width={240} /> 
             <img className='mt-3' src="recipe4.png" width={235} />    
           </div>
        </div>
                   
    </div>

    <div className='text-center mt-20 mb-10'>
      <h2 className='font-bold text-3xl text-[#00184C]'>Our Recipes</h2>
    </div>


    <div className='mb-25'>
      <BasicTabs/>
    </div>

    
    


    </main>
  );
};

export default Recipes;
