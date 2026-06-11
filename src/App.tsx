import { useState, useEffect, useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import JourneyPath from "./components/JourneyPath";

function App() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [robotPos, setRobotPos] = useState({ x: 160, y: 50 });

  const journeyContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Derived states
  const isSitting = progress >= 0.96;
  const isWaving = progress >= 0.96;

  useEffect(() => {
    const handleScroll = () => {
      const container = journeyContainerRef.current;
      const path = pathRef.current;
      if (!container || !path) return;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;

      // Bound progress between 0 and 1
      const currentProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(currentProgress);

      // Active section index mapping (7 sections -> index 0 to 6)
      const index = Math.round(currentProgress * 6);
      setActiveIndex(index);

      // Calculate the (x, y) coordinates of the robot along the SVG path
      try {
        const pathLength = path.getTotalLength();
        const point = path.getPointAtLength(currentProgress * pathLength);
        if (point) {
          setRobotPos({ x: point.x, y: point.y });
        }
      } catch (err) {
        console.error("Error tracing robot on path:", err);
      }

      // Handle walking state trigger
      setIsWalking(true);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsWalking(false);
      }, 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on mount to calibrate initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* 1. Hero Section (Home) */}
      <Hero />

      {/* 2. Interactive Journey Scroll Container */}
      <div ref={journeyContainerRef} className="relative w-full flex flex-col md:flex-row bg-[#FAF6F0]">
        
        {/* Left Side: Robot Path area (Sticky) (Width 40% for higher presence) */}
        <div className="w-full md:w-[40%] h-[35vh] md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-[#E6DFD5] flex items-center justify-center py-4 bg-[#FAF6F0] z-20">
          <JourneyPath
            pathRef={pathRef}
            activeIndex={activeIndex}
            robotPos={robotPos}
            isWalking={isWalking}
            isSitting={isSitting}
            isWaving={isWaving}
          />
        </div>

        {/* Right Side: Section Content area (Scrolls Naturally) (Width 60% for continuous layout) */}
        <div className="w-full md:w-[60%] px-6 md:px-16 py-12 flex flex-col gap-24 md:gap-32 bg-[#FAF6F0] z-10">
          
          <div id="about" className="min-h-[80vh] flex items-center py-10 w-full">
            <About />
          </div>

          <div id="skills" className="min-h-[80vh] flex items-center py-10 w-full">
            <Skills />
          </div>

          <div id="projects" className="min-h-[80vh] flex items-center py-10 w-full">
            <Projects />
          </div>

          <div id="certifications" className="min-h-[80vh] flex items-center py-10 w-full">
            <Certifications />
          </div>

          <div id="achievements" className="min-h-[80vh] flex items-center py-10 w-full">
            <Achievements />
          </div>

          <div id="contact" className="min-h-[80vh] flex items-center py-10 w-full">
            <Contact />
          </div>

          <div id="resume" className="min-h-[80vh] flex items-center py-10 w-full">
            <Resume />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;