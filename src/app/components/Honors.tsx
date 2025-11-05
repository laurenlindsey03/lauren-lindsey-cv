import type { Honor, Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Honors(): JSX.Element {
  const honors: Honor[] = resume.honors_and_awards || [];

  return (
    <div>
      <dl>
        {honors.map((h, i) => (
          <div key={i}>
            <dt>{h.honor}</dt>
            <dd>{h.date}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
