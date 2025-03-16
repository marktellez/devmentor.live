import { NextResponse } from 'next/server'

/** @param {import('next/server').NextRequest} request */
export function middleware(request) {
  const response = NextResponse.next()

  // Check if the request is for an image
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|gif|ico|svg)$/i)) {
    // Cache for 30 days with stale-while-revalidate
    const cacheControl = [
      'public',
      'max-age=2592000',
      'stale-while-revalidate=86400',
      's-maxage=2592000',
      'must-revalidate'
    ].join(', ')

    response.headers.set('Cache-Control', cacheControl)
    response.headers.set('Expires', new Date(Date.now() + 2592000000).toUTCString())
    response.headers.set('Pragma', 'public')
  }

  // Add cache headers for static assets (JS, CSS)
  if (request.nextUrl.pathname.startsWith('/_next/static/') || 
      request.nextUrl.pathname.startsWith('/_next/image')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Expires', new Date(Date.now() + 31536000000).toUTCString())
    response.headers.set('Pragma', 'public')
  }

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    '/_next/static/:path*',
    '/_next/image/:path*',
    '/images/:path*',
    '/musings/:path*'
  ]
} 