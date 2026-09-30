import React from 'react';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center font-bold text-white">
              N
            </div>
            <span className="text-xl font-display font-bold text-white">Nexovira</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Intelligent Automation. Real Impact. Building the backbone of the next-generation enterprise.
          </p>
          <div className="flex gap-4 text-slate-500">
            
            <a href="https://www.linkedin.com/company/nexovira-ai/" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/nexovira_ai?igsh=MjNwbThlZDVwaGs=" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Services</h5>
          <ul className="space-y-3">
            {FOOTER_LINKS.services.map((item) => (
              <li key={item}><a href="#" className="text-slate-400 hover:text-white text-sm">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Company</h5>
          <ul className="space-y-3">
            {FOOTER_LINKS.company.map((item) => (
              <li key={item}><a href="#" className="text-slate-400 hover:text-white text-sm">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Contact</h5>
          <p className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <Mail size={14} /> info@nexoviraai.com
          </p>
          <p className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin size={14} /> Mumbai / Bhopal
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <span>© 2026 Nexovira AI Solutions. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};