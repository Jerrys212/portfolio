import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Nav lang={lang} dict={dict.nav} />
      <Home dict={dict} />
      <Experience dict={dict.experience} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </>
  );
}
