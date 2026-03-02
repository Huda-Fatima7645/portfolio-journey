import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
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
  },
];

export function ExperienceSection() {
  const exp = experiences[0];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
               Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey as a software engineer, building impactful products and growing my expertise.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional right-side highlight */}
              <div className="md:w-56 shrink-0">
                <div className="rounded-2xl border border-border/50 bg-background p-5">
                  <p className="text-sm font-medium mb-2">Highlights</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Production React and Next.js apps</li>
                    <li>API integration and state management</li>
                    <li>Code quality and team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: small note under the card */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            More roles and freelance work can be added here as you grow.
          </p>
        </div>
      </div>
    </section>
  );
}