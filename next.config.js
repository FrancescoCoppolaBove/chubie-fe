/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { images: { layoutRaw: true } },
  env: {
    MORALIS_APP_ID: process.env.MORALIS_APP_ID,
    MORALIS_SERVER_URL: process.env.MORALIS_SERVER_URL,
    BASE_URL: `http://localhost:3000/`,
    mock: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
          /* { key: 'Accept', value: 'application/json' },
          { key: 'Content-Type', value: 'application/json' } */
        ]
      }
    ];
  }
};

module.exports = nextConfig;
