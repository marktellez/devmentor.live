'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTA from '@/shared/components/cta'

export default function AutomationPage() {
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
            AI-Powered Process Automation
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Transform your business operations with intelligent automation that thinks, learns, and adapts
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              Move beyond simple automation to intelligent workflows that understand context,
              make decisions, and continuously improve. Our AI-powered automation solutions
              help businesses reduce manual tasks, eliminate errors, and operate more efficiently.
            </p>
          </div>
        </motion.div>

        {/* Automation Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Intelligent Automation Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {automationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {type.description}
                </p>
                <ul className="text-white/70 list-disc list-inside space-y-2">
                  {type.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Benefits of AI-Powered Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Implementation Approach
          </h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTA
          context="automation"
          title="Ready to Automate Your Business Processes?"
        />
      </div>
    </div>
  )
}

const automationTypes = [
  {
    title: "Document Processing Automation",
    description: "Intelligent systems that understand, extract, and process information from documents.",
    examples: [
      "Invoice processing and data extraction",
      "Contract analysis and management",
      "Form processing and validation",
      "Document classification and routing"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Smart workflows that adapt to changing conditions and make intelligent decisions.",
    examples: [
      "Approval process automation",
      "Task assignment and tracking",
      "Process optimization",
      "Exception handling"
    ]
  },
  {
    title: "Customer Service Automation",
    description: "AI-powered systems that handle customer interactions and support requests.",
    examples: [
      "Intelligent ticket routing",
      "Automated response generation",
      "Customer query classification",
      "Support workflow automation"
    ]
  },
  {
    title: "Data Processing Automation",
    description: "Automated systems for handling, analyzing, and acting on data.",
    examples: [
      "Data validation and cleaning",
      "Report generation and distribution",
      "Data analysis and insights",
      "Automated decision-making"
    ]
  }
]

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual tasks and processing time by up to 80% with intelligent automation that works 24/7."
  },
  {
    title: "Improved Accuracy",
    description: "Eliminate human errors and ensure consistent, high-quality results through AI-powered validation."
  },
  {
    title: "Cost Reduction",
    description: "Significantly reduce operational costs while improving scalability and processing capacity."
  },
  {
    title: "Better Insights",
    description: "Gain valuable insights from automated data collection and analysis of your processes."
  },
  {
    title: "Enhanced Compliance",
    description: "Ensure consistent regulatory compliance with automated checks and documentation."
  },
  {
    title: "Scalable Operations",
    description: "Easily scale your operations up or down without proportional increase in resources."
  }
]

const process = [
  {
    title: "Process Analysis",
    description: "Thoroughly analyze your current processes to identify automation opportunities and potential improvements."
  },
  {
    title: "Solution Design",
    description: "Design intelligent automation solutions that combine AI capabilities with your business rules and requirements."
  },
  {
    title: "AI Integration",
    description: "Integrate AI models for decision-making, document processing, and workflow optimization."
  },
  {
    title: "Automation Development",
    description: "Build and configure automated workflows with proper controls and exception handling."
  },
  {
    title: "Testing & Validation",
    description: "Rigorously test automated processes to ensure reliability and accuracy."
  },
  {
    title: "Deployment & Monitoring",
    description: "Deploy automation solutions with comprehensive monitoring and continuous improvement."
  }
] 