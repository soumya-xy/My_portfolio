
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

const SkillsSection = () => (
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
);

export default SkillsSection;
