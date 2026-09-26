'use client';

import React from 'react';

const technologies = [
  { name: 'Next.js 15', badge: 'App Router' },
  { name: 'TypeScript', badge: 'v5.7 Strict' },
  { name: 'React 19', badge: 'Concurrent' },
  { name: 'Node.js & Express', badge: 'REST / APIs' },
  { name: 'Redux Toolkit', badge: 'RTK Query' },
  { name: 'Tailwind CSS', badge: 'Tokens' },
  { name: 'MongoDB / MySQL', badge: 'Databases' },
  { name: 'Stripe Payments', badge: 'Webhooks' },
  { name: 'Firebase Auth', badge: 'RBAC' },
  { name: 'Vercel / Netlify', badge: 'CI/CD' },
];

const TechStackBar = () => {
  return (
    <section className="w-full bg-paper-white border-y border-graphite-hairline py-10 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Caption */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-graphite-hairline text-xs font-mono text-smoke">
          <span className="flex items-center gap-2 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-plasma-violet inline-block" />
            Core Architecture &amp; Production Tooling
          </span>
          <span className="text-ash hidden sm:inline">VERIFIED RUNTIMES</span>
        </div>

        {/* 5-Column Responsive Minimalist Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start justify-center p-3 rounded-[2px] border border-transparent hover:border-graphite-hairline hover:bg-lilac-wash/50 transition-all duration-150 group"
            >
              <span className="font-mono text-xs font-semibold text-obsidian tracking-tight group-hover:text-plasma-violet transition-colors">
                {tech.name}
              </span>
              <span className="text-[11px] font-mono text-ash mt-0.5">
                {tech.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackBar;
