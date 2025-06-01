import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.headers.get('authorization');

  // ✅ Logging request path
  console.log("Request received at:", request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/api/secure-data') {
    if (token === 'Bearer mysecrettoken') {
      return NextResponse.next();
    } else {
      // ✅ Redirecting to error page instead of 401 response
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

// Match only the secure route
export const config = {
  matcher: '/api/secure-data',
};
