import React from 'react';
import { LayoutGrid, Database, Briefcase, Bot, MessageSquare, Wrench } from 'lucide-react';
import { SERVICES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

const ICONS: Record<string, React.ReactNode> = {
  grid: <LayoutGrid size={22} />,
  database: <Database size={22} />,
  business: <Briefcase size={22} />,
  bot: <Bot size={22} />,
  chat: <MessageSquare size={22} />,
  tool: <Wrench size={22} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-500 tracking-wide uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Solutions That Scale</h3>
          <p className="text-slate-400 text-lg">
            Comprehensive AI integration services designed to modernize every aspect of your digital
            infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div
                className={`h-full p-8 rounded-2xl border transition-colors ${
                  service.featured
                    ? 'glass-card border-brand-500/40'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-brand-500">
                  {ICONS[service.icon]}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};