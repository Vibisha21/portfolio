import type { RefObject } from "react";
import Robot from "./Robot";

// eslint-disable-next-line react-refresh/only-export-components
export const checkpoints = [
  { y: 50, label: "Who Am I?", id: "about" },
  { y: 160, label: "My Skills", id: "skills" },
  { y: 270, label: "Projects", id: "projects" },
  { y: 380, label: "Certifications", id: "certifications" },
  { y: 490, label: "Achievements", id: "achievements" },
  { y: 600, label: "Contact Me", id: "contact" },
  { y: 710, label: "Resume", id: "resume" },
];

interface JourneyPathProps {
  pathRef: RefObject<SVGPathElement | null>;
  activeIndex: number;
  robotPos: { x: number; y: number };
  isWalking: boolean;
  isSitting: boolean;
  isWaving: boolean;
  isJumping: boolean;
  onCheckpointClick: (id: string) => void;
}

export default function JourneyPath({
  pathRef,
  activeIndex,
  robotPos,
  isWalking,
  isSitting,
  isWaving,
  isJumping,
  onCheckpointClick,
}: JourneyPathProps) {
  return (
    <div className="w-full h-full flex justify-center items-center py-4 px-2 select-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 780"
        preserveAspectRatio="xMidYMid meet"
        className="overflow-visible max-h-[90vh]"
      >
        {/* Background Wavy Path (Soft shadow/line) */}
        <path
          d="
            M160 50
            C40 105, 280 105, 160 160
            C280 215, 40 215, 160 270
            C40 325, 280 325, 160 380
            C280 435, 40 435, 160 490
            C40 545, 280 545, 160 600
            C280 655, 40 655, 160 710
          "
          fill="none"
          stroke="#E6DFD5"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Main Journey Path (Curvy & Giggly, wider bounds) */}
        <path
          ref={pathRef}
          id="journey-path"
          d="
            M160 50
            C40 105, 280 105, 160 160
            C280 215, 40 215, 160 270
            C40 325, 280 325, 160 380
            C280 435, 40 435, 160 490
            C40 545, 280 545, 160 600
            C280 655, 40 655, 160 710
          "
          fill="none"
          stroke="#6F5E53"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1 9" /* Hand-drawn style */
        />

        {/* Checkpoint nodes */}
        {checkpoints.map((point, index) => {
          const isActive = activeIndex === index;
          const isVisited = activeIndex > index;

          return (
            <g
              key={point.id}
              className="cursor-pointer group"
              onClick={() => onCheckpointClick(point.id)}
            >
              {/* Active Pulse Glow */}
              {isActive && (
                <circle
                  cx="160"
                  cy={point.y}
                  r="24"
                  fill="none"
                  stroke="#E6B800"
                  strokeWidth="3"
                  className="opacity-75 animate-ping"
                  style={{ transformOrigin: `160px ${point.y}px` }}
                />
              )}

              {/* Checkpoint Border */}
              <circle
                cx="160"
                cy={point.y}
                r="13"
                fill={isActive ? "#E6B800" : isVisited ? "#6F5E53" : "#FAF6F0"}
                stroke="#1E1B18"
                strokeWidth="2.5"
                className="transition-all duration-300 group-hover:scale-115 group-hover:stroke-[#6F5E53]"
                style={{ transformOrigin: `160px ${point.y}px` }}
              />

              {/* Inner Node Core */}
              <circle
                cx="160"
                cy={point.y}
                r="5.5"
                fill={isActive ? "#1E1B18" : isVisited ? "#FAF6F0" : "#9B938B"}
                className="transition-all duration-300 group-hover:fill-[#E6B800]"
              />

              {/* Label */}
              <text
                x="190"
                y={point.y + 6}
                fill={isActive ? "#1E1B18" : isVisited ? "#6F5E53" : "#9B938B"}
                fontSize="16"
                fontWeight={isActive ? "700" : "600"}
                className="transition-all duration-300 select-none font-sans group-hover:fill-[#1E1B18] group-hover:translate-x-1"
              >
                {point.label}
              </text>
            </g>
          );
        })}

        {/* The Walking/Sitting Robot (Scaled up by 1.35 for presence) */}
        <g transform={`translate(${robotPos.x}, ${robotPos.y}) scale(1.35)`} className="transition-transform duration-75">
          <Robot isWalking={isWalking} isSitting={isSitting} isWaving={isWaving} isJumping={isJumping} />
        </g>
      </svg>
    </div>
  );
}