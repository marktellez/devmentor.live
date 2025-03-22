import { CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Hero Content Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Transform Your Development Career
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join hundreds of developers who have accelerated their careers through personalized mentorship.
            With over 26 years of experience and a perfect 5.0/5.0 rating, I'll help you master both traditional
            and AI-powered development techniques.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-32">
          {/* Web Development Mastery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><CodeBracketIcon className="w-8 h-8 text-purple-400" /> Web Development Mastery</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Since 1997, I've been crafting web applications and mentoring developers in the art of clean,
                functional programming. My expertise spans the entire modern web stack:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS'].map((tech) => (
                  <li key={tech} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-white/70">{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#cta" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Start Your Journey
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic flex items-center gap-2">
                  <Image
                    src="/mark.jpg"
                    alt="Mark - AI Developer and Mentor"
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-full object-cover border-2 border-purple-400/20"
                  />
                  Whether you're building a simple web app or a complex enterprise system,
                  I'll help you write better code using modern best practices and industry-proven patterns.
                </blockquote>
              </div>
            </div>
          </div>

          {/* AI-Powered Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">AI Programming Achievement</h4>
                    <p className="text-white/70">
                      <a
                        href="https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        Ranked 8th in CodeGame's Fantastic Bits AI Competition
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">70% productivity increase with AI tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Built a Text To Speech voice model that can replicate just about any voice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Built multiple chatbots with tool use and RAG abilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Completely Integrated my coding with AI (VibeCoding)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><RocketLaunchIcon className="w-8 h-8 text-green-400" /> AI-Powered Development Revolution</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                As an AI researcher and top-ranked programmer, I'll teach you how to leverage AI to transform
                your development workflow. Learn to use cutting-edge AI tools to:
              </p>
              <ul className="space-y-3">
                {[
                  'Automate repetitive coding tasks',
                  'Generate and debug code efficiently',
                  'Build AI-powered applications',
                  'Implement machine learning solutions'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personalized Learning */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><UserGroupIcon className="w-8 h-8 text-purple-400" /> Personalized Learning Journey</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                My mentorship approach is tailored to your goals and learning style. Get hands-on guidance through:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: '1-on-1 Live Sessions',
                    description: 'Interactive coding and real-time problem solving'
                  },
                  {
                    title: 'Code Reviews',
                    description: 'Detailed feedback on your code and architecture'
                  },
                  {
                    title: 'Recorded Sessions',
                    description: 'Review and reinforce your learning anytime'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-xl text-white/80 italic mb-6 flex items-center gap-2">
                  <Image
                    src="/mark.jpg"
                    alt="Mark - AI Developer and Mentor"
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-full object-cover border-2 border-purple-400/20"
                  /> 450+ satisfied developers have transformed their careers through my mentorship program.
                </blockquote>
                <div className="flex justify-center">
                  <a
                    href="#cta"
                    className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium"
                  >
                    Book Your First Session
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Level Up Your Development Career?</h3>
            <p className="text-lg text-white/80 mb-8">
              Join the ranks of successful developers who have transformed their careers through expert mentorship.
              Whether you're looking to master web development, integrate AI into your workflow, or accelerate your
              career growth, I'm here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium"
              >
                Start Your Journey
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 