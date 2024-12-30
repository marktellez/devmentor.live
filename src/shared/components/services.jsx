'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'Cross-Platform Support',
      description: 'Windows, Mac or Linux - daily experience on all three platforms'
    },
    {
      title: 'Learn by Doing',
      description: 'One-on-one, side by side learning via Zoom, building real world applications'
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
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12"
        >
          Services Offered
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={item}
              className="border border-white/10 p-6 rounded-lg"
            >
              <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 