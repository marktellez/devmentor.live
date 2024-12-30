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
    <div className="min-h-screen w-full bg-black flex items-center">
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white text-6xl lg:text-8xl font-bold mb-8"
            >
              Learn<br />
              Modern Web<br />
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/70 text-xl mb-8"
            >
              Web developer since {FACTS.experience.year}, with over {yearsOfCoding} years of experience!
              Specializing in {FACTS.experience.languages.slice(0, -1).join(', ')} and {FACTS.experience.languages.slice(-1)}.
              Expert in {FACTS.experience.frontend.join(', ')}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="border border-white/10 rounded p-4 mb-16"
            >
              <p className="text-white">
                DevmentorLive was discontinued in {FACTS.notice.year} so Mark could move into {FACTS.notice.reason}
              </p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="w-96 h-96 rounded-full overflow-hidden bg-[#ff3333]">
              <img
                src="/marktellez.webp"
                alt="Mark Tellez"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 