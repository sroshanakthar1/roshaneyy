import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";
import CV from "@/assets/Roshan_Akthar_CV.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[length:100%_100%]" 
           style={{ backgroundImage: 'var(--gradient-hero)' }} />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile Picture */}
        <br /><br />
        <div className="mb-8 animate-scale-in">
          <div className="relative w-56 h-56 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-glow-pulse" />
            <img 
              src={profilePicture} 
              alt="Profile" 
              className="relative w-full h-full rounded-full object-cover border-4 border-background"
            />
          </div>
        </div>

        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Roshan Akthar</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I craft elegant solutions to complex problems. Specializing in building exceptional digital experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-delayed">
          <Button onClick={() => { window.location.href = "#contact" }} size="lg" className="hover-glow">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button onClick={() => { window.location.href = "#projects" }} size="lg" variant="outline" className="hover-glow">
            View Projects
          </Button>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = CV; // file inside public/
              link.download = "Roshan_Akthar_CV.pdf";
              link.click();
            }}
            size="lg"
            className="hover-glow">
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fade-in-delayed">
          <a href="https://github.com/sroshanakthar1" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/sroshanakthar1/" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:sroshanakthar1@gmail.com"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
