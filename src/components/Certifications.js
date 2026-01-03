// src/components/Certifications.js
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certificationsData = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    issuer: "Programming Hero",
    date: "Jan 2025 - Mar 2025",
    logo: "https://web.programming-hero.com/assets/ph_logo-C24KMH6S.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Black Belt (Elite Developer)",
    issuer: "Programming Hero",
    date: "October 2025",
    logo: "https://web.programming-hero.com/assets/ph_logo-C24KMH6S.svg",
    link: "#",
  },
  {
    id: 3,
    title: "CV & Email Writing",
    issuer: "10 Minute School",
    date: "May 2025",
    logo: "https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg",
    link: "#",
    invertDark: true,
  },
  {
    id: 4,
    title: "IELTS Certification",
    issuer: "British Council",
    date: "November 2025",
    // Standard British Council logo
    logo: "https://iconlogovector.com/uploads/images/2024/12/lg-67616c4372dec-British-Council.webp", 
    link: "#", // Add your verification link if you have one, or remove this line
  },
];


const Certifications = () => {
  return (
    <section id="certifications" className="py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
          >
            <Award size={16} /> Achievements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Certifications
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized achievements and technical milestones.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Logo container */}
              <div className="w-20 h-20 mb-4 rounded-full bg-secondary/50 flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  // CONDITIONAL CLASS: Only invert if the flag is true
                  className={`w-full h-full object-contain ${
                    cert.invertDark ? "dark:invert-[20%]" : ""
                  }`}
                />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="space-y-1 mb-6">
                <p className="text-sm font-medium text-foreground/80">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground">
                  {cert.date}
                </p>
              </div>

              {/* <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                View Certificate <ExternalLink size={14} />
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
