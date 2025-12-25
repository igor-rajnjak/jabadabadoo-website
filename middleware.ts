import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Only redirect if hostname starts with www. and we're not already on non-www
  if (hostname.startsWith('www.')) {
    const newHostname = hostname.replace('www.', '');
    const url = request.nextUrl.clone();
    
    // Build absolute URL with protocol
    const protocol = request.nextUrl.protocol || 'https:';
    const newUrl = `${protocol}//${newHostname}${request.nextUrl.pathname}${request.nextUrl.search}`;
    
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file, with or without query params)
     * - images, icons, etc. (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
};

