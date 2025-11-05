import Image from "next/image";
import type { Contact, Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Header(): JSX.Element {
  const contact: Contact = resume.contact;

  return (
    <header className="site-header">
      <div className="headshot">
        <Image src={`/${resume.headshot}`} alt={resume.name} width={120} height={120} />
      </div>
      <div className="intro">
        <h1>{resume.name}</h1>
        <p className="tagline">{resume.tagline}</p>

        <address className="contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span> • </span>
          <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}>{contact.phone}</a>
        </address>
      </div>
    </header>
  );
}
