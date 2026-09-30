import React, { useState } from 'react';
import { Calendar, CheckCircle2, Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-950">
      <ScrollReveal className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Schedule a free 30-minute consultation. We'll discuss your specific challenges and outline a roadmap
          for automation.
        </p>

        {status === 'success' ? (
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-3">
            <CheckCircle2 size={40} className="text-brand-500" />
            <p className="text-white font-semibold text-lg">Thanks — we got your request!</p>
            <p className="text-slate-400 text-sm">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 text-left space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-1 block">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1 block">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1 block">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1 block">What are you looking to automate? (optional)</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 resize-none"
                placeholder="Tell us a bit about your business..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-dark-950 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Calendar size={18} /> Schedule Free Consultation
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong — please try again.</p>
            )}
          </form>
        )}

        <p className="text-sm text-slate-500 mt-4">No commitment required. 100% Confidential.</p>
      </ScrollReveal>
    </section>
  );
};