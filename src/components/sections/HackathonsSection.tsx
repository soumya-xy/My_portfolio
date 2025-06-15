
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
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

const HackathonsSection = () => (
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
);

export default HackathonsSection;
