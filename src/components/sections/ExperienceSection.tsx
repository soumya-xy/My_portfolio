
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

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

const ExperienceSection = () => (
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
);

export default ExperienceSection;
