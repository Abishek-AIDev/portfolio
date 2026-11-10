import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Brain, Terminal, Compass, Award, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal } = portfolioData;

  const pillarIcons = [
    <GraduationCap className="w-5 h-5 text-cyan-400" />,
    <Brain className="w-5 h-5 text-indigo-400" />,
    <Terminal className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            Background & Purpose
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student at Joy University (NIAT) focused on turning theoretical concepts into functional software.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Hello, World!</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                B.Tech Student
              </span>
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              "{about.bio}"
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-sm text-slate-300 space-y-2 mb-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                My Philosophy
              </div>
              <p className="leading-relaxed">
                Rather than remaining confined to textbook theories, I seek to understand how algorithms behave when deployed inside usable software. Every project—from foundational C++ console programs to educational AI image classifiers—is a stepping stone towards building robust systems.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="space-y-4">
              {about.highlights.map((highlight, idx) => (
                <div
                  key={highlight.title}
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800/80 shrink-0">
                    {pillarIcons[idx % pillarIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Facts & Academic Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <div className="glass-card p-6 rounded-2xl border border-indigo-500/20 relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Profile Snapshot</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Active
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {about.quickFacts.map((fact) => (
                  <div key={fact.label} className="py-3 flex items-center justify-between text-sm">
                    <span className="text-slate-400">{fact.label}</span>
                    <span className="text-white font-medium text-right">{fact.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Academic Track:</span>
                <span className="text-xs font-semibold text-indigo-300 font-mono">Joy University · NIAT</span>
              </div>
            </div>

            {/* Verified Certifications Highlight Card */}
            <div className="glass-card p-6 rounded-2xl border border-purple-500/20 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verified Credentials</h4>
                  <p className="text-xs text-slate-400">STVT Certified in C++ & MS Office</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Completed 3-month comprehensive vocational training and examination with 1st Class distinctions.
              </p>

              <a
                href="#certifications"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Inspect Verified Certificates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
