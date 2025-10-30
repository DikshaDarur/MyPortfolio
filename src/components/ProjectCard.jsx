import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="p-4 border rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/80">
      <h3 className="font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-700">{project.desc}</p>
      <div className="mt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}
