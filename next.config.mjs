/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/preview",
        destination: "/api/preview",
      },
    ];
  },
};

export default nextConfig;
