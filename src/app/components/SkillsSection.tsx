'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Customer Service',
    level: 95,
    icon: '✦',
    description: 'Memberikan pelayanan yang ramah, responsif, dan berorientasi pada kebutuhan customer.',
    color: '#C9A84C',
  },
  {
    name: 'Fashion Sales',
    level: 92,
    icon: '◆',
    description: 'Mendukung proses penjualan melalui product knowledge dan komunikasi yang persuasif.',
    color: '#1A3A6B',
  },
  {
    name: 'Product Knowledge',
    level: 88,
    icon: '●',
    description: 'Memahami bahan, warna, ukuran, model, dan karakteristik produk fashion.',
    color: '#4A6080',
  },
  {
    name: 'Kerja Sama Tim',
    level: 90,
    icon: '▲',
    description: 'Berkolaborasi untuk mewujudkan tujuan dan ide bersama.',
    color: '#C9A84C',
  },
  {
    name: 'Fashion Styling',
    level: 82,
    icon: '◇',
    description: 'Membantu customer menemukan pilihan produk yang sesuai dengan style dan kebutuhan mereka.',
    color: '#1A3A6B',
  },
  {
    name: 'Communication',
    level: 85,
    icon: '○',
    description: 'Berkomunikasi dengan jelas dan profesional dengan customer maupun tim.',
    color: '#4A6080',
  },
  {
    name: 'Customer Handling',
    level: 90,
    icon: '○',
    description: 'Menangani pertanyaan, kebutuhan, dan keluhan customer secara solutif.',
    color: '#4A6080',
  },
];

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 border"
            style={{ background: `${skill.color}15`, borderColor: `${skill.color}30`, color: skill.color }}
          >
            {skill.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0D1B2E]">{skill.name}</p>
            <p className="text-xs text-[#4A6080] leading-tight">{skill.description}</p>
          </div>
        </div>
        <span className="text-sm font-bold font-serif" style={{ color: skill.color }}>{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-[#E8F0FE] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill progress-glow"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: animate ? `0 0 10px ${skill.color}50` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.skills-reveal');
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)';
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
            if (!animate) {
              setTimeout(() => setAnimate(true), 300);
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden blue-gradient-section">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px fashion-line opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px fashion-line opacity-50" />

      {/* Fashion sketch decoration */}
      <div className="absolute right-8 bottom-20 opacity-5 pointer-events-none hidden xl:block">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          <circle cx="80" cy="80" r="70" stroke="#1A3A6B" strokeWidth="1"/>
          <circle cx="80" cy="80" r="50" stroke="#C9A84C" strokeWidth="0.75"/>
          <circle cx="80" cy="80" r="30" stroke="#1A3A6B" strokeWidth="0.5"/>
          <line x1="80" y1="10" x2="80" y2="150" stroke="#C9A84C" strokeWidth="0.5"/>
          <line x1="10" y1="80" x2="150" y2="80" stroke="#C9A84C" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="skills-reveal mb-16" data-delay="0">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">Expertise</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="section-headline font-serif font-bold text-[#0D1B2E]">
              Skills &<br />
              <span className="italic font-light text-[#1A3A6B]">Capabilities.</span>
            </h2>
            <p className="text-sm text-[#4A6080] max-w-xs leading-relaxed">
              A combination of sales expertise, product knowledge, and customer-focused service developed through experience in fashion retail.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Skills bars */}
          <div className="skills-reveal space-y-7" data-delay="0.1">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} animate={animate} />
            ))}
          </div>

          {/* Right: Highlights */}
          <div className="skills-reveal space-y-6" data-delay="0.2">
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✦', title: 'Product Recommendation', desc: 'Memberikan rekomendasi produk berdasarkan kebutuhan, preferensi, dan karakter customer.' },
                { icon: '◆', title: 'Upselling & Cross-Selling', desc: 'Mengenali peluang untuk menawarkan produk tambahan yang relevan dengan kebutuhan customer.' },
                { icon: '●', title: 'Fashion Trend Awareness', desc: 'Mengikuti perkembangan tren fashion untuk meningkatkan product knowledge.' },
                { icon: '▲', title: 'Cashier Operations', desc: 'Menangani transaksi pembayaran dan proses kasir secara teliti dan akurat.' },
                { icon: '✦', title: 'Teamwork', desc: 'Berkolaborasi dengan tim untuk mendukung kelancaran operasional dan pencapaian target.' },
                { icon: '●', title: 'Time Management', desc: 'Mengatur prioritas pekerjaan dan menyelesaikan tugas sesuai target.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-hover bg-white rounded-2xl p-5 border border-[#C0D3F0] shadow-sm"
                >
                  <span className="text-[#C9A84C] text-lg block mb-3">{item.icon}</span>
                  <h4 className="text-sm font-semibold text-[#0D1B2E] mb-1.5">{item.title}</h4>
                  <p className="text-xs text-[#4A6080] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Languages / Tools */}
            <div className="bg-white rounded-2xl p-6 border border-[#C0D3F0] shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-5">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2.5">
                {['Instagram', 'TikTok',].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full bg-[#E8F0FE] text-xs font-medium text-[#1A3A6B] border border-[#C0D3F0] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 border border-[#C0D3F0] shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-5">Languages</h4>
              <div className="space-y-3">
                {[
                  { lang: 'Indonesia', level: 'Native', pct: 100 },
                   { lang: 'Inggris', level: 'Native', pct: 50 },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[#0D1B2E] w-24">{l.lang}</span>
                    <div className="flex-1 h-1.5 bg-[#E8F0FE] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full skill-bar-fill"
                        style={{
                          width: animate ? `${l.pct}%` : '0%',
                          background: 'linear-gradient(90deg, #C9A84C88, #C9A84C)',
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#4A6080] w-24 text-right">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
