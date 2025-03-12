'use client'

import { motion } from 'framer-motion'
import CTA from '@/shared/components/cta'

export default function TechInterviewPrepPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4">
        <motion.div className="container mx-auto max-w-4xl text-center">
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            90% Success Rate • FAANG Interview Experience
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white mt-8">
            Master Technical Interviews: AI & Traditional Development
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Comprehensive interview preparation for both traditional development roles and emerging AI positions. Learn from someone who's been on both sides of the interview table.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/5 p-8 rounded-lg text-left">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Traditional Tech Interviews</h3>
              <ul className="text-white/70 space-y-3">
                <li>• Data structures & algorithms</li>
                <li>• System design principles</li>
                <li>• JavaScript/TypeScript deep dives</li>
                <li>• React & modern frameworks</li>
                <li>• Mock interviews & feedback</li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-lg text-left">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">AI Development Interviews</h3>
              <ul className="text-white/70 space-y-3">
                <li>• AI integration patterns</li>
                <li>• LLM implementation strategies</li>
                <li>• AI tools & frameworks</li>
                <li>• ML basics for developers</li>
                <li>• AI system architecture</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <CTA
        title="Prepare for Your Dream Role"
        context="tech-interview"
      />
    </div>
  )
}