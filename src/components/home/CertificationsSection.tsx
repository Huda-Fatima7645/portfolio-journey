import { Award, BadgeCheck, Calendar } from "lucide-react";

const certifications = [
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/web dev.jpg",
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/react.jpg",
  },
  {
    name: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "2021",
    image: "/certificates/SCRUMstudy_Huda  Fatima.jpg",
  },
  {
    name: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    issuer: "Udemy",
    date: "2021",
    // image: "/certificates/mysql.jpg",
  }
];


export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications that validate my expertise in cloud, development, and AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group hover:-translate-y-1 h-full flex flex-col"
            >
              {cert.image ?(
                <a href={cert.image} target="_blank" rel="noopener noreferrer" className="mb-4 block">
                  <img
                    src={cert.image}
                    alt={cert.name + ' certificate'}
                    className="w-full h-32 object-contain rounded-md border border-border/30 shadow"
                  />
                </a>
              ): 
              (<div className="w-full h-32 bg-muted/20 rounded-md flex items-center justify-center mb-4">
                <Award className="w-10 h-10 text-muted-foreground" />
              </div>
              )}
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors flex-1">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {cert.date}
              </div>
              {/* <div className="flex items-center gap-2 text-xs text-primary mt-2">
                <BadgeCheck className="w-3 h-3" />
                Verified
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
