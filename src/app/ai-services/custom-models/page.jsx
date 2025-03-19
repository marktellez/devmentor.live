import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'
import CustomModelsContent from './custom-models-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "Custom AI Model Development | Tailored Solutions",
  description: "Tailored AI models designed for your specific business needs and use cases. From classification to computer vision, get custom models that solve your unique challenges.",
  path: '/ai-services/custom-models'
})

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    sessions: sharedData.stats.sessions,
    rating: sharedData.stats.rating,
    reviews: sharedData.stats.reviews
  },
  services: [
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
  ],
  process: [
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
}

export default function CustomModelsPage() {
  return <CustomModelsContent data={data} />
}