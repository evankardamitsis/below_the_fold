import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Handle CRO subdomain
  if (hostname?.includes('cro.belowthefold.gr')) {
    // Rewrite the URL to the subdomains folder
    const url = request.nextUrl.clone()
    
    // If it's the root path, redirect to the conversion boost sprint page
    if (url.pathname === '/') {
      url.pathname = '/subdomains/cro/conversion-boost-sprint'
      return NextResponse.rewrite(url)
    }
    
    // Allow navigation to main site by checking for specific paths
    if (url.pathname.startsWith('/_next') || 
        url.pathname.startsWith('/api') || 
        url.pathname.startsWith('/static') ||
        url.pathname.includes('belowthefold.gr')) {
      return NextResponse.next()
    }
    
    // For other paths, ensure they're under the subdomains/cro directory
    if (!url.pathname.startsWith('/subdomains/cro/')) {
      url.pathname = `/subdomains/cro${url.pathname}`
      return NextResponse.rewrite(url)
    }
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