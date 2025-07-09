/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // rất quan trọng để dùng `next export`
  basePath: '/hitori.github.io',
  assetPrefix: isProd ? '/hitori.github.io/' : '',
  images: {
    unoptimized: true, // vì Next export không hỗ trợ Image Optimization
  },
};

export default nextConfig;