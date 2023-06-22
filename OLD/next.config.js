/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeimg.pl",
      },
    ],
  },
};

module.exports = nextConfig;
