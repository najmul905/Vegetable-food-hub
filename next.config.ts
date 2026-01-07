import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  "i.ibb.co.com",
        pathname:"/**",
        // port: '',
        // pathname: '/my-bucket/**',
        search: '',
      },
      {
        protocol:'https',
        hostname:"i.ibb.co",
        search:''

      }
    ],
  },
};

export default nextConfig;
