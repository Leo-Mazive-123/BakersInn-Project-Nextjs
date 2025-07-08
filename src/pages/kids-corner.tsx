import React from 'react';

const KidsCorner: React.FC = () => {
  return (
    <main >
     
     {/* <div className='flex justify-center'>
      <h1 className=' flex items-center font-bold text-8xl mb-15 mr-20'>Kid's <br />Corner</h1>
        <img className='h-100  mb-1 mt-40' src="/cartoon1.png" width={380} />
        <img src="cartoon2.png" width={500}  /> 
      </div>       */}

      <div>
        <img className='w-full h-140' src="kids.png" />
      </div>

      <section>
        <div className='flex justify-between bg-[#018BF1] py-20 ml-4 mr-4' >
          <div className=' ml-20 mt-17'>
              <h1 className="text-2xl md:text-3xl font-bold text-[white] mb-4 md:mb-0">Spaceship Maze</h1>
              <p className='py-5  text-white'>Help the spaceship through the maze to get <br /> back to earth. Move through levels with <br />
                  increasing difficulty; each puzzle starts the ship <br /> in a different location.</p>

             <p className='text-white'>Develop kids’ skills in strategizing, spatial <br /> awareness, hand-eye coordination, problem <br />solving and more! Free to play, priceless for <br /> learning.</p>
                <button className="mt-4 bg-[#A98141] text-white px-7 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
                    PLAY GAME
                </button>
          </div>

        <div>
          <img className='w-120 h-110 mr-10' src="game1.png" alt="" />
        </div>
          
        </div>
      </section>


      <section className='mt-10'>
        <div className='flex justify-between bg-[#FF4655] py-20 ml-4 mr-4' >
          <div className=' ml-20 mt-17'>
              <h1 className="text-2xl md:text-3xl font-bold text-[white] mb-4 md:mb-0">Risky Way</h1>
              <p className='py-5  text-white'>Risky Way is a free instant game. The highways <br />
                 of the future are risky and if you want to <br />survive you'll need to be smarter than all of <br />
                 them combined. All you have to do in this <br /> nerve-tingling racing game is click, hold, and let <br /> 
                 go. Of course, if you want to be an effective <br /> driver who is able to survive you'll have to <br /> 
                 know when to click, how long to hold, and only <br /> let go at the appropriate time.</p>

                <button className="mt-4 bg-white text-[#FF4655] px-7 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
                    PLAY GAME
                </button>
          </div>

        <div>
          <img className='w-120 h-110 mr-10' src="game2.png" alt="" />
        </div>
          
        </div>
      </section>



      <section className='mt-10'>
        <div className='flex justify-between bg-[#261B6C] py-20 ml-4 mr-4' >
          <div className=' ml-20 mt-17'>
              <h1 className="text-2xl md:text-3xl font-bold text-[white] mb-4 md:mb-0">Pacman</h1>
              <p className='py-5  text-white'>There's nothing like a little old school Pacman <br />
               game right? The great arcade game Pac Man <br /> was ported to the NES in 1988 and you can <br /> play
                it right here. Never played before?! <br /> What?! Eat all the pellets to complete a stage <br /> while
                 trying to score as many points as possible <br /> by eating fruit and ghosts along the way! But <br /> 
                 there's more! Ever wonder how Pacman got <br /> started? Check out the history of Pacman <br /> below
                  and see how it all began.</p>

                <button className="mt-4 bg-[#A98141] text-white px-7 py-2 rounded font-semibold hover:bg-[#8b6b34] -700 transition">
                    PLAY GAME
                </button>
          </div>

        <div>
          <img className='w-120 h-110 mr-10' src="game3.png" alt="" />
        </div>
          
        </div>
      </section>






    </main>
    
  );
};

export default KidsCorner;
