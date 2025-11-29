import type { Project, Resume } from "../../../types/resume";
import ProjectItem from "./ProjectItem";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Projects() {
  const projects: Project[] = resume.projects || [];

  return (
    <div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectItem key={i} project={p} />
        ))}
      </div>
    </div>
  );
}

