

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center w-full h-screen overflow-x-hidden">
      <img className="absolute ml-10" src="/first.png" alt="Hero" />

      {/* Button */}
      <div className="absolute inset-0 flex items-center justify-start ml-18 mt-76">
        <button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#A98141] text-white px-15 py-4 rounded font-semibold hover:bg-[#8b6b34] transition"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;

