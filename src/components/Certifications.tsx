import React, { useState } from 'react';
import { portfolioData, CertificateItem } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, Eye, Calendar, Building, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const certificates = portfolioData.certificates;

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <Award className="w-4 h-4 text-purple-400 animate-pulse" />
            Verified Technical Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Official <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Certified technical credentials issued by STVT Institute of India, Kuzhithurai center, with formal examination marks.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="animated-border-box group shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-all duration-500 transform hover:-translate-y-1.5"
            >
              <div className="animated-border-content p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                
                {/* Certificate Image Preview with Exact Crop & Glass Scrim */}
                <div
                  className="relative h-64 sm:h-72 bg-slate-950 rounded-2xl overflow-hidden cursor-pointer border border-white/10 group/img"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-slate-900/60 transform group-hover/img:scale-105 transition-transform duration-500"
                  />

                  {/* Ambient holographic gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Laser scanline effect on hover */}
                  <div className="scanline-effect opacity-0 group-hover/img:opacity-100 transition-opacity" />

                  {/* Verified Grade Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.grade}</span>
                  </div>

                  {/* Hover Reveal Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-xs">
                    <span className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(99,102,241,0.5)] transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>View Full Certificate</span>
                    </span>
                  </div>

                  {/* Issue Date & Duration bar */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                    <span className="flex items-center gap-1.5 font-mono text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      Issued: {cert.issueDate}
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/70 px-2 py-0.5 rounded border border-purple-500/30">
                      {cert.duration}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                      <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{cert.issuingOrganization}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Training Center:</span>
                        <span className="text-white font-medium">{cert.trainingCenter}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Accreditation:</span>
                        <span className="font-mono text-cyan-300">ISO 9001:2015 · TN09E0015554</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Inspect Statement of Marks</span>
                      <ShieldCheck className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="btn-shimmer px-4 py-2 rounded-xl bg-slate-900 border border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-600/30 text-xs font-semibold transition-all shadow-md"
                    >
                      Inspect Document
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
};
