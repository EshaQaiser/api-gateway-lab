// Middleware for token validation
import { NextResponse } from 'next/server';

// Define which paths this middleware should run on
export const config = {
  matcher: ['/api/secure-data'],
};

export default function middleware(request) {
  // Get the authorization header
  const authHeader = request.headers.get('authorization');

  console.log(`[Middleware] Request to ${request.url}`);
  console.log(`[Middleware] Authorization: ${authHeader || 'None'}`);

  // Check if the token exists and is valid
  if (!authHeader || authHeader !== 'Bearer valid-token-123') {
    console.log('[Middleware] Invalid token - Access denied');
    // Respond with 401 Unauthorized if token is invalid or missing
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // If token is valid, continue with the request
  return NextResponse.next();
}
