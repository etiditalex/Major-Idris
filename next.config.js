/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/major-idris-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/major-idris-website' : ''
}

module.exports = nextConfig
