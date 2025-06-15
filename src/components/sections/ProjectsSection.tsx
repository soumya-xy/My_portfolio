
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

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

const ProjectsSection = () => (
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
);

export default ProjectsSection;
