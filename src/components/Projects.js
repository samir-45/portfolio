'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { Code2, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full mb-3 sm:mb-4 border border-primary/20">
            <Code2 size={16} /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Production-grade web applications, investment platforms, and full-stack solutions.
          </p>
        </motion.div>

        {/* Clean Equal 2-Column Minimalist Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:auto-rows-fr">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-0 md:min-h-[480px]"
            >
              <Dialog.Root>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Pill / Badge Header */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                        {proj.category || 'Featured'}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {proj.period}
                      </span>
                    </div>

                    {/* Project Image Banner */}
                    <Dialog.Trigger asChild>
                      <div className="relative w-full h-48 sm:h-60 mb-4 overflow-hidden rounded-xl border border-border bg-muted/20 cursor-pointer group/img">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground border border-border/50 shadow-md">
                            Click for Details
                          </span>
                        </div>

                        {proj.links.video && (
                          <a
                            href={proj.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-sm transition-all hover:scale-105 z-20"
                          >
                            <Play size={11} className="fill-current" /> Walkthrough Video
                          </a>
                        )}
                      </div>
                    </Dialog.Trigger>

                    <h3 className="font-bold text-lg sm:text-xl mb-2.5 text-foreground group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>

                    {/* Bullet Highlights */}
                    <ul className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-1.5 mb-5">
                      {proj.bullets.slice(0, 2).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5 text-xs flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills List */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-[11px] sm:text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-md border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Links at Bottom */}
                  <div className="pt-3.5 border-t border-border flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      {proj.links.demo && (
                        <a
                          href={proj.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:bg-primary/90 transition-all min-h-[36px]"
                        >
                          Live Demo <FaExternalLinkAlt size={10} />
                        </a>
                      )}

                      {proj.links.video && (
                        <a
                          href={proj.links.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500/20 text-xs font-bold transition-all shadow-sm min-h-[36px]"
                        >
                          <Play size={11} className="fill-current" /> Video
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {proj.links.codeCl && (
                        <a
                          href={proj.links.codeCl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                          title="Client Code"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}
                      {proj.links.codeSv && (
                        <a
                          href={proj.links.codeSv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                          title="Server Code"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}

                      <Dialog.Trigger asChild>
                        <button
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-all cursor-pointer min-h-[36px] px-2 py-1"
                          aria-label={`View details for ${proj.title}`}
                        >
                          Details <ExternalLink size={12} />
                        </button>
                      </Dialog.Trigger>
                    </div>
                  </div>
                </div>

                {/* MODAL PORTAL */}
                <ProjectDialogModal proj={proj} />
              </Dialog.Root>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Reusable Radix Dialog Modal Component
const ProjectDialogModal = ({ proj }) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/75 backdrop-blur-md z-50" />
    <Dialog.Content className="fixed max-h-[90vh] overflow-y-auto left-1/2 top-1/2 w-[94vw] sm:w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-2xl focus:outline-none z-50 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">

      {/* Direct High-Definition Image Rendering inside Modal Portal */}
      <div className="w-full mb-5 rounded-xl overflow-hidden border border-border shadow-inner bg-secondary/30">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-48 sm:h-72 lg:h-[340px] object-cover object-top rounded-xl"
        />
      </div>

      <div>
        <Dialog.Title className="text-xl sm:text-2xl font-bold text-foreground pr-8">
          {proj.title}
        </Dialog.Title>
        <Dialog.Description className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
          {proj.period} • <span className="text-primary">{proj.category}</span>
        </Dialog.Description>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {proj.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* Tech Stack Pills in Modal */}
        <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
          {proj.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links in Modal */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 flex-wrap pt-4 border-t border-border">
          {proj.links.demo && (
            <a
              href={proj.links.demo}
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors min-h-[40px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
          {proj.links.video && (
            <a
              href={proj.links.video}
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500/20 px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors shadow-sm min-h-[40px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={13} className="fill-current" /> Walkthrough Video
            </a>
          )}
          {proj.links.codeCl && (
            <a
              href={proj.links.codeCl}
              className="inline-flex justify-center items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs sm:text-sm font-medium hover:bg-accent transition-colors min-h-[40px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> Client Code
            </a>
          )}
          {proj.links.codeSv && (
            <a
              href={proj.links.codeSv}
              className="inline-flex justify-center items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs sm:text-sm font-medium hover:bg-accent transition-colors min-h-[40px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> Server Code
            </a>
          )}
        </div>

        <Dialog.Close asChild>
          <button
            className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent text-foreground transition-colors z-50 font-bold"
            aria-label="Close dialog"
          >
            ×
          </button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
);

export default Projects;
