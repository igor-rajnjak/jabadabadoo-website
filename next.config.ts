import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WWW redirect je postavljen na Vercel platform-level
  // Ne treba duplirati u Next.js config-u
  async redirects() {
    return [
      {
        source: "/igraonica",
        destination: "/igraonica-i-kafic",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
