'use client'

import { Suspense } from 'react'

export default function LoadingWrapper({ children, fallback }) {
  return (
    <Suspense fallback={fallback || <DefaultLoadingState />}>
      {children}
    </Suspense>
  )
}

function DefaultLoadingState() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center">
      <div className="animate-pulse bg-white/5 rounded-lg p-8">
        <div className="h-6 w-32 bg-white/10 rounded mb-4"></div>
        <div className="h-4 w-48 bg-white/10 rounded"></div>
      </div>
    </div>
  )
}
