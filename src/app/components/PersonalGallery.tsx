'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span?: string;
}

const photos: GalleryPhoto[] = [
// {
//   id: 'g1',
//   src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f516a029-1773925537596.png",
//   alt: 'Sophia in an elegant blue evening gown at a fashion gala, soft candlelight, sophisticated and glamorous atmosphere',
//   caption: 'Fashion Gala 2024',
//   span: 'row-span-2'
// },
// {
//   id: 'g2',
//   src: "https://img.rocket.new/generatedImages/rocket_gen_img_16c1968a6-1778941788772.png",
//   alt: 'Editorial fashion shoot outdoors, model in structured blazer, natural daylight, clean background with blue sky',
//   caption: 'Spring Editorial'
// },
// {
//   id: 'g3',
//   src: "https://img.rocket.new/generatedImages/rocket_gen_img_1107d0123-1780292799264.png",
//   alt: 'Fashion professional in white studio setting, confident pose, minimalist aesthetic with soft blue lighting',
//   caption: 'Studio Session'
// },
// {
//   id: 'g4',
//   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ddf3a5c9-1774971263581.png',
//   alt: 'Woman browsing luxury fashion boutique, bright airy store interior, elegant clothing racks with blue and white pieces',
//   caption: 'Boutique Visit',
//   span: 'col-span-2'
// },
// {
//   id: 'g5',
//   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f58df22f-1772474175127.png',
//   alt: 'Luxury brand campaign imagery, woman in tailored cream suit outdoors, golden afternoon light, aspirational lifestyle',
//   caption: 'Campaign Shoot'
// },
// {
//   id: 'g6',
//   src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b62066cc-1765697988708.png',
//   alt: 'Backstage at a runway show, elegant preparation, models in beautiful gowns, bright dressing room atmosphere',
//   caption: 'Backstage Moments'
// }
];


export default function PersonalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : null);
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % photos.length : null);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [lightboxIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.gallery-reveal');
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'scale(0.95) translateY(16px)';
      el.style.transition = `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.07}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.07}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'scale(1) translateY(0)';
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
    <>
      {/* <section id="gallery" ref={sectionRef} className="py-20 lg:py-32 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #F0F6FF 0%, #FFFFFF 100%)' }}> */}
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 right-0 h-px fashion-line opacity-50" /> */}

        {/* <div className="mx-auto max-w-7xl px-6"> */}
          {/* Header */}
          {/* <div className="gallery-reveal mb-14"> */}
            {/* <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">Personal Gallery</span>
            </div>
            {/* <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="section-headline font-serif font-bold text-[#0D1B2E]">
                Moments &<br />
                <span className="italic font-light text-[#1A3A6B]">Memories.</span>
              </h2>
              <p className="text-sm text-[#4A6080] max-w-xs leading-relaxed">
                A glimpse into my world — behind the scenes, on set, and in the moments that inspire my work.
              </p>
            </div> */}
          {/* </div>  */}

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {photos.map((photo, index) =>
            <div
              key={photo.id}
              className={`gallery-reveal portfolio-img-wrap rounded-2xl overflow-hidden relative group cursor-pointer border border-white/80 shadow-sm ${photo.span || ''}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.caption}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}>
              
                <AppImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/70 via-[#1A3A6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

                {/* Gold shimmer border on hover */}
                {/* <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/40 transition-all duration-500 pointer-events-none" /> */}

                {/* Caption */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-semibold">{photo.caption}</p>
                </div> */}

                {/* Expand icon */}
                {/* <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div> */}
              </div>
            )}
          </div>
        {/* </div> */}
      {/* </section> */}

      {/* Lightbox */}
      {lightboxIndex !== null &&
      <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
            onClick={closeLightbox}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
            aria-label="Close lightbox">
            
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C9A84C]/30">
              <AppImage
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-cover" />
            
              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1B2E]/80 to-transparent p-6">
                <p className="text-white font-semibold">{photos[lightboxIndex].caption}</p>
                <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {photos.length}</p>
              </div>
            </div>

            {/* Navigation */}
            <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Previous photo">
            
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Next photo">
            
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      }
    </>);

}