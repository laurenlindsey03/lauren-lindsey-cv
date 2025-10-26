import resumeData from "./resume.json";
import type { Resume } from "@/types/resume";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import EducationList from "./components/Education";
import Honors from "./components/Honors";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const resume = resumeData as Resume;

export default function Home() {
  const { name, tagline, headshot, contact, education, honors_and_awards, skills, leadership_and_experience, projects } = resume;

  return (
    <main>
      <Nav />
      <Header/>
       <Section >
        <EducationList />
      </Section>

      <Section >
        <Honors />
      </Section>

      <Section >
        <Skills  />
      </Section>

      <Section >
        <Experience />
      </Section>

       <Section >
        <Projects />
      </Section>
      <Footer />
    </main>
  );
}
