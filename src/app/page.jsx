import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'
import ContentSection from '@/shared/components/content-section'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import Stats from '@/shared/components/stats'
import LatestMusing from '@/shared/components/latest-musing'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "Web Development & AI Mentorship | Expert Guidance",
  description: `Transform your development career with expert mentorship in modern web development and AI integration. Learn from a senior developer with ${sharedData.stats.yearsExperience}+ years experience.`,
  path: '/'
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats data={sharedData.stats} />
      <LatestMusing data={sharedData.latestMusing} />
      <Services />
      <ContentSection />
      <CTAWrapper context="home" />
    </>
  )
} 