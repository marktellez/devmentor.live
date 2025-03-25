import React from 'react'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

export default function ResumeDownloads({ className = '' }) {
  return (
    <div className={`border border-purple-500/20 p-6 rounded-lg bg-gradient-to-br from-[#121212] to-[#1a1a1a] ${className}`}>
      <h2 className="text-2xl font-bold text-white mb-4">Download My Resume</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/mark-tellez-web-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors"
        >
          <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
          Download My Fullstack Focused Resume
        </a>
        <a
          href="/mark-tellez-ml-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors"
        >
          <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
          Download My ML/AI Focused Resume
        </a>
      </div>
    </div>
  )
}