import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "My Journey from React Developer to AI Enthusiast",
    excerpt: "How I transitioned from frontend development to exploring the world of artificial intelligence, and what I learned along the way.",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Career",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Lessons Learned",
    excerpt: "After 2 years of building React apps, here are the patterns and practices that have helped me create maintainable, scalable code.",
    date: "December 28, 2023",
    readTime: "12 min read",
    category: "React",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Understanding Transformers: A Beginner's Guide",
    excerpt: "Breaking down the transformer architecture that powers modern AI models like GPT and BERT in simple terms.",
    date: "November 10, 2023",
    readTime: "15 min read",
    category: "AI/ML",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "TypeScript Tips for React Developers",
    excerpt: "Practical TypeScript patterns and tips that will make your React code more type-safe and maintainable.",
    date: "October 5, 2023",
    readTime: "10 min read",
    category: "TypeScript",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "The Art of Writing Clean Code",
    excerpt: "Principles and practices for writing code that's not just functional, but also beautiful and maintainable.",
    date: "September 20, 2023",
    readTime: "7 min read",
    category: "Best Practices",
    image: "/placeholder.svg",
  },
];

const categories = ["All", "Career", "React", "AI/ML", "TypeScript", "Best Practices"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Thoughts, tutorials, and insights on web development, AI, 
                and my journey as a software engineer.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-card">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl font-bold mb-8">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <article className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 h-full hover:-translate-y-1">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
