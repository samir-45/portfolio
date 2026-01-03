// src/components/Footer.js
import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              MAHIN<span className="text-primary">.DEV</span>
            </h3>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Building scalable, high-performance web solutions with modern technologies. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Technical Skills</a></li>
              <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-4">
              <SocialLink href="https://www.linkedin.com/in/devmahin" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://github.com/samir-45" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="mailto:mdmahinkhan621@gmail.com" icon={<Mail size={18} />} label="Email" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Mahin Khan. Built with React & Tailwind.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top 
            <span className="p-1 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

// Helper Component
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;
