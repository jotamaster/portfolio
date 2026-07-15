import { AboutSection } from "@/features/about/about-section";
import { BlogSection } from "@/features/blog/blog-section";
import { ContactSection } from "@/features/contact/contact-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { HeroSection } from "@/features/hero/hero-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { SkillsSection } from "@/features/skills/skills-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
