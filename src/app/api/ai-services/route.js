export async function GET() {
  const data = {
    stats: {
      yearsExperience: 27, // 2024 - 1997
      aiRank: 8,
      productivityBoost: 70
    },
    benefits: [
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
    ],
    services: [
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
  }

  return Response.json(data)
} 