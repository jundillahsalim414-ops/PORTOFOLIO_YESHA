'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.contact-reveal');
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
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-white border border-[#C0D3F0] text-[#0D1B2E] text-sm placeholder-[#9BB5CC] focus:outline-none focus:border-[#1A3A6B] focus:ring-2 focus:ring-[#1A3A6B]/10 transition-all duration-200";

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F0FE 100%)' }}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px fashion-line opacity-60" />

      {/* Background decorative */}
      <div className="absolute top-20 right-10 float-slow opacity-6 pointer-events-none hidden xl:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="#1A3A6B" strokeWidth="0.75" fill="none"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* CTA Header */}
        <div className="contact-reveal text-center mb-16" data-delay="0">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]">Get In Touch</span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="section-headline font-serif font-bold text-[#0D1B2E] mb-4">
            Mari Ciptakan&apos;Sesuatu yang<br />
            <span className="italic font-light text-[#1A3A6B]"> Indah.</span>
          </h2>
          <p className="text-base text-[#4A6080] max-w-xl mx-auto leading-relaxed">
           Terbuka untuk kolaborasi, dan berbagai peluang kreatif di dunia fashion dan industri kreatif.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Info + Social */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact info cards */}
            <div className="contact-reveal space-y-4" data-delay="0.1">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'Yeshaiindr_@gmail.com',
                  href: 'mailto:Yeshaiindr_@gmail.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Bandung, Jawa Barat, Indonesia',
                  href: '#',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#C0D3F0] hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-300 group card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E8F0FE] flex items-center justify-center text-[#1A3A6B] group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C] transition-colors duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-[#0D1B2E]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="contact-reveal" data-delay="0.2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-5">Follow My Journey</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: 'Instagram',
                    handle: '@yeshaiindr_',
                    href: 'https://www.instagram.com/yeshaiindr_/',
                    color: '#E1306C',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'TikTok',
                    handle: '@ysh4444',
                    href: 'https://www.tiktok.com/@wintterssky?is_from_webapp=1&sender_device=pc',
                    color: '#010101',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'Email',
                    handle: 'Direct Message',
                    href: 'mailto:hello@sophialaurent.com',
                    color: '#C9A84C',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#C0D3F0] hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-300 group card-hover"
                    aria-label={`${social.name} profile`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${social.color}15`, color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0D1B2E]">{social.name}</p>
                      <p className="text-xs text-[#4A6080]">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="contact-reveal bg-white rounded-3xl p-8 lg:p-10 border border-[#C0D3F0] shadow-lg" data-delay="0.15">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0D1B2E] mb-2">Message Sent!</h3>
                  <p className="text-[#4A6080] text-sm">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-semibold text-[#0D1B2E] mb-1.5">Send a Message</h3>
                    <p className="text-sm text-[#4A6080]">I typically respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-2">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-2">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a topic...</option>
                        <option value="collaboration">Fashion Collaboration</option>
                        <option value="styling">Styling Consultation</option>
                        <option value="brand">Brand Partnership</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#4A6080] mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#1A3A6B] text-white text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[#0D1B2E] transition-colors duration-300 shadow-lg shadow-[#1A3A6B]/20 flex items-center justify-center gap-3"
                    >
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
