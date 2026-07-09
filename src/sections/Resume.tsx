export default function Resume() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-xl mx-auto px-4 md:px-0 py-6 select-none">
      <div className="p-6 md:p-8 bg-white/60 border border-[#E6DFD5] rounded-2xl shadow-xl text-center relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6B800] opacity-10 rounded-bl-full pointer-events-none"></div>

        <h2 className="text-xl md:text-2xl font-bold text-[#1E1B18] mb-3">
          Thank You for Visiting!
        </h2>
        
        <p className="text-xs md:text-sm text-[#4F4A45] leading-relaxed mb-6 font-sans max-w-sm mx-auto">
          We've reached the end of the journey. You can download a complete PDF copy of my resume using the button below.
        </p>

        {/* Download Button */}
        <a
          href="https://drive.google.com/file/d/1uFxHHFhw_vRy-qHsaPWTeanNJkTVieMt/view?usp=sharing"
          download="Vibisha_Resume.pdf"
          className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#6F5E53] text-[#FAF6F0] font-bold text-sm md:text-base rounded-full border border-[#6F5E53] hover:bg-[#FAF6F0] hover:text-[#1E1B18] hover:border-[#1E1B18] hover:shadow-md transition-all duration-300 group cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:translate-y-0.5 transition-transform duration-300"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>

        {/* Farewell Message from Robot */}
        <div className="mt-8 p-3 bg-[#FAF6F0] rounded-xl border border-[#E6DFD5] inline-flex items-center gap-3 text-left max-w-sm mx-auto">
          <div className="text-xl animate-bounce">🤖</div>
          <p className="text-[11px] text-[#5C554F] font-medium leading-normal font-sans">
            "Bye! Thank you so much for visiting my portfolio! Safe travels!"
          </p>
        </div>
      </div>
    </div>
  );
}