import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "AI-Powered Chat App",
      description: "Real-time chat application with AI integration. Built with Socket.io for real-time communication and OpenAI API for intelligent responses.",
      techStack: ["Next.js", "Socket.io", "OpenAI API", "PostgreSQL", "Prisma"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.",
      techStack: ["Vue.js", "Express.js", "MySQL", "Socket.io", "Chart.js"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Cryptocurrency portfolio tracking application with real-time price updates, portfolio analytics, and market insights.",
      techStack: ["React", "Python", "FastAPI", "Redis", "CoinGecko API"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating various technologies and problem-solving approaches.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-strong rounded-xl p-6 hover-lift group"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-secondary group-hover:text-neon-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="neon" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;