'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { ExternalLink, Play, ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SaaS & Real Estate', 'Full-Stack Apps', 'E-Commerce', 'Dev Platforms'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
              Real-estate investment platforms, full-stack marketplace engines, and secure e-commerce portals.
            </p>
          </div>

          {/* Filter Pills with 937px radius as per tokens */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-[937px] text-xs font-mono transition-colors ${
                  activeCategory === cat
                    ? 'bg-obsidian text-paper-white'
                    : 'bg-paper-white text-smoke border border-graphite-hairline hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Clean Engineering Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group p-6 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between transition-colors hover:border-obsidian"
            >
              <Dialog.Root>
                <div className="flex flex-col h-full justify-between">
                  
                  <div>
                    {/* Top Row: Service identifier + Category Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-graphite-hairline text-xs font-mono">
                      <span className="text-obsidian font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-plasma-violet inline-block" />
                        <span>srv_{proj.id}</span>
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
                          <span className="px-3 py-1.5 rounded-[2px] bg-paper-white border border-graphite-hairline text-xs font-mono text-obsidian">
                            Inspect Architecture ↗
                          </span>
                        </div>

                        {proj.links.video && (
                          <a
                            href={proj.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-[2px] bg-obsidian text-paper-white font-mono text-[10px] font-medium transition-colors hover:bg-plasma-violet z-20"
                          >
                            <Play size={10} className="fill-current" /> Video Walkthrough
                          </a>
                        )}
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
                    <div className="flex items-center gap-2">
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

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
