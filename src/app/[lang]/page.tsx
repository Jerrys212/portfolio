import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import { getExperiences } from "@/data/experiences/get-experiences";
import { getGlobal } from "@/data/global/get-global";
import { getHomePage } from "@/data/home-page/get-home-page";
import { getProjects } from "@/data/projects/get-projects";
import { getServices } from "@/data/services/get-services";
import { getTechnologies } from "@/data/technologies/get-technologies";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildProfileJsonLd, resolveSeo, serializeJsonLd } from "@/lib/seo";

export default async function Page({ params }: PageProps<"/[lang]">) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    const dict = getDictionary(lang);

    const [global, homePage, services, technologies, experiences, projects] = await Promise.all([
        getGlobal(lang),
        getHomePage(lang),
        getServices(lang),
        getTechnologies(),
        getExperiences(lang),
        getProjects(lang),
    ]);

    const jsonLd = buildProfileJsonLd({
        lang,
        global,
        ...resolveSeo(global, dict.seo),
        experiences,
        technologies,
    });

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
            <Nav lang={lang} dict={dict.nav} />
            <main>
                <Home
                    global={global}
                    hero={homePage.hero}
                    skillsTitle={homePage.skills.heading}
                    services={services}
                    technologies={technologies}
                    dict={dict.hero}
                />
                <Experience lang={lang} header={homePage.experience} items={experiences} dict={dict.experience} />
                <Projects header={homePage.projects} items={projects} githubUrl={global.githubUrl} dict={dict.projects} />
                <Contact content={homePage.contact} dict={dict.contact} />
            </main>
            <Footer global={global} dict={dict.footer} />
        </>
    );
}
