import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/resume/:locale/:path*',
        destination: '/:locale/resume/:path*',
        permanent: false
      }
    ];
  }
};

export default withNextIntl(nextConfig);
