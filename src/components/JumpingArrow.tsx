interface JumpingArrowProps {
  className?: string;
  size?: number;
}

export default function JumpingArrow({ className = "", size = 48 }: JumpingArrowProps) {
  return (
    <div className={`flex flex-col items-center justify-center animate-bounce ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-[#6F5E53]"
        style={{ filter: "drop-shadow(1px 2px 2px rgba(111, 94, 83, 0.15))" }}
      >
        {/* Hand-drawn arrow shape */}
        <path
          d="M12 3v17M6 14l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Yellow highlight loop or star doodle behind/near the arrow */}
        <path
          d="M9 7c1.5-1.5 4.5-1.5 6 0"
          stroke="#E6B800"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
