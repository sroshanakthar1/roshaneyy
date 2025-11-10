import { Code2, Database, Globe, Server } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Angular", "Flutter", "Razor Pages"]
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js / Express.js", "Django", "ASP.NET Core"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "My SQL", "MS SQL"]
  },
  {
    icon: Globe,
    title: "Other",
    skills: ["REST APIs", "Azure", "AWS", "Linux", "Agile", "Git", "Github Actions", "CI/CD", "Docker", "Kubernetes"]
  },
  
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="card-glass rounded-xl p-6 hover-lift hover-glow animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
