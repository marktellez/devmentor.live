'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const DynamicCTAForm = dynamic(
  () => import('./dynamic/contact-form').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <div className="h-12 bg-white/5 rounded-lg mb-4"></div>
        <div className="h-12 bg-white/5 rounded-lg mb-4"></div>
        <div className="h-24 bg-white/5 rounded-lg mb-4"></div>
        <div className="h-12 bg-white/5 rounded-lg"></div>
      </div>
    )
  }
)

export default function CTAWrapper({ context, heading = "Let's Work Together", subheading = "Tell me about your goals and I'll help you get there." }) {
  const [step, setStep] = useState('form')
  const [pendingCode, setPendingCode] = useState(null)
  const [email, setEmail] = useState(null)
  const [isFromEmailLink, setIsFromEmailLink] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const codeFromUrl = params.get('code')
      const emailFromUrl = params.get('email')

      if (codeFromUrl && emailFromUrl) {
        setPendingCode(codeFromUrl)
        setEmail(emailFromUrl)
        setStep('verification')
        setIsFromEmailLink(true)

        // Clean up URL
        const newUrl = window.location.pathname + window.location.hash
        window.history.replaceState({}, '', newUrl)
      }
    }
  }, [])

  // Regular form submission for first window
  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          formData: {
            ...data,
            sourcePage: window.location.pathname,
            serviceContext: context
          }
        })
      })

      if (!response.ok) throw new Error('Failed to send verification email')
      setEmail(data.email) // Ensure email state is set
      setStep('verification')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send verification email. Please try again.')
    }
  }

  const handleVerification = async (code, email) => {
    try {
      console.log('Verifying with:', { code, email }) // Add logging here
      const response = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          email
        })
      })

      if (!response.ok) {
        throw new Error('Verification failed')
      }

      setStep('success')

      // Clean up URL
      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, '', newUrl)
    } catch (error) {
      console.error('Error:', error)
      alert('Verification failed. Please try again.')
    }
  }

  return (
    <div id="contact-form" className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-32 bg-purple-500/10 py-12 px-8 rounded-2xl border border-purple-500/20">
      {step === 'form' ? (
        <DynamicCTAForm
          context={context}
          heading={heading}
          subheading={subheading}
          step={step}
          onSubmit={handleFormSubmit}
          onVerify={handleVerification}
          pendingCode={pendingCode}
          isFromEmailLink={isFromEmailLink}
          email={email} // Pass email as a prop
        />
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Check your email to continue</h3>
          <p className="text-white/70">
            We have sent a verification code to your email. Please check your email and click the link to continue.
          </p>
        </div>
      )}
    </div>
  )
}