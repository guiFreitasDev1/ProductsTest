/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["antd"],
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
