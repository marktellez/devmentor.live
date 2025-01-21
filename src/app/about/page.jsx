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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">


        <div className="mb-12">
          <Stats />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-2/3">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h2 variants={item} className="text-2xl font-bold text-white mb-6">
                Professional Experience
              </motion.h2>

              <div className="space-y-8">
                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {FACTS.experience.languages.map((lang) => (
                      <span key={lang} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {FACTS.experience.frontend.map((tech) => (
                      <span key={tech} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {FACTS.experience.backend.map((tech) => (
                      <span key={tech} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {FACTS.experience.databases.map((db) => (
                      <span key={db} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                        {db}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {FACTS.experience.cloud.map((service) => (
                      <span key={service} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <h3 className="text-accent text-xl mb-4">AI & Machine Learning</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white/90 mb-2">Neural Architectures</h4>
                      <div className="flex flex-wrap gap-2">
                        {FACTS.experience.ai_ml.architectures.map((arch) => (
                          <span key={arch} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                            {arch}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white/90 mb-2">Domains</h4>
                      <div className="flex flex-wrap gap-2">
                        {FACTS.experience.ai_ml.domains.map((domain) => (
                          <span key={domain} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white/90 mb-2">AI Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {FACTS.experience.ai_ml.specialties.map((specialty) => (
                          <span key={specialty} className="text-white/70 bg-white/5 px-3 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/3">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="sticky top-24"
            >
              <motion.div
                variants={item}
                className="mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-accent mb-8"
              >
                <img
                  src="/mark.jpg"
                  alt="Mark Tellez"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div variants={item} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-accent text-xl mb-4">Current Focus</h3>
                <p className="text-white/70">
                  I'm leveraging my decades of development experience to help developers
                  master both modern web development and AI integration. At {FACTS.experience.companies[0]},
                  I'm building {FACTS.experience.ai_ml.current_focus.voice.join(' and ')}, while teaching others how to become
                  AI-powered developers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 