'use client'

export default function Footer() {
  return (
    <footer className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/web-dev-mentorship" className="text-white/70 hover:text-white transition-colors">
                  Web Development Mentorship
                </a>
              </li>
              <li>
                <a href="/ai-services" className="text-white/70 hover:text-white transition-colors">
                  AI Services
                </a>
              </li>
              <li>
                <a href="/ai-services/automation" className="text-white/70 hover:text-white transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="/ai-services/custom-models" className="text-white/70 hover:text-white transition-colors">
                  Custom AI Models
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/musings" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-white/70 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/marktellez" className="text-white/70 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/marktellez" className="text-white/70 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/marktellez" className="text-white/70 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:mark@devmentor.live" className="text-white/70 hover:text-white transition-colors">
                  mark@devmentor.live
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-white/70 hover:text-white transition-colors">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} DevMentor.live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 