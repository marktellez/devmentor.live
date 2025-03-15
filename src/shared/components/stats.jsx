'use client'

import { useState, useEffect } from 'react'
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

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-16 sm:gap-8 py-8 sm:py-0">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-3">{stat.value}</div>
            <div className="text-white/50 text-sm sm:text-xs tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 