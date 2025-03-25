'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import Pill from '@/shared/components/pill'
import Image from 'next/image'
import Testimonials from '@/shared/components/testimonials'
import {
  BeakerIcon,
  CommandLineIcon,

  ServerIcon,
  SparklesIcon,

} from '@heroicons/react/24/outline'

export default function AIServicesContent({ data }) {
  const ctaRef = useRef(null)

  const aiTestimonials = [
    {
      content: "Mark really knows his code. TDIL why implementing certain react features is preferred, and how certain design decisions are more performant. Mark is an interesting coder and skilled at teaching. I recommend him to anyone.",
      rating: 5,
      writer: {
        name: "James Anderson",
        username: "Senior Developer",
        avatar_url: "https://www.gravatar.com/avatar/99ddc63b6ba2dc16b1f1155fab137ced?d=mm"
      }
    },
    {
      content: "Ive known about Mark for a while through his React courses, I reached out to him to help me start architecting an app I am building as a side project. He was awesome! I got answers to alot of the areas of this project that I was unfamiliar with and we planned out a way to get the project going.",
      rating: 5,
      writer: {
        name: "Thomas Anderson",
        username: "Tech Lead",
        avatar_url: "https://www.gravatar.com/avatar/c87983dea3f7efa12b1600c66eeb246b?d=mm"
      }
    },
    {
      content: "Mark has a wealth of knowledge and expertise that is hard to find. Perfect mentor in many ways: clear and concise communication, reliable and a great teacher. I highly recommend working with him if you need help.",
      rating: 5,
      writer: {
        name: "Jelena Grimshaw",
        username: "AI Developer",
        avatar_url: "https://www.gravatar.com/avatar/9af53de68b1cd6f6cd3e07aea629d8b1?d=mm"
      }
    }
  ]

  const scrollToContact = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-[720px]">
            <Pill color="green-500">
              5.0/5.0 Rating • 450+ Reviews
            </Pill>

            <h1 className="text-5xl lg:text-7xl font-bold mt-12 mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Custom AI<br />
              Development &<br />
              Integration<br />
              Services
            </h1>

            <p className="text-xl text-white/70 mb-16 max-w-xl">
              Transform your business with custom AI solutions. From LLM integration to workflow automation, I'll help you leverage cutting-edge AI technology for real results.
            </p>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Large Language Models</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Diffusion Models</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">GANs</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Custom ML Models</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Voice AI</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">AI Agents</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Medical AI</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Financial Models</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Business Intelligence</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">RAG Systems</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[500px] flex flex-col items-center text-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="/mark.jpg"
                alt="Mark Tellez - AI Development Expert"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-white/70 mt-8 text-lg">
              AI Researcher and Sr. Software Engineer specializing in custom AI model development. From medical diagnostics to financial forecasting, I build sophisticated AI solutions that drive real business outcomes.
            </p>
          </div>
        </div>

        <section className="space-y-32">
          {/* Language Models Section */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
              <CommandLineIcon className="w-8 h-8 text-purple-400" />
              Large Language Models & RAG
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Leverage the power of advanced language models with custom implementations and fine-tuning.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Custom LLM Integration</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Claude, DeepSeek, Qwen implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Model fine-tuning and optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Domain-specific knowledge integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">RAG Systems</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Enterprise knowledge base integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Intelligent document processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Context-aware response generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Generative AI Section */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
              <SparklesIcon className="w-8 h-8 text-purple-400" />
              Generative AI Models
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              State-of-the-art generative models for image, video, and content creation.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Diffusion Models</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Custom image generation systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Model fine-tuning for specific domains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Integration with business workflows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">GANs</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Advanced image synthesis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Data augmentation solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Style transfer applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Solutions Section */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
              <BeakerIcon className="w-8 h-8 text-purple-400" />
              Industry-Specific AI Solutions
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Custom AI models tailored for specific industry needs and challenges.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Medical AI</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Diagnostic assistance models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Patient data analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Treatment optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Financial AI</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Risk assessment models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Market prediction systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Fraud detection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Business AI</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Sales prediction models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Customer behavior analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Process optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voice & Agent Section */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
              <ServerIcon className="w-8 h-8 text-purple-400" />
              Voice AI & Intelligent Agents
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Advanced voice processing and autonomous agent systems.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Voice AI Systems</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Custom voice model development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Speech recognition optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Voice synthesis and cloning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">AI Agents</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Autonomous decision systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Multi-agent coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Intelligent task automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Testimonials testimonials={aiTestimonials} />
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper
            context="ai"
            heading="Let's Build Your AI Solution"
            subheading="Tell me about your project and I'll help you implement the right AI solution."
          />
        </div>
      </div>
    </main>
  )
} 