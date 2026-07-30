'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
    { ref: imgRef, delay: 0, transform: 'scale(0.96)' },
    { ref: badgeRef, delay: 0.1, transform: 'translateY(20px)' },
    { ref: textRef, delay: 0.2, transform: 'translateY(28px)' },
    { ref: ctaRef, delay: 0.4, transform: 'translateY(20px)' }];


    els?.forEach(({ ref, delay, transform }) => {
      const el = ref?.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = transform;
      el.style.transition = `opacity 1s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 1s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`;
    });

    const timer = setTimeout(() => {
      els?.forEach(({ ref }) => {
        const el = ref?.current;
        if (!el) return;
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden blue-gradient-bg">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      {/* Fabric pattern overlay */}
      <div className="absolute inset-0 fabric-pattern pointer-events-none" />
      {/* Decorative fashion elements */}
      <div className="absolute top-20 right-8 lg:right-24 float-slow opacity-15 pointer-events-none hidden lg:block">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" aria-hidden="true">
          <path d="M30 5 C30 5 50 30 50 60 C50 90 30 115 30 115 C30 115 10 90 10 60 C10 30 30 5 30 5Z" stroke="#C9A84C" strokeWidth="1" fill="none" />
          <path d="M30 20 C30 20 42 40 42 60 C42 80 30 100 30 100" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-8 lg:left-16 float-slow-2 opacity-10 pointer-events-none hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="35" stroke="#1A3A6B" strokeWidth="1" />
          <circle cx="40" cy="40" r="20" stroke="#C9A84C" strokeWidth="0.75" />
          <circle cx="40" cy="40" r="5" fill="#C9A84C" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-4 float-slow opacity-8 pointer-events-none hidden xl:block" style={{ animationDelay: '2s' }}>
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" aria-hidden="true">
          <line x1="20" y1="0" x2="20" y2="80" stroke="#C9A84C" strokeWidth="0.75" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="#C9A84C" strokeWidth="0.75" />
          <line x1="0" y1="60" x2="40" y2="60" stroke="#C9A84C" strokeWidth="0.75" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Portrait — 5 cols */}
          <div ref={imgRef} className="lg:col-span-5 relative group order-2 lg:order-1">
            {/* Gold glow behind image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#C9A84C]/20 via-[#1A3A6B]/10 to-[#C9A84C]/15 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-[#1A3A6B]/20 grayscale-hover border border-white/60">
              <AppImage
                src="/assets/images/no_images.png"
                alt="Elegant young woman in stylish blue fashion outfit, professional portrait with soft studio lighting, feminine and confident pose"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-top" />
              
              {/* Soft blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/40 via-transparent to-[#1A3A6B]/10" />

              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-[2rem] border border-[#C9A84C]/30 pointer-events-none" />
            </div>

            {/* Floating availability badge */}
            <div ref={badgeRef} className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 lg:bottom-12">
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-xl border border-[#C9A84C]/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A84C]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D1B2E]">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Floating style card */}
            <div className="absolute -left-4 top-1/3 bg-white/95 backdrop-blur-md border border-[#C9A84C]/30 rounded-2xl px-4 py-3.5 shadow-xl hidden lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-1">SALES PHILOSOPHY</p>
              <p className="font-serif text-sm font-semibold text-[#0D1B2E]">Style is Personal.</p>
            </div>
          </div>

          {/* Text — 7 cols */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">
                Personal Portfolio
              </span>
            </div>

            {/* Name */}
            <div ref={textRef}>
              <h1 className="hero-headline font-serif font-bold text-[#0D1B2E] mb-4">
                yeshaiindr_<br />
                <span className="italic font-light text-[#1A3A6B]"></span>{' '}
                <span className="text-[#0D1B2E]"></span>
              </h1>

              {/* Tagline */}
              <div className="flex items-center gap-3 mt-5">
                <div className="h-px w-8 bg-[#C9A84C]/60" />
                <p className="text-sm lg:text-base font-medium text-[#4A6080] leading-relaxed tracking-wide">
                 
                  <span className="text-[#C9A84C]">|</span>{' '}
                  
                  <span className="text-[#C9A84C]">|</span>{' '}
                  
                </p>
              </div>

             <div>
  <h3 className="text-lg font-semibold text-[#1B2A41]">
    Fashion Sales & Retail Specialist
  </h3>

  <p className="mt-3 text-base text-[#4A6080] leading-relaxed max-w-lg font-light">
    Berpengalaman di bidang fashion retail dengan fokus pada customer service,
    product knowledge, sales, dan fashion styling. Terbiasa memahami kebutuhan
    customer, memberikan rekomendasi produk, serta menciptakan pengalaman
    berbelanja yang nyaman dan personal.
  </p>
</div>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A3A6B] text-white text-sm font-semibold uppercase tracking-[0.18em] hover:bg-[#0D1B2E] transition-colors duration-300 shadow-lg shadow-[#1A3A6B]/25">
                
                About Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="#work-experience"
                className="ghost-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-[0.18em]">
                
                Work Experience
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </a>

              <a
                href="#contact"
                className="ghost-btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-[0.18em]">
                
                Contact Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 pt-5 border-t border-[#C0D3F0]">
              {[
              { label: 'YEARS IN FASHION RETAIL', value: '4+' }
              // { label: 'Projects Completed', value: '10+' }
              // { label: 'Brand Collaborations', value: '5+' }
            ]?.
              map((s) =>
              <div key={s?.label} className="text-center">
                  <p className="font-serif text-xl font-bold text-[#1A3A6B]">{s?.value}</p>
                  <p className="text-[10px] text-[#4A6080] uppercase tracking-[0.15em] mt-0.5">{s?.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}