'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      <div className="max-w-5xl mx-auto px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Full-stack developer specializing in AI integration and modern web development
            </p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image
              src="/mark.jpg"
              alt="Mark Tellez"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="mb-16">
          <Stats />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Core Technology sections */}
          <motion.div variants={item}>
            <h3 className="text-green-400 text-xl mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.languages.map((lang) => (
                <span key={lang} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-green-500/20 px-3 py-1 rounded">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-purple-400 text-xl mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.frontend.map((tech) => (
                <span key={tech} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-purple-500/20 px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-teal-400 text-xl mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.backend.map((tech) => (
                <span key={tech} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-teal-500/20 px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-purple-400 text-xl mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.databases.map((db) => (
                <span key={db} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-purple-500/20 px-3 py-1 rounded">
                  {db}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-teal-400 text-xl mb-4">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.cloud.map((service) => (
                <span key={service} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-teal-500/20 px-3 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-green-400 text-xl mb-4">AI & Machine Learning</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white/90 mb-2">Neural Architectures</h4>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.ai_ml.architectures.map((arch) => (
                    <span key={arch} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-green-500/20 px-3 py-1 rounded">
                      {arch}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white/90 mb-2">Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {FACTS.experience.ai_ml.domains.map((domain) => (
                    <span key={domain} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-green-500/20 px-3 py-1 rounded">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Skills sections */}
          <motion.div variants={item}>
            <h3 className="text-red-400 text-xl mb-4">Game Engines</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.gameEngines.map((engine) => (
                <span key={engine} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-red-500/20 px-3 py-1 rounded">
                  {engine}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-yellow-400 text-xl mb-4">Creative Tools</h3>
            <div className="flex flex-wrap gap-2">
              {FACTS.experience.creativeTools.map((tool) => (
                <span key={tool} className="text-white/70 bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-yellow-500/20 px-3 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 