/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows static assets without external optimization server if desired
  },
};

export default nextConfig;
