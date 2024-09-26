/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',  // Leave blank if there's no specific port
            pathname: '/products/images/**',  // This allows all images under the specific path
          },
        ],
      },
};

export default nextConfig;
