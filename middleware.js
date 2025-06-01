import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api/secure-data')) {
    const token = req.headers.get('authorization');

    if (token !== 'Bearer mysecrettoken') {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/secure-data'],
};
