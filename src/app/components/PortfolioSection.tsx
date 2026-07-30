'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  category: string;
  colSpan: string;
  rowSpan?: string;
  aspectClass: string;
}

const portfolioItems: PortfolioItem[] = [
  // {
  //   id: 'editorial',
  //   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_192ff8713-1775388819801.png',
  //   alt: 'High fashion editorial shoot, model in structured avant-garde blue coat, stark white studio, dramatic shadows and elegant lighting',
  //   label: 'Editorial Direction',
  //   category: 'Campaign 2025',
  //   colSpan: 'md:col-span-1',
  //   rowSpan: 'md:row-span-2',
  //   aspectClass: 'aspect-[3/4] md:aspect-auto md:h-full min-h-[400px]'
  // },
  // {
  //   id: 'campaign',
  //   src: "https://img.rocket.new/generatedImages/rocket_gen_img_17c302469-1774133380938.png",
  //   alt: 'Luxury brand campaign imagery, woman in tailored cream suit outdoors, golden afternoon light, aspirational lifestyle photography',
  //   label: 'Brand Campaign',
  //   category: 'Luxury Collection',
  //   colSpan: 'md:col-span-1',
  //   aspectClass: 'aspect-square'
  // },
  // {
  //   id: 'runway',
  //   src: "https://img.rocket.new/generatedImages/rocket_gen_img_1088dcc1f-1778855594372.png",
  //   alt: 'Runway show backstage preparation, models in elegant blue gowns, bright dressing room, mirrors and studio lights',
  //   label: 'Runway Styling',
  //   category: 'Show Production',
  //   colSpan: 'md:col-span-1',
  //   aspectClass: 'aspect-square'
  // },
  // {
  //   id: 'retail',
  //   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e19d73e1-1772090789628.png',
  //   alt: 'Luxury fashion boutique interior, bright and airy space, curated clothing displays, minimalist white walls with blue accents',
  //   label: 'Visual Merchandising',
  //   category: 'Retail Strategy',
  //   colSpan: 'md:col-span-2',
  //   aspectClass: 'aspect-[16/7]'
  // },
  // {
  //   id: 'lookbook',
  //   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_189de613b-1772308169335.png',
  //   alt: 'Lookbook shoot outdoors, model in flowing white dress, bright natural light, clean minimalist setting with blue sky',
  //   label: 'Lookbook Art Direction',
  //   category: 'Seasonal Collection',
  //   colSpan: 'md:col-span-2',
  //   aspectClass: 'aspect-[16/7]'
  // },
  // {
  //   id: 'collaboration',
  //   src: 'https://images.unsplash.com/photo-1592233810486-f73c28198a07',
  //   alt: 'Fashion collaboration flat lay, luxury accessories arranged on marble surface, editorial product styling with gold accents',
  //   label: 'Brand Collaboration',
  //   category: 'Product Launch',
  //   colSpan: 'md:col-span-1',
  //   aspectClass: 'aspect-square'
  // }
];


export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const header = section.querySelector<HTMLElement>('.port-header');
    const items = section.querySelectorAll<HTMLElement>('.port-item');

    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(24px)';
      header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }

    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px) scale(0.98)';
      el.style.transition = `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.08}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (header) observer.observe(header);
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // return (
  //   <section id="portfolio" ref={sectionRef} className="py-20 lg:py-32 overflow-hidden blue-gradient-bg relative">
  //     {/* Top fashion line */}
  //     <div className="absolute top-0 left-0 right-0 h-px fashion-line opacity-50" />

  //     <div className="mx-auto max-w-7xl px-6">
  //       <div className="port-header mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
  //         <div>
  //           <div className="flex items-center gap-4 mb-5">
  //             <div className="h-px w-12 bg-[#C9A84C]" />
  //             {/* <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">Selected Work</span> */}
  //           </div>
  //           {/* <h2 className="section-headline font-serif font-bold text-[#0D1B2E]">
  //             Portfolio &<br />
  //             <span className="italic font-light text-[#1A3A6B]">Achievements.</span>
  //           </h2> */}
  //         </div>
  //         {/* <p className="text-sm text-[#4A6080] max-w-xs leading-relaxed">
  //           A curated selection of fashion projects, campaigns, and creative work that define my vision and style.
  //         </p> */}
  //       </div>

  //       {/* Bento Grid */}
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
  //         {portfolioItems.map((item) =>
  //         <div
  //           key={item.id}
  //           className={`port-item ${item.colSpan} ${item.rowSpan || ''} portfolio-img-wrap rounded-2xl overflow-hidden relative group cursor-pointer ${item.aspectClass} border border-white/60`}>
            
  //             <AppImage
  //             src={item.src}
  //             alt={item.alt}
  //             fill
  //             sizes="(max-width: 768px) 100vw, 33vw"
  //             className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
            

  //             {/* Blue gradient overlay on hover */}
  //             <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/80 via-[#1A3A6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  //             {/* Gold top border on hover */}
  //             <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

  //             {/* Label */}
  //             <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
  //               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C] mb-1">{item.category}</p>
  //               <p className="text-white font-semibold text-base">{item.label}</p>
  //             </div>

  //             {/* Corner icon */}
  //             <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  //               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  //                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  //               </svg>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </section>);

}