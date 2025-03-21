import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Handle CRO subdomain
  if (hostname?.includes('cro.belowthefold.gr')) {
    const url = request.nextUrl.clone()
    
    // Only allow specific paths for the subdomain
    if (url.pathname === '/' || url.pathname.startsWith('/conversion-boost-sprint')) {
      url.pathname = '/subdomains/cro/conversion-boost-sprint'
      return NextResponse.rewrite(url)
    }
    
    // Block all other paths on the subdomain
    return new NextResponse(null, { status: 404 })
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