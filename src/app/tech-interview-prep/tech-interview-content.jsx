'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import ScrollButton from '@/shared/components/scroll-button'

export default function TechInterviewContent({ data }) {
  const ctaRef = useRef(null)

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {data.stats.successRate}% Success Rate • Ranked {data.stats.aiRank}th in CodeGame's AI Competition • {data.stats.productivityBoost}% Productivity Boost
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Master Technical Interviews: AI & Traditional Development
          </h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>Comprehensive interview preparation for both traditional development roles and emerging AI positions. Learn from someone who's been on both sides of the interview table.</p>
            
            <p>With {data.stats.yearsExperience}+ years of experience and a {data.stats.successRate}% success rate in helping candidates land their dream roles, I provide personalized guidance that combines traditional technical interview skills with cutting-edge AI development knowledge.</p>
          </div>

          <ScrollButton className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold">
            Start Your Preparation
          </ScrollButton>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Interview Topics</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Traditional Tech Interviews</h3>
                <ul className="text-white/70 space-y-3">
                  {data.traditionalTopics.map((topic, index) => (
                    <li key={index}>• {topic}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">AI Development Interviews</h3>
                <ul className="text-white/70 space-y-3">
                  {data.aiTopics.map((topic, index) => (
                    <li key={index}>• {topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="interview-prep" />
        </div>
      </div>
    </main>
  )
} 