'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <span>Next.js 15 App Router</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 py-2 text-ash hover:text-obsidian transition-colors self-start sm:self-auto"
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
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-smoke font-sans leading-relaxed max-w-sm">
              Frontend &amp; Full-Stack Engineer specializing in React, Next.js, and TypeScript.
              Building resilient, type-safe web applications and commercial platforms.
            </p>

            <div className="pt-2 text-xs font-mono text-ash">
              <span>LOCATION: {profile.location.toUpperCase()}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian">
              Navigation
            </h4>
            <ul className="space-y-0.5 text-smoke">
              <li><a href="#about" className="inline-block py-1.5 hover:text-obsidian transition-colors">00 // Overview</a></li>
              <li><a href="#experience" className="inline-block py-1.5 hover:text-obsidian transition-colors">01 // Experience</a></li>
              <li><a href="#projects" className="inline-block py-1.5 hover:text-obsidian transition-colors">02 // Deployments</a></li>
              <li><a href="#github-stats" className="inline-block py-1.5 hover:text-obsidian transition-colors">03 // Telemetry</a></li>
              <li><a href="#skills" className="inline-block py-1.5 hover:text-obsidian transition-colors">04 // Technologies</a></li>
              <li><a href="#certifications" className="inline-block py-1.5 hover:text-obsidian transition-colors">05 // Credentials</a></li>
              <li><a href="#education" className="inline-block py-1.5 hover:text-obsidian transition-colors">06 // Education</a></li>
              <li><a href="#contact" className="inline-block py-1.5 hover:text-obsidian transition-colors">07 // Contact</a></li>
            </ul>
          </div>

          {/* Core Architecture (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian">
              Core Protocol
            </h4>
            <ul className="space-y-0.5 text-smoke">
              <li className="py-1.5">Next.js 15 App Architecture</li>
              <li className="py-1.5">TypeScript 5.7 Strict Mode</li>
              <li className="py-1.5">Redux Toolkit &amp; RTK Query</li>
              <li className="py-1.5">Role-Based Access (JWT)</li>
              <li className="py-1.5">Stripe Checkout &amp; Webhooks</li>
              <li className="py-1.5">RESTful API Infrastructure</li>
            </ul>
          </div>

          {/* Endpoints & Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-sm">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian">
              Network
            </h4>
            <ul className="space-y-0.5 text-smoke">
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-obsidian transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-obsidian transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={profile.x} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-obsidian transition-colors">
                  X (Twitter) ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="inline-block py-1.5 hover:text-obsidian transition-colors">
                  Email Dispatch ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ash text-center sm:text-left">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Render design tokens.</p>
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
