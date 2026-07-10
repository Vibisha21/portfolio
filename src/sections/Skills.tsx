const skillCategories = [
  {
    title: "Frontend Tech",
    skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Streamlit", "HTML"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Python", "SQL Databases", "MongoDB / NoSQL", "FastAPI", ],
  },
  {
    title: "Tools & Design",
    skills: ["Git & GitHub", "VS Code", "PowerBI", "Tableau", "Excel", "AWS"],
  },
  {
    title: "AI-ML",
    skills: ["Python", "Data Analytics", "RAG", "Agentic AI", "Machine Learning"],
  },
];

export default function Skills() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto px-4 md:px-0 relative">
      {/* Scrapbook Doodles */}
      <svg className="absolute -bottom-10 -right-8 w-24 h-24 text-[#6F5E53]/55 pointer-events-none select-none transform rotate-12 scrapbook-float-slow-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 35 L15 50 L30 65" />
        <path d="M70 35 L85 50 L70 65" />
        <path d="M55 25 L45 75" />
      </svg>
      <svg className="absolute -top-12 -left-10 w-24 h-24 text-[#E6B800]/75 pointer-events-none select-none scrapbook-float-slow-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 40 Q40 40 40 30 Q40 40 50 40 Q40 40 40 50 Q40 40 30 40" fill="currentColor" opacity="0.2"/>
        <path d="M60 65 Q65 65 65 60 Q65 65 70 65 Q65 65 65 70 Q65 65 60 65" fill="currentColor" opacity="0.2"/>
      </svg>
      <svg className="absolute top-12 -right-8 w-24 h-24 text-[#1E1B18]/50 pointer-events-none select-none scrapbook-float-slow-4" viewBox="0 0 100 100">
        <circle cx="30" cy="30" r="4" fill="currentColor" />
        <circle cx="70" cy="30" r="4" fill="currentColor" />
        <circle cx="50" cy="55" r="5" fill="#E6B800" />
        <circle cx="30" cy="80" r="4" fill="currentColor" />
        <circle cx="70" cy="80" r="4" fill="currentColor" />
        <line x1="30" y1="30" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="30" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="55" x2="30" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="55" x2="70" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B18] mb-10 flex items-center gap-3">
        <span className="text-[#6F5E53]">03.</span> My Core Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 md:p-8 bg-white/50 border-2 border-[#E6DFD5] rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#6F5E53] hover:bg-white/70 transition-all duration-300 group"
          >
            {/* Folder tab effect / border highlight */}
            <div className="w-14 h-1.5 bg-[#6F5E53] rounded mb-5 group-hover:bg-[#E6B800] transition-colors duration-300"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#1E1B18] mb-5">
              {category.title}
            </h3>
            
            <ul className="space-y-3.5">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-[#4F4A45] font-sans text-sm md:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E6B800] shrink-0 border border-[#6F5E53]"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}