'use client'

import { useRef } from 'react'

export default function ScrollButton({ children, className }) {
  const scrollToCta = (e) => {
    e.preventDefault()
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#contact-form"
      onClick={scrollToCta}
      className={`${className} hover:scale-105 active:scale-95 transition-transform duration-200`}
    >
      {children}
    </a>
  )
} 