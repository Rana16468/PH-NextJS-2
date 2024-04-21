/** @type {import('next').NextConfig} */

//https://nextjs.org/docs/app/api-reference/components/image
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
