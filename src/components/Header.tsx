'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#work-experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#C0D3F0] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo size={34} />
          <span className="font-serif text-lg font-semibold tracking-tight text-[#0D1B2E] hidden sm:block">
            yeshaiindr_
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4A6080] hover:text-[#1A3A6B] transition-colors duration-200 relative group"
            >
              {link?.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A3A6B] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#0D1B2E] transition-colors duration-300 shadow-md shadow-[#1A3A6B]/20"
        >
          Contact Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-px w-6 bg-[#0D1B2E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block h-px w-6 bg-[#0D1B2E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#0D1B2E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif font-semibold text-[#0D1B2E] hover:text-[#1A3A6B] transition-colors"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3.5 rounded-full bg-[#1A3A6B] text-white text-sm font-semibold uppercase tracking-[0.18em] hover:bg-[#0D1B2E] transition-colors"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}