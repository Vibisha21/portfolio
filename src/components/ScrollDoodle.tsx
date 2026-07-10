import { useEffect, useRef, useState } from "react";

interface ScrollDoodleProps {
  type: "star" | "heart" | "smiley" | "bulb" | "loop";
  className?: string;
  size?: number;
}

export default function ScrollDoodle({ type, className = "", size = 64 }: ScrollDoodleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger true when in view, false when out of view (for repeat triggers)
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const renderDoodleSvg = () => {
    switch (type) {
      case "star":
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            {/* Soft yellow background */}
            <path
              d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2"
              fill="#E6B800"
              fillOpacity="0.25"
            />
            {/* Sketchy brown border */}
            <path
              d="M12 3 Q12 12 21 12 Q12 12 12 21 Q12 12 3 12 Q12 12 12 3"
              stroke="#6F5E53"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Spark lines */}
            <path d="M5 5l2 2M19 19l2 2M19 5l-2 2M5 19l-2 2" stroke="#E6B800" strokeWidth="1.5" />
          </svg>
        );
      case "heart":
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            {/* Soft yellow highlight coloring */}
            <path
              d="M12 21 C -4 13, 0 2, 8 2 C 10 2, 11 3, 12 5 C 13 3, 14 2, 16 2 C 24 2, 28 13, 12 21 Z"
              fill="#E6B800"
              fillOpacity="0.2"
            />
            {/* Sketchy brown heart */}
            <path
              d="M12 20 C -3 12, 1 3, 8 3 C 9.5 3, 11 4, 12 5.5 C 13 4, 14.5 3, 16 3 C 23 3, 27 12, 12 20 Z"
              stroke="#6F5E53"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "smiley":
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            {/* Yellow face fill */}
            <circle cx="12" cy="12" r="9" fill="#E6B800" fillOpacity="0.15" />
            <circle cx="12" cy="12" r="9" stroke="#6F5E53" strokeWidth="2" strokeDasharray="3 3" />
            {/* Eyes */}
            <circle cx="9" cy="10" r="1.5" fill="#6F5E53" />
            <circle cx="15" cy="10" r="1.5" fill="#6F5E53" />
            {/* Mouth */}
            <path
              d="M8 14 Q12 18 16 14"
              stroke="#6F5E53"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Wiggle cheek highlights */}
            <path d="M6 12a1 1 0 0 1 1-1" stroke="#E6B800" strokeWidth="1.5" />
            <path d="M17 12a1 1 0 0 1 1-1" stroke="#E6B800" strokeWidth="1.5" />
          </svg>
        );
      case "bulb":
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            {/* Glow backing */}
            <circle cx="12" cy="10" r="6" fill="#E6B800" fillOpacity="0.25" />
            {/* Bulb body */}
            <path
              d="M9 15 C8.5 13, 6 11, 6 9 C6 5.5, 8.5 3, 12 3 C15.5 3, 18 5.5, 18 9 C18 11, 15.5 13, 15 15 Z"
              stroke="#6F5E53"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Screw base */}
            <path d="M9 15h6M9 18h6M10 21h4" stroke="#6F5E53" strokeWidth="2" strokeLinecap="round" />
            {/* Filament */}
            <path d="M10 10l2-3 2 3" stroke="#6F5E53" strokeWidth="1.5" strokeLinecap="round" />
            {/* Rays */}
            <path d="M12 1v1M5 5l1.5 1.5M1 12h1 M17.5 6.5L19 5M22 12h-1" stroke="#E6B800" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "loop":
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            {/* Winding line */}
            <path
              d="M3 12 C9 4, 6 20, 12 12 C18 4, 15 20, 21 12"
              stroke="#6F5E53"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 14 C10 7, 7 17, 12 12"
              stroke="#E6B800"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out select-none pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) rotate(0deg)" : "scale(0) rotate(15deg)",
        transformOrigin: "center",
      }}
    >
      {renderDoodleSvg()}
    </div>
  );
}
