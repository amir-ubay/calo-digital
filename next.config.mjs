/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  env: {
    SANITY_PROJECT_ID: "9mwbesq4",
    SANITY_DATASET: "production",
  }
};

export default nextConfig;
