    'use client';
import React, { useEffect, useRef } from 'react';

interface Role {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
  color: string;
}

const roles: Role[] = [
  {
    company: 'HIJABERIES',
    title: 'Fashion Sales',
    dates: '2022 – 2026',
    location: 'Bandung & Indonesia',
    color: '#C9A84C',
    bullets: [
      'Melayani customer secara langsung maupun melalui platform komunikasi dengan memberikan pelayanan yang ramah, responsif, dan profesional.',
      'Memahami kebutuhan dan preferensi customer untuk memberikan rekomendasi produk yang sesuai.',
      'Menjelaskan detail produk seperti bahan, warna, ukuran, model, dan karakteristik produk.',
      'Membantu customer memilih produk berdasarkan kebutuhan, style, dan occasion.',
      'Menangani pertanyaan, permintaan, dan keluhan customer secara profesional.',
      'Mengikuti perkembangan tren fashion untuk meningkatkan product knowledge dan memberikan rekomendasi yang relevan.',
      'Mendukung pencapaian target penjualan melalui pelayanan customer dan product knowledge.',
      'Berkoordinasi dengan tim untuk memastikan ketersediaan produk dan kelancaran proses penjualan.',
      'Menangani proses transaksi customer, pembayaran, dan pengecekan transaksi secara teliti.',
      'Memastikan proses pembayaran dan pelayanan kasir berjalan dengan cepat dan akurat.',
    ],
  },
];

export default function ProfessionalJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.journey-reveal');
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0';
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, parseFloat(delay) * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work-experience" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%)' }}>
      {/* Decorative fashion sketch */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-4 pointer-events-none hidden xl:block">
        <svg width="120" height="400" viewBox="0 0 120 400" fill="none" aria-hidden="true">
          <path d="M60 20 L60 380" stroke="#C9A84C" strokeWidth="1" strokeDasharray="6 8"/>
          <path d="M20 100 L100 100" stroke="#1A3A6B" strokeWidth="0.75"/>
          <path d="M30 200 L90 200" stroke="#1A3A6B" strokeWidth="0.75"/>
          <path d="M20 300 L100 300" stroke="#1A3A6B" strokeWidth="0.75"/>
          <circle cx="60" cy="100" r="6" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
          <circle cx="60" cy="200" r="6" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
          <circle cx="60" cy="300" r="6" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="journey-reveal mb-16" data-delay="0">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">Career</span>
          </div>
          <h2 className="section-headline font-serif font-bold text-[#0D1B2E]">
            Work<br />
            <span className="italic font-light text-[#1A3A6B]">Experience.</span>
          </h2>
          <p className="mt-4 text-base text-[#4A6080] max-w-lg leading-relaxed">
            Pengalaman saya di bidang fashion retail membentuk kemampuan dalam sales, customer service, product knowledge, dan fashion styling.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {roles.map((role, index) => (
            <div
              key={role.company}
              className="journey-reveal card-hover bg-white rounded-2xl border border-[#C0D3F0] overflow-hidden shadow-sm"
              data-delay={String(index * 0.1 + 0.1)}
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Color accent bar */}
                <div className="lg:col-span-1 h-2 lg:h-auto" style={{ background: `linear-gradient(180deg, ${role.color}, ${role.color}88)` }} />

                {/* Content */}
                <div className="lg:col-span-11 p-7 lg:p-8">
                  <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left: Company info */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C0D3F0]" style={{ background: `${role.color}15` }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={role.color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-[#0D1B2E] leading-tight">{role.company}</h3>
                          <p className="text-xs text-[#4A6080] mt-0.5">{role.location}</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-semibold text-[#1A3A6B]">{role.title}</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: `${role.color}15`, color: role.color }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          {role.dates}
                        </div>
                      </div>
                    </div>

                    {/* Right: Bullets */}
                    <div className="lg:col-span-8">
                      <ul className="space-y-3">
                        {role.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3">
                            <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: role.color }} />
                            <p className="text-sm text-[#4A6080] leading-relaxed">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
