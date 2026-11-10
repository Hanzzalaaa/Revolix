/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'revolixtech.com',
          },
        ],
        destination: 'https://www.revolixtech.com/:path*',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/backend-deve',
        destination: '/backend-development',
        permanent: true,
      },
      {
        source: '/backend-developer',
        destination: '/backend-development',
        permanent: true,
      },
      {
        source: '/frontend-developer',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/best-institute-for-web-development',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ai-software-development-company',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
