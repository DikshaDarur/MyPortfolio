import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "ExploreNow — Travel Agency Web App",
      desc: "A full-stack travel booking platform supporting user authentication and dynamic package booking. Built with PHP & MySQL backend, and responsive front-end using HTML, CSS, and JavaScript.",
      link: "https://github.com/DikshaDarur" // replace with project repo link if available
    }
    // Add more objects for more projects
  ];

  return (
    <section id="projects" className="py-12">
        <div className="h-[2px] w-16 bg-primary mb-4 rounded-full"></div>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
