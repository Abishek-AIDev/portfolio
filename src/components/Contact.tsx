import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Open user's real email client with pre-filled content (real working interaction, no fake server pretending)
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a question, collaboration idea, or opportunity? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-click copy */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 relative group hover:border-cyan-400/40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {personal.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click to compose an email directly in your default mail app.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-6 rounded-2xl border border-indigo-500/20 relative group hover:border-indigo-400/40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Linkedin className="w-6 h-6" />
                </div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-indigo-400 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                Professional Network
              </div>
              <div className="text-base font-bold text-white">LinkedIn Profile</div>
              <p className="text-xs text-slate-400 mt-1">
                Connect for academic discussions, student projects, and tech opportunities.
              </p>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-6 rounded-2xl border border-purple-500/20 relative group hover:border-purple-400/40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Github className="w-6 h-6" />
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-purple-400 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                Source Code & Projects
              </div>
              <div className="text-base font-bold text-white">GitHub: Abishek-AIDev</div>
              <p className="text-xs text-slate-400 mt-1">
                Explore project repositories, experiments, and code samples.
              </p>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your message below. Submitting will prepare and launch your default email client addressed to <span className="text-cyan-300 font-mono">{personal.email}</span>.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Ready to Send!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with your message. If it didn't open automatically, you can send an email directly to <span className="text-emerald-300 font-mono font-medium">{personal.email}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Compose Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Inquiry or Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 border border-white/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (via Mail Client)</span>
                  </button>
                </div>
              </form>
            )}

            {/* Beginner tip explaining how to hook backend services later */}
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 leading-normal flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                Developer Note: This form opens your default email app via mailto without requiring an external backend. To connect automatic serverless form delivery in the future, you can integrate services like Formspree or EmailJS.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
