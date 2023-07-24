/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'as1.ftcdn.net',
            port: '',
            pathname: '/**/**',
          },
          {
            protocol: 'https',
            hostname: 'as2.ftcdn.net',
            port: '',
            pathname: '/**/**',
          },
        ],
      }
}

module.exports = nextConfig
