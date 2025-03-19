import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'
import AutomationContent from './automation-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "AI-Powered Process Automation | Intelligent Workflows",
  description: "Transform your business operations with intelligent automation that thinks, learns, and adapts. Reduce manual tasks, eliminate errors, and operate more efficiently.",
  path: '/ai-services/automation'
})

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    sessions: sharedData.stats.sessions,
    rating: sharedData.stats.rating,
    reviews: sharedData.stats.reviews
  },
  automationTypes: [
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
  ],
  benefits: [
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
  ],
  process: [
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
}

export default function AutomationPage() {
  return <AutomationContent data={data} />
} 