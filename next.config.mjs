import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/resume',
    output: 'standalone',
};

export default withNextIntl(nextConfig);