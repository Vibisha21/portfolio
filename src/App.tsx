import { useState, useEffect, useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import JourneyPath from "./components/JourneyPath";
import ScrapbookBackground from "./components/ScrapbookBackground";
import ScrollPathArrow from "./components/ScrollPathArrow";
import ScrollDoodle from "./components/ScrollDoodle";
import TwistingArrow from "./components/TwistingArrow";
import JumpingArrow from "./components/JumpingArrow";

function App() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [robotPos, setRobotPos] = useState({ x: 160, y: 50 });
  const [isJumpingCheckpoint, setIsJumpingCheckpoint] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const journeyContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const targetCheckpointRef = useRef<string | null>(null);

  // Derived states
  const isSitting = false;
  const isJumping = progress >= 0.96 || isJumpingCheckpoint || isAtEnd;
  const isWaving = progress >= 0.96 || isAtEnd;

  const handleCheckpointClick = (id: string) => {
    const sectionIds = ["about", "education", "skills", "projects", "certifications", "achievements", "contact", "resume"];
    const targetIdx = sectionIds.indexOf(id);
    const distance = Math.abs(targetIdx - activeIndex);

    if (distance >= 2) {
      setIsJumpingCheckpoint(true);
      targetCheckpointRef.current = id;
    } else {
      setIsJumpingCheckpoint(false);
      targetCheckpointRef.current = null;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = journeyContainerRef.current;
      const path = pathRef.current;
      if (!container || !path) return;

      const sectionIds = ["about", "education", "skills", "projects", "certifications", "achievements", "contact", "resume"];
      const sectionElements = sectionIds.map(id => document.getElementById(id));
      
      const triggerY = 0; // The top of the viewport is the focus/trigger line
      let activeIdx = 0;
      let ratio = 0;
      
      const firstEl = sectionElements[0];
      if (firstEl) {
        const firstRect = firstEl.getBoundingClientRect();
        if (firstRect.top > triggerY) {
          // Before the first section triggers
          activeIdx = 0;
          ratio = 0;
        } else {
          // Find the currently active section based on the trigger line
          for (let i = 0; i < sectionElements.length; i++) {
            const el = sectionElements[i];
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            
            if (rect.top <= triggerY) {
              activeIdx = i;
              
              const nextEl = sectionElements[i + 1];
              if (nextEl) {
                const nextRect = nextEl.getBoundingClientRect();
                const totalDistance = nextRect.top - rect.top;
                const distanceToNext = nextRect.top - triggerY;
                if (totalDistance > 0) {
                  // Only start moving the robot to the next checkpoint when the next section is close (within 80% of viewport height)
                  const transitionDistance = Math.min(totalDistance, window.innerHeight * 0.8);
                  if (distanceToNext >= transitionDistance) {
                    ratio = 0;
                  } else {
                    ratio = Math.max(0, Math.min(1, 1 - distanceToNext / transitionDistance));
                  }
                }
              } else {
                // For the last section, interpolate progress based on remaining scroll in container
                const containerRect = container.getBoundingClientRect();
                const scrolled = -containerRect.top;
                const totalScrollable = containerRect.height - window.innerHeight;
                const lastSectionOffset = el.offsetTop;
                const remainingScroll = totalScrollable - lastSectionOffset;
                if (remainingScroll > 0) {
                  ratio = Math.max(0, Math.min(1, (scrolled - lastSectionOffset) / remainingScroll));
                }
              }
            }
          }
        }
      }
      
      const reachedEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;
      setIsAtEnd(reachedEnd);

      if (targetCheckpointRef.current) {
        const targetEl = document.getElementById(targetCheckpointRef.current);
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          if (Math.abs(rect.top) < 20) {
            setIsJumpingCheckpoint(false);
            targetCheckpointRef.current = null;
          }
        }
      }

      const currentProgress = (activeIdx + ratio) / (sectionIds.length - 1);
      const boundedProgress = Math.max(0, Math.min(1, currentProgress));
      setProgress(boundedProgress);
      setActiveIndex(activeIdx);

      // Calculate the (x, y) coordinates of the robot along the SVG path
      try {
        const pathLength = path.getTotalLength();
        const point = path.getPointAtLength(boundedProgress * pathLength);
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
        setIsJumpingCheckpoint(false);
        targetCheckpointRef.current = null;
      }, 180);
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
        
        {/* Left Side: Robot Path area (Sticky) (Width 30% for higher presence) */}
        <div className="w-full md:w-[30%] h-[35vh] md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-[#E6DFD5] flex items-center justify-center py-4 bg-[#FAF6F0] z-20">
          <JourneyPath
            pathRef={pathRef}
            activeIndex={activeIndex}
            robotPos={robotPos}
            isWalking={isWalking}
            isSitting={isSitting}
            isWaving={isWaving}
            isJumping={isJumping}
            isAtEnd={isAtEnd}
            onCheckpointClick={handleCheckpointClick}
          />
        </div>

        {/* Right Side: Section Content area (Scrolls Naturally) (Width 70% for continuous layout) */}
        <div className="w-full md:w-[70%] px-6 md:px-20 pt-12 pb-16 md:pb-24 flex flex-col gap-24 md:gap-32 notebook-grid z-10 relative">
          <ScrapbookBackground />
          <ScrollPathArrow />
          
          <div id="about" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <About />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="star" size={56} className="absolute left-[10%]" />
            <TwistingArrow size={44} rotationSpeed={0.8} className="absolute right-[15%]" />
            <JumpingArrow size={36} />
          </div>

          <div id="education" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Education />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="heart" size={60} className="absolute right-[8%]" />
            <ScrollDoodle type="loop" size={70} className="absolute left-[12%]" />
          </div>

          <div id="skills" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Skills />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="bulb" size={64} className="absolute left-[15%]" />
            <TwistingArrow size={48} rotationSpeed={-0.6} className="absolute right-[12%]" />
          </div>

          <div id="projects" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Projects />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="smiley" size={56} className="absolute right-[10%]" />
            <ScrollDoodle type="star" size={50} className="absolute left-[8%]" />
          </div>

          <div id="certifications" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Certifications />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="loop" size={64} className="absolute right-[15%]" />
            <TwistingArrow size={40} rotationSpeed={0.5} className="absolute left-[10%]" />
          </div>

          <div id="achievements" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Achievements />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="heart" size={56} className="absolute left-[12%]" />
            <JumpingArrow size={40} className="absolute right-[15%]" />
          </div>

          <div id="contact" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Contact />
          </div>

          <div className="flex justify-center items-center h-20 relative select-none z-10 w-full">
            <ScrollDoodle type="smiley" size={60} className="absolute left-[10%]" />
            <ScrollDoodle type="bulb" size={56} className="absolute right-[8%]" />
          </div>

          <div id="resume" className="min-h-[65vh] flex items-center py-6 w-full z-10 relative">
            <Resume />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;