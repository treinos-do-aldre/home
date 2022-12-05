/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    ENABLE_DEV_OPTIONS: Boolean(process.env.ENABLE_DEV_OPTIONS)
  }
}

module.exports = nextConfig
