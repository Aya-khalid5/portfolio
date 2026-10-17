/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No remote images are used; all project/certificate images are local
    // placeholders under /public that the user will replace later.
    unoptimized: false,
  },
};

export default nextConfig;
