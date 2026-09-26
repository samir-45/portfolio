'use client';

import React from 'react';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const additionalCertifications = [
  {
    name: 'Complete Web Development Bootcamp',
    issuer: 'Programming Hero',
    period: 'Jan 2025 - Mar 2025',
    image: '/assets/programming-hero.png',
    link: '#',
  },
  {
    name: 'Black Belt (Elite Developer)',
    issuer: 'Programming Hero',
    period: 'October 2025',
    image: '/assets/programming-hero.png',
    link: '#',
  },
  {
    name: 'IELTS (International English Proficiency)',
    issuer: 'British Council',
    period: 'Global Standard • Fluent',
    image: '/assets/programming-hero.png',
    link: '#',
  },
];

const allCerts = [...certifications, ...additionalCertifications];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 lg:py-24 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">05</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Accreditations
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian tracking-tight">
              Certifications &amp; Credentials
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-xl font-sans">
              Industry certifications across Amazon Web Services cloud infrastructure, GitHub developer tools, and web engineering.
            </p>
          </div>
          <div className="font-mono text-xs text-ash">
            <span>CREDLY VERIFIED ID</span>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="p-6 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between hover:border-obsidian transition-colors"
            >
              <div>
                {/* Header row with issuer tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-graphite-hairline text-xs font-mono text-ash">
                  <span className="text-obsidian font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-plasma-violet inline-block" />
                    {cert.issuer}
                  </span>
                  <span>{cert.period.split(' - ')[0] || cert.period}</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  {cert.image && (
                    <div className="w-12 h-12 rounded-[2px] border border-graphite-hairline bg-lilac-wash/40 p-1.5 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-obsidian font-normal leading-snug">
                      {cert.name}
                    </h3>
                    <p className="font-mono text-xs text-smoke mt-1">
                      {cert.period}
                    </p>
                  </div>
                </div>
              </div>

              {cert.link && cert.link !== '#' && (
                <div className="pt-3 border-t border-graphite-hairline">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-obsidian hover:text-plasma-violet transition-colors"
                  >
                    <span>Verify Credly Badge</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
