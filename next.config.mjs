/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: [
            'images.unsplash.com',
            'upload.wikimedia.org',
            'raw.githubusercontent.com',
            'unsplash.com'
        ],
    },
};

export default nextConfig;

