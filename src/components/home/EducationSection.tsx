import { Link } from "react-router-dom";
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University Name",
    year: "2020 - 2022",
    highlight: "Graduated with Distinction",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    year: "2016 - 2020",
    highlight: "Dean's List | GPA: 3.8/4.0",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              My academic journey that shaped my foundation in computer science and technology.
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    <Award className="w-4 h-4" />
                    {edu.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="group" asChild>
            <Link to="/education">
              View All Education & Awards
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
