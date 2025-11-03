import React from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  image?: string;
  href?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech = [], image, href }) => {
  const content = (
    <article className="group relative flex flex-col rounded-xl border border-gray-200 bg-white/5 p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800">
      {image && (
        <div className="mb-4 h-40 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-200/60 px-2 py-0.5 text-xs text-gray-700 dark:bg-white/5 dark:text-white">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-end">
        <span className="text-sm text-indigo-600 group-hover:underline dark:text-indigo-400">
          View
        </span>
      </div>
    </article>
  );

  // prefer internal linking when href starts with '/'
  if (href && href.startsWith("/")) {
    return (
      <Link to={href} className="block">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default ProjectCard;
