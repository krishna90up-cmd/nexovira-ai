import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center font-bold text-white">
            N
          </div>
          <span className="text-xl font-display font-bold text-white">Nexovira</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-white text-dark-950 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
          Book Consultation
          <ArrowRight size={16} />
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-white/5 px-4 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-white text-dark-950 text-sm font-semibold px-5 py-2.5 rounded-full">
            Book Consultation <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};