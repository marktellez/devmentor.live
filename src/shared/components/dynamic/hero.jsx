'use client'

import { useState, useEffect } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { START_YEAR, FACTS } from '@/lib/config'

export default function DynamicHero() {
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
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full flex items-start py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center order-2 lg:order-1 space-y-16"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <a href="/reviews" className="bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer">
                  5.0/5.0 Rating • 450+ Reviews
                </a>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              >
                Master Modern<br />
                Development with<br />
                AI-Powered Skills
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg sm:text-xl text-white/70"
              >
                Join me for personalized mentorship in web development and AI integration. 
                With {yearsOfCoding}+ years of experience, I'll help you master JavaScript, React, 
                and modern AI tools to supercharge your development career.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-8"
              >
                {/* Core Skills */}
                <div className="flex flex-wrap items-center gap-4">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'AI Integration'].map((tech) => (
                    <span key={tech} className="text-white/50 text-sm bg-white/5 px-5 py-2.5 rounded-full whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mentorship Benefits */}
                <div className="flex flex-wrap items-center gap-4">
                  {['1-on-1 Sessions', 'Code Reviews', 'Pair Programming', 'AI Tools Training'].map((benefit) => (
                    <span key={benefit} className="text-white/50 text-sm bg-white/5 px-5 py-2.5 rounded-full whitespace-nowrap">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-start order-1 lg:order-2 mt-32"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-[#ff2d55]">
                <img
                  src="/mark.jpg"
                  alt="Mark Tellez - Web Development & AI Mentor"
                  className="w-full h-full object-cover"
                  loading="eager" // Hero image should load eagerly
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-white/70 text-center text-base sm:text-lg max-w-sm mt-8 mb-24"
              >
                AI Researcher and Sr. Software Engineer with {yearsOfCoding}+ years of experience.
                Ranked 8th globally in AI programming contests. Let's build something amazing together.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}
