
import { StarBorder } from "@/components/ui/star-border";

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-foreground">
        About Me
      </h2>
      <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 sm:space-y-6">
        <p className="font-bold text-xl">
          I specialize in frontend development, creating beautiful and functional user experiences 
          using modern technologies like React and Next.js. But my interests don't stop there – 
          I'm also diving deep into machine learning and AI, exploring how these technologies 
          can be integrated into web applications.
        </p>
        <p>
          I'm a passionate engineering student with a deep love for technology and innovation. 
          My journey in tech began with curiosity about how things work, and has evolved into 
          a mission to create solutions that make a real difference.
        </p>
        <p>
          When I'm not coding, you'll find me participating in hackathons, contributing to open-source 
          projects, or learning about the latest tech trends. 
        </p>
        <div className="pt-4 flex justify-center gap-12">
          <StarBorder speed="2s" color="orange">
            <a
              href="https://drive.google.com/file/d/1O4NkNrblQFWrObL9x3rCAlJ867bUMqpX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              View Resume
            </a>
          </StarBorder>
          <StarBorder speed="2s" color="orange">
            <a
              href="https://github.com/soumya-xy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Github"
            >
              My Github
            </a>
          </StarBorder>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

