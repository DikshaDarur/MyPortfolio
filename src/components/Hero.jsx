import React from "react";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Diksha Mallikarjun Darur</h1>
          <p className="mt-3 text-lg text-gray-700">
            Aspiring Software Engineer | Web Developer | Problem Solver.
            I build user-friendly web applications and enjoy solving algorithmic problems.
          </p>
          <div className="mt-6 flex gap-4">
            <a
  href="https://github.com/DikshaDarur"
  target="_blank"
  rel="noreferrer"
  className="inline-block px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
>
  View GitHub
</a>

<a
  href="https://www.linkedin.com/in/dikshadarur"
  target="_blank"
  rel="noreferrer"
  className="inline-block px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
>
  LinkedIn
</a>

<a
  href="#contact"
  className="inline-block px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
>
  Contact
</a>

          </div>
        </div>

        <div className="flex justify-center md:justify-end">
  <div className="w-56 h-56 rounded-xl overflow-hidden shadow">
    <img
      src="/profile.png"
      alt="Diksha Mallikarjun Darur"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}
