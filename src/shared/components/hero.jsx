'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { START_YEAR, FACTS } from '@/lib/config'

export default function Hero() {
  const [yearsOfCoding, setYearsOfCoding] = useState(0)

  useEffect(() => {
    const calculateYears = () => {
      const startYear = START_YEAR
      const currentYear = new Date().getFullYear()
      setYearsOfCoding(currentYear - startYear)
    }
    calculateYears()
  }, [])

  return (
    <div className="min-h-screen w-full flex items-start py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1 space-y-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-bold"
            >
              Become a<br />
              10x Programmer<br />
              Using AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/70"
            >
              Learn to leverage cutting-edge AI tools like {FACTS.experience.ai_ml.tools.models.slice(0, 3).join(', ')} to
              supercharge your development. From {FACTS.experience.ai_ml.tools.workflows[0]} to {FACTS.experience.ai_ml.current_focus.development[0]},
              master the future of coding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-8"
            >
              {/* Web Technologies */}
              <div className="flex flex-wrap items-center gap-4">
                {FACTS.experience.web.core.map((tech, i) => (
                  <span key={tech} className="text-white/50 text-sm bg-white/5 px-5 py-2.5 rounded-full whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>

              {/* ML Technologies */}
              <div className="flex flex-wrap items-center gap-4">
                {FACTS.experience.python.frameworks.map((tech, i) => (
                  <span key={tech} className="text-white/50 text-sm bg-white/5 px-5 py-2.5 rounded-full whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-start order-1 lg:order-2"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-[#ff2d55]">
              <img
                src="/mark.jpg"
                alt="Mark Tellez"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white/70 text-center text-base sm:text-lg max-w-sm mt-8 mb-24"
            >
              {yearsOfCoding}+ years of development experience. Currently building voice AI and ML systems at {FACTS.experience.companies[0]},
              specializing in {FACTS.experience.python.specialties.slice(0, 2).join(' and ')}.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 