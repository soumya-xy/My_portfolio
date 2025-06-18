import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Campus Ambassador",
    company: "IIT Bombay",
    duration: "aug 2024 - dec 2024",
    location: "Remote",
    description:
      "Promoted IIT Bombay’s events and initiatives on campus, increased student participation by 40%, and collaborated with the core team to manage outreach and engagement strategies.",
  },
  
  {
    title: "Freelance Web Developer",
    company: "Independent",
    duration: "Jan 2025 - Present",
    location: "Remote",
    description:
      "Built custom websites for small businesses, focusing on performance and user experience.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-6 sm:px-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
        Experience
      </h2>

      <div className="relative pl-6 border-l-2 border-border">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-14">
            <div className="absolute -left-[0.6rem] top-2 w-3 h-3 bg-primary rounded-full shadow-md" />

            <div className="bg-card border border-border backdrop-blur-md rounded-lg p-5 sm:p-6 hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>
              </div>
              <p className="text-muted-foreground font-medium mb-3">
                {exp.company}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
