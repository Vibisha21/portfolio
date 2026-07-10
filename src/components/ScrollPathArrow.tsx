import { useEffect, useRef, useState } from "react";

export default function ScrollPathArrow() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [arrowPos, setArrowPos] = useState({ x: 50, y: 15, angle: 90 });
  const [pathLength, setPathLength] = useState(0);
  
  const pathRef = useRef<SVGPathElement>(null);

  // Winding path coordinates on a 100x1000 grid
  const pathD = `
    M 50 10 
    C 85 80, 15 100, 20 150 
    C 25 200, 85 220, 80 280 
    C 75 340, 15 360, 20 420 
    C 25 480, 85 500, 80 560 
    C 75 620, 15 640, 20 700 
    C 25 760, 85 780, 80 840 
    C 75 900, 15 920, 50 970 
    L 50 995
  `;

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = window.scrollY / docHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update arrow position and rotation along the path
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    try {
      const length = path.getTotalLength();
      if (length === 0) return;
      setPathLength(length);

      // Interpolate point
      const currentLength = scrollProgress * length;
      const point = path.getPointAtLength(currentLength);
      
      // Look slightly ahead to calculate tangent/rotation angle
      const lookAheadDistance = Math.min(length, currentLength + 2);
      const pointAhead = path.getPointAtLength(lookAheadDistance);
      
      const dx = pointAhead.x - point.x;
      const dy = pointAhead.y - point.y;
      // If we are at the very end, maintain the last angle
      const angle = dx === 0 && dy === 0 ? 90 : Math.atan2(dy, dx) * (180 / Math.PI);

      setArrowPos({ x: point.x, y: point.y, angle });
    } catch (e) {
      console.warn("SVG path total length is not ready", e);
    }
  }, [scrollProgress]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* 1. Background dashed trail (Brown) */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#C4B6AA"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 4"
          className="opacity-75"
        />

        {/* 2. Active drawn line (Yellow) */}
        {pathLength > 0 && (
          <path
            d={pathD}
            fill="none"
            stroke="#E6B800"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - scrollProgress * pathLength}
          />
        )}

        {/* 3. Traveling Twisting Arrow Head */}
        <g
          transform={`translate(${arrowPos.x}, ${arrowPos.y}) rotate(${arrowPos.angle})`}
          style={{ transition: "transform 50ms linear" }}
        >
          {/* Main Arrow Body */}
          <path
            d="M -3.5 -2.5 L 3.5 0 L -3.5 2.5 L -1.5 0 Z"
            fill="#6F5E53"
            stroke="#E6B800"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow tail scribble */}
          <path
            d="M -3.5 0 C -5.5 -1, -5.5 1, -7.5 0"
            stroke="#6F5E53"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
