'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTA from '@/shared/components/cta'

export default function AIServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-green-400">
            AI Development & Integration Services
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Expert AI development and integration services for enterprise digital transformation. Custom solutions, seamless implementation.
          </p>
          <div className="inline-block mb-8">
            <span className="bg-[#121212] text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20">
              Ranked 8th in CodeGame's AI Competition • 70% Productivity Boost
            </span>
          </div>
          <div className="prose prose-lg prose-invert flex flex-col gap-4">
            <p>
              As businesses race to adopt AI technologies, having an experienced AI Developer
              is crucial for successful implementation. With over {new Date().getFullYear() - 1999} years
              of software development experience and deep specialization in artificial intelligence,
              I help companies integrate cutting-edge AI capabilities into their existing systems and workflows.
            </p>
            <p>
              From custom model development to enterprise-wide AI integration, my services are designed
              to deliver measurable business value through strategic AI implementation. I focus on
              practical solutions that drive real results while ensuring seamless adoption across your organization.
            </p>
          </div>
        </motion.div>

        {/* Why Choose an AI Specialist Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Your Business Needs an AI Development Specialist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-green-500/20 p-8 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a] hover:from-green-500/[0.07] hover:to-transparent transition-colors"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="prose prose-lg prose-invert">
            <p>
              Working with a specialized AI Developer ensures you're not just implementing AI,
              but doing so in a way that's strategic, efficient, and aligned with your business goals.
              From custom model development to seamless integration, my expertise helps you navigate
              the complexities of AI adoption while maximizing ROI.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Comprehensive AI Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group border border-purple-500/20 p-8 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a] hover:from-purple-500/[0.07] hover:to-transparent transition-colors"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {service.description}
                </p>
                <div className="text-accent group-hover:translate-x-2 transition-transform">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
          <div className="prose prose-lg prose-invert">
            <p>
              Each service is tailored to your specific needs, ensuring you get exactly the AI
              capabilities your business requires. Whether you need custom model development,
              voice AI integration, or process automation, you'll benefit from proven methodologies
              and industry best practices.
            </p>
          </div>
        </div>

     

        {/* CTA Section */}
        <CTA
          context="ai-services"
          title="Ready to Transform Your Business with AI?"
        />
      </div>
    </div>
  )
}

const benefits = [
  {
    title: "Strategic AI Implementation",
    description: "Get expert guidance on which AI technologies will deliver the most value for your specific business case and industry."
  },
  {
    title: "Custom Solutions",
    description: "Receive tailored AI solutions that integrate seamlessly with your existing systems and workflows."
  },
  {
    title: "Faster Time-to-Market",
    description: "Leverage proven methodologies and experience to implement AI solutions quickly and effectively."
  },
  {
    title: "Risk Mitigation",
    description: "Benefit from best practices in AI development, testing, and deployment to ensure reliable, production-ready solutions."
  }
]

const services = [
  {
    title: "Custom AI Model Development",
    description: "Tailored AI models for classification, sentiment analysis, and specific business needs. From data preparation to deployment.",
    href: "/ai-services/custom-models"
  },
  {
    title: "Voice AI Solutions",
    description: "Custom voice models, text-to-speech, and voice-enabled applications. Create natural, engaging voice interactions.",
    href: "/ai-services/voice-ai"
  },
  {
    title: "Intelligent Automation",
    description: "AI-powered automation for business processes. Streamline operations and reduce manual tasks with intelligent workflows.",
    href: "/ai-services/automation"
  }
] 