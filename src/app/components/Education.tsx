import type { Education, Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function EducationList(): JSX.Element {
  const education: Education = resume.education;

  return (
    <div>
      <article className="education-item">
        <h4 className="school">{education.school}</h4>
        <p className="degree">
          {education.degree} • <time dateTime={education.graduation_date}>{education.graduation_date}</time>
        </p>
        <p className="gpa">GPA: {education.gpa}</p>
      </article>
    </div>
  );
}