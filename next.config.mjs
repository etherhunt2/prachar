/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SMTP_EMAIL: process.env.SMTP_EMAIL,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    },
    output: "export",
    //distDir: 'dist',
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

