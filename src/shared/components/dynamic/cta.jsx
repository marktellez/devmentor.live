'use client'

import { useState } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useToast } from '@/shared/components/toast'
import { usePathname } from 'next/navigation'

export default function DynamicCTA({
  title = "Let's Find Your Path to AI-Powered Development",
  context = '', // e.g., 'custom-models', 'voice-ai', etc.
  id = 'cta'
}) {
  const { showToast } = useToast()
  const pathname = usePathname()
  const [formData, setFormData] = useState({
    experience: '',
    interests: [],
    goals: '',
    email: '',
    serviceContext: context, // Track which service page the inquiry came from
    sourcePage: pathname // Track which page the form was submitted from
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const experienceLevels = [
    'Beginner (0-2 years)',
    'Intermediate (2-5 years)',
    'Advanced (5+ years)'
  ]

  const interestAreas = [
    'Web Development',
    'AI Integration',
    'Machine Learning',
    'Voice AI',
    'Full Stack',
    'Cloud & DevOps'
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level'
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest'
    }

    if (!formData.goals.trim()) {
      newErrors.goals = 'Please tell us about your goals'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Store verification data when received
  const handleVerificationSent = (email, code) => {
    localStorage.setItem('verificationData', JSON.stringify({
      email,
      code,
      expires: Date.now() + 30 * 60 * 1000,
      formData
    }))
  }

  // Check verification data when verifying
  const getVerificationData = (email) => {
    const data = localStorage.getItem('verificationData')
    if (!data) return null

    const verification = JSON.parse(data)
    if (verification.email !== email || verification.expires < Date.now()) {
      localStorage.removeItem('verificationData')
      return null
    }

    return verification
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          formData
        }),
      })

      if (response.ok) {
        const { code } = await response.json()
        handleVerificationSent(formData.email, code)
        setShowVerification(true)
      } else {
        alert('Failed to send verification email. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const verification = getVerificationData(formData.email)
    if (!verification || verification.code !== verificationCode) {
      showToast('Invalid or expired verification code', 'error')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          code: verificationCode,
          formData: {
            ...verification.formData,
            sourcePage: pathname // Ensure we use the current page even if it changed
          }
        }),
      })

      if (response.ok) {
        localStorage.removeItem('verificationData')
        setShowSuccess(true)
      } else {
        const data = await response.json()
        showToast(data.error || 'Invalid verification code', 'error')
      }
    } catch (error) {
      console.error('Error:', error)
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = () => {
    return (
      formData.experience !== '' &&
      formData.interests.length > 0 &&
      formData.goals.trim() !== '' &&
      /\S+@\S+\.\S+/.test(formData.email)
    )
  }

  const getContextualPlaceholder = () => {
    switch (context) {
      case 'custom-models':
        return "Share your vision for AI - what unique challenges can we solve together?"
      case 'voice-ai':
        return "How would voice AI transform your user experience? Let's explore the possibilities..."
      case 'integration':
        return "What's holding your systems back? Let's unlock their full potential with AI..."
      case 'automation':
        return "Which repetitive tasks are draining your team's creativity? AI can help..."
      case 'ai-services':
        return "What's your biggest business challenge? Let's solve it with AI..."
      default:
        return "Tell me about your vision - what would you like to achieve?"
    }
  }

  const getContextualTitle = () => {
    if (!context) return title

    const titles = {
      'custom-models': 'Ready to Build Your Game-Changing AI Model?',
      'voice-ai': 'Ready to Give Your App a Voice?',
      'integration': 'Ready to Supercharge Your Systems with AI?',
      'automation': 'Ready to Automate Your Way to Success?',
      'ai-services': 'Ready to Transform Your Business with AI?'
    }

    return titles[context] || title
  }

  return (
    <LazyMotion features={domAnimation}>
      <section id={id} className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{getContextualTitle()}</h2>
            <p className="text-white/70 text-lg">
              Book a free consultation to discuss your goals and create a personalized learning path.
            </p>
          </motion.div>

          {!showSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              {!showVerification ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {experienceLevels.map(level => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, experience: level })}
                          className={`p-3 text-sm rounded-lg border transition-colors duration-200 ${
                            formData.experience === level
                              ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                              : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    {errors.experience && (
                      <p className="mt-2 text-sm text-red-400">{errors.experience}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Areas of Interest</label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {interestAreas.map(area => (
                        <button
                          key={area}
                          type="button"
                          onClick={() => {
                            const interests = formData.interests.includes(area)
                              ? formData.interests.filter(i => i !== area)
                              : [...formData.interests, area]
                            setFormData({ ...formData, interests })
                          }}
                          className={`p-3 text-sm rounded-lg border transition-colors duration-200 ${
                            formData.interests.includes(area)
                              ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                              : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                    {errors.interests && (
                      <p className="mt-2 text-sm text-red-400">{errors.interests}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Goals</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      placeholder={getContextualPlaceholder()}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    />
                    {errors.goals && <p className="mt-2 text-sm text-red-400">{errors.goals}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-200 ${
                      isSubmitting || !isFormValid()
                        ? 'bg-blue-500/50 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 active:transform active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Started'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyCode} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Verification Code</label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter the 6-digit code"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || verificationCode.length !== 6}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-200 ${
                      isSubmitting || verificationCode.length !== 6
                        ? 'bg-blue-500/50 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 active:transform active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify Code'}
                  </button>
                </form>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Thank You!</h3>
                <p className="text-white/70">
                  I'll review your information and get back to you within 24 hours with a personalized
                  plan and next steps.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </LazyMotion>
  )
}
