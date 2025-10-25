import { SpotlightPreview } from "./components/SpotlightPreview";
import { AnimatedPinDemo } from "./components/AnimatedPinDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import Border from "./components/Border";
import { SparklesPreview } from "./components/SparklesPreview";
import { AboutHeader } from "./components/AboutHeader";
import { CardAbout } from "./components/CardAbout";
import { SkillEdu } from "./components/SkillEdu";
import { SkillEducationCard } from "./components/SkillEducationCard";
import { ConnectHeader } from "./components/ConnectHeader";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative">
        <SpotlightPreview />
      </section>

      {/* Floating Navigation */}
      <FloatingNavDemo />

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <Border />
        <div className="flex justify-center items-center py-12">
          <SparklesPreview />
        </div>
        <div className="flex justify-center items-center px-4">
          <AnimatedPinDemo />
        </div>
        <div className="mt-20">
          <Border />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <AboutHeader />
        <div className="py-12">
          <CardAbout />
        </div>
        <div className="mt-20">
          <Border />
        </div>
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="relative py-20">
        <SkillEdu />
        <SkillEducationCard />
        <div className="mt-20">
          <Border />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <ConnectHeader />
        <BackgroundLinesDemo />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
