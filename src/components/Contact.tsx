import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/yourgirl_samuella/?hl=en", label: "Instagram" },
    { icon: Github, href: "https://github.com/samuella-code", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/samuella-eze-oge/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ezeogesamuella@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-semibold">Find me on</h4>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-smooth hover:shadow-glow group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <Card className="p-6 bg-card border-border shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
