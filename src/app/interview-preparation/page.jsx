'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import Image from 'next/image'
import { sharedData } from '@/lib/data'

// Remove the metadata export from this client component
// The metadata should be defined in the layout.jsx file instead

export default function InterviewPreparation() {
  const ctaRef = useRef(null)

  const scrollToCta = (e) => {
    e.preventDefault()
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Turn Interview Anxiety into Confidence
          </h1>

          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>
              Stop wondering if you're prepared enough. Get expert guidance to help you ace technical interviews at top tech companies.
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={scrollToCta}
              className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold shadow-lg"
            >
              Prepare for Success
            </button>
          </div>
        </PageHero>

        <section className="space-y-24 px-4">
          <div>
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-purple-400/40">
                  <path d="M12 20.5H6V15.5C6 10.8333 8.16667 7.5 12.5 5.5L14.5 8.5C11.8333 10.1667 10.3333 12.1667 10 14.5H12V20.5ZM26 20.5H20V15.5C20 10.8333 22.1667 7.5 26.5 5.5L28.5 8.5C25.8333 10.1667 24.3333 12.1667 24 14.5H26V20.5Z" fill="currentColor" />
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="w-32 h-32 shrink-0">
                  <Image
                    src="https://uploads-ssl.webflow.com/5fd95c1bf859c7d008ff93f4/62e32587bb39a11f0fa8fd71_chris.jpeg"
                    alt="Chris Loggins"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full border-2 border-purple-400/30"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6">
                    "Before I met Mark I had trouble feeling comfortable speaking in an interview. I couldn't articulate my thoughts about what I knew. I knew I could do programming as I had small client projects completed, but whiteboarding and discussing techniques was hard. After several sessions with Mark my results started to improve and I started getting offers!"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">Chris Loggins</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Your Path to Excellence
            </h2>
            <p className="text-white/70 text-lg text-center mb-12">
              A proven approach to leveling up your development career through personalized mentorship.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Technical Excellence
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Master modern development practices, clean code principles, and architectural patterns that set top developers apart.
                </p>
              </div>

              <div className="border border-teal-500/20 p-8 rounded-lg bg-white/[0.02]">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">
                  Career Strategy
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Learn to communicate your value, navigate workplace dynamics, and position yourself for promotions and raises.
                </p>
              </div>

              <div className="border border-green-500/20 p-8 rounded-lg bg-white/[0.02]">
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  Modern Stack Mastery
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Stay ahead with expertise in React, Node.js, and modern development tools. Build production-ready applications that impress.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Complete Interview Mastery
            </h2>
            <p className="text-white/70 text-lg text-center mb-12">
              Master every aspect of the technical interview process with personalized guidance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technical Interview Excellence
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Master data structures, algorithms, and problem-solving strategies. Learn not just the solutions, but the thought process that impresses interviewers.
                </p>
              </div>
              <div className="border border-white/10 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">
                  System Design Mastery
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Learn to design scalable systems that handle millions of users. Practice with real-world scenarios from actual interviews.
                </p>
              </div>
              <div className="border border-white/10 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Behavioral Interview Strategy
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Craft compelling stories that showcase your impact. Learn the STAR method and how to structure responses that highlight your leadership.
                </p>
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