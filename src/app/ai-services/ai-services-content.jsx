'use client'

import { useRef } from 'react'
import Link from 'next/link'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import Pill from '@/shared/components/pill'
import CTAButton from '@/shared/components/cta-button'

export default function AIServicesContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="green-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-green-400">
            AI Development & Integration Services
          </h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>
              As businesses race to adopt AI technologies, having an experienced AI Developer
              is crucial for successful implementation. With over {data.stats.yearsExperience} years
              of software development experience and deep specialization in artificial intelligence,
              I help companies integrate cutting-edge AI capabilities into their existing systems and workflows.
            </p>
            <p>
              From custom model development to enterprise-wide AI integration, my services are designed
              to deliver measurable business value through strategic AI implementation. I focus on
              practical solutions that drive real results while ensuring seamless adoption across your organization.
            </p>
          </div>

          <CTAButton color="green-500">
            Start Your AI Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CTAButton>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">
              Why Your Business Needs an AI Development Specialist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-green-500/20 p-8 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a] hover:from-green-500/[0.07] hover:to-transparent transition-colors"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="prose prose-lg prose-invert">
              <p>
                Working with a specialized AI Developer ensures you're not just implementing AI,
                but doing so in a way that's strategic, efficient, and aligned with your business goals.
                From custom model development to seamless integration, my expertise helps you navigate
                the complexities of AI adoption while maximizing ROI.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">
              Comprehensive AI Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group border border-purple-500/20 p-8 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a] hover:from-purple-500/[0.07] hover:to-transparent transition-colors"
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {service.description}
                  </p>
                  <div className="text-accent group-hover:translate-x-2 transition-transform">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
            <div className="prose prose-lg prose-invert">
              <p>
                Each service is tailored to your specific needs, ensuring you get exactly the AI
                capabilities your business requires. Whether you need custom model development,
                voice AI integration, or process automation, you'll benefit from proven methodologies
                and industry best practices.
              </p>
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