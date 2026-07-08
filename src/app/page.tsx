import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProfessionalJourneySection from '@/app/components/ProfessionalJourneySection';
import PortfolioSection from '@/app/components/PortfolioSection';
import PersonalGallery from '@/app/components/PersonalGallery';
import SkillsSection from '@/app/components/SkillsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProfessionalJourneySection />
      <PortfolioSection />
      <PersonalGallery />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}