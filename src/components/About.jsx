import React from "react";

export default function About() {
  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      college: "SDM College of Engineering & Technology, Dharwad",
      score: "CGPA: 9.59",
    },
    {
      degree: "PUC (Science)",
      college: "Terdal Science PU College, Athani",
      score: "Percentage: 95.33%",
    },
    {
      degree: "SSLC",
      college: "Sri M S V Vidya Peeta, Athani",
      score: "Percentage: 96.8%",
    },
  ];

  const achievements = [
    "1st Place — Department Hackathon (Computer Engineering)",
    "2nd Place — Automata Event, Insignia College Fest",
  ];

  const certifications = [
    {
      name: "Python Essential 1",
      link: "https://www.credly.com/badges/3deac087-e1e3-4060-9b5b-71d81f31363a/public_url",
    },
    {
      name: "Python Essential 2",
      link: "https://www.credly.com/badges/5b7b0bd7-d702-447a-ab29-15c1c600a83c/public_url",
    },
    {
      name: "Introduction to Cyber Security",
      link: "https://www.coursera.org/account/accomplishments/verify/JJKRSZBRCV6J",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-white via-[#f8fefc] to-[#eaf8f2] rounded-xl shadow-sm mt-10"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* About Me */}
        <h2 className="text-3xl font-semibold text-center text-primary">
          About Me
        </h2>
        <div className="h-[3px] w-20 bg-primary mx-auto mt-2 mb-10 rounded-full"></div>

        <div className="text-gray-700 text-lg leading-relaxed space-y-5 mb-14">
          <p>
            I am <strong className="text-primary">Diksha Mallikarjun Darur</strong>, 
            a passionate and curious <strong>Computer Science Engineering student</strong> from 
            <strong> SDM College of Engineering and Technology, Dharwad</strong>.
          </p>

          <p>
            I enjoy exploring technology, especially <strong>web development</strong> and 
            <strong> problem-solving</strong>. I love turning creative ideas into responsive, 
            user-friendly web applications that make life simpler and smarter.
          </p>

          <p>
            My goal is to grow into a <strong>versatile software engineer</strong> who writes 
            clean, efficient, and meaningful code while continuously learning and innovating.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-5 border rounded-md bg-white/80 hover:shadow-lg transition-all"
              >
                <h4 className="font-medium text-lg text-primary">{edu.degree}</h4>
                <p className="text-gray-700 mt-1">{edu.college}</p>
                <p className="text-sm text-gray-600 mt-1">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 border rounded-md bg-white/80 hover:shadow-md hover:bg-primary/10 transition-all block"
              >
                {cert.name}
              </a>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((item, i) => (
              <li
                key={i}
                className="p-4 border rounded-md bg-white/80 hover:bg-primary/10 transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
