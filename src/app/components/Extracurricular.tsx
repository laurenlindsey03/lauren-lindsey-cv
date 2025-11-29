import type { ExtracurricularActivity, Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Extracurricular() {
  const activities: ExtracurricularActivity[] = resume.extracurricular_activities;

  return (
    <div>
      {activities.map((item, index) => (
        <article key={index} className="extracurricular-item">
          <p className="activity-name">{item.activity}</p>
          <p className="activity-date">{item.date}</p>
        </article>
      ))}
    </div>
  );
}
