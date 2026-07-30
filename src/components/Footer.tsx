import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-[#C0D3F0] py-14 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <AppLogo size={30} />
            <span className="font-serif text-base font-semibold tracking-tight text-[#0D1B2E]">
              yeshaiindr_
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs text-[#4A6080] tracking-[0.2em] uppercase text-center">
            Fashion Enthusiast · Creative Woman · Passionate About Style
          </p>

          {/* Gold divider */}
          <div className="w-24 h-px fashion-line opacity-60" />

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-full border border-[#C0D3F0] flex items-center justify-center text-[#4A6080] hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-[#C0D3F0] flex items-center justify-center text-[#4A6080] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@wintterssky?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Profile"
              className="w-10 h-10 rounded-full border border-[#C0D3F0] flex items-center justify-center text-[#4A6080] hover:text-[#010101] hover:border-[#010101]/20 hover:bg-[#010101]/5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@sophialaurent.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full border border-[#C0D3F0] flex items-center justify-center text-[#4A6080] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>

          <p className="text-xs text-[#9BB5CC] tracking-[0.12em] uppercase">
            © 2026 YESHA INDRIANI KURNIAWATI · KARYA YANG DIBANGUN DENGAN PASSION
          </p>
        </div>
      </div>
    </footer>
  );
}