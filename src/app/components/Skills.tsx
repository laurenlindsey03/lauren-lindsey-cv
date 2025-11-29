import type { Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Skills() {
  const skills = resume.skills || [];

  return (
    <div>
      <ul className="skills-list">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
