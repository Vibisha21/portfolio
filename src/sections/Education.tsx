export default function Education() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-3xl mx-auto px-4 md:px-0">
      <div className="relative p-6 md:p-10 bg-white/60 backdrop-blur-md rounded-2xl border border-[#E6DFD5] shadow-2xl">
        {/* Soft circle accents */}
        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#6F5E53] opacity-10"></div>
        <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#E6B800] opacity-10"></div>

        {/* Scrapbook Doodles */}
        <svg className="absolute -top-8 -right-4 w-24 h-24 text-[#6F5E53]/55 pointer-events-none select-none transform -rotate-12 scrapbook-float-slow-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50 20 L85 35 L50 50 L15 35 Z" fill="currentColor" fillOpacity="0.05"/>
          <path d="M30 42 L30 65 C30 75, 70 75, 70 65 L70 42"/>
          <path d="M85 35 L85 60 C85 62, 80 65, 80 65"/>
          <circle cx="80" cy="65" r="2" fill="currentColor"/>
        </svg>
        <svg className="absolute -bottom-10 -left-10 w-24 h-24 text-[#6F5E53]/60 transform rotate-45 pointer-events-none select-none scrapbook-float-slow-5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 80 L35 85 L30 70 Z" fill="currentColor" fillOpacity="0.1"/>
          <path d="M30 70 L70 30 L80 40 L40 80 Z"/>
          <path d="M70 30 L75 25 L85 35 L80 40"/>
          <path d="M75 25 L80 20 L90 30 L85 35"/>
          <path d="M32 72 L42 82 M35 75 L45 85"/>
        </svg>
        <svg className="absolute -top-12 -left-6 w-24 h-24 text-[#E6B800]/80 pointer-events-none select-none scrapbook-float-slow-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50 20 C35 20, 35 45, 42 55 C45 60, 45 65, 45 70 L55 70 C55 65, 55 60, 58 55 C65 45, 65 20, 50 20 Z" />
          <path d="M45 75 L55 75 M47 80 L53 80" strokeWidth="2.5" />
          <path d="M50 6 L50 12 M25 25 L30 30 M8 50 L14 50 M25 75 L30 70 M75 25 L70 30 M92 50 L86 50 M75 75 L70 70" />
        </svg>

        <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B18] mb-8 flex items-center gap-3">
          <span className="text-[#6F5E53]">02.</span> Education
        </h2>

        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E6DFD5]">
          {/* Education Item 1 */}
          <div className="relative pl-8 group">
            {/* Timeline node */}
            <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-[#FAF6F0] border-2 border-[#6F5E53] group-hover:bg-[#E6B800] group-hover:border-[#1E1B18] transition-all duration-300 transform -translate-x-1/2"></div>
            
            <h3 className="text-lg md:text-xl font-bold text-[#1E1B18]">
              B. Tech - Sri Eshwar College of Engineering
            </h3>
            <p className="text-sm md:text-base font-semibold text-[#6F5E53] mt-1">
              Artificial Intelligence and Data Science
            </p>
            <p className="text-xs font-mono text-[#9B938B] mt-2">
              2023 - 2027
            </p>
          </div>

          {/* Education Item 2 */}
          <div className="relative pl-8 group">
            {/* Timeline node */}
            <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-[#FAF6F0] border-2 border-[#6F5E53] group-hover:bg-[#E6B800] group-hover:border-[#1E1B18] transition-all duration-300 transform -translate-x-1/2"></div>
            
            <h3 className="text-lg md:text-xl font-bold text-[#1E1B18]">
              HSC - Shri Nehru Vidyalaya MHSS
            </h3>
            <p className="text-sm md:text-base font-semibold text-[#6F5E53] mt-1">
              Higher Secondary Certificate
            </p>
            <p className="text-xs font-mono text-[#9B938B] mt-2">
              2022 - 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
