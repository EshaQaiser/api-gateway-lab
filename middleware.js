import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.headers.get('authorization');

  console.log("🔐 Request received at:", request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/api/secure-data') {
    if (token === 'Bearer mysecrettoken') {
      return NextResponse.next();
    } else {
      console.log("❌ Unauthorized attempt. Redirecting...");
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/secure-data'],
};
