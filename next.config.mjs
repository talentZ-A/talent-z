/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the webpack configuration as it's causing CSS extraction issues
  webpack: (config) => {
    return config;
  },
};

export default nextConfig; 