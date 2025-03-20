import { CodeBracketIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import CTAButton from '@/shared/components/cta-button'

export default function AIAdvantage() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Accelerate Your Career with AI-Powered Development
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Learn to leverage ChatGPT, Cursor, and AI tools to compete with senior developers
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-background border border-border rounded-lg">
            <SparklesIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-white">AI-Enhanced Productivity</h3>
            <p className="mt-2 text-gray-300 text-center">
              Master AI tools like ChatGPT and Cursor to write better code faster and solve complex problems efficiently
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-background border border-border rounded-lg">
            <CodeBracketIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-white">Modern Tech Stack Mastery</h3>
            <p className="mt-2 text-gray-300 text-center">
              Learn React, TypeScript, and Next.js while incorporating AI tools into your development workflow
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-background border border-border rounded-lg">
            <RocketLaunchIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-white">Competitive Edge</h3>
            <p className="mt-2 text-gray-300 text-center">
              Gain the skills to compete with senior developers by combining AI tools with solid engineering practices
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/contact">
            Start Learning AI-Powered Development
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
