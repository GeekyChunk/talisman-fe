/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        BASEAPI: process.env.BASEAPI,
    },
    env: {
        BASEAPI: process.env.BASEAPI,
    }
}

module.exports = nextConfig
