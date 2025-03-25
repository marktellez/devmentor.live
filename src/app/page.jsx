import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'
import ContentSection from '@/shared/components/content-section'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import Stats from '@/shared/components/stats'
import LatestMusing from '@/shared/components/latest-musing'
import AIAdvantage from '@/shared/components/ai-advantage'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "React & TypeScript Mentorship | ChatGPT & Next.js Expert | JavaScript Coach",
  description: `Learn React, TypeScript, and Next.js from an expert developer. Master ChatGPT integration and Cursor AI tools with hands-on JavaScript mentorship. ${sharedData.stats.yearsExperience}+ years experience in modern web development.`,
  keywords: "dev mentors, mentor dev, devs-mentoring, web development mentor, javascript mentor, nextjs mentor, reactjs mentor, web development tutor, javascript tutor, nextjs tutor, reactjs tutor, hire web developer, hire sr developer, hire fullstack engineer, hire fullstack developer, typescript mentor, typescript tutor, nodejs mentor, nodejs tutor, ai development mentor, ai development tutor, hire react developer, hire nextjs developer, hire typescript developer, hire javascript developer, hire senior developer, hire senior engineer, hire senior fullstack developer, hire senior fullstack engineer, hire senior web developer, hire senior javascript developer, hire senior react developer, hire senior nextjs developer, hire senior typescript developer, hire senior nodejs developer, hire senior ai developer",
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