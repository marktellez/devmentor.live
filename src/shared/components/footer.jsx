'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-accent/10 py-8 sm:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="w-16 h-16 rounded-full bg-accent" />
            <a href="https://voxbird.ai" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Voxbird</h3>
              <p className="text-base sm:text-lg font-medium text-white">
                Train a voice model to speak for you, and then put it to work!
              </p>
              <p className="text-sm text-white/80 mt-2">Featuring technology built by Mark Tellez.</p>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-sm font-medium mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              I help developers become AI-powered full-stack engineers through 1-on-1 mentoring.
              Master modern web development while learning to leverage AI tools and ML to accelerate your career.
            </p>
          </div>
          <div className="sm:text-center lg:text-left">
            <h3 className="text-white text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-accent text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-accent text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-accent text-sm">
                  Terms of Service
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
                  href="https://x.com/agenticmark"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://marktellez.com"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                  </svg>
                  Personal Website
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
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
                  </svg>
                  Codementor
                </a>
              </li>
              <li>
                <a
                  href="https://voxbird.ai"
                  className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                  </svg>
                  VoxBird.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} DevmentorLive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 