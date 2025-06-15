
import { ChromeGrid } from "@/components/ui/chrome-grid";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center px-0">
    <div className="absolute inset-0 h-full w-full z-0">
      <ChromeGrid />
    </div>
    <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap">
        Surface Tension
      </h1>
      <p className="text-sm md:text-base text-white/70 font-mono tracking-wide">
        Metal that responds to touch.
      </p>
    </div>
  </section>
);

export default HeroSection;
