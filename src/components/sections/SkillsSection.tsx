
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "TensorFlow", icon: "🔥" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "📝" }
];

const SkillsSection = () => (
  <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-md p-2 sm:p-3 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
            style={{ minWidth: 0 }}
          >
            <div className="text-lg sm:text-xl mb-1 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <div className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors whitespace-nowrap">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
