const {nextI18NextRewrites} = require('next-i18next/rewrites')

const localeSubpaths = {
    'fr-CA': 'fr'
}
module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      /* config options here */
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      trailingSlash: true,
      rewrites: async () => nextI18NextRewrites(localeSubpaths),
    }
    return nextConfig
  }