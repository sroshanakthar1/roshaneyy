import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Edextor Quiz Application",
    description: "A team of six developers on developing a quiz application to practice for Advanced Level Students.",
    tags: ["ASP.NET Core", "Flutter", "PostgreSQL"],
    github: "https://github.com"
  },
  {
    title: "Car Rental Management System",
    description: "Developed a web-based Car Rental Management System enabling real-time booking, vehicle tracking, and customer management. Implemented user authentication, role-based access (admin/user), and CRUD operations for vehicles and bookings",
    tags: ["ASP.NET Core", "MVC Architecture", "Razor Pages", "HTML", "CSS", "Bootstrap", "MS SQL Server"],
    github: "https://https://github.com/sroshanakthar1/CarRentalManagement.com"
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-glass hover-lift animate-rotate-in border-border/50 group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl transition-colors duration-300 group-hover:text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 hover-scale" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
