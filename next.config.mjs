const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    return config;
  },
};

module.exports = nextConfig;
