/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ⚠️ Nếu repo bạn là "hitori.github.io", thêm dòng sau:
  // basePath: '/hitori.github.io'
};

module.exports = nextConfig;
