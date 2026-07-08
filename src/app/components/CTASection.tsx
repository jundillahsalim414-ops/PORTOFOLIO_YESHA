'use client';
import React, { useEffect, useRef } from 'react';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const inner = section?.querySelector<HTMLElement>('.cta-inner');
    if (!inner) return;
    inner.style.opacity = '0';
    inner.style.transform = 'scale(0.97)';
    inner.style.transition = 'opacity 0.9s ease, transform 0.9s ease';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inner.style.opacity = '1';
          inner.style.transform = 'scale(1)';
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer?.observe(inner);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="cta-inner relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 lg:py-28 text-center shadow-2xl border border-white/5">

          {/* Radial glow */}
          <div className="cta-glow" />

          {/* Diagonal rays overlay */}
          <div className="absolute inset-0 diagonal-rays opacity-100 pointer-events-none" />

          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 float-slow opacity-10 hidden lg:block">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="40" height="40" rx="8" stroke="white" strokeWidth="1.5" />
              <rect x="14" y="14" width="20" height="20" rx="4" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 float-slow-2 opacity-10 hidden lg:block">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <circle cx="28" cy="28" r="24" stroke="white" strokeWidth="1.5" />
              <circle cx="28" cy="28" r="12" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-20 right-20 float-slow opacity-10 hidden lg:block" style={{ animationDelay: '3s' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 2 L30 28 L2 28 Z" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white/60">
                Open to New Opportunities
              </span>
            </div>

            <h2 className="section-headline font-serif font-bold text-white mb-6">
              Ready to Build Something<br />
              <span className="italic font-light text-white/60">Extraordinary Together?</span>
            </h2>

            <p className="text-base lg:text-lg text-white/50 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Whether you&apos;re a luxury brand seeking strategic direction or a team looking to hire an elite fashion-sales leader — let&apos;s start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="/assets/resume.pdf"
                download
                className="ghost-btn-light inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Download Executive Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a
                href="mailto:hello@luxefashionportfolio.com"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                Send an Inquiry
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16 border-t border-white/5 pt-10">
              {[
                { value: '10k+', label: 'LinkedIn Followers' },
                { value: '4.9/5', label: 'Client Rating' },
                { value: '24h', label: 'Response Time' },
              ]?.map((s, i) => (
                <React.Fragment key={s?.label}>
                  {i > 0 && <div className="h-8 w-px bg-white/10 hidden lg:block" />}
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white">{s?.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">{s?.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}