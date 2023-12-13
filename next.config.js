/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "strapi.server916785.nazwa.pl", port: "" },
    ],
  },
};

module.exports = nextConfig;
