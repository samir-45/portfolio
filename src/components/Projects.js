'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { ExternalLink, Play, ArrowUpRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'SaaS & Real Estate', 'Full-Stack Apps', 'E-Commerce', 'Dev Platforms'];

  const getCategoryCount = (cat) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const initialProjects = filteredProjects.slice(0, 4);
  const extraProjects = filteredProjects.slice(4);
  const hasExtra = extraProjects.length > 0;

  return (
    <section id="projects" className="py-20 lg:py-24 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">02</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Systems &amp; Deployments
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-obsidian tracking-tight">
              Production Applications
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Real-estate investment platforms, bespoke 3D e-commerce engines, and secure web portals.
            </p>
          </div>

          {/* Filter Pills with Project Counts */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[937px] text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-obsidian text-paper-white font-medium'
                      : 'bg-paper-white text-smoke border border-graphite-hairline hover:border-obsidian hover:text-obsidian'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-paper-white/20 text-paper-white'
                        : 'bg-lilac-wash text-ash'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary 2-Column Grid (First 4 Projects) */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {initialProjects.map((proj, idx) => (
            <ProjectCard key={proj.id || idx} proj={proj} />
          ))}
        </div>

        {/* Expandable Section for Remaining Projects with Peek & Fade */}
        {hasExtra && (
          <div className="relative mt-8">
            {/* Grid of extra projects (Peeking through when collapsed) */}
            <div
              className={`grid gap-8 grid-cols-1 md:grid-cols-2 transition-all duration-700 ease-in-out ${
                showAll
                  ? 'max-h-[2500px] opacity-100 overflow-visible'
                  : 'max-h-[160px] sm:max-h-[180px] overflow-hidden opacity-70 pointer-events-none select-none'
              }`}
            >
              {extraProjects.map((proj, idx) => (
                <ProjectCard key={proj.id || idx + 4} proj={proj} />
              ))}
            </div>

            {/* Gradient Scrim Overlay when collapsed */}
            {!showAll && (
              <div
                onClick={() => setShowAll(true)}
                className="absolute inset-0 bg-gradient-to-t from-paper-white via-paper-white/80 to-transparent cursor-pointer z-10 flex items-end justify-center pb-2"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setShowAll(true)}
                aria-label={`Expand ${extraProjects.length} more projects`}
              />
            )}
          </div>
        )}

        {/* Prominent, User-Friendly View More Action Bar */}
        {hasExtra && (
          <div className="mt-8 pt-4 flex flex-col items-center justify-center text-center relative z-20">
            
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[937px] bg-lilac-wash border border-graphite-hairline text-xs font-mono text-smoke mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-signal inline-block animate-pulse" />
              <span>
                {showAll
                  ? `Showing all ${filteredProjects.length} production applications`
                  : `Showing 4 of ${filteredProjects.length} flagship projects · ${extraProjects.length} more below`}
              </span>
            </div>

            {/* Clear, High-Contrast Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  if (showAll) {
                    setShowAll(false);
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setShowAll(true);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[2px] bg-obsidian text-paper-white text-xs sm:text-sm font-mono font-medium hover:bg-obsidian/85 shadow-sm transition-all active:scale-[0.99] group"
              >
                {showAll ? (
                  <>
                    <span>Show Fewer Projects</span>
                    <ChevronUp size={16} className="text-paper-white group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    <span>View More Projects ({extraProjects.length})</span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-paper-white/20 text-[10px] text-paper-white font-mono">
                      +{extraProjects.length}
                    </span>
                    <ChevronDown size={16} className="text-paper-white group-hover:translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              <a
                href="https://github.com/samir-45?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] border border-graphite-hairline hover:border-obsidian bg-paper-white text-xs sm:text-sm font-mono text-obsidian transition-colors"
              >
                <FaGithub size={15} />
                <span>GitHub Archive (25+ repos)</span>
                <ArrowUpRight size={13} className="text-smoke" />
              </a>
            </div>

            <p className="font-mono text-[11px] text-ash mt-3">
              Explore complete case studies with live production URLs, architecture diagrams, and source repositories.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

// Reusable Clean Engineering Project Card
const ProjectCard = ({ proj }) => (
  <div className="group p-6 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between transition-colors hover:border-obsidian">
    <Dialog.Root>
      <div className="flex flex-col h-full justify-between">
        
        <div>
          {/* Top Row: Project identifier + Category Pill */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-graphite-hairline text-xs font-mono">
            <span className="text-obsidian font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-plasma-violet inline-block" />
              <span>{proj.id}</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-[937px] bg-lilac-wash border border-graphite-hairline text-smoke text-[11px]">
              {proj.category}
            </span>
          </div>

          {/* Screenshot Preview with 1px border & 2px radius */}
          <Dialog.Trigger asChild>
            <div className="relative w-full h-48 sm:h-56 mb-5 overflow-hidden rounded-[2px] border border-graphite-hairline bg-lilac-wash/30 cursor-pointer group/img">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-obsidian/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-[2px] bg-paper-white border border-graphite-hairline text-xs font-mono text-obsidian shadow-sm">
                  Inspect Architecture ↗
                </span>
              </div>
            </div>
          </Dialog.Trigger>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl text-obsidian font-normal mb-3 group-hover:text-plasma-violet transition-colors">
            {proj.title}
          </h3>

          {/* Technical Bullets */}
          <ul className="text-xs sm:text-sm text-smoke leading-relaxed space-y-2 mb-6 font-sans">
            {proj.bullets.slice(0, 2).map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5">
                <span className="text-obsidian font-mono text-xs mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills (2px radius) */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {proj.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 text-[11px] font-mono bg-lilac-wash text-smoke rounded-[2px] border border-graphite-hairline"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="pt-4 border-t border-graphite-hairline flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {proj.links.demo && (
              <a
                href={proj.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[2px] bg-obsidian text-paper-white text-xs font-mono font-medium hover:opacity-85 transition-opacity"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            {proj.links.video && (
              <a
                href={proj.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-graphite-hairline hover:border-obsidian hover:text-plasma-violet text-xs font-mono text-obsidian transition-colors"
              >
                <Play size={11} className="text-plasma-violet fill-current" />
                <span>Video Walkthrough</span>
              </a>
            )}

            <Dialog.Trigger asChild>
              <button
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] border border-graphite-hairline hover:border-obsidian text-xs font-mono text-obsidian transition-colors"
              >
                <span>Details</span>
                <ExternalLink size={11} />
              </button>
            </Dialog.Trigger>
          </div>

          <div className="flex items-center gap-1.5">
            {proj.links.codeCl && (
              <a
                href={proj.links.codeCl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-[2px] border border-graphite-hairline text-smoke hover:text-obsidian hover:border-obsidian transition-colors"
                title="Client Repository"
              >
                <FaGithub size={14} />
              </a>
            )}
            {proj.links.codeSv && (
              <a
                href={proj.links.codeSv}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-[2px] border border-graphite-hairline text-smoke hover:text-obsidian hover:border-obsidian transition-colors"
                title="Server Repository"
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Radix Dialog Modal */}
      <ProjectDialogModal proj={proj} />
    </Dialog.Root>
  </div>
);

// Clean Engineering Schematic Modal
const ProjectDialogModal = ({ proj }) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-obsidian/60 backdrop-blur-[2px] z-50 transition-opacity" />
    <Dialog.Content className="fixed max-h-[90vh] overflow-y-auto left-1/2 top-1/2 w-[94vw] sm:w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-[2px] border border-graphite-hairline bg-paper-white p-6 sm:p-8 z-50 focus:outline-none">
      
      {/* Modal Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-graphite-hairline">
        <div className="flex items-center gap-2">
          <span className="badge-step text-[10px]">SRC</span>
          <span className="font-mono text-xs text-smoke">system_spec // {proj.id}</span>
        </div>
        <Dialog.Close asChild>
          <button
            className="p-1.5 rounded-[2px] border border-graphite-hairline hover:border-obsidian text-obsidian transition-colors"
            aria-label="Close dialog"
          >
            <X size={15} />
          </button>
        </Dialog.Close>
      </div>

      {/* Image Preview */}
      <div className="w-full mb-6 rounded-[2px] overflow-hidden border border-graphite-hairline bg-lilac-wash/30">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-56 sm:h-72 object-cover object-top"
        />
      </div>

      <Dialog.Title className="font-display text-2xl sm:text-3xl text-obsidian font-normal">
        {proj.title}
      </Dialog.Title>
      
      <Dialog.Description className="text-xs font-mono text-ash mt-1">
        CATEGORY: {proj.category} • TIMELINE: {proj.period}
      </Dialog.Description>

      {/* Full Bullets */}
      <div className="mt-5">
        <h4 className="text-xs font-mono uppercase tracking-wider text-ash mb-3">
          Architecture Highlights:
        </h4>
        <ul className="space-y-2.5 text-sm text-smoke leading-relaxed font-sans">
          {proj.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-plasma-violet mt-2 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills in Modal */}
      <div className="mt-6 pt-4 border-t border-graphite-hairline">
        <h4 className="text-xs font-mono uppercase tracking-wider text-ash mb-3">
          Technologies &amp; Protocols:
        </h4>
        <div className="flex flex-wrap gap-2">
          {proj.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 text-xs font-mono bg-lilac-wash text-smoke rounded-[2px] border border-graphite-hairline"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-8 pt-5 border-t border-graphite-hairline flex flex-wrap items-center gap-3">
        {proj.links.demo && (
          <a
            href={proj.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            <span>Launch Live Application</span>
            <ArrowUpRight size={14} />
          </a>
        )}

        {proj.links.video && (
          <a
            href={proj.links.video}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm py-2 px-4 inline-flex items-center gap-1.5"
          >
            <Play size={13} className="text-plasma-violet" />
            <span>Video Walkthrough</span>
          </a>
        )}

        {proj.links.codeCl && (
          <a
            href={proj.links.codeCl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-graphite-hairline hover:border-obsidian rounded-[2px] transition-colors"
          >
            <FaGithub size={13} />
            <span>Client Code</span>
          </a>
        )}

        {proj.links.codeSv && (
          <a
            href={proj.links.codeSv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-graphite-hairline hover:border-obsidian rounded-[2px] transition-colors"
          >
            <FaGithub size={13} />
            <span>Server Code</span>
          </a>
        )}
      </div>

    </Dialog.Content>
  </Dialog.Portal>
);

export default Projects;
