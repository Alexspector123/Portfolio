/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // ✅ bỏ '/hitori.github.io'
  assetPrefix: '', // ✅ bỏ prefix
  images: {
    unoptimized: true,
  },
};

export default nextConfig;