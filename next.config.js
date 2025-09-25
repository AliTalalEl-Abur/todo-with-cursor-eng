/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow all hosts for Replit proxy environment
  experimental: {
    allowedRevalidateHeaderKeys: ['*'],
  },
  // Disable host checking for dev server
  async rewrites() {
    return []
  }
};

module.exports = nextConfig;