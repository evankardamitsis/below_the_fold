import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  const domain = 'belowthefold.gr';

  // Subdomain handling: specific cases
  if (hostname === `cro.${domain}`) {
    url.pathname = `/_subdomains/cro${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === `blog.${domain}`) {
    url.pathname = `/_subdomains/blog${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default: Main domain behavior
  return NextResponse.next();
}
