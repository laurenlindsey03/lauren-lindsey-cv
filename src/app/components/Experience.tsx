import type { ExperienceItem, Resume } from "../../../types/resume";
import Link from "next/link";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Experience(): JSX.Element {
  const experience: ExperienceItem[] = resume.leadership_and_experience;

  return (
    <div>
      <dl>
        {experience.map((item, idx) => (
          <div key={idx} className="experience-item">
            <dt className="position">
              {item.link ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.position}
                </Link>
              ) : (
                item.position
              )}
            </dt>
            <dd className="date">{item.date}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
