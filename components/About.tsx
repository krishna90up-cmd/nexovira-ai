import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-sm font-semibold text-brand-500 tracking-wide uppercase mb-3">About Nexovira</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Engineering the Future of <span className="text-slate-400">Automated Enterprise.</span>
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                At Nexovira AI Solutions, we bridge the gap between complex artificial intelligence and everyday
                business operations.
              </p>
              <p>
                Our mission is simple yet ambitious: to empower forward-thinking companies by replacing redundant
                processes with autonomous agents and data-driven insights, allowing human talent to focus on
                innovation and strategy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Custom Agents Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">10x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">ROI Average</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-dark-900" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};