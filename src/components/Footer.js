'use client';

import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-paper-white border-t border-graphite-hairline py-14 lg:py-16 text-obsidian relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Top Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-graphite-hairline text-xs font-mono text-smoke">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mint-signal inline-block" />
            <span className="text-obsidian font-medium">All systems operational</span>
            <span className="text-ash">•</span>
            <span>Next.js 15.1.7 App Router</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-ash hover:text-obsidian transition-colors self-start sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

        {/* 4-Column Structured Technical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-graphite-hairline">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-[2px] bg-obsidian text-paper-white flex items-center justify-center font-mono text-xs font-medium">
                MK
              </div>
              <span className="font-mono text-sm font-semibold text-obsidian">
                Md Mahin Khan
              </span>
            </div>

            <p className="text-xs text-smoke font-sans leading-relaxed max-w-sm">
              Frontend &amp; Full-Stack Engineer specializing in React, Next.js, and TypeScript.
              Building resilient, type-safe web applications and commercial platforms.
            </p>

            <div className="pt-2 text-xs font-mono text-ash">
              <span>LOCATION: DHAKA, BANGLADESH</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs font-mono">
            <h4 className="font-semibold uppercase tracking-wider text-obsidian">
              Navigation
            </h4>
            <ul className="space-y-2 text-smoke">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-obsidian transition-colors">00 // Overview</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="hover:text-obsidian transition-colors">01 // Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-obsidian transition-colors">02 // Deployments</button></li>
              <li><button onClick={() => scrollToSection('github-stats')} className="hover:text-obsidian transition-colors">03 // Telemetry</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="hover:text-obsidian transition-colors">04 // Technologies</button></li>
              <li><button onClick={() => scrollToSection('certifications')} className="hover:text-obsidian transition-colors">05 // Credentials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-obsidian transition-colors">07 // Contact</button></li>
            </ul>
          </div>

          {/* Core Architecture (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs font-mono">
            <h4 className="font-semibold uppercase tracking-wider text-obsidian">
              Core Protocol
            </h4>
            <ul className="space-y-2 text-smoke">
              <li>Next.js 15 App Architecture</li>
              <li>TypeScript 5.7 Strict Mode</li>
              <li>Redux Toolkit &amp; RTK Query</li>
              <li>Role-Based Access (JWT)</li>
              <li>Stripe Checkout &amp; Webhooks</li>
              <li>RESTful API Infrastructure</li>
            </ul>
          </div>

          {/* Endpoints & Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs font-mono">
            <h4 className="font-semibold uppercase tracking-wider text-obsidian">
              Network
            </h4>
            <ul className="space-y-2 text-smoke">
              <li>
                <a href="https://github.com/samir-45" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/devmahin" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://x.com/mdmahinkhan621" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors">
                  X (Twitter) ↗
                </a>
              </li>
              <li>
                <a href="mailto:mdmahinkhan621@gmail.com" className="hover:text-obsidian transition-colors">
                  Email Dispatch ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ash text-center sm:text-left">
          <p>© {new Date().getFullYear()} Md Mahin Khan. Built with Render design tokens.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed with precision</span>
            <span className="text-plasma-violet">●</span>
            <span>Achromatic &amp; Geometric</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
