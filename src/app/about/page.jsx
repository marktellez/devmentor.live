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
              Senior full-stack developer and tech mentor with over 26 years of experience, specializing in AI integration, modern web development, and transforming developers' careers through personalized mentorship.
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

      

        {/* Professional Journey Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16 space-y-6 prose prose-lg prose-invert mt-32"
        >
          <motion.h2 variants={item} className="text-3xl font-bold text-white">
            Professional Journey
          </motion.h2>
          <motion.p variants={item}>
            With over two decades in software development, I've evolved from a passionate programmer to a
            seasoned tech leader and mentor. My journey began in the late 90s, working with early web technologies
            and witnessing the transformation of the digital landscape firsthand.
          </motion.p>
          <motion.p variants={item}>
            Throughout my career, I've led development teams at startups and enterprises, architected
            mission-critical systems, and helped countless developers advance their careers. My experience
            spans from building high-performance web applications to implementing cutting-edge AI solutions.
          </motion.p>
          <motion.p variants={item}>
           I pride myself in not just being a "coder" but understanding the importance of efficience and revenue generation.
           I can work fluently in photoshop, illustrator, animator, blender, and many other creative tools and apps.
          </motion.p>
          <motion.p variants={item}>
            I can code web, desktop, systems, ai models, and more. I am far more than a full stack developer or a one
            trick pony. I am like a guided missile, point me at your biggest problem and I will find clever ways of
            solving it.
            </motion.p>
        </motion.div>

       

        {/* Impact & Achievements Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16 space-y-6"
        >
          <motion.h2 variants={item} className="text-3xl font-bold text-white mb-8">
            Impact & Achievements
          </motion.h2>
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-blue-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Competitive AI</h3>
              <p className="text-white/70">
                Placed 8th at CodeGame.com's AI competition, outperforming over 1,000 developers using an innovative
                hybrid of neural networks and genetic algorithms.
              </p>
            </div>
            <div className="border border-purple-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Career Transformations</h3>
              <p className="text-white/70">
                Helped over 500 developers secure promotions and raises through personalized mentorship
                and career guidance, with an average salary increase of 16%.
              </p>
            </div>
            <div className="border border-teal-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Enterprise Database Architecture</h3>
              <p className="text-white/70">
                Led Uber's migration of 100+ PostgreSQL servers to a single MongoDB cluster, resulting in a 65% throughput
                gain and significantly simplified development process.
              </p>
            </div>
            <div className="border border-purple-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Legacy Systems</h3>
              <p className="text-white/70">
                Contributed to YouTube's original comment system pre-Google acquisition, developing a phpBB-based
                solution that laid the foundation for one of the internet's largest community platforms.
              </p>
            </div>
            <div className="border border-green-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-green-400 mb-3">AI & Voice Synthesis</h3>
              <p className="text-white/70">
                Built VoxBird.ai's specialized voice synthesis model capable of recreating almost any voice,
                along with an innovative AI concierge bot for automated customer service.
              </p>
            </div>
            <div className="border border-yellow-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Medical AI Innovation</h3>
              <p className="text-white/70">
                Developed a medical diagnosis model using RecurrentResNet architecture that rivals a 2019 PhD research paper
                in diagnosing and classifying diseases from chest X-rays.
              </p>
            </div>


          </motion.div>
        </motion.div>

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