'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Interview Preparation', href: '/interview-preparation' },
    { name: 'Web Dev Mentorship', href: '/web-dev-mentorship' },
    { name: 'AI Mentorship', href: '/ai-services' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews', special: true },
  ]

  return (
    <header className={`relative sm:fixed sm:top-0 sm:left-0 sm:right-0 z-50 transition-colors duration-200 ${scrolled ? 'bg-black/70' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <a href="/" className="flex flex-col items-center sm:items-start">
            <div className="text-2xl tracking-tight">
              <span className="text-white font-normal">Devmentor</span>
              <span className="text-purple-400 font-semibold">Live</span>
            </div>
          </a>
          <nav className="flex items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.href} 
                    className={`${pathname === item.href ? 'text-green-400' : 'text-purple-400 hover:text-purple-300'} transition-colors`}
                  >
                    {item.name}
                  </a>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <div className="rounded-md ring-1 ring-white/10 ring-opacity-5 py-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className={`block px-4 py-2 text-sm ${pathname === child.href ? 'text-green-400' : 'text-purple-400 hover:text-purple-300'} hover:bg-white/10 transition-colors`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.special 
                      ? 'text-green-400 hover:text-green-300 border border-zinc-800 px-4 py-1.5 rounded-md bg-zinc-900/50' 
                      : pathname === item.href 
                        ? 'text-green-400' 
                        : 'text-purple-400 hover:text-purple-300'
                  } transition-colors`}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 