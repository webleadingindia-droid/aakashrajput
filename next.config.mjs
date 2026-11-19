/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plain-apac-prod-public.komododecks.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.fpat2-6.fna.fbcdn.net",
        pathname: "/**",
      },
    ],
  },
  poweredByHeader: false,
};
export default nextConfig;