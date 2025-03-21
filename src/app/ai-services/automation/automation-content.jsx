'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import CTAButton from '@/shared/components/cta-button'
import Pill from '@/shared/components/pill'

export default function AutomationContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="purple-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">AI-Powered Process Automation</h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>Transform your business operations with intelligent automation that thinks, learns, and adapts. My AI-powered solutions reduce manual tasks, eliminate errors, and help you operate more efficiently.</p>
            
            <p>With over {data.stats.yearsExperience} years of experience in AI and automation, we've helped hundreds of businesses streamline their operations and achieve remarkable efficiency gains.</p>
          </div>

          <CTAButton color="purple-500">
            Start Automating
          </CTAButton>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Types of Automation</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {data.automationTypes.map((type, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-white">{type.title}</h3>
                  <p className="text-white/70 mb-4">{type.description}</p>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    {type.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">My Process</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {data.process.map((step, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="automation" />
        </div>
      </div>
    </main>
  )
} 