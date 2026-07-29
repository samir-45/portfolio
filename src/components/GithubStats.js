'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaHistory } from 'react-icons/fa';
import { GitCommit, Code2, Terminal, ExternalLink, Sparkles, Activity } from 'lucide-react';
import Image from 'next/image';

const GithubStats = () => {
  const [gitStats, setGitStats] = useState({
    publicRepos: 25,
    followers: 12,
    loading: true,
  });

  useEffect(() => {
    // Fetch live user data directly from official GitHub REST API
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/samir-45');
        if (res.ok) {
          const data = await res.json();
          setGitStats({
            publicRepos: data.public_repos || 25,
            followers: data.followers || 0,
            loading: false,
          });
        }
      } catch (err) {
        console.error('GitHub API fetch error:', err);
        setGitStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  const languages = [
    { name: 'TypeScript & JavaScript', percentage: 92, color: 'bg-emerald-500' },
    { name: 'React.js & Next.js 15', percentage: 90, color: 'bg-primary' },
    { name: 'Node.js & Express APIs', percentage: 82, color: 'bg-teal-500' },
    { name: 'Redux & RTK Query', percentage: 85, color: 'bg-purple-500' },
    { name: 'Tailwind CSS & Styling', percentage: 95, color: 'bg-sky-500' },
  ];

  return (
    <section id="github-stats" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
            <Activity size={16} /> Engineering Metrics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            GitHub &amp; Activity Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Commit history, technology distribution, and open-source development activity.
          </p>
        </motion.div>

        {/* Full Container Width Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-12 w-full">
          
          {/* Main GitHub Activity Card (8 Cols) */}
          <motion.div
            className="md:col-span-8 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <FaGithub size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      @samir-45
                    </h3>
                    <p className="text-xs text-muted-foreground">GitHub Contribution Streak &amp; Activity</p>
                  </div>
                </div>

                <a
                  href="https://github.com/samir-45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/40 text-xs font-semibold text-foreground hover:text-primary transition-all"
                >
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              {/* GitHub Stats Row (Live Fetched API Data) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <StatPill icon={<GitCommit size={16} className="text-primary" />} label="Commits" value="500+" />
                <StatPill 
                  icon={<FaCodeBranch size={14} className="text-emerald-500" />} 
                  label="Public Repos" 
                  value={gitStats.loading ? '...' : `${gitStats.publicRepos}`} 
                />
                <StatPill icon={<Sparkles size={16} className="text-purple-500" />} label="Production Apps" value="3" />
                <StatPill icon={<Terminal size={16} className="text-sky-500" />} label="Type Safety" value="100%" />
              </div>

              {/* Live Contribution Heatmap Graph */}
              <div className="rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <FaHistory size={12} className="text-primary" /> Contribution Heatmap
                  </span>
                  <span>github.com/samir-45</span>
                </div>
                
                {/* Real-time GitHub Heatmap Image */}
                <div className="w-full overflow-x-auto pt-2 scrollbar-thin">
                  <div className="min-w-[650px] flex items-center justify-center">
                    <Image
                      src="https://ghchart.rshah.org/10b981/samir-45"
                      alt="Mahin Khan GitHub Contribution Chart"
                      width={700}
                      height={120}
                      className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity dark:invert-[0.1]"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Skills Distribution Card (4 Cols) */}
          <motion.div
            className="md:col-span-4 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code2 size={20} className="text-primary" />
                <h3 className="font-bold text-lg text-foreground">Language Proficiency</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full ${lang.color} transition-all duration-1000`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Footer Text */}
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
              <span>Open for GitHub collaboration &amp; product development</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const StatPill = ({ icon, label, value }) => (
  <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 text-left">
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
      {icon}
      <span>{label}</span>
    </div>
    <p className="text-lg font-extrabold text-foreground">{value}</p>
  </div>
);

export default GithubStats;
