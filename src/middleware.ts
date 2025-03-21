import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    const PROD_DOMAIN = 'belowthefold.gr';
    const DEV_DOMAIN = 'localhost:3000';

    // Check if cro subdomain
    const isCroSubdomain = hostname.startsWith(`cro.${PROD_DOMAIN}`) || hostname.startsWith(`cro.${DEV_DOMAIN}`);

    if (isCroSubdomain) {
        console.log('✨ CRO Subdomain Detected:', hostname);

        // Force all paths to point to /_subdomains/cro
        const newUrl = request.nextUrl.clone();
        newUrl.pathname = `/_subdomains/cro${pathname === '/' ? '' : pathname}`;

        console.log(`🔄 Rewriting to ${newUrl.pathname}`);
        return NextResponse.rewrite(newUrl);
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
