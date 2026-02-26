import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, Award, Trophy, Star, BookOpen } from "lucide-react";

const education = [
  {
    degree: "BE Software Engineering",
    school:
      "School of Electrical Engineering and Computer Science (SEECS), National University of Sciences & Technology (NUST)",
    location: "Islamabad, Pakistan",
    year: "2019 - 2023",
    gpa: "CGPA: 3.28/4.0",
    description:
      "Built a strong foundation in software engineering, algorithms, and data-driven systems. Completed a full-stack final year project and gained hands-on experience in ML using Python and scikit-learn.",
    courses: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Probability & Statistics",
      "Linear Algebra & ODEs",
      "Data Warehousing & Mining",
      "Internet of Things",
      "OOP in Java",
      "Python Programming",
    ],
    awards: ["Washington Accord Accredited Program"],
  },
  {
    degree: "Higher Secondary School Certificate (HSSC – ICS), Computer Science",
    school: "KIPS College for Girls (BISE Faisalabad)",
    location: "Faisalabad, Pakistan",
    year: "2017 - 2019",
    gpa: "Score: 93% (1023/1100)",
    description:
      "Focused on Computer Science with strong academic performance and recognition through scholarships and medals.",
    courses: ["Computer Science", "Mathematics", "Physics"],
    awards: [
      "Silver Medalist for Regional Academic Excellence",
      "Quaid-e-Azam Merit Scholarship",
      "Gold Medal (Sadique Bani Nazarat-e-Taleem Pakistan)",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC – Matric), Science",
    school: "Masoomeen Foundation Girls High School (BISE Faisalabad)",
    location: "Chiniot, Pakistan",
    year: "2015 - 2017",
    gpa: "Score: 95% (1046/1100)",
    description:
      "Science track with strong academic performance and merit-based recognition.",
    courses: ["Computer Science", "Mathematics", "Physics"],
    awards: [
      "PEEF Merit Scholarship Recipient",
      "Chief Minister Laptop Scheme Winner",
      "Physics Quiz Competition Winner",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Intra-School Badminton Winner (Doubles)",
    description:
      "Won the intra-school doubles competition as a member of the department badminton team.",
  },
  {
    icon: Star,
    title: "IELTS 7.5 Overall",
    description: "Listening 8.5 | Reading 7.5 | Writing 7.0 | Speaking 7.0",
  },
  {
    icon: BookOpen,
    title: "ML + Full-Stack Final Year Project",
    description:
      "Built a full-stack marketplace and integrated a Python (scikit-learn) ML model for price prediction.",
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
                My academic background built a strong base in software
                engineering, algorithms, and data-driven development; supporting
                my current work in modern web applications and applied machine
                learning.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Summary */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border/50 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-8 h-8 text-primary" />
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

                      <p className="text-muted-foreground mb-6">
                        {edu.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-medium mb-3">Key Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-lg font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                        <span>Result:</span> {edu.gpa}
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
                          <li key={i} className="flex items-start gap-3 text-sm">
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
