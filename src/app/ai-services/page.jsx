'use client'

import { useRef } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Link from 'next/link'
import CTA from '@/shared/components/cta'
import PageHero from '@/shared/components/page-hero'

export default function AIServicesPage() {
  const ctaRef = useRef(null)

  const scrollToCta = (e) => {
    e.preventDefault()
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto">
          <PageHero>
            <div className="flex justify-center mb-8">
              <span className="bg-[#121212] text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20 flex flex-col sm:flex-row sm:items-center gap-2">
                <span>Ranked 8th in CodeGame's AI Competition</span>
                <span className="hidden sm:inline">•</span>
                <span>70% Productivity Boost</span>
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-green-400">
              AI Development & Integration Services
            </h1>
            
            <div className="text-white/70 text-lg sm:text-xl space-y-4">
              <p>
                As businesses race to adopt AI technologies, having an experienced AI Developer
                is crucial for successful implementation. With over {new Date().getFullYear() - 1999} years
                of software development experience and deep specialization in artificial intelligence,
                I help companies integrate cutting-edge AI capabilities into their existing systems and workflows.
              </p>
              <p>
                From custom model development to enterprise-wide AI integration, my services are designed
                to deliver measurable business value through strategic AI implementation. I focus on
                practical solutions that drive real results while ensuring seamless adoption across your organization.
              </p>
            </div>

            <m.div 
              className="mt-8"
              key="cta-button-container"
            >
              <m.button
                onClick={scrollToCta}
                className="px-8 py-4 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Start Your AI Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </m.button>
            </m.div>
          </PageHero>

          <section className="space-y-24 px-4">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Why Your Business Needs an AI Development Specialist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {benefits.map((benefit, index) => (
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
                {services.map((service, index) => (
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
            <CTA
              context="ai-services"
              title="Don't Let Your Competition Get Ahead with AI"
            />
          </div>
        </div>
      </main>
    </LazyMotion>
  )
}

const benefits = [
  {
    title: "Strategic AI Implementation",
    description: "Get expert guidance on which AI technologies will deliver the most value for your specific business case and industry."
  },
  {
    title: "Custom Solutions",
    description: "Receive tailored AI solutions that integrate seamlessly with your existing systems and workflows."
  },
  {
    title: "Faster Time-to-Market",
    description: "Leverage proven methodologies and experience to implement AI solutions quickly and effectively."
  },
  {
    title: "Risk Mitigation",
    description: "Benefit from best practices in AI development, testing, and deployment to ensure reliable, production-ready solutions."
  }
]

const services = [
  {
    title: "Custom AI Model Development",
    description: "Tailored AI models for classification, sentiment analysis, and specific business needs. From data preparation to deployment.",
    href: "/ai-services/custom-models"
  },
  {
    title: "Voice AI Solutions",
    description: "Custom voice models, text-to-speech, and voice-enabled applications. Create natural, engaging voice interactions.",
    href: "/ai-services/voice-ai"
  },
  {
    title: "Intelligent Automation",
    description: "AI-powered automation for business processes. Streamline operations and reduce manual tasks with intelligent workflows.",
    href: "/ai-services/automation"
  }
] 