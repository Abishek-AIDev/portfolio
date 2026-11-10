import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Sparkles, Code2, Cpu, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roles;

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left z-10">
          
          {/* Status Kicker / Intro */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              {portfolioData.personal.greeting}
            </span>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Joy University · NIAT
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Dynamic Animated Subtitle with Typing Cursor */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            </div>
          </div>

          {/* Main Description */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            "{portfolioData.personal.tagline}"
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-normal">
            First-year engineering student exploring software development, computational logic, and educational AI architectures.
          </p>

          {/* Action Buttons with Shimmer sweep */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="btn-shimmer px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0 border border-white/20 flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="btn-shimmer px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-slate-700/80 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Social Badges & Quick Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Direct Email"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Column: 3D Visual Element / Dynamic Orbital Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          
          {/* Orbital Concentric Glowing Rings */}
          <div className="absolute w-[330px] sm:w-[440px] h-[330px] sm:h-[440px] rounded-full border border-dashed border-cyan-500/25 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full border border-purple-500/20 animate-spin-reverse-slow pointer-events-none" />
          
          {/* Subtle Radar Marker on outer ring */}
          <div className="absolute w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full animate-spin-slow pointer-events-none flex items-start justify-center">
            <span className="w-2.5 h-2.5 -mt-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          </div>

          {/* Animated Border Box around Core */}
          <div className="animated-border-box w-72 sm:w-88 md:w-96 aspect-square shadow-[0_0_60px_rgba(99,102,241,0.25)] animate-float">
            <div className="animated-border-content overflow-hidden relative flex items-center justify-center group">
              
              {portfolioData.personal.customProfilePhoto ? (
                <img
                  src={portfolioData.personal.customProfilePhoto}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/images/hero_abstract_core_1794326647219.jpg"
                    alt="Futuristic AI Neural Core"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  {/* Subtle holographic vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />
                  
                  {/* Floating Glass Tag inside Graphic */}
                  <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl border border-white/15 flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">AI & System Logic</div>
                        <div className="text-[11px] text-slate-400">Joy University · NIAT</div>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-300">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Floating Decorative Badges with subtle bounce */}
          <div className="absolute -top-1 -right-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-1.5 backdrop-blur-md z-20 animate-bounce" style={{ animationDuration: '4s' }}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>B.Tech Y1 (2026)</span>
          </div>

          <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/50 text-purple-300 text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-1.5 backdrop-blur-md z-20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>C++ Certified</span>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-700/80 flex justify-center p-1">
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
