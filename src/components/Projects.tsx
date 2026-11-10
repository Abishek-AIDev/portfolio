import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Github, ExternalLink, ShieldCheck, ArrowRight, Eye, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            Engineering Showcases
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical applications built to explore artificial intelligence and solve real-world problems.
          </p>
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="animated-border-box group shadow-[0_0_50px_rgba(6,182,212,0.18)] hover:shadow-[0_0_80px_rgba(99,102,241,0.35)] transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="animated-border-content p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Image Preview with Interactive Laser Scanline */}
                <div className="lg:col-span-7 relative group/media rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 sm:h-96 object-cover object-center transform group-hover/media:scale-106 transition-transform duration-700"
                  />

                  {/* Ambient glowing vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Laser scanline animation */}
                  <div className="scanline-effect" />
                  
                  {/* Hover overlay with preview prompt */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-shimmer px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_#22d3ee] transform translate-y-2 group-hover/media:translate-y-0 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project Architecture</span>
                    </button>
                  </div>

                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-md flex items-center gap-1.5">
                    <span>{project.year}</span>
                    <span className="text-slate-600">·</span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Right Column: Project Details & Meta */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Artificial Intelligence & Computer Vision</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <div className="text-sm font-medium text-indigo-300 mb-4">
                      {project.subtitle}
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* Educational Disclaimer Callout */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/35 text-amber-200/90 text-xs leading-relaxed flex items-start gap-2.5 shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-amber-300">Educational AI:</span>{' '}
                        Designed to guide understanding of skin conditions; not a medical diagnostic device.
                      </div>
                    </div>
                  </div>

                  {/* Editable Tech Tags */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-300">
                      {project.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span className="text-cyan-300 font-medium hover:text-white transition-colors">{tag}</span>
                          {i < project.tags.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with Shimmer */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-shimmer px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2"
                    >
                      <span>Inspect System</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shimmer px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/50 text-cyan-300 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Live demo deploying soon
                      </span>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
