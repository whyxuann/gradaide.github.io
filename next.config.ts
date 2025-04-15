/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gradaide.github.io',
  assetPrefix: '/gradaide.github.io/',
  typescript: {
    ignoreBuildErrors: true,  // ← 忽略 TS 錯誤
  },
  eslint: {
    ignoreDuringBuilds: true, // ← 忽略 ESLint 錯誤
  },
};

export default nextConfig;



