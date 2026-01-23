import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
