'use client';

import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import Image from 'next/image';

const Skills = () => {
  const skillCategories = skills.map((c) => ({ title: c.title, skills: c.items }));

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full mb-3 sm:mb-4 border border-primary/20"
          >
            <Cpu size={16} /> Technical Proficiency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4"
          >
            Skills &amp; Technologies
          </motion.h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive look at the tools and technologies I use to build digital experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-border/50 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 rounded-full bg-gradient-to-b from-primary to-purple-500" />
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 group p-1"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300 relative border border-border/30">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        unoptimized
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
