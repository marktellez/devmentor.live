'use client'

import { motion } from 'framer-motion'
import CTA from '@/shared/components/cta'
import { START_YEAR } from '@/lib/config'

export default function HireDeveloperPage() {
  const yearsExperience = new Date().getFullYear() - START_YEAR

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4">
        <motion.div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
              {yearsExperience}+ Years Experience • AI Specialist • Technical Leader
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white mt-8">
              Hire a Senior Developer & AI Expert
            </h1>

            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Let's discuss how I can add value to your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Technical Leadership</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• Architecture design & implementation</li>
                  <li>• Team mentorship & growth</li>
                  <li>• Code quality & best practices</li>
                  <li>• Technical decision making</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">AI Expertise</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• AI integration strategies</li>
                  <li>• Custom AI model development</li>
                  <li>• LLM implementation</li>
                  <li>• AI-powered automation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Core Technologies</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• JavaScript/TypeScript</li>
                  <li>• React & Next.js</li>
                  <li>• Node.js</li>
                  <li>• Python for AI/ML</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Previous Clients</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• PayPal</li>
                  <li>• Intel</li>
                  <li>• GEICO</li>
                  <li>• VoxBird.ai (Current)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <CTA
        title="Let's Discuss Your Project Needs"
        context="hire-developer"
      />
    </div>
  )
}