import { NextResponse } from 'next/server'

/** @param {import('next/server').NextRequest} request */
export function middleware(request) {
  const response = NextResponse.next()

  // Check if the request is for an image
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|gif|ico|svg)$/i)) {
    // Cache for 30 days
    response.headers.set('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400')
    response.headers.set('Expires', new Date(Date.now() + 2592000000).toUTCString())
  }

  // Add cache headers for static assets (JS, CSS)
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    // Match all files in the public directory
    '/(.*).(jpg|jpeg|png|webp|gif|ico|svg)',
    // Match all static files
    '/_next/static/:path*'
  ],
} 