import { Code, Database, Wrench, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "Linux"]
    },
    {
      title: "Mobile & Others",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "GraphQL", "Socket.io", "Jest", "Webpack", "Vite", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-strong rounded-xl p-6 hover-lift group"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:shadow-neon transition-all duration-300">
                  <span className="text-white">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neon-secondary group-hover:text-neon-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 group/skill hover:translate-x-2 transition-transform duration-200"
                  >
                    <div className="w-2 h-2 bg-neon-primary rounded-full group-hover/skill:animate-glow-pulse"></div>
                    <span className="text-sm text-foreground group-hover/skill:text-neon-secondary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Lines of Code", value: "100K+" },
            { label: "Cups of Coffee", value: "∞" },
            { label: "GitHub Commits", value: "2K+" },
            { label: "Happy Clients", value: "15+" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;