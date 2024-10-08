/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            // aca anotaremos las url donde cargaremos las imagenes autorizandolas para que funcionen con nextjs
        },
    ]
}
};

export default nextConfig;
