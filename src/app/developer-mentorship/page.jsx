'use client'

import { motion } from 'framer-motion'
import CTA from '@/shared/components/cta'
import { MENTORING_SESSIONS, FIVE_STAR_REVIEWS } from '@/lib/config'

export const metadata = {
  title: "1-on-1 Developer Mentorship | Accelerate Your Career",
  description: "Get personalized developer mentorship from an expert with 26+ years of experience. Accelerate your career with targeted guidance and hands-on learning.",
}

export default function DeveloperMentorshipPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4">
        <motion.div className="container mx-auto max-w-4xl text-center">
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            {MENTORING_SESSIONS} Sessions Completed • {FIVE_STAR_REVIEWS} 5-Star Reviews
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white mt-8">
            Accelerate Your Developer Career With 1-on-1 Mentorship
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Get personalized guidance from a senior developer with 26+ years of experience. Master modern development practices, advance your career, and increase your earning potential.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Technical Excellence</h3>
              <ul className="text-white/70 text-left space-y-2">
                <li>• Modern JavaScript & TypeScript</li>
                <li>• React & Next.js mastery</li>
                <li>• Clean code principles</li>
                <li>• System architecture</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Career Growth</h3>
              <ul className="text-white/70 text-left space-y-2">
                <li>• Salary negotiation</li>
                <li>• Career path planning</li>
                <li>• Leadership skills</li>
                <li>• Portfolio building</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">AI Integration</h3>
              <ul className="text-white/70 text-left space-y-2">
                <li>• AI-powered development</li>
                <li>• Productivity optimization</li>
                <li>• Latest AI tools mastery</li>
                <li>• Workflow automation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <CTA
        title="Start Your Developer Growth Journey"
        context="developer-mentorship"
      />
    </div>
  )
}