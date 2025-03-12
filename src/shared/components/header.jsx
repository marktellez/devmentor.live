'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Interview Preparation', href: '/interview-preparation' },
    { name: 'Web Dev Mentorship', href: '/web-dev-mentorship' },
    { name: 'AI Mentorship', href: '/ai-services' },
    {
      name: 'Musings',
      href: '/musings',
      current: pathname === '/musings' || pathname.startsWith('/musings/')
    },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews', special: true },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${scrolled ? 'bg-black' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="text-2xl tracking-tight">
              <span className="text-white font-normal">Devmentor</span>
              <span className="text-purple-400 font-semibold">Live</span>
            </div>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${item.special
                  ? 'text-green-400 hover:text-green-300 border border-zinc-800 px-4 py-1.5 rounded-md bg-zinc-900/50'
                  : pathname === item.href
                    ? 'text-green-400'
                    : 'text-purple-400 hover:text-purple-300'
                  } transition-colors`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-zinc-800 bg-black">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${item.special
                      ? 'text-green-400 hover:text-green-300 border border-zinc-800 px-4 py-1.5 rounded-md bg-zinc-900/50'
                      : pathname === item.href
                        ? 'text-green-400'
                        : 'text-purple-400 hover:text-purple-300'
                    } transition-colors px-4`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 