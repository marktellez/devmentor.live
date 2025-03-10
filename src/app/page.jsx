"use client"

import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'
import ContentSection from '@/shared/components/content-section'
import CTA from '@/shared/components/cta'
import Stats from '@/shared/components/stats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ContentSection />
      <CTA />
    </>
  )
} 