import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Crafting beautiful interfaces with attention to every detail"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in web development, I specialize in 
              turning complex problems into elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm pursuing my passion for fashion modeling, blending creativity 
              and style in both the tech and fashion worlds.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I build full-stack web applications using modern technologies like React, Node.js, 
              and various cloud platforms. My approach combines technical expertise with creative 
              problem-solving to deliver products that users love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From concept to deployment, I handle every aspect of web development with precision 
              and care, ensuring each project exceeds expectations.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
            >
              <item.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-smooth" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
