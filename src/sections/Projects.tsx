import halluai from "../assets/images/halluai.png";
import contextIQ from "../assets/images/contextIQ.jpeg";
import gazeIT from "../assets/images/GazeIT.jpeg";
import textPro from "../assets/images/textPro.jpeg";
import nutrablend from "../assets/images/nutrablend.jpeg";
import knowbuddy from "../assets/images/knowbuddy.jpeg";

const projectsList = [
  {
    title: "HalluAI - Real time AI Fact Checking Assistant",
    description: "A multiagent system that gives hallucination score along with supported documents.",
    github: "https://github.com/Vibisha21/halluAI",
    tech: ["Python", "FastAPI", "React.js", "MongoDB", "Groq (Llama 3)", "Tavily API", "PyPDF2"],
    image: halluai,
  },
  {
    title: "ContextIQ - RAG based exam companion",
    description: "Analyses document and generates flashcards and Q&A.",
    github: "https://github.com/Vibisha21/ContextIQ",
    tech: ["Python", "LangChain", "Streamlit", "FAISS", "HuggingFace Embeddings", "Ollama"],
    image: contextIQ,
  },
  {
    title: "GazeIT - Digital wellness Assistant",
    description: "Helps corporates and students to maintain a proper posture. Helps reduce eye and body strain. Provides analytics of regular activities",
    github: "https://github.com/Vibisha21/GazeIT.git",
    tech: ["Python", "React.js", "FastAPI", "OpenCV", "MediaPipe", "MongoDB", "Chart.js", "NumPy", "Pandas", "Axios"],
    image: gazeIT,
  },
  {
    title: "TextPro - Tone Transformer",
    description: "Performs tone adjustments and letter generation for professional communication.",
    github: "https://github.com/Vibisha21/textPro",
    tech: ["Python", "React.js", "FastAPI (Python)", "REST API", "Pydantic", "Uvicorn", "Groq API (LLM inference)"],
    image: textPro,
  },
  {
    title: "Nutrablend - ML Driven nutrient predictor",
    description: "Nutrient forecasting and visualization, enabling data-driven decision support for controlled hydroponics agriculture systems.",
    github: "https://github.com/Vibisha21/hydroponics",
    tech: ["Python", "Streamlit", "numpy", "pandas", "scikit-learn", "matplotlib", "joblib"],
    image: nutrablend,
  },
  {
    title: "KnowBuddy - Learning platform",
    description: "A platform that connects the tutors and students for real time and scheduled classes for clearing doubts.",
    github: "https://github.com/Vibisha21/knowbuddy",
    tech: ["React.js", "Node.js", "Express.js", "Mongodb"],
    image: knowbuddy,
  },
];

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-3xl mx-auto px-4 md:px-0 py-4 select-none relative">
      {/* Scrapbook Doodles */}
      <svg className="absolute top-2 right-12 w-12 h-12 text-[#6F5E53]/70 transform rotate-[25deg] pointer-events-none select-none scrapbook-float-slow-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30 40 L30 75 C30 83, 44 83, 44 75 L44 30 C44 18, 16 18, 16 35 L16 70 C16 76, 26 76, 26 70 L26 35 C26 32, 34 32, 34 35 L34 65"/>
      </svg>
      <svg className="absolute -top-12 -left-12 w-20 h-20 text-[#E6B800]/80 pointer-events-none select-none scrapbook-float-slow-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 20 Q 50 10, 60 40 T 40 80" strokeDasharray="3 3"/>
        <path d="M30 70 L40 80 L50 72"/>
      </svg>
      <svg className="absolute -bottom-8 -right-8 w-24 h-24 text-[#6F5E53]/45 pointer-events-none select-none scrapbook-float-slow-5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="15" />
        <path d="M50 25 L50 35 M50 65 L50 75 M25 50 L35 50 M65 50 L75 50 M32 32 L40 40 M60 60 L68 68 M68 32 L60 40 M40 60 L32 68" />
      </svg>

      <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B18] mb-8 flex items-center gap-3">
        <span className="text-[#6F5E53]">04.</span> My Projects
      </h2>

      {/* Timeline Container (Prominent border and spacing) */}
      <div className="relative border-l-4 border-[#E6DFD5] pl-6 md:pl-8 ml-3 md:ml-4 space-y-8">
        {projectsList.map((project, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Circle */}
            <div className="absolute -left-8.5 md:-left-10.5 top-1.5 w-4 h-4 rounded-full bg-[#FAF6F0] border-3 border-[#6F5E53] group-hover:bg-[#E6B800] group-hover:border-[#1E1B18] transition-all duration-300"></div>

            {/* Project Box */}
            <div className="bg-white/50 border border-[#E6DFD5] p-5 md:p-6 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:border-[#6F5E53] transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-5 items-start">

                {/* Project Info (Left side) */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-[#1E1B18] group-hover:text-[#6F5E53] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Github Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-[#FAF6F0] border border-[#E6DFD5] text-[#4F4A45] hover:bg-[#1E1B18] hover:text-[#FAF6F0] hover:border-[#1E1B18] transition-all duration-300 shrink-0"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>

                  <p className="text-xs md:text-sm text-[#4F4A45] mb-4 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Technologies Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[10px] md:text-xs font-mono bg-[#E6DFD5]/50 text-[#6F5E53] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image Container (Compact thumbnail on the right) */}
                <div className="w-full sm:w-36 h-28 md:h-32 rounded-xl overflow-hidden border border-[#E6DFD5] bg-gray-100 relative shrink-0 group/img shadow-sm self-center sm:self-start">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}