import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-lg font-bold text-white font-display">
            {portfolioData.personal.name}
          </div>
          <p className="text-xs text-slate-400">
            First-year B.Tech Student at Joy University (NIAT) · Aspiring AI Developer
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center">
        <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        <span className="flex items-center gap-1 justify-center">
          Designed with modern React, Tailwind CSS & Canvas Animation
        </span>
      </div>
    </footer>
  );
};
