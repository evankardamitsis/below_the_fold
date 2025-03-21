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
    // Rewrite all paths on the CRO subdomain to the landing page
    url.pathname = '/subdomains/cro/conversion-boost-sprint'
    return NextResponse.rewrite(url)
  }
  
  // Block access to subdomain content from main domain
  if (hostname === 'belowthefold.gr' && (
    url.pathname.startsWith('/cro') || 
    url.pathname.startsWith('/subdomains/cro')
  )) {
    return NextResponse.redirect(new URL('https://cro.belowthefold.gr', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 