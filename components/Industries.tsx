import React from 'react';
import { Rocket, ShoppingBag, Home, GraduationCap, HeartPulse, Briefcase, Building2 } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

const ICONS: Record<string, React.ReactNode> = {
  rocket: <Rocket size={16} />,
  'shopping-bag': <ShoppingBag size={16} />,
  home: <Home size={16} />,
  'graduation-cap': <GraduationCap size={16} />,
  'heart-pulse': <HeartPulse size={16} />,
  briefcase: <Briefcase size={16} />,
  building: <Building2 size={16} />,
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">Industries We Empower</h3>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry.label}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {ICONS[industry.icon]} {industry.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};