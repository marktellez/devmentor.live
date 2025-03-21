'use client'

import { useRef } from 'react'
import Link from 'next/link'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import Pill from '@/shared/components/pill'
import CTAButton from '@/shared/components/cta-button'
import Image from 'next/image'
import Testimonials from '@/shared/components/testimonials'

export default function AIServicesContent({ data }) {
  const ctaRef = useRef(null)

  const aiTestimonials = [
    {
      content: "Mark really knows his code. TDIL why implementing certain react features is preferred, and how certain design decisions are more performant. Mark is an interesting coder and skilled at teaching. I recommend him to anyone.",
      rating: 5,
      writer: {
        name: "James Anderson",
        username: "Senior Developer",
        avatar_url: "https://www.gravatar.com/avatar/99ddc63b6ba2dc16b1f1155fab137ced?d=mm"
      }
    },
    {
      content: "Ive known about Mark for a while through his React courses, I reached out to him to help me start architecting an app I am building as a side project. He was awesome! I got answers to alot of the areas of this project that I was unfamiliar with and we planned out a way to get the project going.",
      rating: 5,
      writer: {
        name: "Thomas Anderson",
        username: "Tech Lead",
        avatar_url: "https://www.gravatar.com/avatar/c87983dea3f7efa12b1600c66eeb246b?d=mm"
      }
    },
    {
      content: "Mark has a wealth of knowledge and expertise that is hard to find. Perfect mentor in many ways: clear and concise communication, reliable and a great teacher. I highly recommend working with him if you need help.",
      rating: 5,
      writer: {
        name: "Jelena Grimshaw",
        username: "AI Developer",
        avatar_url: "https://www.gravatar.com/avatar/9af53de68b1cd6f6cd3e07aea629d8b1?d=mm"
      }
    }
  ]

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero>
          <Pill color="green-500">
            {data.stats.yearsExperience}+ Years Experience • {data.stats.sessions}+ Sessions • {data.stats.rating}/5.0 Rating
          </Pill>
          
          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-green-400">
            Custom AI Development & Integration Services
          </h1>
          
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>
              In today's fast-paced business environment, custom AI development is essential for achieving a competitive edge. 
              With over {data.stats.yearsExperience} years of experience in software development and deep expertise in artificial intelligence, 
              my services deliver strategic AI implementation, custom model development, and seamless integration. 
              We specialize in voice AI, process automation, and enterprise solutions that drive measurable results.
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
              Strategic AI Implementation for Business Growth
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
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">
              Custom AI Solutions Tailored to Your Needs
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
                  <ul className="list-disc pl-6 mb-4 text-white/70 space-y-2">
                    {service.title === "Voice AI Development" && (
                      <>
                        <li>Develop custom voice models for natural, engaging user interactions</li>
                        <li>Integrate voice AI seamlessly into customer support platforms</li>
                        <li>Enhance speech recognition accuracy and response times</li>
                      </>
                    )}
                    {service.title === "Process Automation" && (
                      <>
                        <li>Streamline workflows with AI-powered automation</li>
                        <li>Reduce manual tasks and operational costs</li>
                        <li>Improve accuracy and efficiency across processes</li>
                      </>
                    )}
                  </ul>
                  <div className="text-accent group-hover:translate-x-2 transition-transform">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>

          </div>

          <section className="faq bg-white/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="faq-item">
                <h3 className="text-xl font-semibold text-white mb-3">What is custom AI development?</h3>
                <p className="text-white/70">
                  Custom AI development involves creating tailored AI models and applications designed to meet the unique needs of your business, 
                  ensuring better performance and scalability.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="text-xl font-semibold text-white mb-3">How does enterprise AI integration work?</h3>
                <p className="text-white/70">
                  Enterprise AI integration seamlessly incorporates AI capabilities into your existing systems and workflows, 
                  enhancing efficiency and driving measurable business outcomes.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="text-xl font-semibold text-white mb-3">What benefits can my business expect?</h3>
                <p className="text-white/70">
                  My AI services deliver strategic implementation, custom solutions, and intelligent automation that improve 
                  customer interactions, streamline operations, and support long-term growth.
                </p>
              </div>
            </div>
          </section>
        </section>

        <Testimonials />
       

        {/* CTA Section */}
        <section id="cta" ref={ctaRef} className="py-24">
          <CTAWrapper context="ai-services" />
        </section>
      </div>
    </main>
  )
} 