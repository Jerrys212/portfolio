import { AboutSection } from "@/features/about/components/about-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { StackSection } from "@/features/stack/components/stack-section";

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ExperienceSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

export default Home;
