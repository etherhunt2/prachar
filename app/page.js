import React from 'react'
import HeroSection from '@/components/sections/hero-section'
import PhilosophySection from '@/components/sections/philosophy-section'
import ServicesSection from '@/components/sections/services-section'
import TeamSection from '@/components/sections/team-section'
import StatsSection from '@/components/sections/stats-section'
import ImageGallery from '@/components/sections/my-testimonial'
import PortfolioGallery from '@/components/sections/portfolio'

export default function HomePage() {
  return (
    <div className="landing-page">
      <section id="top-sections" className="relative z-10">
        <HeroSection />
        <StatsSection />
      </section>

      <section id="main-content" className="relative z-20 mt-16">
        <div className="container mx-auto px-4">
          <PhilosophySection />
          <div className="py-16"></div>
          <ServicesSection />
        </div>
      </section>

      <section id="testimonials-team" className="relative z-20 bg-black py-16">
        <div className="container mx-auto px-4">
          <TeamSection />
          <div className="py-16"></div>
          <ImageGallery />
          <div className="py-16"></div>
          <PortfolioGallery />
        </div>
      </section>
    </div>
  )
}