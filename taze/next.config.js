/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'taze.test',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
