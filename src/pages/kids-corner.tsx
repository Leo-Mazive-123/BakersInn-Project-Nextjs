'use client';
import React from 'react';
import Image from 'next/image';

interface GameSection {
  title: string;
  description1: string;
  description2: string;
  color: string;
  image: string;
  button: {
    text: string;
    bg: string;
    textColor: string;
  };
}

const gameSections: GameSection[] = [
  {
    title: 'Spaceship Maze',
    description1:
      'Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.',
    description2:
      "Develop kids' skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.",
    color: '#018BF1',
    image: '/game1.png',
    button: {
      text: 'PLAY GAME',
      bg: '#A98141',
      textColor: 'white',
    },
  },
  {
    title: 'Risky Way',
    description1:
      "Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go.",
    description2:
      "Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time.",
    color: '#FF4655',
    image: '/game2.png',
    button: {
      text: 'PLAY GAME',
      bg: '#ffffff',
      textColor: '#FF4655',
    },
  },
  {
    title: 'Pacman',
    description1:
      "There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here.",
    description2:
      "Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way!",
    color: '#261B6C',
    image: '/game3.png',
    button: {
      text: 'PLAY GAME',
      bg: '#A98141',
      textColor: 'white',
    },
  },
];

const KidsCorner: React.FC = () => {
  return (
    <main className='bg-white'>
      {/* Hero Banner */}
      <div>
        <Image
          className="w-full h-auto max-h-[600px] object-cover"
          src="/kids.png"
          alt="Kids Banner"
          width={1920}
          height={600}
        />
      </div>

      {/* Game Sections */}
      {gameSections.map((game, index) => (
        <section
          key={index}
          className="mt-10"
          style={{ backgroundColor: game.color }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-20 px-4 md:px-20">
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {game.title}
              </h1>
              <p className="text-white mb-4">{game.description1}</p>
              <p className="text-white">{game.description2}</p>
              <button
                className="mt-6 px-7 py-2 rounded font-semibold transition"
                style={{
                  backgroundColor: game.button.bg,
                  color: game.button.textColor,
                }}
              >
                {game.button.text}
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src={game.image}
                alt={game.title}
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default KidsCorner;
