'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Development',
      description: 'Learn to use AI tools like GPT-4, Claude, and DeepSeek to write better code faster and automate repetitive tasks'
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'Master ML basics: supervised/unsupervised learning, reinforcement learning, and practical PyTorch/TensorFlow implementation'
    },
    {
      title: 'AI Consulting',
      description: 'Help your company integrate AI into existing workflows, build custom AI solutions, and train development teams in AI best practices'
    },
    {
      title: 'AI Voice Systems',
      description: 'Learn to build and deploy custom voice AI systems using cutting-edge ML models and real-time synthesis'
    },
    {
      title: 'Learn by Doing',
      description: 'One-on-one, side by side learning via Zoom, building real world applications'
    },
    {
      title: 'Cross-Platform Support',
      description: 'Windows, Mac or Linux - daily experience on all three platforms'
    },
    {
      title: 'Recorded Sessions',
      description: 'Sessions recorded for later review, creating your own screencast series'
    },
    {
      title: 'Flexible Schedule',
      description: 'No fixed classes - book what you need, when you need it'
    }
  ]

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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={item}
              className="border border-white/10 p-8 rounded-lg bg-white/[0.02]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 