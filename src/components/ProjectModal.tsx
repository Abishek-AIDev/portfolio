import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Github, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-card bg-slate-950/95 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Featured AI Project
            </span>
            <span className="text-xs text-cyan-300 font-mono">{project.year}</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-indigo-400 font-mono">{project.status}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>
        </div>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        {/* Crucial Educational Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm leading-relaxed mb-6 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-300 block mb-1">
              Important Educational Notice:
            </span>
            {project.educationalDisclaimer}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <p>{project.description}</p>
        </div>

        {/* Architecture & Planned Features */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Key System Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="pt-4 border-t border-white/10 mb-6">
          <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300">
            {project.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="text-cyan-300">{tag}</span>
                {i < project.tags.length - 1 && (
                  <span className="text-slate-600" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white hover:border-cyan-400 text-sm font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Interactive Live Demo in Active Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
