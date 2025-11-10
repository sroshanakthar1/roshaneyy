import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 text-center hover-lift animate-scale-in">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2 animate-slide-in-up group" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-glow-pulse">
                <Mail className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium transition-colors duration-300 group-hover:text-primary">sroshanakthar1@gmail.com</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 animate-slide-in-up group" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-glow-pulse">
                <Phone className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium transition-colors duration-300 group-hover:text-primary">+94 715973559</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 animate-slide-in-up group" style={{ animationDelay: '0.3s' }}>
              <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-glow-pulse">
                <MapPin className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium transition-colors duration-300 group-hover:text-primary">Puttalam, Sri Lanka</p>
            </div>
          </div>
          
          <Button size="lg" className="hover-glow hover-scale animate-fade-in-delayed" asChild>
            <a href="mailto:sroshanakthar1@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
