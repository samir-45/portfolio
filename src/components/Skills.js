'use client';

import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-24 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">04</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Technical Stack
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian tracking-tight">
              Technologies &amp; Architecture
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-xl font-sans">
              Modern frontend libraries, server runtimes, databases, and deployment infrastructure.
            </p>
          </div>
          <div className="font-mono text-xs text-ash">
            <span>INDEX: 23 VERIFIED TOOLS</span>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-graphite-hairline">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian flex items-center gap-2">
                    <span className="w-2 h-2 rounded-[1px] bg-plasma-violet inline-block" />
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-ash">
                    {category.items.length} items
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-[2px] border border-graphite-hairline bg-paper-white hover:bg-lilac-wash/50 hover:border-obsidian transition-colors flex items-center gap-2.5 group"
                    >
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={20}
                          height={20}
                          unoptimized
                          className="w-4 h-4 object-contain grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                      <span className="font-mono text-xs text-smoke group-hover:text-obsidian transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-graphite-hairline text-[11px] font-mono text-ash flex items-center justify-between">
                <span>production ready</span>
                <span>✓ checked</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
