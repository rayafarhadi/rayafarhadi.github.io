import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navigation/Navbar";
import ProjectSection from "./components/projects/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background-primary">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
