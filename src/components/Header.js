'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, MessageSquare } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./theme/mode-toggle";
import { cn } from "../lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-b-gray-400 bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <button
          onClick={() => scrollToSection("about")}
          className="relative group overflow-hidden rounded-lg flex items-center"
        >
          <Image
            src="/assets/mahin-logo.png"
            width={80}
            height={40}
            priority
            className="w-20 h-auto transition-transform duration-300 group-hover:scale-105 dark:invert"
            alt="Md Mahin Khan"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="h-6 w-px bg-border/50" />

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary text-foreground hover:text-primary px-3.5 py-2 text-sm font-medium transition-all duration-200"
            >
              <MessageSquare size={15} /> Contact
            </button>

            <a
              href="https://drive.google.com/file/d/1LzH7eElLAZ0IkVMNHkZbICXZSxUU9DQg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/20 hover:opacity-95 transition-all duration-200"
            >
              <Download size={15} /> Resume
            </a>
            
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden border-t overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl font-semibold hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary text-foreground hover:text-primary text-base font-semibold transition-colors"
                >
                  <MessageSquare size={18} /> Contact Me
                </button>
                <a
                  href="https://drive.google.com/file/d/1LzH7eElLAZ0IkVMNHkZbICXZSxUU9DQg/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-base font-semibold shadow"
                >
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
