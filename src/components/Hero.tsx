import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-60 animate-pulse"></div>
      <div className="absolute inset-0 glass"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-neon-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Main content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">
              Teju
            </h1>
            <h2 className="text-xl md:text-2xl text-neon-secondary font-medium">
              Full Stack Developer | Building Seamless Digital Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From frontend finesse to backend brilliance.
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => {
                // For now, this would link to a PDF
                console.log('Download resume clicked');
              }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="neon" 
              size="lg"
              className="group"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="group"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;