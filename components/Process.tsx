import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-500 tracking-wide uppercase mb-3">Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">From Concept to Deployment</h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-white font-bold mb-6">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};