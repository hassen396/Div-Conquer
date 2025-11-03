import React from "react";
import ProjectCard from "./ProjectCard";
import sampleImg from "@/assets/profile-pic.avif";

const sampleProjects = [
  {
    title: "Task Manager API",
    description:
      "High-performance .NET API with JWT auth, background jobs and PostgreSQL.",
    tech: [".NET", "PostgreSQL", "Docker"],
    image: sampleImg,
    href: "/projects/task-manager",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Vite and Tailwind — fast and accessible.",
    tech: ["React", "Vite", "Tailwind"],
    image: sampleImg,
    href: "/projects/portfolio",
  },
  {
    title: "Realtime Chat",
    description:
      "Lightweight realtime chat using WebSockets and a small .NET SignalR service.",
    tech: ["SignalR", "WebSockets", "Redis"],
    image: sampleImg,
    href: "/projects/realtime-chat",
  },
];

const ProjectsPreview: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Selected projects</h2>
        <a href="/projects" className="text-sm text-indigo-600 dark:text-indigo-400">
          See all
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} image={p.image} href={p.href} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
