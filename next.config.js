// /** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     images: {
//       loader: 'imgix',
//       path: 'public/assets/portfolio.gif',
//       unoptimized: true,
//     },
//   },
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
//   output: "export"
// }

// module.exports = withPWA(nextConfig);
/** 
 * 
//  * @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     images: {
//       loader: 'imgix',
//       path: 'public/assets/portfolio.gif',
//       unoptimized: true,
//     },
//   },
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
//   // Remove this line to allow server-side image optimization
//   // output: "export",
// }

// module.exports = withPWA(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    unoptimized: true,
  },
};

// const withPWA = require("next-pwa")({
//   dest: "public",
//   runtimeCaching: require("next-pwa/cache"),
//   disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
// });

// module.exports = withPWA(nextConfig);
module.exports = nextConfig;
