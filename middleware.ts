import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Helper to get the hostname without www.
function getHostname(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  return hostname.replace(/^www\./, '')
}

export function middleware(request: NextRequest) {
  const hostname = getHostname(request)
  const url = request.nextUrl.clone()
  
  // Handle CRO subdomain
  if (hostname === 'cro.belowthefold.gr') {
    // Keep the /cro path structure but ensure we're on the subdomain
    if (!url.pathname.startsWith('/cro')) {
      url.pathname = '/cro' + (url.pathname === '/' ? '' : url.pathname)
    }
    return NextResponse.rewrite(url)
  }
  
  // Block access to subdomain content from main domain
  if (hostname === 'belowthefold.gr' && url.pathname.startsWith('/cro')) {
    return NextResponse.redirect(new URL('https://cro.belowthefold.gr' + url.pathname, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 