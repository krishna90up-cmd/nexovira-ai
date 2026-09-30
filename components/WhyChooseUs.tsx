import React from 'react';
import { Cpu, Shield, Zap, RefreshCw } from 'lucide-react';
import { WHY_US } from '../constants';
import { ScrollReveal } from './ScrollReveal';

const ICONS: Record<string, React.ReactNode> = {
  cpu: <Cpu size={20} />,
  shield: <Shield size={20} />,
  zap: <Zap size={20} />,
  refresh: <RefreshCw size={20} />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
            Why Partners Trust Nexovira
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            In a rapidly evolving landscape, you need a partner who prioritizes stability, security, and
            scalability over hype.
          </p>
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {WHY_US.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-500">
                {ICONS[item.icon]}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};