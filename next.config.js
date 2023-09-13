/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    experimental: {
      appDir: true,
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;