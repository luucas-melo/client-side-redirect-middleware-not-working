import { NextApiRequest } from 'next';
import type { Session } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const routes: Record<string, string> = {
  '/public': 'public',
  '/protected': 'protected',
};

export async function middleware(req: NextRequest) {
  if (routes[req.nextUrl.pathname]) {
    const session = (await getToken({
      req: req as unknown as NextApiRequest,
      secret: 'secret-example',
      secureCookie: false,
    })) as Session;

    if (!session && req.nextUrl.pathname !== '/public') {
      return NextResponse.redirect('/public');
    }
  }

  return NextResponse.next();
}
