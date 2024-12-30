'use client'

import { motion } from 'framer-motion'
import { FACTS } from '@/lib/config'
import Stats from '@/shared/components/stats'

export default function AboutPage() {
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
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold text-white">About your Mentor</h1>
        </motion.div>

        <div className="mb-16">
          <Stats />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 variants={item} className="text-2xl font-bold text-white mb-6">
              Professional Experience
            </motion.h2>
            <motion.p variants={item} className="text-white/70 text-lg mb-8">
              I've been coding professionally since {FACTS.experience.year}, working with companies like{' '}
              {FACTS.experience.companies.slice(0, -1).join(', ')} and {FACTS.experience.companies.slice(-1)}.
            </motion.p>

            <div className="grid gap-8">
              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.languages.map((lang, index) => (
                    <motion.span
                      key={lang}
                      variants={item}
                      className="text-white/70 bg-white/5 px-3 py-1 rounded"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.frontend.map((tech, index) => (
                    <motion.span
                      key={tech}
                      variants={item}
                      className="text-white/70 bg-white/5 px-3 py-1 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.backend.map((tech, index) => (
                    <motion.span
                      key={tech}
                      variants={item}
                      className="text-white/70 bg-white/5 px-3 py-1 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.databases.map((db, index) => (
                    <motion.span
                      key={db}
                      variants={item}
                      className="text-white/70 bg-white/5 px-3 py-1 rounded"
                    >
                      {db}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.cloud.map((service, index) => (
                    <motion.span
                      key={service}
                      variants={item}
                      className="text-white/70 bg-white/5 px-3 py-1 rounded"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-[#ff3333] text-xl mb-4">AI & Machine Learning</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white/90 mb-2">Neural Architectures</h4>
                    <div className="flex flex-wrap gap-2">
                      {FACTS.experience.ai_ml.architectures.map((arch, index) => (
                        <motion.span
                          key={arch}
                          variants={item}
                          className="text-white/70 bg-white/5 px-3 py-1 rounded"
                        >
                          {arch}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/90 mb-2">Domains</h4>
                    <div className="flex flex-wrap gap-2">
                      {FACTS.experience.ai_ml.domains.map((domain, index) => (
                        <motion.span
                          key={domain}
                          variants={item}
                          className="text-white/70 bg-white/5 px-3 py-1 rounded"
                        >
                          {domain}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/90 mb-2">AI Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {FACTS.experience.ai_ml.specialties.map((specialty, index) => (
                        <motion.span
                          key={specialty}
                          variants={item}
                          className="text-white/70 bg-white/5 px-3 py-1 rounded"
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 variants={item} className="text-2xl font-bold text-white mb-6">
              Specialties
            </motion.h2>
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-12">
              {FACTS.experience.specialties.map((specialty, index) => (
                <motion.span
                  key={specialty}
                  variants={item}
                  className="text-white/70 bg-white/5 px-3 py-1 rounded"
                >
                  {specialty}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="aspect-square rounded-full overflow-hidden bg-[#ff3333] mb-8"
            >
              <img
                src="/marktellez.webp"
                alt="Mark Tellez"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={item} className="bg-white/5 rounded-lg p-6">
              <h3 className="text-[#ff3333] text-xl mb-4">Current Focus</h3>
              <p className="text-white/70">
                DevmentorLive was discontinued in {FACTS.notice.year} so I could focus on {FACTS.notice.reason}.
                I'm now leveraging my decades of development experience to help companies and developers
                integrate AI into their workflows and applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 