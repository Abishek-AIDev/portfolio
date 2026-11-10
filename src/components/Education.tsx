import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            Academic Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Formal <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building strong theoretical, algorithmic, and engineering foundations.
          </p>
        </div>

        {/* Futuristic Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/25 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            
            {/* Background glowing ambient light */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* University & Degree Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {education.institution}
                  </h3>
                  <div className="text-cyan-400 font-medium text-sm sm:text-base flex items-center gap-2">
                    <span>{education.degree}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300 font-mono text-xs">{education.year}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
                <span className="text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Program / Department Banner */}
            <div className="my-6 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">
                  Academic Framework & Institute
                </span>
                <span className="text-base font-bold text-white">
                  {education.program}
                </span>
              </div>
              <span className="text-xs text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-lg border border-indigo-500/30 self-start sm:self-auto font-mono">
                Advanced Technology Specialization
              </span>
            </div>

            {/* Coursework & Philosophy */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              {education.description}
            </p>

            {/* Timeline Milestones */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Current Academic Milestones & Focus
              </h4>
              <div className="space-y-2.5">
                {education.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                      {milestone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
