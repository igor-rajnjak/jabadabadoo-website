import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Temporarily disabled to fix redirect loop
  // TODO: Check if Vercel already handles www redirect at DNS level
  // If not, re-enable this with proper URL construction
  
  // const hostname = request.headers.get('host') || '';
  // if (hostname.startsWith('www.')) {
  //   const newHostname = hostname.replace('www.', '');
  //   const url = request.nextUrl.clone();
  //   url.hostname = newHostname;
  //   return NextResponse.redirect(url, { status: 301 });
  // }

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

