import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Impact } from '@/components/sections/Impact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth">
      <Hero data={sectionData.Hero?.variants?.CyberSecurityHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs2} />
      <Services data={sectionData.Services?.variants?.CyberSecurityServices2} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.CyberSecurityWhyChooseUs2} />
      <Projects data={sectionData.Projects?.variants?.CyberSecurityProjects2} />
      <Impact data={sectionData.Impact?.variants?.CyberSecurityImpact2} />
      <Testimonials data={sectionData.Testimonials?.variants?.CyberSecurityTestimonials2} />
      <Faq data={sectionData.Faq?.variants?.CyberSecurityFaq2} />
      <Contact data={sectionData.Contact?.variants?.CyberSecurityContact2} />
    </main>
  );
}
