import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, Award, Trophy, Star, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University Name",
    location: "City, Country",
    year: "2020 - 2022",
    gpa: "3.9/4.0",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis focused on Natural Language Processing applications in healthcare.",
    courses: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
    awards: [
      "Graduate Research Fellowship",
      "Best Thesis Award",
      "Academic Excellence Scholarship",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    location: "City, Country",
    year: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Strong foundation in software engineering, algorithms, and data structures. Active member of the Computer Science Society.",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"],
    awards: [
      "Dean's List (All Semesters)",
      "Outstanding Senior Award",
      "Hackathon Winner 2019",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Champion",
    description: "Won 1st place in National Tech Hackathon 2023",
  },
  {
    icon: Star,
    title: "Top Performer",
    description: "Recognized as top 5% in graduating class",
  },
  {
    icon: BookOpen,
    title: "Published Research",
    description: "2 papers published in peer-reviewed journals",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                My <span className="text-gradient">Education</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A journey through academia that built my foundation in computer science, 
                research methodology, and problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Summary */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Main Info */}
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl font-bold mb-1">
                            {edu.degree}
                          </h2>
                          <p className="text-muted-foreground">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">
                            {edu.location} • {edu.year}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{edu.description}</p>

                      <div className="mb-6">
                        <h4 className="font-medium mb-3">Key Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-lg"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-lg">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </div>
                    </div>

                    {/* Right: Awards */}
                    <div className="lg:w-1/3 lg:border-l lg:border-border lg:pl-8">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Awards & Honors
                      </h4>
                      <ul className="space-y-3">
                        {edu.awards.map((award, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Education;
