'use client'

import { motion } from 'framer-motion'
import CTA from '@/shared/components/cta'

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
            Tailored AI models designed for your specific business needs and use cases
          </p>
          <div className="prose prose-lg prose-invert">
            <p>
              From data preparation to deployment, we develop custom AI models that solve
              your unique business challenges. Whether you need classification, prediction,
              or specialized AI capabilities, our expertise ensures you get precise,
              production-ready solutions.
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Custom AI Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70">
                  {service.description}
                </p>
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

        {/* CTA Section */}
        <CTA
          context="custom-models"
          title="Ready to Build Your Custom AI Model?"
        />
      </div>
    </div>
  )
}

const services = [
  {
    title: "Classification Models",
    description: "Custom models for categorizing text, images, or data points with high accuracy and specific domain knowledge."
  },
  {
    title: "Prediction Models",
    description: "Advanced predictive models that analyze patterns in your data to forecast trends and outcomes."
  },
  {
    title: "Natural Language Processing",
    description: "Specialized NLP models for text analysis, sentiment detection, and language understanding tasks."
  },
  {
    title: "Computer Vision Models",
    description: "Custom vision models for image recognition, object detection, and visual analysis tasks."
  }
]

const process = [
  {
    title: "Requirements Analysis",
    description: "Deep dive into your business needs, use cases, and desired outcomes to define clear model objectives."
  },
  {
    title: "Data Assessment",
    description: "Evaluate available data, identify gaps, and develop data preparation strategies for optimal model training."
  },
  {
    title: "Model Architecture",
    description: "Design and select the most appropriate model architecture and algorithms for your specific use case."
  },
  {
    title: "Development & Training",
    description: "Iterative development process with continuous testing and refinement to achieve desired performance metrics."
  },
  {
    title: "Validation & Testing",
    description: "Rigorous validation using real-world scenarios to ensure model reliability and accuracy."
  },
  {
    title: "Deployment & Integration",
    description: "Seamless deployment with proper monitoring and maintenance plans for production environments."
  }
]