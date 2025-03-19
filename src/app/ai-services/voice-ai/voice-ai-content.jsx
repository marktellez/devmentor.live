'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import Pill from '@/shared/components/pill'

export default function VoiceAIContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="purple-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Voice AI Development & Integration
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Create natural, engaging voice experiences with custom voice models and seamless AI integration
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              From custom voice models to intelligent voice agents, we help businesses
              create natural and engaging voice experiences. Whether you need a unique
              brand voice or a complete voice-enabled application, our expertise in
              voice AI technology ensures exceptional results.
            </p>
          </div>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Voice AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-white/70">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Voice AI Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-white/70">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="ai-services" />
        </div>
      </div>
    </main>
  )
} 