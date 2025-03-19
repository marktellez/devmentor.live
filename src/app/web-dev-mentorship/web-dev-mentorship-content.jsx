'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import CTAButton from '@/shared/components/cta-button'
import Pill from '@/shared/components/pill'

export default function WebDevMentorshipContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="purple-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">Learn Modern Development & AI Integration</h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>Since 1997, I've been at the forefront of web development, evolving from basic HTML to advanced AI integration. With over {data.stats.sessions} successful mentoring sessions and a perfect {data.stats.rating} rating from {data.stats.reviews} reviews on Codementor, I help developers master both traditional and AI-powered development techniques.</p>
            
            <p>As an AI researcher and senior software engineer who placed 8th globally in AI programming competitions, I bring unique insights into combining traditional development with AI tools. I currently use AI for 90% of my development work and can teach you how to do the same, dramatically increasing your productivity and capabilities.</p>
          </div>

          <CTAButton color="purple-500">
            Start Your Journey
          </CTAButton>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive Expertise</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-white/70">
              {Object.values(data.expertise).map((item, index) => (
                <p key={index}>
                  <strong className="text-purple-400 block mb-2">{item.title}</strong>
                  {item.description}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Learning Approach</h2>
            <div className="text-white/70 text-lg space-y-4">
              <p>My mentorship combines hands-on practice with real-world projects. You'll learn to write production-quality code, make architectural decisions, and effectively communicate technical concepts. I've helped hundreds of developers advance their careers, from avoiding job loss to securing promotions and significant raises.</p>
              
              <p>We'll focus on practical skills including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modern development practices and clean code principles</li>
                <li>AI tool integration and automation workflows</li>
                <li>System design and scalable architecture</li>
                <li>Production deployment and performance optimization</li>
                <li>Technical leadership and career advancement</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Technologies & Tools</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-white/70">
              {Object.values(data.technologies).map((item, index) => (
                <p key={index}>
                  <strong className="text-purple-400 block mb-2">{item.title}</strong>
                  {item.list}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="mentorship" />
        </div>
      </div>
    </main>
  )
} 