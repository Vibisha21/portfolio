export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-2xl mx-auto px-4 md:px-0 py-8 select-none relative">
      {/* Scrapbook Doodles */}
      <svg className="absolute -top-10 -left-10 w-28 h-28 text-[#6F5E53]/25 transform -rotate-12 pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 50 L85 20 L55 80 L45 55 Z" fill="currentColor" fillOpacity="0.05"/>
        <path d="M45 55 L55 55" />
        <path d="M45 55 L35 70 L45 62" fill="currentColor" fillOpacity="0.1"/>
        <path d="M15 65 Q 25 68 35 63" strokeDasharray="2 3"/>
      </svg>

      <h2 className="text-3xl font-bold text-[#1E1B18] mb-6 flex items-center gap-3">
        <span className="text-[#6F5E53]">06.</span> Contact Me
      </h2>

      <p className="text-[#4F4A45] mb-8 text-sm md:text-base font-light">
        Feel free to reach out to me! I'm always open to discussing new projects, design ideas, or opportunities.
      </p>

      <div className="space-y-6">
        {/* Telephone Card */}
        <div className="flex items-center gap-5 p-4 bg-white/40 border border-[#E6DFD5] rounded-xl hover:border-[#6F5E53] hover:bg-white/60 transition-all duration-300 group">
          {/* Telephone Doodle SVG */}
          <div className="w-14 h-14 bg-[#FAF6F0] rounded-xl flex items-center justify-center border border-[#E6DFD5] text-[#6F5E53] group-hover:text-[#E6B800] transition-colors duration-300">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:rotate-12 transition-transform duration-300"
            >
              {/* Handset */}
              <path d="M 6 12 C 6 10, 30 10, 30 12 C 30 13, 27 15, 27 15 L 9 15 C 9 15, 6 13, 6 12 Z" />
              <path d="M 12 11 L 12 8 C 12 7, 24 7, 24 8 L 24 11" />
              {/* Body */}
              <path d="M 10 17 L 26 17 C 28 17, 29 19, 29 21 L 27 29 C 27 31, 9 31, 9 29 L 7 21 C 7 19, 8 17, 10 17 Z" strokeDasharray="60" />
              {/* Dial Pad Grid */}
              <circle cx="14" cy="21" r="1" fill="currentColor" />
              <circle cx="18" cy="21" r="1" fill="currentColor" />
              <circle cx="22" cy="21" r="1" fill="currentColor" />
              <circle cx="14" cy="25" r="1" fill="currentColor" />
              <circle cx="18" cy="25" r="1" fill="currentColor" />
              <circle cx="22" cy="25" r="1" fill="currentColor" />
              {/* Curly Wire */}
              <path d="M 7 26 Q 3 27, 4 30 Q 6 32, 3 32" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9B938B]">Call Me</h4>
            <a href="tel:+919876543210" className="text-base md:text-lg font-bold text-[#1E1B18] hover:underline">
              +91 9171764640
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-center gap-5 p-4 bg-white/40 border border-[#E6DFD5] rounded-xl hover:border-[#6F5E53] hover:bg-white/60 transition-all duration-300 group">
          {/* Email Doodle SVG */}
          <div className="w-14 h-14 bg-[#FAF6F0] rounded-xl flex items-center justify-center border border-[#E6DFD5] text-[#6F5E53] group-hover:text-[#E6B800] transition-colors duration-300">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:scale-110 transition-transform duration-300"
            >
              {/* Main Envelope Body */}
              <rect x="5" y="9" width="26" height="18" rx="3" />
              {/* Front Flap */}
              <path d="M 5 9 L 18 20 L 31 9" />
              {/* Side creases */}
              <path d="M 5 27 L 14 18" />
              {/* Right crease */}
              <path d="M 31 27 L 22 18" />
              {/* Heart/Wax seal accent */}
              <circle cx="18" cy="20" r="1.5" fill="#E6B800" stroke="none" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9B938B]">Email Me</h4>
            <a href="mailto:vibisha.portfolio@example.com" className="text-base md:text-lg font-bold text-[#1E1B18] hover:underline">
              vibisha.contact@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="flex items-center gap-5 p-4 bg-white/40 border border-[#E6DFD5] rounded-xl hover:border-[#6F5E53] hover:bg-white/60 transition-all duration-300 group">
          {/* LinkedIn Doodle SVG */}
          <div className="w-14 h-14 bg-[#FAF6F0] rounded-xl flex items-center justify-center border border-[#E6DFD5] text-[#6F5E53] group-hover:text-[#E6B800] transition-colors duration-300">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:-rotate-12 transition-transform duration-300"
            >
              {/* Hand Drawn Box */}
              <path d="M 8 5 L 28 6 C 30 6, 31 7, 31 9 L 30 27 C 30 29, 29 30, 27 30 L 7 29 C 5 29, 5 27, 5 26 L 6 9 C 6 7, 7 5, 8 5 Z" />
              {/* Letter 'i' */}
              <line x1="12" y1="17" x2="12" y2="24" strokeWidth="2.5" />
              <circle cx="12" cy="13" r="1.5" fill="currentColor" />
              {/* Letter 'n' */}
              <path d="M 18 24 L 18 17 C 18 15, 20 14, 22 14 C 24 14, 24 16, 24 17 L 24 24" strokeWidth="2.5" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9B938B]">Network With Me</h4>
            <a
              href="https://www.linkedin.com/in/vibisha-v-4aba85291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-bold text-[#1E1B18] hover:underline"
            >
              linkedin.com/in/vibisha-v-4aba85291/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}