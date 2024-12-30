'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { START_YEAR, MENTORING_SESSIONS, FIVE_STAR_REVIEWS } from '@/lib/config'

export default function Stats() {
  const [yearsOfCoding, setYearsOfCoding] = useState(0)

  useEffect(() => {
    const calculateYears = () => {
      const startYear = START_YEAR
      const currentYear = new Date().getFullYear()
      setYearsOfCoding(currentYear - startYear)
    }
    calculateYears()
  }, [])

  const stats = [
    { label: 'YEARS CODING', value: yearsOfCoding },
    { label: 'MENTORING SESSIONS', value: MENTORING_SESSIONS },
    { label: '5★ REVIEWS ON CODEMENTOR', value: FIVE_STAR_REVIEWS }
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
    <div className="max-w-6xl mx-auto px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-between items-center"
      >
        {stats.map(stat => (
          <motion.div key={stat.label} variants={item} className="text-center">
            <div className="text-white text-5xl font-light mb-2">{stat.value}</div>
            <div className="text-white/50 text-xs tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 