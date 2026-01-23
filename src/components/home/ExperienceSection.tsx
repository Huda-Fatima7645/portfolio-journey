import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Remote",
    period: "2023 - Present",
    description: "Building responsive React applications with TypeScript. Leading UI/UX improvements and implementing modern design systems.",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Junior React Developer",
    company: "Startup Inc.",
    location: "Hybrid",
    period: "2022 - 2023",
    description: "Developed and maintained web applications using React.js. Collaborated with design teams to implement pixel-perfect interfaces.",
    skills: ["React.js", "JavaScript", "CSS3", "Git"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My professional journey as a software engineer, building impactful products and growing my expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold mb-2">{exp.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
