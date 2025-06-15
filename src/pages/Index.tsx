
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Github, Linkedin, Twitter, Mail, ExternalLink, Calendar, MapPin, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3">
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground animate-scale-in">
            Soumya Jain
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Engineering Student & Frontend Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Passionate about building innovative tech solutions through frontend development, 
            deep learning, and hackathons. Turning ideas into reality, one line of code at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            About Me
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
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
      <section id="projects" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground border-border">
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
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-foreground font-medium">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons & Achievements Section */}
      <section id="hackathons" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Achievements & Hackathons
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground mb-2">{achievement.description}</p>
                      <p className="text-muted-foreground text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology. Feel free to reach out!
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Twitter className="h-8 w-8" />
                </a>
                <a href="mailto:soumya@example.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Soumya Jain. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
