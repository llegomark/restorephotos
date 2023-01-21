/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/llegomark/restorephotos",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/markllego",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;