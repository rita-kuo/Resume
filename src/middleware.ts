import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales } from '@/i18n';

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.replace(
    new RegExp(`^/(${locales.join('|')})?`),
    '',
  );
  if (!pathname) {
    req.nextUrl.pathname = `/work-history`;
  }

  return createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'en',
  })(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*'],
};
