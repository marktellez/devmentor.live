'use client'

import { useState, useRef, useEffect } from 'react'

export default function DynamicCTA({
  context = '',
  heading,
  subheading,
  step = 'form',
  onSubmit,
  onVerify,
  pendingCode,
  isFromEmailLink,
  email // Receive email as a prop
}) {
  const [formData, setFormData] = useState({
    experience: '',
    interests: [],
    goals: '',
    email: '',
    serviceContext: context
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const digitRefs = useRef([...Array(6)].map(() => useRef(null)))
  const [verificationDigits, setVerificationDigits] = useState(['', '', '', '', '', ''])

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

  useEffect(() => {
    if (pendingCode && /^\d{6}$/.test(pendingCode)) {
      const digits = pendingCode.split('')
      setVerificationDigits(digits)
      setVerificationCode(pendingCode)
      // Focus the last input
      digitRefs.current[5]?.current?.focus()
    }
  }, [pendingCode])

  const handleInitialSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await onSubmit(formData)
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerificationSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await onVerify(verificationCode, email)
    } catch (err) {
      setError('Failed to verify code. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDigitChange = (index, value) => {
    setVerificationDigits(prev => {
      const newDigits = [...prev]
      newDigits[index] = value
      return newDigits
    })
  }

  const handleDigitKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      setVerificationDigits(prev => {
        const newDigits = [...prev]
        newDigits[index] = ''
        return newDigits
      })
    }
  }

  const handleDigitPaste = (index, e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim()

    // If it's a 6-digit number, distribute it across fields
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('')
      setVerificationDigits(digits)
      setVerificationCode(pastedData)
      // Focus the last input
      digitRefs.current[5]?.current?.focus()
    }
  }

  const isFormValid = () => {
    return (
      formData.experience !== '' && // Has selected an experience level
      formData.interests.length > 0 && // Has selected at least one interest
      formData.goals.trim() !== '' && // Has non-empty goals
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) // Valid email format
    )
  }

  if (step === 'success') {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
        <p className="text-white/70">
          I'll get back to you shortly to discuss how we can work together.
        </p>
      </div>
    )
  }

  if (step === 'verification') {
    return (
      <form onSubmit={handleVerificationSubmit} className="space-y-6 max-w-4xl mx-auto">
        <div>
          <label className="block text-sm font-medium mb-2">Enter Verification Code</label>
          {pendingCode ? (
            <p className="text-white/70 text-sm mb-4">
              We've filled in your verification code. Please complete the form first.
            </p>
          ) : (
            <p className="text-white/70 text-sm mb-4">
              Enter or paste the 6-digit code sent to your email
            </p>
          )}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                ref={digitRefs.current[index]}
                type="text"
                maxLength={1}
                value={verificationDigits[index]}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                onKeyDown={(e) => handleDigitKeyDown(index, e)}
                onPaste={(e) => handleDigitPaste(index, e)}
                className="w-12 h-12 text-center text-lg font-bold bg-[#121212] border border-white/10 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400"
                required
                inputMode="numeric"
                pattern="\d*"
                readOnly={!!pendingCode}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="text-red-400 text-sm text-center">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || verificationDigits.some(d => !d)}
          className={`w-full py-4 rounded-lg font-medium transition-colors duration-200 ${isSubmitting || verificationDigits.some(d => !d)
            ? 'bg-[#121212] border border-white/10 text-white/50 cursor-not-allowed'
            : 'bg-purple-500 hover:bg-purple-600 text-white'
            }`}
        >
          {isSubmitting ? 'Verifying...' : 'Verify Code'}
        </button>

        <p className="text-center text-white/50 text-sm">
          Didn't receive the code? <button type="button" onClick={() => window.location.reload()} className="text-green-400 hover:text-green-300">Try again</button>
        </p>
      </form>
    )
  }

  return (
    <form onSubmit={handleInitialSubmit} className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-white/70">{subheading}</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Experience Level</label>
        <div className="grid sm:grid-cols-3 gap-3">
          {experienceLevels.map(level => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({ ...formData, experience: level })}
              className={`p-3 text-sm rounded-lg transition-colors duration-200 ${formData.experience === level
                ? 'bg-purple-500 border border-purple-400 text-white'
                : 'bg-[#121212] border border-white/10 text-white/70 hover:bg-white/5'
                }`}
            >
              {level}
            </button>
          ))}
        </div>
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
              className={`p-3 text-sm rounded-lg transition-colors duration-200 ${formData.interests.includes(area)
                ? 'bg-purple-500 border border-purple-400 text-white'
                : 'bg-[#121212] border border-white/10 text-white/70 hover:bg-white/5'
                }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Goals</label>
        <textarea
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
          placeholder="What's your biggest business challenge? Let's solve it with AI..."
          className="w-full p-3 bg-[#121212] border border-white/10 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full p-3 bg-[#121212] border border-white/10 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          required
        />
      </div>

      {error && (
        <div className="text-red-400 text-sm text-center">{error}</div>
      )}

      <button
        type="submit"
        disabled={!isFormValid() || isSubmitting}
        className={`w-full py-4 rounded-lg font-medium transition-colors duration-200 ${!isFormValid() || isSubmitting
          ? 'bg-[#6b21a8] border border-white/10 text-white/50 cursor-not-allowed'
          : 'bg-purple-500 hover:bg-purple-600 text-white'
          }`}
      >
        {isSubmitting ? 'Sending...' : 'Get Started'}
      </button>
    </form>
  )
}
