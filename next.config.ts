import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Quan trọng để static export
  distDir: 'out', // Thư mục xuất ra sau khi build
  images: {
    unoptimized: true, // Bắt buộc khi dùng `output: export`
  },
  basePath: '', // Với github.io repo chính thì để rỗng
};

export default nextConfig;