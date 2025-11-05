import resumeData from "./resume.json";
import type { Resume } from "../../types/resume";
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
      <Nav name={name} context="home" />
      <Header />
      
      <div className="cards-container">
        <Section title="Education">
          <EducationList />
        </Section>

        <Section title="Honors">
          <Honors />
        </Section>

        <Section title="Skills">
          <Skills />
        </Section>

        <Section title="Leadership and Experience">
          <Experience />
        </Section>

        <Section title="Projects">
          <Projects />
        </Section>
      </div>

      <Footer />
    </main>
  );
}

