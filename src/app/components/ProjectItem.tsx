import Image from "next/image";
import type { Project } from "../../../types/resume";

export default function ProjectItem({ project }: { project: Project }): JSX.Element {
        return(
            <article className="project-item">
                <h3>{project.title}</h3>
                {project.image ? (
                    <div className="project-image">
                        <Image src={`/${project.image}`} alt={project.title} width={320} height={180} />
                    </div>
                ) : null}
                <ul>
                    {project.descr.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
                </ul>
            </article>
        );
}