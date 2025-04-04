'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container mx-auto px-4 py-8 sm:py-12 border-t border-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-sm font-medium mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              I help developers become AI-powered full-stack engineers through 1-on-1 mentoring.
              Master modern web development while learning to leverage AI tools and ML to accelerate your career.
            </p>
          </div>
          <div className="sm:text-center lg:text-left">
            <h3 className="text-white text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/hire-senior-developer" className="text-gray-400 hover:text-accent text-sm">
                  Hire Me for coding or ML
                </a>
              </li>
              <li>
                <a href="/ai-services" className="text-gray-400 hover:text-accent text-sm">
                  AI Services
                </a>
              </li>
              <li>
                <a href="/interview-preparation" className="text-gray-400 hover:text-accent text-sm">
                  Interview Preparation
                </a>
              </li>
              <li>
                <a href="/web-dev-mentorship" className="text-gray-400 hover:text-accent text-sm">
                  Developer Mentorship
                </a>
              </li>
              <li>
                <a href="/musings" className="text-gray-400 hover:text-accent text-sm">
                  Musings on the Industry
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-accent text-sm">
                  About Mark Tellez
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-center lg:text-left">
            <h3 className="text-white text-sm font-medium mb-4">My Resume</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mark-tellez-ml-resume.pdf"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="/mark-tellez-web-resume.pdf"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-center lg:text-left">
            <h3 className="text-white text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/marktellez"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.codementor.io/@marktellez"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                  Codementor
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mark-tellez-bbb774315/"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} DevmentorLive. All rights reserved.
            <span className="mx-2">•</span>
            <a href="/terms" className="hover:text-accent">Terms</a>
            <span className="mx-2">•</span>
            <a href="/privacy" className="hover:text-accent">Privacy</a>
            <span className="mx-2">•</span>
            <a href="/cookies" className="hover:text-accent">Cookies</a>
            <span className="mx-2">•</span>
            <a
              href="https://marktellez.com"
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire an Expert Programmer and AI Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 
