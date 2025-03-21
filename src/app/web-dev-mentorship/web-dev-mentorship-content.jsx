'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import CTAButton from '@/shared/components/cta-button'
import Pill from '@/shared/components/pill'
import Testimonials from '@/shared/components/testimonials'

export default function WebDevMentorshipContent({ data }) {
  const ctaRef = useRef(null)

  const scrollToContact = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <PageHero>
          <Pill color="purple-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Projects • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">{data.intro.title}</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-400">{data.intro.subtitle}</h2>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            {data.intro.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <CTAButton color="purple-500" onClick={scrollToContact}>
            {data.cta.primary}
          </CTAButton>
        </PageHero>

        <section className="space-y-24 px-4">
          {/* Expertise Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Expert Technical Leadership & AI Solutions</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-white/70">
              {Object.values(data.expertise).map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-purple-400 text-xl mb-3">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">{data.achievements.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.achievements.items.map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-purple-400 text-xl mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Technologies & Tools</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {Object.values(data.technologies).map((tech, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-purple-400 text-xl mb-3">{tech.title}</h3>
                  <p className="text-white/70">{tech.list}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">{data.process.title}</h2>
            <div className="grid gap-6">
              {data.process.steps.map((step, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400/20 flex-shrink-0 flex items-center justify-center border border-purple-400/30">
                    <span className="text-purple-400 font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Testimonials />

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">{data.faq.title}</h2>
            <div className="space-y-6">
              {data.faq.questions.map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-white/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6 text-white">{data.cta.consultation.title}</h2>
            <p className="text-white/70 text-lg mb-8">{data.cta.consultation.description}</p>
            <CTAButton color="purple-500" onClick={scrollToContact}>
              {data.cta.primary}
            </CTAButton>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="hire" />
        </div>
      </div>
    </main>
  )
} 