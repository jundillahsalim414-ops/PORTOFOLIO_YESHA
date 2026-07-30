'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const timelineItems = [
{
  year: '2022 – 2026',
  title: 'Fashion Sales & Retail',
  description: 'Telah berkarier selama 5 tahun di perusahaan yang sama, berkontribusi dalam pengembangan produk, strategi bisnis, dan pertumbuhan brand fashion di Indonesia.',
  icon: '✦'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.about-reveal');
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94)';
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
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 overflow-hidden blue-gradient-section relative">
      {/* Fashion decorative: runway lines */}
      <div className="absolute top-0 left-0 right-0 h-px fashion-line opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px fashion-line opacity-60" />

      {/* Floating sketch element */}
      <div className="absolute right-4 top-20 opacity-5 pointer-events-none hidden xl:block">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" aria-hidden="true">
          <path d="M100 20 C100 20 140 60 140 100 C140 160 100 200 100 200 C100 200 60 160 60 100 C60 60 100 20 100 20Z" stroke="#1A3A6B" strokeWidth="1.5" fill="none" />
          <path d="M100 50 L100 250" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="4 6" />
          <circle cx="100" cy="100" r="30" stroke="#1A3A6B" strokeWidth="1" fill="none" />
          <path d="M70 200 L130 200 L120 280 L80 280 Z" stroke="#1A3A6B" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="about-reveal mb-16" data-delay="0">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">About Me</span>
          </div>
          <h2 className="section-headline font-serif font-bold text-[#0D1B2E]">
            A Story Woven in<br />
            <span className="italic font-light text-[#1A3A6B]">Style & Customer Experience.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Image + quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="about-reveal" data-delay="0.1">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-[#1A3A6B]/15 border border-white/80">
                <AppImage
                  src="assets/images/about-me.jpg"
                  alt="Elegant woman in a chic blue fashion ensemble, browsing a luxury boutique, soft natural light, feminine and stylish atmosphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/50 via-transparent to-transparent" />
                {/* Gold corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C9A84C]/60 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C9A84C]/60 rounded-bl-xl" />
              </div>
            </div>

            {/* Quote card */}
            <div className="about-reveal bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C9A84C]/25 shadow-lg" data-delay="0.2">
              <div className="text-3xl text-[#C9A84C] font-serif leading-none mb-3">&ldquo;</div>
              <p className="font-serif text-base font-light text-[#0D1B2E] leading-relaxed italic">
                Great fashion sales is not just about selling a product — it's about helping&apos; customers find a style that feels right for them..
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#C9A84C]/30" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">yeshaiindr_</span>
              </div>
            </div>
          </div>

          {/* Right: Bio + Timeline */}
          <div className="lg:col-span-7 space-y-10">
            {/* Bio */}
            <div className="about-reveal space-y-5" data-delay="0.15">
              <p className="text-base text-[#4A6080] leading-relaxed">
               Hallo Perkenalkan Saya <strong> Yesha indriani kurniawati</strong> — saya seorang Fashion Sales dengan pengalaman di bidang fashion retail. Saya memiliki ketertarikan pada fashion, styling, dan bagaimana sebuah produk dapat membantu customer merasa lebih percaya diri dengan pilihan mereka.
              </p>
              <p className="text-base text-[#4A6080] leading-relaxed">
                Selama bekerja di bidang fashion retail, saya terbiasa melayani customer, memahami kebutuhan dan preferensi mereka, memberikan rekomendasi produk, serta menjelaskan detail seperti bahan, warna, ukuran, model, dan karakteristik produk.
              </p>
              <p className="text-base text-[#4A6080] leading-relaxed">
                Saya percaya bahwa pengalaman berbelanja bukan hanya tentang menjual produk, tetapi juga tentang membangun kepercayaan, memberikan pelayanan yang baik, dan membantu customer menemukan pilihan yang tepat.
                Dengan pemahaman terhadap fashion trends, product knowledge, dan customer service, saya terus mengembangkan kemampuan untuk memberikan pengalaman berbelanja yang profesional, personal, dan menyenangkan.
              </p>
            </div>

            {/* Personality tags */}
            <div className="about-reveal flex flex-wrap gap-3" data-delay="0.25">
              {['CUSTOMER-FOCUSED', 'FASHION SALES', 'PRODUCT KNOWLEDGE', 'FASHION STYLING', 'COMMUNICATIVE', 'DETAIL-ORIENTED'].map((tag) =>
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-[#C0D3F0] bg-white/70 text-xs font-semibold uppercase tracking-[0.15em] text-[#4A6080] hover:border-[#C9A84C] hover:text-[#0D1B2E] transition-colors duration-200">
                
                  {tag}
                </span>
              )}
            </div>

            {/* Timeline */}
            <div className="about-reveal" data-delay="0.3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-8">My Journey</h3>
              <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px timeline-line opacity-40" />

                <div className="space-y-8">
                  {timelineItems.map((item, i) =>
                  <div key={item.year} className="relative flex gap-6 group" style={{ animationDelay: `${i * 0.1}s` }}>
                      {/* Dot */}
                      <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-[#C9A84C]/50 flex items-center justify-center shadow-md group-hover:border-[#C9A84C] group-hover:shadow-[#C9A84C]/20 group-hover:shadow-lg transition-all duration-300 z-10">
                        <span className="text-[#C9A84C] text-xs">{item.icon}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2 group-hover:translate-x-1 transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-[0.2em]">{item.year}</span>
                        </div>
                        <h4 className="font-serif text-base font-semibold text-[#0D1B2E] mb-1.5">{item.title}</h4>
                        <p className="text-sm text-[#4A6080] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}