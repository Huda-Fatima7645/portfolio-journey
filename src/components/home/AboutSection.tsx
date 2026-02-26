import { Code2, Brain, Palette, Database } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development (Next.js)",
    description: "Building fast, responsive web apps with Next.js, React.js, TypeScript, and modern UI frameworks.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Hands-on ML with Python and scikit-learn, and actively learning deep learning and NLP for real-world applications.",
  },
  {
    icon: Database,
    title: "Databases & Backend Integration",
    description: "Working with SQL databases (MySQL/PostgreSQL) and integrating REST APIs for complete, data-driven products.",
  },
];


export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate software engineer with 2 years of professional experience 
            in building responsive, user-centric web applications. My journey has been 
            focused on React.js, and now I'm expanding my horizons into the fascinating 
            realm of Artificial Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
