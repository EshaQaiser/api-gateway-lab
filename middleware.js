import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Only run middleware on specific route
  if (pathname.startsWith('/api/secure-data')) {
    const token = req.headers.get('authorization');

    // ❌ If token is invalid or missing, redirect
    if (token !== 'Bearer mysecrettoken') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  // ✅ Allow request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/secure-data'],
};
