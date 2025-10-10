import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization and insights",
      image: project1,
      tags: ["React", "TypeScript", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with seamless checkout and inventory management",
      image: project2,
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Manager",
      description: "Intuitive project management tool with kanban boards and team collaboration features",
      image: project3,
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
