'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTA from '@/shared/components/cta'

export default function VoiceAIPage() {
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
            Voice AI Development & Integration
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Create natural, engaging voice experiences with custom voice models and seamless AI integration
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              From custom voice models to intelligent voice agents, we help businesses
              create natural and engaging voice experiences. Whether you need a unique
              brand voice or a complete voice-enabled application, our expertise in
              voice AI technology ensures exceptional results.
            </p>
          </div>
        </motion.div>

        {/* Key Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Voice AI Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-white/70">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Voice AI Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-white/70">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTA
          context="voice-ai"
          title="Ready to Give Your Application a Voice?"
        />
      </div>
    </div>
  )
}

const capabilities = [
  {
    title: "Custom Voice Models",
    description: "Create unique, branded voices for your applications with our advanced voice cloning technology. Perfect for maintaining brand consistency across all voice interactions."
  },
  {
    title: "Text-to-Speech Integration",
    description: "Implement natural-sounding text-to-speech capabilities using either custom voice models or our integration with ElevenLabs' premium voices."
  },
  {
    title: "Voice-Enabled Agents",
    description: "Build intelligent voice agents that can engage in natural conversations, handle complex interactions, and integrate with your existing systems."
  },
  {
    title: "Voice Application Development",
    description: "Develop complete voice-enabled applications with features like voice commands, dictation, and interactive voice response systems."
  }
]

const technologies = [
  {
    title: "Voxbird AI",
    description: "Our proprietary voice AI platform for creating custom voice models and natural-sounding speech synthesis."
  },
  {
    title: "ElevenLabs Integration",
    description: "Seamless integration with ElevenLabs' advanced text-to-speech technology for premium voice quality."
  },
  {
    title: "Custom Integration",
    description: "Flexible API development and integration capabilities to connect voice AI with your existing systems."
  }
] 