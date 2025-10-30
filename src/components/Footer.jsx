import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <div className="font-medium">Diksha Mallikarjun Darur</div>
          <div className="text-sm text-gray-600">Computer Science Engineering Student</div>
        </div>

        <div className="mt-4 sm:mt-0 flex gap-4 items-center">
          <a href="mailto:dikshadarur@gmail.com" className="text-sm hover:underline">dikshadarur@gmail.com</a>
          <a href="https://github.com/DikshaDarur" target="_blank" rel="noreferrer" className="text-sm hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/dikshadarur" target="_blank" rel="noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a
  href="https://drive.google.com/uc?export=download&id=14LdCYa5gL2o53Uw3uLfyFiWz5FqqKIKf"
  target="_blank"
  rel="noreferrer"
  className="ml-4 inline-block px-4 py-2 border rounded-md text-sm hover:bg-primary hover:text-white transition"
>
  Download Resume
</a>

        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Diksha Mallikarjun Darur
      </div>
    </footer>
  );
}
