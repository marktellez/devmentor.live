'use client'

import PageLayout from '@/shared/components/page-layout'
import CTA from '@/shared/components/cta'

export default function PageContent({ yearsExperience }) {
  return (
    <>
      <PageLayout
        badge={`${yearsExperience}+ Years Experience • AI Specialist • Technical Leader`}
        title="Hire a Senior Developer & AI Expert"
        subtitle="Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Let's discuss how I can add value to your team."
        className="grid lg:grid-cols-2 gap-8 mt-16"
      >
        <div className="space-y-8">
          <FeatureBox
            title="Technical Leadership"
            items={[
              'Architecture design & implementation',
              'Team mentorship & growth',
              'Code quality & best practices',
              'Technical decision making',
            ]}
          />
          <FeatureBox
            title="AI Expertise"
            items={[
              'AI integration strategies',
              'Custom AI model development',
              'LLM implementation',
              'AI-powered automation',
            ]}
          />
        </div>

        <div className="space-y-8">
          <FeatureBox
            title="Core Technologies"
            items={[
              'JavaScript/TypeScript',
              'React & Next.js',
              'Node.js',
              'Python for AI/ML',
            ]}
          />
          <FeatureBox
            title="Previous Clients"
            items={[
              'PayPal',
              'Intel',
              'GEICO',
              'VoxBird.ai (Current)',
            ]}
          />
        </div>
      </PageLayout>

      <CTA
        title="Let's Discuss Your Project Needs"
        context="hire-developer"
      />
    </>
  )
}

function FeatureBox({ title, items }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <ul className="text-white/70 space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}