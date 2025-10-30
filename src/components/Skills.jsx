import React from "react";

export default function Skills() {
  const tech = ["C", "Python", "Java", "HTML/CSS", "JavaScript", "SQL/MySQL", "Git"];
  const soft = ["Teamwork", "Communication", "Detail-Oriented", "Quick Learner"];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium">Technical</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {tech.map((t, i) => (
              <li key={i} className="inline-block mr-2 mb-2 px-3 py-1 border rounded-full text-gray-700">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Soft Skills</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {soft.map((s, i) => (
              <li key={i} className="inline-block mr-2 mb-2 px-3 py-1 border rounded-full text-gray-700">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
