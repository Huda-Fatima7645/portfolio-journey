import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses Natural Language Processing to automatically categorize, prioritize, and suggest due dates for tasks. Features include voice input, smart reminders, and productivity analytics.",
    tags: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Node.js"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Analytics Dashboard",
    description: "A real-time analytics dashboard for e-commerce platforms featuring interactive charts, sales forecasting, and customer behavior analysis. Built with performance and scalability in mind.",
    tags: ["React", "Redux", "D3.js", "Node.js", "PostgreSQL"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Social Media Sentiment Analyzer",
    description: "A machine learning application that analyzes social media posts to determine public sentiment. Uses advanced NLP techniques and provides detailed visualizations of sentiment trends.",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "4",
    title: "Recipe Discovery App",
    description: "A beautiful recipe discovery application with smart filtering, meal planning features, and nutritional information. Integrates with various food APIs for comprehensive recipe data.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "5",
    title: "Weather Visualization Tool",
    description: "An interactive weather visualization application with animated maps, 7-day forecasts, and historical weather data comparisons.",
    tags: ["React", "Mapbox", "Chart.js", "OpenWeather API"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Personal Finance Tracker",
    description: "A comprehensive personal finance management tool with expense tracking, budget planning, and investment portfolio visualization.",
    tags: ["React", "TypeScript", "Firebase", "Recharts"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A collection of projects that showcase my skills in React development, 
                AI integration, and creating user-centric applications.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[16/10] bg-muted rounded-2xl overflow-hidden shadow-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button variant="default" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            View Code
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" asChild>
                        <Link to={`/projects/${project.id}`}>
                          Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl font-bold mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group hover:-translate-y-1 h-full flex flex-col"
                >
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
