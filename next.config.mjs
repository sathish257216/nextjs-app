/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media-assets.swiggy.com',
                port: '',
                pathname: '/swiggy/image/upload/**',
              },
              {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
              },
              //'https://media-assets.swiggy.com', 'media-assets.swiggy.com', 'https://avatars.githubusercontent.com', 'avatars.githubusercontent.com'
            ],
    },
};

export default nextConfig;
