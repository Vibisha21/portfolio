interface RobotProps {
  isWalking: boolean;
  isSitting: boolean;
  isWaving: boolean;
  isJumping?: boolean;
  isAtEnd?: boolean;
}

export default function Robot({ isWalking, isSitting, isWaving, isJumping = false, isAtEnd = false }: RobotProps) {
  return (
    <g className={isJumping ? "robot-jumping" : isWalking && !isSitting ? "robot-bobbing" : ""}>
      {/* Neck */}
      <line
        x1="0"
        y1="-6"
        x2="0"
        y2="0"
        stroke="#1E1B18"
        strokeWidth="4"
      />

      {/* Antenna */}
      <line
        x1="0"
        y1="-26"
        x2="0"
        y2="-34"
        stroke="#1E1B18"
        strokeWidth="2.5"
      />
      <circle
        cx="0"
        cy="-36"
        r="3.5"
        fill={isJumping || isSitting ? "#E6B800" : "#9B938B"}
        stroke="#1E1B18"
        strokeWidth="2"
      />

      {/* Left Leg */}
      <g
        className={
          isSitting
            ? "robot-leg-l-sitting"
            : isWalking
            ? "robot-leg-l-walking"
            : ""
        }
        style={{ transformOrigin: "-10px 22px", transform: "translate(-10px, 22px)" }}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="14"
          stroke="#1E1B18"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Foot */}
        <ellipse
          cx="0"
          cy="14"
          rx="5"
          ry="3"
          fill="#6F5E53"
          stroke="#1E1B18"
          strokeWidth="2.5"
        />
      </g>

      {/* Right Leg */}
      <g
        className={
          isSitting
            ? "robot-leg-r-sitting"
            : isWalking
            ? "robot-leg-r-walking"
            : ""
        }
        style={{ transformOrigin: "10px 22px", transform: "translate(10px, 22px)" }}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="14"
          stroke="#1E1B18"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Foot */}
        <ellipse
          cx="0"
          cy="14"
          rx="5"
          ry="3"
          fill="#6F5E53"
          stroke="#1E1B18"
          strokeWidth="2.5"
        />
      </g>

      {/* Body */}
      <rect
        x="-18"
        y="-6"
        width="36"
        height="28"
        rx="6"
        fill={isSitting ? "#6F5E53" : "#9B938B"}
        stroke="#1E1B18"
        strokeWidth="2.5"
        style={{ transition: "fill 0.5s ease" }}
      />
      {/* Screen details / Chest meter */}
      <rect
        x="-11"
        y="-1"
        width="22"
        height="12"
        rx="2"
        fill="#FAF6F0"
        stroke="#1E1B18"
        strokeWidth="1.5"
      />
      <circle
        cx="-5"
        cy="5"
        r="2.5"
        fill={isWalking ? "#E6B800" : "#9B938B"}
      />
      <line
        x1="1"
        y1="5"
        x2="7"
        y2="5"
        stroke="#1E1B18"
        strokeWidth="2"
      />

      {/* Head */}
      <g style={{ transform: isSitting ? "translateY(4px)" : "none", transition: "transform 0.5s ease" }}>
        <rect
          x="-16"
          y="-26"
          width="32"
          height="20"
          rx="5"
          fill="#4F4A45"
          stroke="#1E1B18"
          strokeWidth="2.5"
        />
        {/* Screen/Eyes Area */}
        <rect
          x="-11"
          y="-21"
          width="22"
          height="10"
          rx="2"
          fill="#1E1B18"
        />
        {/* Left Eye */}
        <circle
          cx="-5"
          cy="-16"
          r="2.5"
          fill={isJumping || isSitting ? "#E6B800" : "#FAF6F0"}
          className="robot-eye-blinking"
        />
        {/* Right Eye */}
        <circle
          cx="5"
          cy="-16"
          r="2.5"
          fill={isJumping || isSitting ? "#E6B800" : "#FAF6F0"}
          className="robot-eye-blinking"
        />
        {/* Mouth */}
        <line
          x1="-4"
          y1="-10"
          x2="4"
          y2="-10"
          stroke="#FAF6F0"
          strokeWidth="1"
        />
      </g>

      {/* Left Arm */}
      <g
        className={isJumping ? "robot-arm-l-jumping" : isWalking && !isSitting ? "robot-arm-l-walking" : ""}
        style={{ transformOrigin: "-22px 0px", transform: "translate(-22px, 0px)" }}
      >
        <line
          x1="0"
          y1="0"
          x2="-10"
          y2="12"
          stroke="#1E1B18"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Hand */}
        <circle
          cx="-10"
          cy="12"
          r="3"
          fill="#E6B800"
          stroke="#1E1B18"
          strokeWidth="1.5"
        />
      </g>

      {/* Right Arm */}
      <g
        className={
          isJumping
            ? "robot-arm-r-jumping"
            : isWaving
            ? "robot-arm-r-waving"
            : isWalking
            ? "robot-arm-r-walking"
            : ""
        }
        style={{ transformOrigin: "22px 0px", transform: "translate(22px, 0px)" }}
      >
        <line
          x1="0"
          y1="0"
          x2="10"
          y2="12"
          stroke="#1E1B18"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Hand */}
        <circle
          cx="10"
          cy="12"
          r="3"
          fill="#E6B800"
          stroke="#1E1B18"
          strokeWidth="1.5"
        />
      </g>

      {/* Speech Bubble */}
      {isAtEnd && (
        <g transform="translate(18, -32)">
          {/* Speech bubble tail */}
          <polygon points="0,10 -8,15 2,17" fill="#FAF6F0" stroke="#1E1B18" strokeWidth="1.8" />
          {/* Speech bubble main body */}
          <rect x="0" y="-3" width="42" height="22" rx="6" fill="#FAF6F0" stroke="#1E1B18" strokeWidth="1.8" />
          {/* Cover overlap stroke */}
          <rect x="1" y="9" width="3" height="6" fill="#FAF6F0" />
          {/* Speech bubble text */}
          <text
            x="21"
            y="12"
            textAnchor="middle"
            fill="#1E1B18"
            fontSize="12"
            fontWeight="bold"
            fontFamily="var(--handwritten)"
          >
            Bye!
          </text>
        </g>
      )}
    </g>
  );
}