'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import Pill from '@/shared/components/pill'

export default function CustomModelsContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="purple-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Custom AI Model Development
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Tailored AI models designed for your specific business needs and use cases
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              From data preparation to deployment, we develop custom AI models that solve
              your unique business challenges. Whether you need classification, prediction,
              or specialized AI capabilities, my expertise ensures you get precise,
              production-ready solutions.
            </p>
          </div>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Custom AI Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              My Development Process
            </h2>
            <div className="space-y-8">
              {data.process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                  </div>
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