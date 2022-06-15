/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { images: { layoutRaw: true } },
  env: {
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
