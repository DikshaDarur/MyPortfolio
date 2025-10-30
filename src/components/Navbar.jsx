import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-lg font-semibold text-primary">Diksha Darur</div>
    <nav className="space-x-6 text-sm font-medium">
      <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
      <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
      <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
      <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
    </nav>
  </div>
</header>

  );
}
