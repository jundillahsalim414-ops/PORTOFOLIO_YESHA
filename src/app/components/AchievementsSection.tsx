'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  colSpan: string;
  rowSpan?: string;
  accentColor: string;
}

const stats: Stat[] = [
  {
    id: 'revenue',
    value: 4.2,
    suffix: 'M+',
    prefix: '$',
    label: 'Revenue Generated',
    description: 'Total attributed sales revenue across 12 years of fashion brand partnerships',
    colSpan: 'md:col-span-2',
    accentColor: 'text-foreground',
  },
  {
    id: 'retention',
    value: 94,
    suffix: '%',
    label: 'Client Retention Rate',
    description: 'Clients who renew contracts after the first engagement cycle',
    colSpan: 'md:col-span-1',
    accentColor: 'text-foreground',
  },
  {
    id: 'conversion',
    value: 3.8,
    suffix: 'x',
    label: 'Avg. Conversion Lift',
    description: 'Average improvement in store and campaign conversion rates post-strategy',
    colSpan: 'md:col-span-1',
    accentColor: 'text-foreground',
  },
  {
    id: 'brands',
    value: 40,
    suffix: '+',
    label: 'Brands Partnered',
    description: 'Global fashion labels from emerging designers to heritage maisons',
    colSpan: 'md:col-span-2',
    accentColor: 'text-foreground',
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCurrent(isDecimal ? Math.round(val * 10) / 10 : Math.round(val));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return current;
}

function StatCard({ stat }: { stat: Stat }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue =
    stat.value % 1 !== 0 ? count.toFixed(1) : count.toString();

  return (
    <div
      ref={ref}
      className={`${stat.colSpan} bg-card border border-border rounded-2xl p-8 flex flex-col justify-between gap-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {stat.label}
        </p>
        <div className="w-2 h-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      <div>
        <p className={`stat-number font-serif font-bold ${stat.accentColor}`}>
          {stat.prefix || ''}{displayValue}{stat.suffix}
        </p>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector<HTMLElement>('.ach-header');
    if (!header) return;
    header.style.opacity = '0';
    header.style.transform = 'translateY(24px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="ach-header mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-foreground opacity-70">
                By The Numbers
              </span>
            </div>
            <h2 className="section-headline font-serif font-bold text-foreground">
              Performance That<br />
              <span className="italic font-light text-muted-foreground">Speaks Volumes.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Every number tells a story of strategy, creativity, and relentless pursuit of results.
          </p>
        </div>

        {/* Bento Grid — Audit: 4 cards, 3-col grid
            Row 1: [col-1+2: revenue cs-2] [col-3: retention cs-1]
            Row 2: [col-1: conversion cs-1] [col-2+3: brands cs-2]
            Placed 4/4 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Award strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '✦', label: 'Top Fashion Consultant', org: 'Vogue Business 2025' },
            { icon: '◆', label: 'Sales Excellence Award', org: 'Luxury Retail Summit' },
            { icon: '●', label: 'Best Brand Campaign', org: 'LVMH Partner Awards' },
            { icon: '▲', label: 'Rising Leader in Fashion', org: 'Forbes 30 Under 40' },
          ].map((award) => (
            <div
              key={award.label}
              className="bg-card border border-border rounded-xl p-5 flex flex-col gap-2 hover:border-accent/50 transition-colors duration-200"
            >
              <span className="text-accent text-lg">{award.icon}</span>
              <p className="text-xs font-semibold text-foreground leading-tight">{award.label}</p>
              <p className="text-xs text-muted-foreground">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}