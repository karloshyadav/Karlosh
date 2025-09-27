/** @type {import('next').NextConfig} */

import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
    ],
  },
};

export default withPWA({
  dest: "public",
  cacheOnFrontEndNavCaching: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
})(nextConfig);
