'use client';

// src/components/Footer.js
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-6 bg-background relative px-4 sm:px-6 lg:px-8">
      {/* Full Width Floating Card: Slate Anchor in Light Mode, Card Slate in Dark Mode */}
      <div className="relative w-full rounded-[24px] bg-[#0f172a] dark:bg-card text-white dark:text-card-foreground p-8 sm:p-12 border border-white/10 dark:border-border shadow-2xl overflow-hidden transition-colors duration-300">
        
        {/* 4 Column Layout */}
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-white/10 dark:border-border">
          
          {/* Column 1: Brand Info & Socials (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/mahin-logo.png"
                alt="Md Mahin Khan"
                width={80}
                height={40}
                className="w-20 h-auto invert dark:invert"
              />
            </div>

            <p className="text-xs text-gray-300 dark:text-muted-foreground leading-relaxed max-w-sm">
              Frontend &amp; Full-Stack Engineer specializing in React.js, Next.js, and TypeScript. 
              Building high-performance web applications and scalable digital experiences.
            </p>

            {/* Social Box Icons */}
            <div className="flex items-center gap-2 pt-2">
              <SocialSquare href="https://github.com/samir-45" icon={<Github size={16} />} label="GitHub" />
              <SocialSquare href="https://www.linkedin.com/in/devmahin" icon={<Linkedin size={16} />} label="LinkedIn" />
              <SocialSquare href="https://x.com/mdmahinkhan621" icon={<BsTwitterX size={14} />} label="X" />
              <SocialSquare href="mailto:mdmahinkhan621@gmail.com" icon={<Mail size={16} />} label="Email" />
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="md:col-span-3 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 dark:text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 dark:text-muted-foreground">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button></li>
              <li><button onClick={() => scrollToSection('certifications')} className="hover:text-primary transition-colors">Certifications</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Specialization (3.5 Cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 dark:text-foreground">
              Specialization
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 dark:text-muted-foreground">
              <li>React.js &amp; Next.js Web Apps</li>
              <li>TypeScript Architecture</li>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Stripe Payment Integrations</li>
              <li>REST &amp; GraphQL API Systems</li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3 Cols) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 dark:text-foreground">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-gray-400 dark:text-muted-foreground uppercase">EMAIL</p>
                <a href="mailto:mdmahinkhan621@gmail.com" className="text-gray-200 dark:text-foreground hover:text-primary transition-colors truncate block">
                  mdmahinkhan621@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-gray-400 dark:text-muted-foreground uppercase">LOCATION</p>
                <p className="text-gray-200 dark:text-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar inside Card */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Md Mahin Khan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Portfolio Site</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Hire Me</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Square social icon box helper
const SocialSquare = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 rounded-lg bg-white/10 dark:bg-secondary/60 border border-white/10 dark:border-border/80 text-gray-300 dark:text-muted-foreground hover:text-primary hover:bg-primary/20 flex items-center justify-center transition-all duration-200"
  >
    {icon}
  </a>
);

export default Footer;
