'use client'

import { useRef } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import CTA from '@/shared/components/cta'

export default function WebDevMentorship() {
  const ctaRef = useRef(null)

  const scrollToCta = (e) => {
    e.preventDefault()
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen pt-32" suppressHydrationWarning>
        {/* Hero Section */}
        <section className="pb-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                26+ Years Experience • 1000+ Sessions • 5.0/5.0 Rating
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
              Learn Modern Development & AI Integration
            </h1>
            <p className="text-white/70 text-lg sm:text-xl mb-4">
              Since 1997, I've been at the forefront of web development, evolving from basic HTML to advanced AI integration. With over 1,000 successful mentoring sessions and a perfect 5.0 rating from 454 reviews on Codementor, I help developers master both traditional and AI-powered development techniques.
            </p>
            <p className="text-white/70 text-lg sm:text-xl mb-8">
              As an AI researcher and senior software engineer who placed 8th globally in AI programming competitions, I bring unique insights into combining traditional development with AI tools. I currently use AI for 90% of my development work and can teach you how to do the same, dramatically increasing your productivity and capabilities.
            </p>
            <button
              onClick={scrollToCta}
              className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold"
            >
              Start Your Journey
            </button>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-24"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Modern Web Development</h3>
                  <p className="text-white/70">Expert in JavaScript (26 years), TypeScript, React (since fax.js), Next.js, Node.js, and modern frameworks. Specializing in functional programming patterns and clean, maintainable code architecture.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">AI & Machine Learning</h3>
                  <p className="text-white/70">Extensive experience in AI integration, machine learning, and genetic algorithms. Build intelligent systems including chatbots, RAG systems, and voice applications. Expert in vector databases and ML model integration.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Full-Stack & Architecture</h3>
                  <p className="text-white/70">Deep expertise in database design (MongoDB, PostgreSQL, MySQL), system architecture, and scalable applications. Experience with microservices, distributed systems, and cloud-native development.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">AI-Powered Development</h3>
                  <p className="text-white/70">Learn to leverage AI tools for 70% of your development work. Master prompt engineering, AI-assisted coding, and automated development workflows that dramatically increase productivity.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 text-white">Learning Approach</h2>
              <p className="text-white/70 text-lg mb-6">
                My mentorship combines hands-on practice with real-world projects. You'll learn to write production-quality code, make architectural decisions, and effectively communicate technical concepts. I've helped hundreds of developers advance their careers, from avoiding job loss to securing promotions and significant raises.
              </p>
              <p className="text-white/70 text-lg mb-4">We'll focus on practical skills including:</p>
              <ul className="text-white/70 space-y-2 list-disc pl-6">
                <li>Modern development practices and clean code principles</li>
                <li>AI tool integration and automation workflows</li>
                <li>System design and scalable architecture</li>
                <li>Production deployment and performance optimization</li>
                <li>Technical leadership and career advancement</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 text-white">Technologies & Tools</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Core Technologies</h3>
                  <p className="text-white/70">JavaScript, TypeScript, React, Next.js, Node.js, Python, Ruby, MongoDB, PostgreSQL, MySQL</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">AI & ML Tools</h3>
                  <p className="text-white/70">Machine Learning Models, Vector Databases, RAG Systems, Chatbots, Voice AI, Genetic Algorithms</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Development Tools</h3>
                  <p className="text-white/70">Git, Docker, CI/CD, Testing Frameworks, Cloud Platforms, Performance Monitoring</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Additional Skills</h3>
                  <p className="text-white/70">Data Science, Stock Market Analysis, System Architecture, Technical Leadership</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div ref={ctaRef} className="mt-24">
            <CTA
              title="Ready to Master Modern Development?"
              context="web-dev"
            />
          </div>
        </div>
      </div>
    </LazyMotion>
  )
} 