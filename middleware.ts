import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Handle CRO subdomain
  if (hostname?.includes('cro.belowthefold.gr')) {
    // Rewrite the URL to the subdomains folder
    const url = request.nextUrl.clone()
    const pathname = url.pathname === '/' ? '/conversion-boost-sprint' : url.pathname
    url.pathname = `/subdomains/cro${pathname}`
    return NextResponse.rewrite(url)
  }

  // Continue with default behavior for main domain
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 