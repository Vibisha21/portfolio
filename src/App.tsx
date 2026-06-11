import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

import Robot from "./components/Robot";
import JourneyPath from "./components/JourneyPath";

function App() {
  return (
    <>
      <Hero />

      <div className="flex">
        {/* Left Side - Robot Path Area */}
        <div className="w-[30%] relative border-r border-gray-300">
          <div className="sticky top-0 h-screen">
            <div className="relative h-full w-full">
              <JourneyPath />

              {/* Robot */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-10">
                <Robot />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-3/4 px-10">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
          <Resume />
        </div>
      </div>
    </>
  );
}

export default App;