'use client';

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-24 bg-paper-white relative border-t border-graphite-hairline">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">06</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Foundations
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian tracking-tight">
              Academic Background
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-xl font-sans">
              Formal education in Science, Mathematics, Physics, and analytical problem solving.
            </p>
          </div>
          <div className="font-mono text-xs text-ash">
            <span>SCIENCE DISCIPLINE</span>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id || index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-[2px] border border-graphite-hairline bg-paper-white hover:border-obsidian transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b border-graphite-hairline">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-[1px] bg-plasma-violet inline-block" />
                    <h3 className="font-display text-xl text-obsidian font-normal">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-smoke mt-1 flex items-center gap-2">
                    <span className="text-obsidian font-medium">{edu.institution}</span>
                    <span className="text-ash">•</span>
                    <span className="text-ash flex items-center gap-1">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </p>
                </div>

                <span className="px-2.5 py-0.5 rounded-[937px] bg-lilac-wash border border-graphite-hairline text-xs font-mono text-obsidian self-start">
                  {edu.year}
                </span>
              </div>

              <p className="text-sm text-smoke leading-relaxed font-sans">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
