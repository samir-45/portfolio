// src/components/Skills.js
import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react'; // Icon for the header

const Skills = () => {
  const skillCategories = skills.map((c) => ({ title: c.title, skills: c.items }));

  return (
    <section id="skills" className="py-20 lg:py-24 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
          >
            <Cpu size={16} /> Technical Proficiency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive look at the tools and technologies I use to build digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-5 pb-4 border-b border-border/50 flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-purple-500" />
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        // Add 'dark:invert' here if you have black logos (like GitHub/Next.js)
                        // You can also add a property to your data like 'invert: true'
                        className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
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
