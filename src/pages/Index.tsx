import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arnav Verma. Built with passion.
      </div>
    </footer>
  </div>
);

export default Index;
