import heroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center notebook-grid px-8 md:px-20 py-12 relative overflow-hidden select-none">
      {/* Left Side: Image with pretty good padding and a high-end frame */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
        <div className="relative group">
          {/* Subtle decorative backing shape */}
          <div className="absolute inset-0 bg-[#C4B6AA] rounded-2xl transform rotate-3 translate-x-2 translate-y-2 group-hover:rotate-1 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
          
          {/* Main Photo Frame */}
          <div className="relative bg-white p-6 pb-10 rounded-2xl border border-[#E6DFD5] shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <img
              src={heroImg}
              alt="Vibisha"
              className="w-60 h-80 md:w-80 md:h-[400px] rounded-lg object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Tiny tape accent */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-amber-500/20 backdrop-blur-[1px] rotate-[-6deg] shadow-sm"></div>
            
            <p className="font-handwritten text-center text-xl mt-5 text-[#3A322C]">
              Me, captured!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Text Area */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left mt-8 md:mt-0 px-4 md:px-8">
        <span className="font-handwritten text-3xl md:text-4xl text-[#E6B800] mb-3 inline-block animate-bounce">
          Hi!!!
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E1B18] leading-none mb-6 font-sans">
          I'm <span className="text-[#6F5E53] underline decoration-[#E6B800] decoration-wavy decoration-3 underline-offset-8">Vibisha</span>
        </h1>
        <p className="text-base md:text-lg text-[#4F4A45] font-light max-w-lg mt-2 leading-relaxed">
          Welcome to my portfolio. Scroll down to see my journey!
        </p>

        {/* Scroll Indicator */}
        <div className="mt-10 flex items-center gap-3 text-[#9B938B] font-medium text-sm tracking-wider uppercase">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6B800]"></span>
          </span>
          Scroll to explore
        </div>
      </div>

      {/* Bottom curved paper border style shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF6F0] to-transparent pointer-events-none"></div>
    </section>
  );
}