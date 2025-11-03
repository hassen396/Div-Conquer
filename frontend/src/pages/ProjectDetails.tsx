import React from "react";
import { useParams, Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { projects } from "@/data/projects";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useDocumentTitle(project ? project.title : "Project");

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-4">We couldn't find that project.</p>
        <Link to="/projects" className="mt-6 inline-block text-indigo-600">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
          </div>

          <div className="mt-6 prose prose-invert text-gray-700 dark:text-gray-200">
            <p>
              This is a short write-up placeholder. Replace with real project details—architecture, challenges,
              links and screenshots.
            </p>
          </div>
        </div>

        <aside className="rounded-md border border-gray-200 bg-white/5 p-4 dark:border-gray-800">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Tech</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-gray-200/60 px-2 py-0.5 text-xs text-gray-700 dark:bg-white/5 dark:text-white">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
              Visit
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ProjectDetails;
