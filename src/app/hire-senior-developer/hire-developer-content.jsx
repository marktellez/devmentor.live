'use client'

import { useRef } from 'react'
import { START_YEAR } from '@/lib/config'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'

export default function HireDeveloperContent() {
  const yearsExperience = new Date().getFullYear() - START_YEAR
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero
          badge={`${yearsExperience}+ Years Experience • AI Specialist • Technical Leader`}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Hire a Senior Developer & AI Expert
          </h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>
              Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? 
              Let's discuss how I can add value to your team.
            </p>
          </div>
        </PageHero>

        <section className="space-y-24 px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <FeatureBox
                title="Technical Leadership"
                items={[
                  'Architecture design & implementation',
                  'Team mentorship & growth',
                  'Code quality & best practices',
                  'Technical decision making',
                ]}
              />
              <FeatureBox
                title="AI Expertise"
                items={[
                  'AI integration strategies',
                  'Custom AI model development',
                  'LLM implementation',
                  'AI-powered automation',
                ]}
              />
            </div>

            <div className="space-y-8">
              <FeatureBox
                title="Core Technologies"
                items={[
                  'JavaScript/TypeScript',
                  'React & Next.js',
                  'Node.js',
                  'Python for AI/ML',
                ]}
              />
              <FeatureBox
                title="Previous Clients"
                items={[
                  'PayPal',
                  'Intel',
                  'GEICO',
                  'VoxBird.ai (Current)',
                ]}
              />
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="hire-senior" />
        </div>
      </div>
    </main>
  )
}

function FeatureBox({ title, items }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <ul className="text-white/70 space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
} 