import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  duration: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}> = {
  "1": {
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses Natural Language Processing to automatically categorize and prioritize tasks.",
    longDescription: "This project was born from the frustration of managing countless tasks across different projects. I wanted to create something that could understand the context of a task and automatically suggest the right category, priority, and due date. The application uses OpenAI's GPT API to analyze task descriptions and provide intelligent suggestions.",
    tags: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "January 2024",
    duration: "3 months",
    features: [
      "Natural language task input with smart parsing",
      "Automatic task categorization using AI",
      "Priority suggestions based on task context",
      "Voice input for hands-free task creation",
      "Productivity analytics and insights",
      "Team collaboration features",
    ],
    challenges: [
      "Optimizing API calls to minimize latency",
      "Handling edge cases in natural language processing",
      "Designing an intuitive UI for complex features",
    ],
    learnings: [
      "Deep understanding of LLM integration patterns",
      "Importance of user feedback in AI applications",
      "Performance optimization techniques for React apps",
    ],
  },
  "2": {
    title: "E-Commerce Analytics Dashboard",
    description: "A real-time analytics dashboard for e-commerce platforms with interactive charts and insights.",
    longDescription: "Built for a client who needed better visibility into their e-commerce operations. This dashboard aggregates data from multiple sources and presents it in an easy-to-understand format with interactive visualizations.",
    tags: ["React", "Redux", "D3.js", "Node.js", "PostgreSQL", "WebSocket"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "October 2023",
    duration: "4 months",
    features: [
      "Real-time sales tracking with live updates",
      "Interactive charts and graphs",
      "Sales forecasting using historical data",
      "Customer behavior analysis",
      "Inventory management integration",
      "Export reports to PDF and Excel",
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Implementing real-time updates without performance issues",
      "Creating responsive and accessible data visualizations",
    ],
    learnings: [
      "Advanced D3.js techniques for custom visualizations",
      "WebSocket implementation for real-time features",
      "Data aggregation and optimization strategies",
    ],
  },
  "3": {
    title: "Social Media Sentiment Analyzer",
    description: "A machine learning application that analyzes social media posts to determine public sentiment.",
    longDescription: "This project combines my interests in both web development and machine learning. It scrapes social media posts related to specific topics and uses a custom-trained NLP model to analyze sentiment, providing insights into public opinion trends.",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB", "Docker"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    date: "August 2023",
    duration: "2 months",
    features: [
      "Real-time sentiment analysis",
      "Topic-based monitoring",
      "Sentiment trend visualization",
      "Custom NLP model training",
      "API for integration with other tools",
      "Scheduled reports and alerts",
    ],
    challenges: [
      "Training an accurate sentiment analysis model",
      "Handling rate limits from social media APIs",
      "Scaling the application for large data volumes",
    ],
    learnings: [
      "NLP model training and fine-tuning",
      "Building production-ready ML pipelines",
      "Container orchestration with Docker",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-12 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {project.duration}
              </div>
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button variant="hero" asChild>
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
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">About This Project</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Challenges Faced</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-foreground mt-2 shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learnings */}
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Key Learnings</h2>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-foreground mt-2 shrink-0" />
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 sticky top-28">
                  <h3 className="font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
