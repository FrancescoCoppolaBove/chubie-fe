/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  env: {
    BASE_URL: `http://localhost:3001/`
  },
  async headers() {
    return [{ source: '/(.*)', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] }];
  }
};

module.exports = nextConfig;
