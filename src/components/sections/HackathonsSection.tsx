import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Finalist - Smart India Hackathon 2024",
    description: "Led a team of 6 to develop an AI-powered education platform.",
    date: "October 2024",
  },
  {
    title: "lnmHacks 7.0",
    description: "Created an innovative IoT solution for smart campus management.",
    date: "February 2025",
  },
  {
    title: "MLH Fellowship Participant",
    description: "Contributed to open-source projects with global developers.",
    date: "Summer 2025",
  },
];

const HackathonsSection = () => (
  <section id="hackathons" className="py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
        Achievements & Hackathons
      </h2>

      <ul className="space-y-10">
        {achievements.map((item, index) => (
          <li
            key={index}
            className="group relative pl-5 border-l border-border hover:border-primary transition-all"
          >
            <span className="absolute left-[-9px] top-1.5 w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform shadow-md" />

            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              {item.title}
            </h3>

            <p className="text-muted-foreground mb-1 text-sm">{item.description}</p>
            <p className="text-muted-foreground text-xs">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HackathonsSection;
