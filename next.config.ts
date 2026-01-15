import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rodjendaonica-novi-sad.com',
          },
        ],
        destination: 'https://rodjendaonica-novi-sad.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
