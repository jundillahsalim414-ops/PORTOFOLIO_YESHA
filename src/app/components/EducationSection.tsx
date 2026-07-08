'use client';
import React, { useEffect, useRef } from 'react';

interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
  description: string;
  highlights: string[];
}

const education: EducationEntry[] = [
  {
    institution: 'London College of Fashion — University of the Arts London',
    degree: 'BA (Hons) Fashion Management',
    year: 'Graduated 2013',
    description:
      'A rigorous programme at the intersection of creative direction and commercial strategy, encompassing luxury brand management, consumer behaviour, retail analytics, and global fashion marketing — providing the academic bedrock for a career defined by both aesthetic sensibility and data-driven performance.',
    highlights: ['First Class Honours', 'Dissertation: Luxury Brand Perception in the Digital Age', 'UAL Dean\'s List — Academic Excellence Award'],
  },
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.edu-reveal');
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition =
        'opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)';
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
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="edu-reveal mb-16" data-delay="0">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-foreground opacity-70">
              Education
            </span>
          </div>
          <h2 className="section-headline font-serif font-bold text-foreground">
            Academic<br />
            <span className="italic font-light text-muted-foreground">Foundation.</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8">
          {education.map((entry, index) => (
            <div
              key={entry.institution}
              className="edu-reveal"
              data-delay={String(index * 0.1 + 0.1)}
            >
              <div className="border border-border rounded-2xl p-8 lg:p-10 hover:border-accent transition-colors duration-300 bg-white/40">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Left: Institution & Degree */}
                  <div className="lg:col-span-4 flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground opacity-60">
                      {entry.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground leading-snug">
                      {entry.degree}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">
                      {entry.institution}
                    </p>
                  </div>

                  {/* Right: Description & Highlights */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {entry.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-4 py-2 rounded-full border border-border text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground bg-background/60"
                        >
                          {highlight}
                        </span>
                      ))}
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
