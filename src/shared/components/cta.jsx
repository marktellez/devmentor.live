'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@/shared/components/toast'
import { usePathname } from 'next/navigation'

export default function CTA({
  title = "Let's Find Your Path to AI-Powered Development",
  context = '', // e.g., 'custom-models', 'voice-ai', etc.
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
        return "Tell me about the type of AI model you need and your data situation..."
      case 'voice-ai':
        return "Tell me about your voice AI needs (custom voices, text-to-speech, etc)..."
      case 'integration':
        return "Tell me about your existing systems and AI integration goals..."
      case 'automation':
        return "Tell me about the processes you'd like to automate with AI..."
      default:
        return "Tell me about what you'd like to achieve..."
    }
  }

  const getContextualTitle = () => {
    if (!context) return title

    const titles = {
      'custom-models': 'Ready to Build Your Custom AI Model?',
      'voice-ai': 'Ready to Give Your Application a Voice?',
      'integration': 'Ready to Integrate AI Into Your Systems?',
      'automation': 'Ready to Automate with AI?'
    }

    return titles[context] || title
  }

  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="container mx-auto px-0 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white/[0.02] border-0 sm:border sm:border-white/10 rounded-none sm:rounded-lg p-6 sm:p-12"
        >
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Thanks for Reaching Out!
              </h2>
              <p className="text-white/70 text-lg mb-8">
                I'll be in touch soon to discuss how we can work together to achieve your goals.
              </p>
              <div className="w-16 h-16 mx-auto mb-6">
                <svg
                  className="w-full h-full text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 px-4 sm:px-0">
                {getContextualTitle()}
              </h2>

              {!showVerification ? (
                <form onSubmit={handleSubmit} className="space-y-8 px-4 sm:px-0">
                  <div>
                    <label className="block text-white mb-3">Your Experience Level</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => {
                        setFormData({ ...formData, experience: e.target.value })
                        setErrors({ ...errors, experience: undefined })
                      }}
                      className={`w-full appearance-none bg-[#121212] rounded-lg px-4 py-3 text-white 
                        focus:outline-none 
                        ${errors.experience ? 'ring-2 ring-red-500/50' : ''}
                        [&>option]:border-0 [&>option]:outline-none [&>option]:bg-[#121212] [&>option]:text-white`}
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                      required
                    >
                      <option value="" className="border-0 outline-none bg-[#121212] text-white/50">Select your experience level</option>
                      {experienceLevels.map(level => (
                        <option 
                          key={level} 
                          value={level} 
                          className="border-0 outline-none bg-[#121212] text-white"
                        >
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p className="mt-2 text-sm text-red-500">{errors.experience}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-3">Areas of Interest (Select at least one)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {interestAreas.map(area => (
                        <label key={area} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(area)}
                            onChange={(e) => {
                              const newInterests = e.target.checked
                                ? [...formData.interests, area]
                                : formData.interests.filter(i => i !== area)
                              setFormData({ ...formData, interests: newInterests })
                              setErrors({ ...errors, interests: undefined })
                            }}
                            className={`rounded border-white/10 bg-white/5 ${errors.interests ? 'border-red-500' : ''}`}
                          />
                          <span className="text-white/70">{area}</span>
                        </label>
                      ))}
                    </div>
                    {errors.interests && (
                      <p className="mt-2 text-sm text-red-500">{errors.interests}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-3">What are your main goals?</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => {
                        setFormData({ ...formData, goals: e.target.value })
                        setErrors({ ...errors, goals: undefined })
                      }}
                      className={`w-full bg-white/5 border ${errors.goals ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white`}
                      rows={4}
                      placeholder={getContextualPlaceholder()}
                      required
                    />
                    {errors.goals && (
                      <p className="mt-2 text-sm text-red-500">{errors.goals}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-3">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        setErrors({ ...errors, email: undefined })
                      }}
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white`}
                      placeholder="you@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors 
                      ${(isSubmitting || !isFormValid()) ? 'opacity-50 cursor-not-allowed bg-gray-500 hover:bg-gray-500' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Start Your Journey'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyCode} className="space-y-8 px-4 sm:px-0">
                  <div>
                    <label className="block text-white mb-3">Enter Verification Code</label>
                    <p className="text-white/70 text-sm mb-4">
                      We've sent a verification code to your email. Please enter it below.
                    </p>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      placeholder="Enter code"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !verificationCode}
                    className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors 
                      ${(isSubmitting || !verificationCode) ? 'opacity-50 cursor-not-allowed bg-gray-500 hover:bg-gray-500' : ''}`}
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify Email'}
                  </button>
                </form>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
} 