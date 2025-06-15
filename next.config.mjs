import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/image-loader.ts',
    remotePatterns: [
      {
        hostname: 'a.storyblok.com',
        pathname: '*',
        protocol: 'https',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/preview',
        destination: '/api/preview',
      },
    ];
  },

  webpack(config) {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
};

export default nextConfig;
