import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, CheckCircle2, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'confirmed' | 'exploring'>('confirmed');
  const { confirmed, exploringNext } = portfolioData.skills;

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Honest, verified skills backed by formal certifications, along with my active learning roadmap.
          </p>

          {/* Interactive Filter Tabs (Interactive buttons with clear active state) */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner mt-4">
            <button
              onClick={() => setActiveTab('confirmed')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'confirmed'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Confirmed & Certified ({confirmed.length})
            </button>
            <button
              onClick={() => setActiveTab('exploring')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'exploring'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Learning Roadmap ({exploringNext.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Confirmed Skills */}
        {activeTab === 'confirmed' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {confirmed.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-8 rounded-2xl border border-cyan-500/20 relative group hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {skill.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {skill.level}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {skill.description}
                </p>

                {/* Sub-areas / focus tags rendered as clean unboxed text */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-2">Key Areas:</span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300">
                    {skill.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="hover:text-cyan-400 transition-colors">{tag}</span>
                        {i < skill.tags.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Direct link to certificate */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Institutional Credential:</span>
                  <a
                    href="#certifications"
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    View Official Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Learning Roadmap */}
        {activeTab === 'exploring' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-indigo-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                These technologies represent active self-study, university lab research, and ongoing project implementations (e.g. SkinWise AI).
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exploringNext.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl border border-purple-500/20 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                        {skill.level}
                      </span>
                      <Layers className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                      {skill.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span className="text-indigo-300">{tag}</span>
                          {i < skill.tags.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
