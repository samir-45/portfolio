'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { profile } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="py-14 sm:py-18 lg:py-22 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* 2-Column Architectural Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Personal Engineering Voice (Option A: Product & Craft) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Prominent Engineer Identity & Verification Pill */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-3 mb-6 p-1.5 pr-4 rounded-[2px] bg-paper-white border border-graphite-hairline hover:border-plasma-violet/40 transition-colors"
            >
              <div className="relative w-9 h-9 rounded-[2px] overflow-hidden border border-graphite-hairline flex-shrink-0 bg-surface-base">
                <Image
                  src="/assets/mahin-pic.webp"
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                  priority
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-mint-signal border-2 border-paper-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-sm text-obsidian tracking-tight">{profile.name}</span>
                <span className="text-graphite-hairline">/</span>
                <span className="text-xs font-mono text-smoke">{profile.role}</span>
              </div>
              {profile.available && (
                <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-[11px] font-mono text-mint-signal">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint-signal animate-pulse" />
                  {profile.availabilityLabel}
                </span>
              )}
            </motion.div>

            {/* Display Headline: Option A */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="font-display text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] leading-[1.2] sm:leading-[1.15] text-obsidian tracking-[-0.02em] mb-7 hyphens-none text-balance"
            >
              {profile.headline}{' '}
              <span className="gradient-text font-normal">{profile.headlineAccent}</span>
            </motion.h1>

            {/* Subtext: Focused on Engineering Ownership */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-smoke text-sm sm:text-base leading-relaxed max-w-xl mb-7 font-sans"
            >
              <strong className="text-obsidian font-medium">{profile.name}</strong> — {profile.introRole} at{' '}
              <span className="text-obsidian underline decoration-graphite-hairline underline-offset-4 font-medium">
                {profile.company}
              </span>
              . {profile.intro}
            </motion.p>

            {/* Engineering Status Metadata Strip */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 mb-8 border-y border-graphite-hairline text-xs font-mono text-smoke w-full"
            >
              {profile.available && (
                <span className="flex items-center gap-1.5 text-obsidian font-medium">
                  <span className="w-2 h-2 rounded-full bg-mint-signal inline-block" />
                  AVAILABLE FOR HIRE
                </span>
              )}
              <span>LOC: {profile.location.split(',')[0].toUpperCase()} ({profile.timezone})</span>
              <span>ROLE: {profile.company.toUpperCase()}</span>
              <span>STACK: {profile.stack.toUpperCase()}</span>
            </motion.div>

            {/* Dual CTAs adhering to Render style: Primary Dark + Ghost Outline */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ChevronRight size={16} />
              </a>

              <a href="#contact" className="btn-ghost">
                <span>Initiate Contact</span>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-smoke hover:text-obsidian transition-colors"
              >
                <Download size={13} />
                <span>View CV.pdf</span>
              </a>
            </motion.div>

            {/* Monochrome Hairline Social Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-graphite-hairline w-full">
              <span className="text-xs font-mono text-ash uppercase tracking-wider mr-2">Endpoints:</span>
              <SocialIconLink href={profile.github} label="GitHub" icon={<FaGithub size={14} />} />
              <SocialIconLink href={profile.linkedin} label="LinkedIn" icon={<FaLinkedin size={14} />} />
              <SocialIconLink href={profile.x} label="X" icon={<BsTwitterX size={12} />} />
              <SocialIconLink href={`mailto:${profile.email}`} label="Email" icon={<Mail size={14} />} />
            </div>

          </div>

          {/* Right Column: Featured Engineer Stage & Production Telemetry */}
          <div className="lg:col-span-5 w-full relative">
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-5 sm:p-6 rounded-[2px] border border-graphite-hairline bg-gradient-to-br from-paper-white via-lilac-wash to-wisteria-tint relative overflow-hidden"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-graphite-hairline text-xs font-mono text-smoke">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-plasma-violet inline-block" />
                  <span className="text-obsidian font-medium">engineer_identity</span>
                </span>
              </div>

              {/* High-Resolution Portrait Card */}
              <div className="relative rounded-[2px] overflow-hidden border border-graphite-hairline bg-paper-white mb-3.5 shadow-sm">
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src="/assets/mahin-pic.webp"
                    alt={`${profile.name} - ${profile.title}`}
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                  />
                  {/* High-Contrast Dark Gradient Scrim (Constant across Light & Dark themes) */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-end p-4 z-10">
                    <div className="w-full">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="font-display text-lg font-semibold tracking-tight text-white">
                          {profile.name}
                        </h2>
                      </div>
                      <p className="text-zinc-200 text-[13px] mt-0.5">
                        {profile.title} · {profile.locationShort}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro-Telemetry Bar Below Photo */}
                <div className="grid grid-cols-3 divide-x divide-graphite-hairline bg-paper-white py-2.5 px-3 text-center text-xs font-mono">
                  <div>
                    <span className="text-[11px] text-ash block">ORGANIZATION</span>
                    <span className="text-obsidian font-semibold text-[11px]">{profile.companyShort}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-ash block">DELIVERED</span>
                    <span className="text-obsidian font-semibold text-[11px]">{profile.stats.delivered}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-ash block">COMMITS</span>
                    <span className="text-plasma-violet font-semibold text-[11px]">{profile.stats.commits}</span>
                  </div>
                </div>
              </div>

              {/* Primary Commercial Platform Highlight */}
              <div className="p-3.5 rounded-[2px] bg-paper-white border border-graphite-hairline">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-obsidian flex items-center gap-1.5">
                    <span className="text-plasma-violet font-semibold">sys:</span> {profile.featuredProject}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-[937px] bg-mint-signal/15 text-mint-signal font-mono text-[11px] font-medium">
                    LIVE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

const SocialIconLink = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center w-8 h-8 rounded-[2px] border border-graphite-hairline bg-paper-white text-smoke hover:text-obsidian hover:border-obsidian transition-colors"
  >
    {icon}
  </a>
);

export default About;
