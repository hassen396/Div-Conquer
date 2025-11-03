import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsPage: React.FC = () => {
  useDocumentTitle("Projects");

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A selection of projects I've built.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tech={p.tech}
            image={p.image}
            href={p.link}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
