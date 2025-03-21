import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // Log every request for debugging
    console.log('🚀 Request:', { hostname, pathname });

    // Skip static files and API routes
    if (pathname.startsWith('/_next') || 
        pathname.startsWith('/images') || 
        pathname === '/favicon.ico') {
        console.log('📁 Skipping static file:', pathname);
        return NextResponse.next();
    }

    const PROD_DOMAIN = 'belowthefold.gr';
    const DEV_DOMAIN = 'localhost:3000';

    // Check if cro subdomain
    const isCroSubdomain = hostname.startsWith(`cro.${PROD_DOMAIN}`) || hostname.startsWith(`cro.${DEV_DOMAIN}`);

    if (isCroSubdomain) {
        console.log('✨ CRO Subdomain Detected:', hostname);
        console.log('📍 Original Path:', pathname);
        
        // Remove any trailing slashes except for root path
        const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
        
        // Rewrite to the CRO subdomain path with leading slash
        const rewrittenPath = cleanPath === '' ? '/cro' : `/cro${cleanPath}`;
        
        console.log('🔄 Rewriting to:', rewrittenPath);
        
        return NextResponse.rewrite(new URL(rewrittenPath, request.url));
    }

    // Default: Main site
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match all paths except static files
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
