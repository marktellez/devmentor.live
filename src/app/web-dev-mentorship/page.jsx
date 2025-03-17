'use client'

import { useRef } from 'react'
import { motion, LazyMotion, domAnimation, m } from 'framer-motion'
import CTA from '@/shared/components/cta'

export default function WebDevMentorship() {
  const ctaRef = useRef(null)

  const scrollToCta = (e) => {
    e.preventDefault()
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen pt-32" suppressHydrationWarning>
        <section className="pb-16 px-4">
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
            suppressHydrationWarning
          >
            <header className="text-center mb-24">
              <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                26+ Years Experience • 1000+ Sessions • 5.0/5.0 Rating
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">Learn Modern Development & AI Integration</h1>
              
              <div className="text-white/70 text-lg sm:text-xl space-y-4">
                <p>Since 1997, I've been at the forefront of web development, evolving from basic HTML to advanced AI integration. With over 1,000 successful mentoring sessions and a perfect 5.0 rating from 454 reviews on Codementor, I help developers master both traditional and AI-powered development techniques.</p>
                
                <p>As an AI researcher and senior software engineer who placed 8th globally in AI programming competitions, I bring unique insights into combining traditional development with AI tools. I currently use AI for 90% of my development work and can teach you how to do the same, dramatically increasing your productivity and capabilities.</p>
              </div>

              <m.div 
                className="mt-8"
                key="cta-button-container"
                suppressHydrationWarning
              >
                <m.button
                  onClick={scrollToCta}
                  className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </m.button>
              </m.div>
            </header>

            <section className="space-y-24">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive Expertise</h2>
                <div className="grid sm:grid-cols-2 gap-8 text-white/70">
                  <p><strong className="text-purple-400 block mb-2">Modern Web Development</strong>
                  Expert in JavaScript (26 years), TypeScript, React (since fax.js), Next.js, Node.js, and modern frameworks. Specializing in functional programming patterns and clean, maintainable code architecture.</p>
                  
                  <p><strong className="text-purple-400 block mb-2">AI & Machine Learning</strong>
                  Extensive experience in AI integration, machine learning, and genetic algorithms. Build intelligent systems including chatbots, RAG systems, and voice applications. Expert in vector databases and ML model integration.</p>
                  
                  <p><strong className="text-purple-400 block mb-2">Full-Stack & Architecture</strong>
                  Deep expertise in database design (MongoDB, PostgreSQL, MySQL), system architecture, and scalable applications. Experience with microservices, distributed systems, and cloud-native development.</p>
                  
                  <p><strong className="text-purple-400 block mb-2">AI-Powered Development</strong>
                  Learn to leverage AI tools for 70% of your development work. Master prompt engineering, AI-assisted coding, and automated development workflows that dramatically increase productivity.</p>
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
                  <p><strong className="text-purple-400 block mb-2">Core Technologies</strong>
                  JavaScript, TypeScript, React, Next.js, Node.js, Python, Ruby, MongoDB, PostgreSQL, MySQL</p>
                  
                  <p><strong className="text-purple-400 block mb-2">AI & ML Tools</strong>
                  Machine Learning Models, Vector Databases, RAG Systems, Chatbots, Voice AI, Genetic Algorithms</p>
                  
                  <p><strong className="text-purple-400 block mb-2">Development Tools</strong>
                  Git, Docker, CI/CD, Testing Frameworks, Cloud Platforms, Performance Monitoring</p>
                  
                  <p><strong className="text-purple-400 block mb-2">Additional Skills</strong>
                  Data Science, Stock Market Analysis, System Architecture, Technical Leadership</p>
                </div>
              </div>
            </section>

            <div ref={ctaRef} className="mt-32">
              <CTA title="Ready to Master Modern Development?" context="web-dev" />
            </div>
          </m.div>
        </section>
      </div>
    </LazyMotion>
  )
} 