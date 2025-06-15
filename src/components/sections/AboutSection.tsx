
import { Button } from "@/components/ui/button";

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-foreground">
        About Me
      </h2>
      <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 sm:space-y-6">
        <p>
          I'm a passionate engineering student with a deep love for technology and innovation. 
          My journey in tech began with curiosity about how things work, and has evolved into 
          a mission to create solutions that make a real difference.
        </p>
        <p>
          I specialize in frontend development, creating beautiful and functional user experiences 
          using modern technologies like React and Next.js. But my interests don't stop there – 
          I'm also diving deep into machine learning and AI, exploring how these technologies 
          can be integrated into web applications.
        </p>
        <p>
          When I'm not coding, you'll find me participating in hackathons, contributing to open-source 
          projects, or learning about the latest tech trends. I believe in the power of collaboration 
          and continuous learning to drive innovation forward.
        </p>
        <div className="pt-4 flex justify-center">
          <Button asChild size="lg" className="px-8 text-base font-semibold">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

