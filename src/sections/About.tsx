export default function About() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto px-4 md:px-0">
      <div className="relative p-10 md:p-14 bg-white/60 backdrop-blur-md rounded-2xl border border-[#E6DFD5] shadow-2xl">
        {/* Soft yellow circle accent on the corner */}
        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#E6B800] opacity-15"></div>
        <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#6F5E53] opacity-5"></div>

        {/* Scrapbook Doodles */}
        <svg className="absolute -bottom-10 -left-10 w-36 h-36 text-[#6F5E53]/10 pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3">
          <circle cx="50" cy="50" r="40" />
          <circle cx="53" cy="52" r="38" opacity="0.5" strokeDasharray="3 5"/>
        </svg>
        <svg className="absolute top-6 right-8 w-12 h-12 text-[#E6B800]/50 pointer-events-none select-none transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 35 C 10 15, 35 10, 50 32 C 65 10, 90 15, 88 35 C 85 55, 60 75, 50 88 C 40 75, 15 55, 12 35 Z" fill="currentColor" fillOpacity="0.1"/>
        </svg>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B18] mb-8 flex items-center gap-3">
          <span className="text-[#6F5E53]">01.</span> Who Am I?
        </h2>
        
        <p className="text-xl md:text-2xl text-[#4F4A45] leading-loose font-sans mb-6">
          Hello! I'm Vibisha, a B.Tech Artificial Intelligence and Data Science student passionate about building data-driven solutions and AI-powered applications. I enjoy exploring Machine Learning, Generative AI, and software development to create technology that makes a real impact.
        </p>
        <p className="text-xl md:text-2xl text-[#4F4A45] leading-loose font-sans">
          I love turning complex ideas into intelligent, practical solutions. From developing AI systems to building end-to-end applications, I focus on creating innovative products that solve real-world problems and deliver meaningful user experiences.
        </p>
      </div>
    </div>
  );
}