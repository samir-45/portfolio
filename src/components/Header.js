'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme/mode-toggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Telemetry", id: "github-stats" },
    { name: "Skills", id: "skills" },
    { name: "Credentials", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-paper-white/95 backdrop-blur-sm transition-all duration-200 ${
        scrolled ? "border-b border-graphite-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark */}
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-7 h-7 rounded-[2px] bg-obsidian text-paper-white flex items-center justify-center font-mono text-xs font-medium tracking-tight">
            MK
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-medium text-obsidian tracking-tight group-hover:text-plasma-violet transition-colors">
              mahin.dev
            </span>
            <span className="text-[10px] font-mono text-ash -mt-0.5">
              production-engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-smoke hover:text-obsidian transition-colors tracking-tight relative py-1"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-obsidian border border-graphite-hairline hover:border-obsidian rounded-[2px] transition-colors"
          >
            Get in touch
          </button>

          {/* Pill Navigation CTA */}
          <a
            href="https://drive.google.com/file/d/1LzH7eElLAZ0IkVMNHkZbICXZSxUU9DQg/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-pill inline-flex items-center gap-2"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>

          <ModeToggle />
        </div>

        {/* Mobile & Tablet menu controls (<1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-obsidian hover:bg-lilac-wash rounded-[2px] border border-graphite-hairline transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-graphite-hairline bg-paper-white"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium text-smoke hover:text-obsidian transition-colors py-1.5 border-b border-graphite-hairline/60"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-center py-2.5 text-sm font-medium text-obsidian border border-obsidian rounded-[2px]"
                >
                  Get in touch
                </button>
                <a
                  href="https://drive.google.com/file/d/1LzH7eElLAZ0IkVMNHkZbICXZSxUU9DQg/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill w-full justify-center"
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
