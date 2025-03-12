'use client'

import CTA from '@/shared/components/cta'

export default function ArticleCTA() {
  const scrollToCta = (e) => {
    e.preventDefault()
    const ctaElement = document.getElementById('cta')
    if (ctaElement) {
      const elementPosition = ctaElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 100

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="mt-16 -mx-6 sm:mx-0 pt-8 border-t border-white/10">
      <h3 className="text-2xl font-bold text-white mb-4">
        Don't let these challenges slow down your team
      </h3>
      <p className="text-white/70 mb-6">
        Let's discuss how to:
      </p>
      <ul className="list-disc list-inside text-white/70 mb-6">
        <li>Establish effective AI coding guidelines</li>
        <li>Create sustainable development practices</li>
        <li>Build reliable, maintainable systems</li>
        <li>Leverage AI without accumulating technical debt</li>
      </ul>
      <p className="text-white/70 mb-8">
        <a href="#cta" onClick={scrollToCta} className="hover:text-white transition-colors">
          Contact me
        </a> to develop a strategy that ensures your AI tools enhance, rather than undermine,
        your engineering practices. I work with teams of all sizes. My goal is to have AI improve
        our lives, not replace us or destroy our human value.
      </p>
      <CTA
        title="Let's Build Better Systems Together"
        context="article"
      />
    </div>
  )
}