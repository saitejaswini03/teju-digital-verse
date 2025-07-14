const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-strong rounded-2xl p-8 md:p-12 hover-lift">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi, I'm <span className="text-neon-primary font-semibold">Teju</span> — a passionate full stack developer who builds efficient, modern, and scalable web solutions from scratch. I enjoy blending creativity with logic to create digital experiences that perform and impress.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-secondary mb-4">What I Bring:</h3>
                <div className="space-y-3">
                  {[
                    "End-to-end web development",
                    "Modern programming languages",
                    "Keen interest in AI, Web3, automation"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-primary rounded-full animate-glow-pulse"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Years of Experience</span>
                  <span className="text-2xl font-bold text-neon-primary">3+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                  <span className="text-2xl font-bold text-neon-secondary">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Technologies Mastered</span>
                  <span className="text-2xl font-bold text-neon-accent">15+</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-primary/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-secondary/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;