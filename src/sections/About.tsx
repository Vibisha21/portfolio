export default function About() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-3xl mx-auto px-4 md:px-0">
      <div className="relative p-10 md:p-14 bg-white/60 backdrop-blur-md rounded-2xl border border-[#E6DFD5] shadow-2xl">
        {/* Soft yellow circle accent on the corner */}
        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#E6B800] opacity-15"></div>
        <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#6F5E53] opacity-5"></div>

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