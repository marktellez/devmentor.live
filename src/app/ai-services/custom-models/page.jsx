'use client'

import { motion } from 'framer-motion'

import CTA from '@/shared/components/cta'

export const metadata = {
  title: "Custom AI Model Development | Expert Machine Learning Solutions",
  description: "Expert development of custom AI models for classification, sentiment analysis, and predictive analytics. Transform your business with tailored machine learning solutions.",
}

export default function CustomModelsPage() {
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
            Custom AI Model Development
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Tailored AI solutions for your specific business challenges, from data preparation to deployment
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              Every business has unique challenges that off-the-shelf AI solutions can't fully address.
              Our custom AI model development service creates tailored solutions that perfectly match
              your specific needs, data, and business processes.
            </p>
          </div>
        </motion.div>

        {/* Model Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Specialized AI Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {modelTypes.map((model, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {model.description}
                </p>
                <ul className="text-white/70 list-disc list-inside space-y-2">
                  {model.applications.map((app, i) => (
                    <li key={i}>{app}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Development Process
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

        {/* Technical Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* CTA Section */}
        <CTA
          context="custom-models"
          title="Ready to Build Your Custom AI Solution?"
        />
      </div>
    </div>
  )
}

const modelTypes = [
  {
    title: "Classification Models",
    description: "Intelligent categorization systems that automatically organize and label your data.",
    applications: [
      "Document classification and routing",
      "Content moderation and filtering",
      "Product categorization",
      "Customer inquiry classification"
    ]
  },
  {
    title: "Sentiment Analysis",
    description: "Advanced models that understand and analyze emotional context in text.",
    applications: [
      "Customer feedback analysis",
      "Social media monitoring",
      "Brand perception tracking",
      "Customer service optimization"
    ]
  },
  {
    title: "Predictive Models",
    description: "AI systems that forecast outcomes and trends based on historical data.",
    applications: [
      "Sales forecasting",
      "Resource allocation",
      "Risk assessment",
      "Demand prediction"
    ]
  },
  {
    title: "Natural Language Processing",
    description: "Models that understand and process human language naturally.",
    applications: [
      "Text summarization",
      "Content generation",
      "Language translation",
      "Information extraction"
    ]
  }
]

const process = [
  {
    title: "Requirements Analysis",
    description: "We start by deeply understanding your business needs, data availability, and desired outcomes to design the perfect AI solution."
  },
  {
    title: "Data Assessment & Preparation",
    description: "Evaluate your data quality, perform necessary cleaning and preprocessing, and structure it for optimal model training."
  },
  {
    title: "Model Architecture Design",
    description: "Design a custom AI model architecture that's specifically tailored to your use case and performance requirements."
  },
  {
    title: "Training & Optimization",
    description: "Train the model using your prepared data, then optimize its performance through iterative testing and refinement."
  },
  {
    title: "Validation & Testing",
    description: "Rigorously test the model's performance and accuracy using real-world scenarios and data."
  },
  {
    title: "Deployment & Integration",
    description: "Deploy the model to your production environment and integrate it seamlessly with your existing systems."
  }
]

const capabilities = [
  {
    title: "Advanced ML Frameworks",
    description: "Expertise in TensorFlow, PyTorch, and other leading machine learning frameworks for optimal model development."
  },
  {
    title: "Cloud Integration",
    description: "Seamless deployment to major cloud platforms with scalable infrastructure and monitoring."
  },
  {
    title: "API Development",
    description: "Custom API development for easy integration with your existing systems and applications."
  }
] 