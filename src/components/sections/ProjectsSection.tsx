import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "ResQVision",
    description:
      "AI-powered emergency response platform that enhances coordination and situational awareness through real-time dashboards and intelligent decision-making tools..",
    tech: ["React", "Node.js", "flask", "MongoDB"],
    github: "https://github.com/soumya-xy/ResQVision",
    demo: "https://resq-vision.netlify.app/",
  },
  {
    name: "CreatorX",
    description:
      "revolutionizes digital creator-fan relationships through personalized AI engagement and sustainable token-based monetization",
    tech: ["Node.js", "React", "Aptos", "Docker"],
    github: "https://github.com/soumya-xy/CreatorX",
    demo: " https://vocal-choux-8aed6b.netlify.app/",
  },
  {
    name: "Loan Approval Prediction",
    description:
      "A machine learning-powered web application that predicts loan approval likelihood with 85% accuracy based on user financial profiles.",
    tech: ["Tailwind css", "Scikit-learn", "Flask", "FastAPI"],
    github: "https://github.com/soumya-xy/loan_approval",
    demo: "https://loan-approval-prediction-huo2.onrender.com/",
  },
  {
    name: "emberShield Marketplace",
    description:
      "a marketplace for fire and safety equipmaent (still working)",
    tech: ["React Native", "Firebase", "Stripe", "Next.js"],
    github: "https://github.com/soumya-xy/ember-shield-marketplace",
    demo: "https://lovable.dev/projects/202bc4bd-9361-48f2-bb5e-594efeaf1150",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center text-foreground relative">
        Featured Projects
        <span className="block mx-auto mt-3 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-background/80 to-muted/60 border border-border/60 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group backdrop-blur-md relative overflow-hidden"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 dark:bg-zinc-900/20 backdrop-blur-[2px] pointer-events-none z-0" />
            <CardContent className="relative p-6 z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base min-h-[48px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-secondary/80 text-secondary-foreground border border-border/60 text-xs sm:text-sm rounded-full px-3 py-1 shadow-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  className="rounded-full p-2 bg-background/70 hover:bg-primary/10 border border-border/60 shadow transition-colors"
                  title="View on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={project.demo}
                  className="rounded-full p-2 bg-background/70 hover:bg-primary/10 border border-border/60 shadow transition-colors"
                  title="View Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-6 w-6" />
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
