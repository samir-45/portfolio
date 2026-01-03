// src/components/Education.js
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Higher School Certificate (HSC)",
    institution: "East Bengal Institution",
    location: "Dhaka, Bangladesh",
    year: "Feb 2022 - Nov 2024",
    description: "Concentrated on Science curriculum with a focus on Mathematics and Physics.",
  },
  {
    id: 2,
    degree: "Secondary School Certificate (SSC)",
    institution: "East Bengal Institution",
    location: "Dhaka, Bangladesh",
    year: "Jan 2020 - Dec 2021",
    description: "Completed secondary education with distinction in Science group.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Decoration (Optional) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
          >
            <GraduationCap size={16} /> Academic Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Education
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      <Calendar size={12} /> {edu.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin size={14} />
                    <span className="text-sm font-medium">{edu.institution}, {edu.location}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
