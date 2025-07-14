import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Teju</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating seamless digital solutions that make a difference.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neon-secondary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-neon-primary transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neon-secondary">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glass-strong hover:shadow-neon transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="text-muted-foreground group-hover:text-neon-primary transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Separator */}
        <div className="h-px bg-gradient-primary opacity-30 mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Teju. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;