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
      <svg className="absolute -bottom-10 -right-8 w-32 h-32 text-[#6F5E53]/15 pointer-events-none select-none transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 35 L15 50 L30 65" />
        <path d="M70 35 L85 50 L70 65" />
        <path d="M55 25 L45 75" />
      </svg>
      <svg className="absolute -top-12 -left-10 w-28 h-28 text-[#C4B6AA]/40 pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 40 Q40 40 40 30 Q40 40 50 40 Q40 40 40 50 Q40 40 30 40" fill="currentColor" opacity="0.2"/>
        <path d="M60 65 Q65 65 65 60 Q65 65 70 65 Q65 65 65 70 Q65 65 60 65" fill="currentColor" opacity="0.2"/>
      </svg>

      <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B18] mb-10 flex items-center gap-3">
        <span className="text-[#6F5E53]">03.</span> My Core Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-8 md:p-10 bg-white/40 border border-[#E6DFD5] rounded-2xl shadow-lg hover:shadow-xl hover:border-[#6F5E53] hover:bg-white/60 transition-all duration-300 group"
          >
            {/* Folder tab effect / border highlight */}
            <div className="w-12 h-1.5 bg-[#6F5E53] rounded mb-5 group-hover:bg-[#E6B800] transition-colors duration-300"></div>
            
            <h3 className="text-2xl font-bold text-[#1E1B18] mb-5">
              {category.title}
            </h3>
            
            <ul className="space-y-3.5">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-[#4F4A45] font-sans text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#E6B800] shrink-0"></span>
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