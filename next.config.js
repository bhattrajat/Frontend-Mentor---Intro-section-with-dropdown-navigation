/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: isProd
    ? '/Frontend-Mentor---Intro-section-with-dropdown-navigation'
    : '',
  assetPrefix: isProd
    ? '/Frontend-Mentor---Intro-section-with-dropdown-navigation'
    : '',
}
