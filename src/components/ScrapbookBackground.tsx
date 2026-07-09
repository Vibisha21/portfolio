interface Particle {
  x: number;
  y: number;
  size: number;
  type: string;
  color: string;
  anim: string;
}

const particles: Particle[] = [
  // Section 1: About (y: 0% - 12%)
  { x: 10, y: 3, size: 22, type: "star", color: "#6F5E53", anim: "scrapbook-float-slow-1" },
  { x: 88, y: 5, size: 24, type: "paperclip", color: "#1E1B18", anim: "scrapbook-float-slow-4" },
  { x: 78, y: 9, size: 24, type: "wave", color: "#E6B800", anim: "scrapbook-float-slow-3" },
  { x: 14, y: 11, size: 28, type: "pushpin", color: "#6F5E53", anim: "scrapbook-float-slow-5" },

  // Section 2: Education (y: 12% - 25%)
  { x: 85, y: 14, size: 18, type: "squiggle", color: "#1E1B18", anim: "scrapbook-float-slow-2" },
  { x: 12, y: 17, size: 20, type: "asterisk", color: "#E6B800", anim: "scrapbook-float-slow-2" },
  { x: 89, y: 20, size: 30, type: "crosses", color: "#6F5E53", anim: "scrapbook-float-slow-1" },
  { x: 6, y: 23, size: 24, type: "star", color: "#1E1B18", anim: "scrapbook-float-slow-3" },

  // Section 3: Skills (y: 25% - 38%)
  { x: 92, y: 27, size: 36, type: "stamp", color: "#6F5E53", anim: "scrapbook-float-slow-6" },
  { x: 8, y: 30, size: 22, type: "spark", color: "#E6B800", anim: "scrapbook-float-slow-3" },
  { x: 88, y: 33, size: 26, type: "polaroid", color: "#1E1B18", anim: "scrapbook-float-slow-4" },
  { x: 11, y: 36, size: 24, type: "arrow", color: "#6F5E53", anim: "scrapbook-float-slow-5" },

  // Section 4: Projects (y: 38% - 50%)
  { x: 6, y: 40, size: 20, type: "star", color: "#E6B800", anim: "scrapbook-float-slow-2" },
  { x: 82, y: 43, size: 24, type: "paperclip", color: "#6F5E53", anim: "scrapbook-float-slow-1" },
  { x: 90, y: 46, size: 24, type: "wave", color: "#1E1B18", anim: "scrapbook-float-slow-3" },
  { x: 4, y: 49, size: 26, type: "pushpin", color: "#E6B800", anim: "scrapbook-float-slow-6" },

  // Section 5: Certifications (y: 50% - 63%)
  { x: 93, y: 52, size: 28, type: "arrow", color: "#6F5E53", anim: "scrapbook-float-slow-4" },
  { x: 10, y: 55, size: 18, type: "squiggle", color: "#1E1B18", anim: "scrapbook-float-slow-3" },
  { x: 86, y: 58, size: 22, type: "spark", color: "#E6B800", anim: "scrapbook-float-slow-1" },
  { x: 5, y: 61, size: 36, type: "stamp", color: "#1E1B18", anim: "scrapbook-float-slow-5" },

  // Section 6: Achievements (y: 63% - 75%)
  { x: 92, y: 65, size: 24, type: "star", color: "#6F5E53", anim: "scrapbook-float-slow-1" },
  { x: 8, y: 68, size: 26, type: "polaroid", color: "#E6B800", anim: "scrapbook-float-slow-6" },
  { x: 84, y: 71, size: 30, type: "crosses", color: "#1E1B18", anim: "scrapbook-float-slow-2" },
  { x: 12, y: 74, size: 22, type: "paperclip", color: "#6F5E53", anim: "scrapbook-float-slow-4" },

  // Section 7: Contact (y: 75% - 88%)
  { x: 6, y: 78, size: 20, type: "spark", color: "#1E1B18", anim: "scrapbook-float-slow-3" },
  { x: 90, y: 81, size: 22, type: "asterisk", color: "#E6B800", anim: "scrapbook-float-slow-1" },
  { x: 12, y: 84, size: 26, type: "star", color: "#6F5E53", anim: "scrapbook-float-slow-2" },
  { x: 86, y: 87, size: 26, type: "pushpin", color: "#1E1B18", anim: "scrapbook-float-slow-5" },

  // Section 8: Resume (y: 88% - 100%)
  { x: 88, y: 91, size: 24, type: "arrow", color: "#E6B800", anim: "scrapbook-float-slow-3" },
  { x: 10, y: 94, size: 16, type: "wave", color: "#6F5E53", anim: "scrapbook-float-slow-3" },
  { x: 85, y: 97, size: 24, type: "paperclip", color: "#1E1B18", anim: "scrapbook-float-slow-4" },
];

export default function ScrapbookBackground() {
  const renderParticleSvg = (p: Particle) => {
    switch (p.type) {
      case "star":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <path d="M10 0 Q10 10 20 10 Q10 10 10 20 Q10 10 0 10 Q10 10 10 0" fill={p.color} />
          </svg>
        );
      case "asterisk":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <path d="M5 5 L15 15 M15 5 L5 15 M10 2 L10 18 M2 10 L18 10" stroke={p.color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "dot":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="5" fill={p.color} />
          </svg>
        );
      case "squiggle":
        return (
          <svg width={p.size} height={p.size / 2} viewBox="0 0 20 10" fill="none">
            <path d="M2 5 Q 5 2, 8 5 T 14 5" stroke={p.color} strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "paper":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="14" height="14" rx="2" fill={p.color} fillOpacity="0.08" stroke={p.color} strokeWidth="1.5" />
          </svg>
        );
      case "paperclip":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path d="M6 9v7a5 5 0 0 0 10 0V8a3 3 0 0 0-6 0v7a1 1 0 0 0 2 0V9" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "pushpin":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2v8M9 6h6M8 10h8M12 10v10" stroke={p.color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="4" r="2" fill={p.color} />
          </svg>
        );
      case "stamp":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="13" stroke={p.color} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="15" cy="15" r="10" stroke={p.color} strokeWidth="0.75" />
            <path d="M8 12 C 11 9, 19 9, 22 12 M7 15 L23 15 M9 18 C 12 21, 18 21, 21 18" stroke={p.color} strokeWidth="1" strokeLinecap="round" />
          </svg>
        );
      case "arrow":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path d="M3 3 C 8 4, 15 11, 21 21" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M13 20 L21 21 L20 13" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "polaroid":
        return (
          <svg width={p.size} height={p.size * 1.25} viewBox="0 0 20 25" fill="none">
            <rect x="2" y="2" width="16" height="21" rx="1.5" stroke={p.color} strokeWidth="1.5" fill="none" />
            <rect x="4" y="4" width="12" height="12" stroke={p.color} strokeWidth="1" fill="none" />
            <circle cx="10" cy="19" r="1.5" fill={p.color} />
          </svg>
        );
      case "wave":
        return (
          <svg width={p.size} height={p.size * 1.5} viewBox="0 0 20 30" fill="none">
            <path d="M5 2 Q 15 7, 5 15 T 15 30" stroke={p.color} strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "crosses":
        return (
          <svg width={p.size * 1.5} height={p.size / 2} viewBox="0 0 60 20" fill="none">
            <text x="0" y="15" fill={p.color} fontFamily="var(--handwritten)" fontSize="18" fontWeight="bold">x x x x x</text>
          </svg>
        );
      case "spark":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" stroke={p.color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className={`absolute opacity-40 hover:opacity-90 hover:scale-125 hover:rotate-12 transition-all duration-500 ease-out pointer-events-auto cursor-default ${p.anim}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transformOrigin: "center",
          }}
        >
          {renderParticleSvg(p)}
        </div>
      ))}
    </div>
  );
}
