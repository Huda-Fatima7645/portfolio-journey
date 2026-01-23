import { ArrowDown, Sparkles, Code2, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Floating Icons */}
      <div className="absolute top-32 right-20 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 rounded-2xl bg-card shadow-card flex items-center justify-center">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-14 h-14 rounded-2xl bg-card shadow-card flex items-center justify-center">
          <Brain className="w-7 h-7 text-primary" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Open to opportunities</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up leading-tight">
            Hi, I'm <span className="text-gradient">Huda Fatima</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-slide-up font-medium" style={{ animationDelay: "0.1s" }}>
            Software Engineer & AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            2+ years crafting beautiful React applications. Now exploring the exciting 
            world of Artificial Intelligence and Machine Learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce-slow"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
