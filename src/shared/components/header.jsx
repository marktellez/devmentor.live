export default function Header() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    {
      name: 'AI Services',
      href: '/ai-services',
      children: [
        {
          name: 'Custom AI Models',
          description: 'Tailored AI models for your specific business needs',
          href: '/ai-services/custom-models',
        },
        {
          name: 'Voice AI Solutions',
          description: 'Custom voice models and text-to-speech applications',
          href: '/ai-services/voice-ai',
        },
        {
          name: 'Intelligent Automation',
          description: 'AI-powered process automation solutions',
          href: '/ai-services/automation',
        },
      ],
    },
  ]

  return (
    <header className="relative sm:fixed sm:top-0 sm:left-0 sm:right-0 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <a href="/" className="flex flex-col items-center sm:items-start">
            <div className="text-2xl tracking-tight">
              <span className="text-white font-normal">Mark</span>
              <span className="text-accent font-semibold">Tellez</span>
              <span className="ml-3 text-xs">Devmentor</span><span className="font-bold text-xs">LIVE</span>
            </div>

          </a>
          <nav className="flex gap-4 sm:gap-8 text-sm sm:text-base">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative group">
                  <a href={item.href} className="text-white/70 hover:text-white">
                    {item.name}
                  </a>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <div className="rounded-md ring-1 ring-white/10 ring-opacity-5 py-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10"
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
                  className="text-white/70 hover:text-white"
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