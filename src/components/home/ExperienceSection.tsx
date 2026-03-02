import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = {
  title: "Software Engineer (Frontend)",
  company: "Sikaram Tech",
  location: "Remote",
  period: "2024 - 2026",
  description:
    "Led frontend development across multiple production projects using React.js and Next.js. Integrated REST APIs, collaborated closely with backend teams, and maintained code quality through reviews, Git workflows, and CI/CD practices.",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "REST APIs",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS",
    "Git",
  ],
  highlights: [
    "Built and shipped multiple production-grade React & Next.js applications",
    "Designed scalable component architectures with reusable UI libraries",
    "Integrated complex REST APIs with robust state management (Redux Toolkit)",
    "Championed code quality through reviews, testing, and CI/CD pipelines",
  ],
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey building impactful products and growing my expertise.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden">
            {/* Decorative accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{experience.company}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {experience.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {experience.description}
              </p>

              {/* Two-column: Highlights + Skills */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {experience.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
