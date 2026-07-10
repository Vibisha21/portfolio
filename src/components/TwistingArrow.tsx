import { useEffect, useState } from "react";

interface TwistingArrowProps {
  className?: string;
  size?: number;
  rotationSpeed?: number; // multiplier for rotation
}

export default function TwistingArrow({ className = "", size = 48, rotationSpeed = 0.5 }: TwistingArrowProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(scrolled * rotationSpeed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotationSpeed]);

  return (
    <div
      className={`inline-block transition-transform duration-75 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: size,
        height: size,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-[#6F5E53]"
      >
        {/* Winding loop arrow */}
        <path
          d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12C2 8.5 5 5 8 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 1" /* Sketchy dot style */
        />
        {/* Secondary yellow spiral trail */}
        <path
          d="M12 5 C 15 5, 17 8, 15 12 C 13 16, 9 14, 12 12"
          stroke="#E6B800"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <path
          d="M8 2l-1 3 3.5 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
