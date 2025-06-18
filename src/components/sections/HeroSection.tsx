import { ChromeGrid } from "@/components/ui/chrome-grid";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center px-2">
    <div className="absolute inset-0 h-full w-full z-0">
      <ChromeGrid />
    </div>
    <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center w-full max-w-full">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light mb-3 md:mb-4 tracking-widest text-white text-center break-words leading-tight">
        SOUMYA JAIN
      </h1>

      <p className="text-xs xs:text-sm sm:text-lg text-white/70 font-mono tracking-wide text-center max-w-xs sm:max-w-md">
        <Typewriter
          words={["frontend developer", "Machine learning enthusiast"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={40}
          delaySpeed={800}
        />
      </p>
    </div>
  </section>
);

export default HeroSection;
