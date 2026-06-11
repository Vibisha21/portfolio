const skillCategories = [
  {
    title: "Frontend Tech",
    skills: ["HTML5 / CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "GSAP / Animations"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Python", "SQL Databases", "MongoDB / NoSQL", "RESTful APIs"],
  },
  {
    title: "Tools & Design",
    skills: ["Git & GitHub", "VS Code", "Figma / UI Design", "Vite / Bundlers", "Postman", "Responsive Layouts"],
  },
];

export default function Skills() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B18] mb-10 flex items-center gap-3">
        <span className="text-[#6F5E53]">02.</span> My Core Skills
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