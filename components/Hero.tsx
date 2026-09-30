import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.03]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-8">
          <Sparkles size={14} className="text-brand-500" />
          Next Generation AI Intelligence
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 text-glow">
          Automate Your Business with{' '}
          <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
            Intelligent AI
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
          Unlock the power of custom AI agents, seamless data automation, and intelligent systems designed to
          scale your enterprise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-dark-950 font-semibold px-8 py-4 rounded-full hover:bg-slate-200 transition-colors">
            Book a Free Consultation <ArrowRight size={18} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
            Explore Services
          </a>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 h-64 flex items-center justify-center text-slate-600 text-sm">
          Live analytics preview
        </div>
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-white mb-2">98%</div>
          <div className="text-sm text-slate-400">Efficiency Boost</div>
        </div>
      </div>
    </section>
  );
};