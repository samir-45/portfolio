'use client';

import React from 'react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Check } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">01</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Track Record
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian tracking-tight">
              Work History &amp; Experience
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-xl">
              Engineering impact across commercial software systems, client delivery pipelines, and cross-functional teams.
            </p>
          </div>
          <div className="font-mono text-xs text-ash">
            <span>ACTIVE ROLE: SM TECHNOLOGY</span>
          </div>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-8 max-w-4xl">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-[2px] border border-graphite-hairline bg-paper-white relative transition-colors"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-6 border-b border-graphite-hairline">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-[2px] bg-plasma-violet inline-block" />
                    <h3 className="font-display text-xl sm:text-2xl text-obsidian font-normal">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="font-mono text-sm text-smoke mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="text-obsidian font-medium">{exp.company}</span>
                    <span className="text-ash">•</span>
                    <span className="text-smoke flex items-center gap-1">
                      <MapPin size={12} className="text-ash" /> {exp.location}
                    </span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[937px] bg-lilac-wash border border-graphite-hairline font-mono text-xs text-obsidian self-start">
                  <Calendar size={12} className="text-plasma-violet" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Engineering Contributions */}
              <div className="pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-ash mb-4">
                  Key Technical Deliverables:
                </p>
                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-smoke leading-relaxed font-sans">
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-obsidian mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Badges */}
              <div className="mt-8 pt-4 border-t border-graphite-hairline flex flex-wrap items-center gap-2 text-xs font-mono text-ash">
                <span className="text-obsidian font-medium">METHODOLOGY:</span>
                <span className="px-2 py-0.5 rounded-[2px] bg-lilac-wash border border-graphite-hairline text-smoke">Agile / Scrum</span>
                <span className="px-2 py-0.5 rounded-[2px] bg-lilac-wash border border-graphite-hairline text-smoke">Figma Handoff</span>
                <span className="px-2 py-0.5 rounded-[2px] bg-lilac-wash border border-graphite-hairline text-smoke">TypeScript Strict</span>
                <span className="px-2 py-0.5 rounded-[2px] bg-lilac-wash border border-graphite-hairline text-smoke">CI/CD Deploy</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;