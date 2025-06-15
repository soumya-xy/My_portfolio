import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Github, Linkedin, Twitter, Mail, ExternalLink, Calendar, MapPin, Trophy, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';
import { ChromeGrid } from '@/components/ui/chrome-grid';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'hackathons', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "AI-Powered Task Manager",
      description: "Smart task management app with ML-based priority suggestions and productivity insights.",
      tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      name: "Real-Time Chat Platform",
      description: "Scalable chat application with WebSocket connections and message encryption.",
      tech: ["Next.js", "Socket.io", "Redis", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing complex datasets with advanced charting capabilities.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      name: "E-commerce Mobile App",
      description: "Cross-platform mobile app with payment integration and real-time inventory management.",
      tech: ["React Native", "Firebase", "Stripe", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Deep Learning", icon: "🧠" },
    { name: "TensorFlow", icon: "🔥" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "📝" }
  ];

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      description: "Developed responsive web applications using React and improved user engagement by 35%."
    },
    {
      title: "Freelance Web Developer",
      company: "Independent",
      duration: "Jan 2024 - Present",
      location: "Remote",
      description: "Built custom websites for small businesses, focusing on performance and user experience."
    }
  ];

  const achievements = [
    {
      title: "Winner - Smart India Hackathon 2024",
      description: "Led a team of 6 to develop an AI-powered education platform",
      date: "March 2024"
    },
    {
      title: "2nd Place - University Tech Fest",
      description: "Created innovative IoT solution for smart campus management",
      date: "October 2023"
    },
    {
      title: "MLH Fellowship Participant",
      description: "Contributed to open-source projects and collaborated with global developers",
      date: "Summer 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3">
        <div className="flex space-x-6">
          {['hero', 'about', 'projects', 'skills', 'experience', 'hackathons', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors duration-300 capitalize hover:text-primary ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {section === 'hackathons' ? 'Achievements' : section}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-bold">SJ</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-3">
              {['hero', 'about', 'projects', 'skills', 'experience', 'hackathons', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors duration-300 capitalize hover:text-primary text-left p-2 rounded ${
                    activeSection === section ? 'text-primary bg-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'hackathons' ? 'Achievements' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* About Me Section */}
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground border-border text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
                <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <div className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-foreground font-medium">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="break-all">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons & Achievements Section */}
      <section id="hackathons" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Achievements & Hackathons
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground mb-2 text-sm sm:text-base">{achievement.description}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Let's Connect
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology. Feel free to reach out!
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Github className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
                <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
                <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Twitter className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
                <a href="mailto:soumya@example.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <Button className="w-full py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2024 Soumya Jain. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
