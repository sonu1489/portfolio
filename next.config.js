/** @type {import('next').NextConfig} */
;
const { i18n } = require("./next-i18next.config");


const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});
module.exports = withPWA({
    i18n,
    reactStrictMode: true,
    swcMinify: true, 
})


// module.exports = nextConfig

// const withPWA = require("next-pwa");
// module.exports = withPWA({
// 	pwa: {
// 		dest: "public",
// 		register: true,
//         disable: process.env.NODE_ENV ===      'development',
// 		skipWaiting: true,
// 	},
// });
// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   swcMinify: true, 
// }