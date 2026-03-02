import { ArrowDown, Sparkles, Code2, Brain, Download, Github, Linkedin, Mail } from "lucide-react";
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
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Floating Icons */}
      <div className="absolute top-32 right-20 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 rounded-2xl bg-card shadow-card flex items-center justify-center border border-border/30">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-14 h-14 rounded-2xl bg-card shadow-card flex items-center justify-center border border-border/30">
          <Brain className="w-7 h-7 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 left-[15%] hidden lg:block animate-float" style={{ animationDelay: "5s" }}>
        <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center border border-border/30">
          <Sparkles className="w-5 h-5 text-primary/70" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Open to opportunities</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up leading-tight">
            Hi, I'm <span className="text-gradient">Huda Fatima</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-slide-up font-medium" style={{ animationDelay: "0.1s" }}>
            Software Engineer & AI Enthusiast
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            2+ years crafting beautiful React applications. Now exploring the exciting
            world of Artificial Intelligence and Data Science.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border/50 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border/50 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-10 h-10 rounded-full bg-card border border-border/50 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>

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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce-slow border border-border/30"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}