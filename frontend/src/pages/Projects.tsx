import React, { useMemo, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsPage: React.FC = () => {
  useDocumentTitle("Projects");

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeTag && !p.tech.includes(activeTag)) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q)
      );
    });
  }, [query, activeTag]);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Projects
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A selection of projects I've built.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <label htmlFor="search" className="sr-only">
              Search projects
            </label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech..."
              className="w-full rounded-md border border-gray-200 bg-white/50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3 py-1 text-sm ${
              activeTag === null
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-white"
            }`}>
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag((v) => (v === t ? null : t))}
              className={`rounded-full px-3 py-1 text-sm ${
                activeTag === t
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-white"
              }`}>
              {t}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
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
