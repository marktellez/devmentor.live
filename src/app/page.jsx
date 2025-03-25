import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'
import ContentSection from '@/shared/components/content-section'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import Stats from '@/shared/components/stats'
import LatestMusing from '@/shared/components/latest-musing'
import AIAdvantage from '@/shared/components/ai-advantage'
import ResumeDownloads from '@/shared/components/resume-downloads'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "React & TypeScript Mentorship | ChatGPT & Next.js Expert | JavaScript Coach",
  description: `Learn React, TypeScript, and Next.js from an expert developer. Master ChatGPT integration and Cursor AI tools with hands-on JavaScript mentorship. ${sharedData.stats.yearsExperience}+ years experience in modern web development.`,
  path: '/'
})

export default function HomePage() {
  return (
    <main itemScope itemType="https://schema.org/ProfessionalService">
      <Hero />

      <Stats data={sharedData.stats} />


      <AIAdvantage />
      <LatestMusing data={sharedData.latestMusing} />
      <Services />
      <ContentSection />

      <CTAWrapper context="home" />
    </main>
  )
} 