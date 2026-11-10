import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../data/portfolioData';
import { X, ExternalLink, Calendar, Building, Award, CheckCircle, ShieldCheck, ZoomIn, ZoomOut } from 'lucide-react';

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-card bg-slate-950/95 max-w-4xl w-full max-h-[94vh] overflow-y-auto rounded-3xl border border-indigo-500/40 p-5 sm:p-8 shadow-[0_0_80px_rgba(99,102,241,0.35)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Official Document View
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              {cert.grade}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              <span className="hidden sm:inline">{isZoomed ? '1x' : '1.5x Zoom'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-red-400 transition-colors"
              aria-label="Close Certificate Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {cert.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{cert.issuingOrganization}</p>
        </div>

        {/* Certificate High-Resolution Image Container with Clean Crop */}
        <div className="rounded-2xl overflow-hidden border border-white/15 mb-6 bg-slate-900/60 flex justify-center items-center relative group min-h-[350px]">
          <img
            src={cert.image}
            alt={cert.title}
            className={`w-full max-h-[540px] object-contain rounded-xl transition-all duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-125 my-8 cursor-zoom-out' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Verified Metadata Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="text-slate-400 font-mono mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Issue Date:</span>
            </div>
            <div className="text-white font-medium text-sm">{cert.issueDate}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="text-slate-400 font-mono mb-1 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-400" />
              <span>Training Center:</span>
            </div>
            <div className="text-white font-medium text-sm">{cert.trainingCenter}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="text-slate-400 font-mono mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>Course Duration:</span>
            </div>
            <div className="text-white font-medium text-sm">{cert.duration}</div>
          </div>
        </div>

        {/* Statement of Marks Table */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Official Statement of Marks
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="pb-2.5 font-normal">Subject</th>
                  <th className="pb-2.5 font-normal text-right">Marks Obtained</th>
                  <th className="pb-2.5 font-normal text-right">Max Marks</th>
                  <th className="pb-2.5 font-normal text-right">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {cert.marksSummary.map((m, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-2.5 font-medium text-white">{m.subject}</td>
                    <td className="py-2.5 text-right font-mono text-cyan-300 tabular-nums">{m.marks}</td>
                    <td className="py-2.5 text-right font-mono text-slate-400 tabular-nums">{m.max}</td>
                    <td className="py-2.5 text-right font-mono text-emerald-400 font-semibold">PASS</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-slate-400">
          <div>
            <span>Accredited Registration: </span>
            <span className="font-mono text-slate-200">{cert.registrationNo}</span>
          </div>

          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>Institution Online Verification Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
