import { projects } from "@/data/projects";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
