import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  "i.ibb.co",
        // port: '',
        // pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
