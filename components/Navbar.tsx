"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-semibold text-xl">Aden</h1>
        <div className="space-x-6 text-white text-sm">
          <a href="#projects" className="text-neutral-300 hover:text-white transition">Projects</a>
          <a href="#about" className="text-neutral-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
