import { AboutSection } from "@/features/about/components/about-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { StackSection } from "@/features/stack/components/stack-section";
import { getExperiences } from "@/data/experiences/get-experiences";
import { getGlobal } from "@/data/global/get-global";
import { getHomePage } from "@/data/home-page/get-home-page";
import { getProjects } from "@/data/projects/get-projects";
import { getServices } from "@/data/services/get-services";
import { getStackGroups } from "@/data/stack-groups/get-stack-groups";

const Home = async () => {
    const [home, global, experiences, stackGroups, services, projects] = await Promise.all([
        getHomePage(),
        getGlobal(),
        getExperiences(),
        getStackGroups(),
        getServices(),
        getProjects(),
    ]);

    return (
        <>
            {home.hero && <HeroSection hero={home.hero} />}
            {home.about && <AboutSection about={home.about} />}
            {home.stack && <StackSection header={home.stack} groups={stackGroups} />}
            {home.experience && <ExperienceSection header={home.experience} experiences={experiences} />}
            {home.services && <ServicesSection block={home.services} services={services} />}
            {home.projects && <ProjectsSection header={home.projects} projects={projects} />}
            {home.contact && <ContactSection block={home.contact} global={global} />}
        </>
    );
};

export default Home;
