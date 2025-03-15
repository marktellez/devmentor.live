'use client'

import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'
import ContentSection from '@/shared/components/content-section'
import CTA from '@/shared/components/cta'
import Stats from '@/shared/components/stats'
import LatestMusing from '@/shared/components/latest-musing'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <LatestMusing />
      <Services />
      <ContentSection />
      <CTA />
    </>
  )
} 