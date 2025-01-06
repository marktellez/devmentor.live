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
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise AI Development & Integration Services
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Transform your business with custom AI solutions and expert implementation from a specialized AI Developer
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              As businesses race to adopt AI technologies, having an experienced AI Developer
              is crucial for successful implementation. With over {new Date().getFullYear() - 1999} years
              of software development experience and a deep specialization in artificial intelligence,
              I help companies integrate cutting-edge AI capabilities into their existing systems and workflows.
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
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
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
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
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

        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Success Stories</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              AI-Powered Customer Service Transformation
            </h3>
            <p className="text-white/70 mb-4">
              Helped a mid-size company reduce customer response times by 75% through
              custom AI model development and integration. The solution included sentiment
              analysis, automated response generation, and intelligent ticket routing.
            </p>
          </div>
          <div className="prose prose-lg prose-invert">
            <p>
              These results aren't just numbers – they represent real business transformation
              through strategic AI implementation. By focusing on practical applications and
              measurable outcomes, we ensure every AI project delivers tangible value.
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