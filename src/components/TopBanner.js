'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const TopBanner = () => {
  return (
    <aside aria-label="Announcement" className="w-full gradient-banner text-white text-xs font-normal py-2 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between gap-3 text-[12px] leading-tight">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-[10px] font-mono font-medium">
            ●
          </span>
          <span className="font-sans">
            <strong className="font-medium">2026 Production Availability:</strong> Accepting frontend &amp; full-stack engineering roles.
          </span>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-white/90 hover:text-white hover:underline transition-colors"
        >
          <span>Initiate Contact</span>
          <ArrowRight size={12} />
        </a>
      </div>
    </aside>
  );
};

export default TopBanner;
