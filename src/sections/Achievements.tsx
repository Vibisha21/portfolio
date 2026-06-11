import achievementMock from "../assets/images/achievement_mock.png";

const achievementsList = [
  {
    title: "Inter-College Hackathon Winner",
    desc: "Secured 1st place among 50+ participating teams. Designed an offline-first disaster response web app under a 24-hour limit.",
    date: "Oct 2025",
    rotation: "rotate-[-2deg]",
    tapeClass: "paper-tape-left",
  },
  {
    title: "Technical Paper Presentation",
    desc: "Presented a research paper on 'Accessible Web Design through SVG Micro-Animations' at the National Tech Symposium, earning Best Presenter.",
    date: "Feb 2025",
    rotation: "rotate-[3deg]",
    tapeClass: "paper-tape-right",
  },
];

export default function Achievements() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-2xl mx-auto px-4 md:px-0 py-4 select-none">
      <div className="notebook-container">
        {/* Notebook Spiral Rings on the Left */}
        <div className="notebook-spiral">
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
        </div>

        {/* Notebook Paper Sheet */}
        <div className="notebook-paper">
          <div className="notebook-header">
            <h2 className="handwritten-title">
              Participations & Achievements
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-[#5C554F] italic mb-8 -mt-2">
            A small collection of notes, moments, and milestones from my journey.
          </p>

          {/* Polaroid Layout inside Notebook */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pb-4">
            {achievementsList.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-4 pb-6 rounded shadow-md border border-[#E6DFD5] max-w-[270px] mx-auto hover:scale-102 hover:rotate-0 hover:shadow-lg transition-all duration-300 ${item.rotation}`}
              >
                {/* Paper Tape */}
                <div className={item.tapeClass}></div>

                {/* Polaroid Picture */}
                <div className="w-full h-36 bg-gray-100 overflow-hidden border border-gray-200 rounded-sm">
                  <img
                    src={achievementMock}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Polaroid Caption */}
                <div className="mt-4 text-left">
                  <h3 className="handwritten-text font-bold text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="handwritten-text text-xs text-[#5C554F] mt-1 line-clamp-3">
                    {item.desc}
                  </p>
                  <span className="handwritten-text text-[10px] text-[#9B938B] block text-right mt-2 font-mono">
                    -- {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}