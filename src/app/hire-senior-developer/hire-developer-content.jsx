'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { START_YEAR } from '@/lib/config'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import ScrollButton from '@/shared/components/scroll-button'

export default function HireDeveloperContent() {
  const yearsExperience = new Date().getFullYear() - START_YEAR
  const ctaRef = useRef(null)

  const scrollToContact = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <PageHero
          badge={`${yearsExperience}+ Years Experience • AI Specialist • Technical Leader`}
        >
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-6">
                Hire a Senior Developer & AI Expert
              </h1>
              
              <div className="text-white/70 text-lg sm:text-xl space-y-4">
                <p className="text-xl text-white/90">
                  Bringing unparalleled web development, systems programming, and AI innovation to companies of every size.
                </p>
                <p className="text-lg text-white/80">
                  From startups to enterprises, I deliver revenue-focused solutions that combine deep technical expertise with cutting-edge AI capabilities. My approach goes beyond code – I architect systems that drive business growth and create measurable impact.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{yearsExperience}+</div>
                    <div className="text-sm text-white/60">Years Experience</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">5.0</div>
                    <div className="text-sm text-white/60">Client Rating</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                    <div className="text-sm text-white/60">Clients Served</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="text-white/50 text-sm bg-white/5 px-3 py-1.5 rounded-full">Full-Stack Development</span>
                  <span className="text-white/50 text-sm bg-white/5 px-3 py-1.5 rounded-full">AI Integration</span>
                  <span className="text-white/50 text-sm bg-white/5 px-3 py-1.5 rounded-full">Systems Architecture</span>
                  <span className="text-white/50 text-sm bg-white/5 px-3 py-1.5 rounded-full">Technical Leadership</span>
                </div>
              </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0 rounded-full overflow-hidden mx-auto border-4 border-purple-500/20">
              <Image
                src="/mark.jpg"
                alt="Mark Tellez - Senior Developer & AI Expert"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ScrollButton onClick={scrollToContact} className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold">
              Work With Me
            </ScrollButton>
          </div>
        </PageHero>

        <section className="space-y-24 px-4">
          {/* Expertise Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ExpertiseBox
                title="Technical Leadership"
                description="With 26+ years of hands-on experience in web and systems programming, I provide architecture design and implementation tailored for modern business needs. Unlike typical developers, I focus on revenue-driven decision-making, ensuring code quality and technical strategies that accelerate business growth while delivering results on time."
              />
              <ExpertiseBox
                title="AI Expertise"
                description="I specialize in cutting-edge AI solutions, including AI-powered automation, LLM implementation, and custom AI model development. My AI innovations have fooled professionals, won awards, and placed in top-tier competitions. Whether integrating AI into existing systems or developing models from scratch, I ensure businesses get AI solutions that actually work."
              />
            </div>

            <div className="space-y-8">
              <FeatureBox
                title="Core Technologies"
                items={[
                  'JavaScript/TypeScript',
                  'React & Next.js',
                  'Node.js',
                  'Python for AI/ML',
                ]}
              />
              <FeatureBox
                title="Previous Clients"
                items={[
                  'PayPal',
                  'Intel',
                  'GEICO',
                  'VoxBird.ai (Current)',
                ]}
              />
            </div>
          </div>

          {/* Key Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Key Achievements</h2>
            <div className="grid gap-6">
              <AchievementBox
                title="Award-Winning AI Innovations"
                description="Developed an award-winning text-to-speech model that fooled BossLade (Snoop Dogg's wife) by generating audio indistinguishable from the real thing."
              />
              <AchievementBox
                title="Global AI Agent Contest"
                description="Placed 8th worldwide out of 5,000+ participants in an AI agent contest, building a Harry Potter-style battle agent using a small neural network and a genetic algorithm."
              />
              <AchievementBox
                title="Zooly AI Integration"
                description="Developed an AI-powered agent for Zooly, capable of using tools, retrieving company data via RAG, and replacing traditional form-heavy UIs with natural language interactions."
              />
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">How I Work With Clients</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Initial Consultation', description: 'Meet virtually with the client to understand requirements and wishlist.' },
                { step: 2, title: 'Research & Planning', description: 'Perform deep technical research and project planning.' },
                { step: 3, title: 'Client Review', description: 'Present the plan to ensure alignment before execution.' },
                { step: 4, title: 'Development Begins', description: 'Execute work in iterative cycles with weekly updates.' },
                { step: 5, title: 'Weekly Progress Reviews', description: 'Demo progress to maintain client alignment.' },
                { step: 6, title: 'Refinement & Testing', description: 'Fine-tune, optimize, and validate final results.' },
                { step: 7, title: 'Final Deliverables', description: 'Work is released progressively upon each payment.' },
              ].map((process) => (
                <ProcessStep key={process.step} {...process} />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <FAQItem
                question="What industries do you work with?"
                answer="I work with a wide range of industries, including SaaS, AI startups, enterprise tech, and automation-heavy businesses."
              />
              <FAQItem
                question="Do you only work with AI projects?"
                answer="No, I also specialize in full-stack development, systems programming, and web applications."
              />
              <FAQItem
                question="How long does a typical project take?"
                answer="It depends on scope, but I prioritize speed and efficiency while maintaining quality. Expect initial results within weeks, not months."
              />
            </div>
          </div>

          <div className="text-center">
            <ScrollButton onClick={scrollToContact} className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-semibold">
              Book a Consultation
            </ScrollButton>
          </div>
        </section>

        {/* Resume Downloads */}
        <div className="mt-16 px-4">
          <div className="border border-purple-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
            <h2 className="text-2xl font-bold text-white mb-4">Download My Resume</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/mark-tellez-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Resume
              </a>
              <a
                href="/mark-tellez-ai-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download AI Resume
              </a>
            </div>
          </div>
        </div>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="hire-senior" />
        </div>
      </div>
    </main>
  )
}

function ExpertiseBox({ title, description }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}

function AchievementBox({ title, description }) {
  return (
    <div className="border border-purple-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
      <h3 className="text-xl font-semibold text-purple-400 mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}

function ProcessStep({ step, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
        {step}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="border border-purple-500/20 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-3">{question}</h3>
      <p className="text-white/70">{answer}</p>
    </div>
  )
}

function FeatureBox({ title, items }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <ul className="text-white/70 space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
} 