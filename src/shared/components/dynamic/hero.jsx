'use client'

import { useState, useEffect } from 'react'
import { START_YEAR, FACTS } from '@/lib/config'
import Image from 'next/image'

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
    <section className="min-h-screen w-full flex items-start py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
          <div className="flex flex-col justify-center order-2 lg:order-1 space-y-16">
            <div className="flex items-center space-x-4">
              <a href="/reviews" className="bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer">
                5.0/5.0 Rating • 450+ Reviews
              </a>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Master Modern<br />
              Development with<br />
              AI-Powered Skills
            </h1>

            <p className="text-lg sm:text-xl text-white/70">
              Join me for personalized mentorship in web development and AI integration. 
              With {yearsOfCoding}+ years of experience, I'll help you master JavaScript, React, 
              and modern AI tools to supercharge your development career.
            </p>

            <div className="space-y-8">
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
            </div>
          </div>

          <div className="flex flex-col items-center justify-start order-1 lg:order-2 mt-32">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-[#ff2d55]">
              <Image
                src="/mark.jpg"
                alt="Mark Tellez - Web Development & AI Mentor"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority // Hero image should load with priority
              />
            </div>
            <p className="text-white/70 text-center text-base sm:text-lg max-w-sm mt-8 mb-24">
              AI Researcher and Sr. Software Engineer with {yearsOfCoding}+ years of experience.
              Ranked 8th globally in AI programming contests. Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
