'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch } from 'react-icons/fa';
import { GitCommit, Terminal, ExternalLink, Activity, Sparkles, Layers } from 'lucide-react';
import Image from 'next/image';

const GithubStats = () => {
  const [gitStats, setGitStats] = useState({
    publicRepos: 25,
    followers: 12,
    loading: true,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/samir-45');
        if (res.ok) {
          const data = await res.json();
          setGitStats({
            publicRepos: data.public_repos || 25,
            followers: data.followers || 12,
            loading: false,
          });
        }
      } catch (err) {
        setGitStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  const languages = [
    { name: 'TypeScript & JavaScript', percentage: 92, color: 'bg-plasma-violet' },
    { name: 'React.js & Next.js 15', percentage: 90, color: 'bg-cyan-pulse' },
    { name: 'Node.js & Express APIs', percentage: 82, color: 'bg-mint-signal' },
    { name: 'Redux & State Architecture', percentage: 85, color: 'bg-deep-indigo' },
    { name: 'Tailwind CSS & Design Systems', percentage: 95, color: 'bg-sky-pulse' },
  ];

  return (
    <section id="github-stats" className="py-14 sm:py-18 lg:py-24 bg-paper-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
          <span className="badge-step">03</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Telemetry &amp; Activity
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-obsidian tracking-tight">
              GitHub Telemetry &amp; Metrics
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-1.5 sm:mt-2 max-w-xl font-sans">
              Live repository signals, continuous integration activity, and language distribution.
            </p>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-ash">
            <span>UPTIME: 99.9% • LIVE METRICS</span>
          </div>
        </div>

        {/* Bento Grid Layout: Stacks cleanly on tablet/mobile, 8 cols + 4 cols on PC desktop (lg+) */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-12 w-full">
          
          {/* Main Activity Panel (8 Cols on PC) */}
          <div className="lg:col-span-8 p-4 sm:p-6 lg:p-7 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between min-w-0 overflow-hidden">
            <div>
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-graphite-hairline w-full min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] bg-obsidian text-paper-white flex items-center justify-center flex-shrink-0">
                    <FaGithub size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono text-xs sm:text-sm font-semibold text-obsidian truncate">
                      github.com/samir-45
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-ash truncate">Commit Stream &amp; Repositories</p>
                  </div>
                </div>

                <a
                  href="https://github.com/samir-45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-graphite-hairline hover:border-obsidian text-xs font-mono text-obsidian transition-colors self-start sm:self-auto flex-shrink-0"
                >
                  <span>Open GitHub</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* 4 Flat Telemetry Counters (2x2 on mobile, 4 in row on sm+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5 w-full min-w-0">
                <MetricBox
                  label="COMMITS"
                  value="500+"
                  sub="production"
                />
                <MetricBox
                  label="REPOSITORIES"
                  value={gitStats.loading ? '...' : `${gitStats.publicRepos}`}
                  sub="open source"
                />
                <MetricBox
                  label="PLATFORMS"
                  value="3"
                  sub="commercial"
                />
                <MetricBox
                  label="TYPE SAFETY"
                  value="100%"
                  sub="strict TS"
                />
              </div>

              {/* GitHub Contribution Heatmap Container */}
              <div className="p-3 sm:p-4 rounded-[2px] border border-graphite-hairline bg-lilac-wash/30 w-full min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5 text-xs font-mono text-smoke">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-[1px] bg-plasma-violet inline-block flex-shrink-0" />
                    <span className="font-medium text-obsidian text-xs">Contribution Heatmap</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-ash flex items-center gap-1">
                    <span className="sm:hidden text-plasma-violet font-medium">Swipe ⇄</span>
                    <span className="hidden sm:inline">samir-45 // live streak</span>
                  </span>
                </div>

                {/* Responsive Heatmap Area: scales cleanly to 100% card width on PC, scrolls on small mobile */}
                <div className="w-full overflow-x-auto pb-1 scrollbar-thin">
                  <div className="min-w-[560px] sm:min-w-0 w-full flex items-center justify-center py-1">
                    <Image
                      src="/api/github-chart"
                      alt="Mahin Khan GitHub Contribution Chart"
                      width={663}
                      height={104}
                      className="w-full h-auto dark:[filter:invert(0.88)_hue-rotate(180deg)] block"
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-graphite-hairline flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-ash">
              <span>SOURCE: GITHUB REST API</span>
              <span>SYNCHRONIZED REALTIME</span>
            </div>
          </div>

          {/* Languages & Repository Standards Panel (4 Cols on PC) */}
          <div className="lg:col-span-4 p-4 sm:p-6 lg:p-7 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between min-w-0 overflow-hidden">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-graphite-hairline">
                <span className="w-2 h-2 rounded-[1px] bg-plasma-violet inline-block" />
                <h3 className="font-mono text-xs sm:text-sm font-semibold text-obsidian">
                  Language Distribution
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3 mb-6">
                {languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1 font-mono text-xs">
                    <div className="flex items-center justify-between text-smoke gap-2">
                      <span className="text-obsidian font-medium text-[11px] sm:text-xs truncate">{lang.name}</span>
                      <span className="text-[11px] sm:text-xs flex-shrink-0">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-[1px] bg-graphite-hairline overflow-hidden">
                      <div
                        className={`h-full rounded-[1px] ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Standards Micro-Grid to balance height with left panel */}
              <div className="pt-3 border-t border-graphite-hairline font-mono text-xs">
                <span className="text-[10px] text-ash uppercase tracking-wider block mb-2">Quality &amp; Standards</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-[2px] bg-surface-base border border-graphite-hairline/80">
                    <span className="text-ash block text-[9px]">LINT &amp; TYPES</span>
                    <span className="text-obsidian font-semibold">Strict TS</span>
                  </div>
                  <div className="p-2 rounded-[2px] bg-surface-base border border-graphite-hairline/80">
                    <span className="text-ash block text-[9px]">CI PIPELINE</span>
                    <span className="text-mint-signal font-semibold">Passing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-graphite-hairline text-[10px] sm:text-xs font-mono text-ash leading-relaxed">
              <span>Codebases audited for type safety, modular hierarchy, and bundle efficiency.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const MetricBox = ({ label, value, sub }) => (
  <div className="p-2.5 sm:p-3.5 rounded-[2px] border border-graphite-hairline bg-paper-white flex flex-col justify-between min-w-0">
    <p className="text-[10px] sm:text-xs font-mono text-ash uppercase tracking-wider truncate">{label}</p>
    <p className="text-lg sm:text-xl font-mono font-bold text-obsidian my-0.5 tracking-tight truncate">{value}</p>
    <p className="text-[10px] sm:text-xs font-mono text-smoke truncate">{sub}</p>
  </div>
);

export default GithubStats;
