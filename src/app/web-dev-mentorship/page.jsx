'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
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
              26+ Years Experience • 1000+ Sessions
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Level Up Your Development Career
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Join hundreds of developers who've transformed their careers through personalized mentorship. From keeping their jobs to earning promotions and raises.
          </p>
          <a
            href="#cta"
            onClick={scrollToCta}
            className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold"
          >
            Start Your Journey
          </a>
        </motion.div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Real Developer Success Stories
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Over the past decade, I've helped developers not just survive, but thrive in their careers.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-8"
          >
            <motion.div
              variants={item}
              className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                From Struggling to Leading
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                "I was about to lose my job due to performance issues. Through mentorship, I learned modern development practices and architectural patterns. Now I'm leading my team's technical decisions and got a 35% raise."
              </p>
              <p className="text-sm text-white/50 italic">
                - Michael S., Senior Software Engineer
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Breaking Through Career Plateau
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                "Stuck at the same level for 3 years, I couldn't seem to advance. The mentorship showed me how to write production-quality code and communicate with stakeholders. Promoted to senior in 8 months."
              </p>
              <p className="text-sm text-white/50 italic">
                - David K., Lead Developer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Your Path to Excellence
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A proven approach to leveling up your development career through personalized mentorship.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Technical Excellence
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Master modern development practices, clean code principles, and architectural patterns that set top developers apart.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Career Strategy
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Learn to communicate your value, navigate workplace dynamics, and position yourself for promotions and raises.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="border border-purple-500/20 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Modern Stack Mastery
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Stay ahead with expertise in React, Node.js, and modern development tools. Build production-ready applications that impress.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shared CTA Component */}
      <CTA
        title="Ready to Transform Your Development Career?"
        context="web-dev"
      />
    </div>
  )
} 