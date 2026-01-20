import { Award, BadgeCheck, Calendar } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123XYZ",
  },
  {
    name: "React Professional Developer",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-456",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    credentialId: "TF-DEV-789",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera / Stanford",
    date: "2024",
    credentialId: "ML-SPEC-101",
  },
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
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors flex-1">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {cert.date}
              </div>
              <div className="flex items-center gap-2 text-xs text-primary mt-2">
                <BadgeCheck className="w-3 h-3" />
                Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
