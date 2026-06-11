import { useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const checkpoints = [
  { y: 100, label: "About" },
  { y: 700, label: "Skills" },
  { y: 1300, label: "Projects" },
  { y: 1900, label: "Certifications" },
  { y: 2500, label: "Achievements" },
  { y: 3100, label: "Contact" },
  { y: 3700, label: "Resume" },
];

export default function JourneyPath() {
  const pathRef = useRef<SVGPathElement>(null);

  return (
    <div className="relative w-full h-[4500px] flex justify-center">
      <svg
        width="250"
        height="4500"
        viewBox="0 0 250 4500"
        className="absolute top-0 overflow-visible"
      >
        <path
          ref={pathRef}
          id="journey-path"
          d="
            M120 100
            C40 300, 200 500, 120 700
            C40 900, 200 1100, 120 1300
            C40 1500, 200 1700, 120 1900
            C40 2100, 200 2300, 120 2500
            C40 2700, 200 2900, 120 3100
            C40 3300, 200 3500, 120 3700
            C40 3900, 200 4100, 120 4300
          "
          fill="none"
          stroke="#8B6B4F"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {checkpoints.map((point) => (
          <g key={point.label}>
            <circle
              cx="120"
              cy={point.y}
              r="12"
              fill="#E6C56A"
              stroke="#8B6B4F"
              strokeWidth="2"
            />

            <text
              x="145"
              y={point.y + 5}
              fill="#4B4B4B"
              fontSize="16"
              fontWeight="500"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}