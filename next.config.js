/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: process.env.STORAGE, port: "" },
    ],
  },
};

module.exports = nextConfig;
