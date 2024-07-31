import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const jwt = request.nextUrl.searchParams.get('jwt');
  if (jwt) {
    cookies().set('jwt', jwt, { path: '/' });
  }
  return NextResponse.redirect(new URL('/', request.url));
}
