"use client";

import { motion } from 'framer-motion';
import { ThreeDText } from "../ui/3d-text";

const PortfolioGallery = () => {

    // Sample images - replace these with your actual images
    const images = [
        {
            id: 1,
            src: '/portfolio/5.png',
            alt: "ias",
            width: 800,
            height: 600,
            title: `Spectrum IAS Academy`,
            desc: `We've worked with Spectrum IAS Academy on scriptwriting and influencer marketing, crafting compelling content and collaborating with key influencers to boost their visibility and engagement with aspiring students.`,
            link: `https://www.facebook.com/SpectrumIasStudyCenter/ `
        },
        {
            id: 2,
            src: '/portfolio/7.png',
            alt: "isos",
            width: 800,
            height: 600,
            title: `Biology by Palak – Sector 20`,
            desc: `We are proud to partner with Biology by Palak, a leading biology coaching center in Sector 20, known for its expert guidance and outstanding student results. Our team handles their complete Social Media Management (SMM) and Ad Management, helping them grow their online presence, connect with more students, and build a strong, trusted brand in the education sector.We are proud to partner with Biology by Palak, a leading biology coaching center in Sector 20, known for its expert guidance and outstanding student results. Our team handles their complete Social Media Management (SMM) and Ad Management, helping them grow their online presence, connect with more students, and build a strong, trusted brand in the education sector.`,
            link: `https://www.instagram.com/biologybypalak/`
        },
        {
            id: 3,
            src: '/portfolio/6.png',
            alt: "belso",
            width: 800,
            height: 600,
            title: `Belso Ceramics`,
            desc: `We are proud to manage the Social Media Marketing (SMM) and Ad Management for Belso Ceramics, a premium name in high-quality ceramic products. Through strategic content, targeted campaigns, and strong online branding, we help Belso Ceramics expand their reach, connect with a wider audience, and showcase their craftsmanship to the world.`,
            link: `https://www.instagram.com/belsoceramicsmohali/`
        },
        {
            id: 4,
            src: '/portfolio/2.png',
            alt: "innovate",
            width: 800,
            height: 600,
            title: `Innovate Design`,
            desc: `We support Innovate Design with professional video editing and ad management services. Our team creates engaging, high-quality content and runs targeted ad campaigns to boost their reach and impact. By handling their media and marketing needs, we help Innovate Design stay focused on innovation and growth.`,
            link: `https://www.instagram.com/innovate.__design/`
        },
        {
            id: 5,
            src: '/portfolio/3.png',
            alt: "qualis",
            width: 800,
            height: 600,
            title: `Qualis`,
            desc: `We are excited to manage the Social Media Marketing (SMM) and Ad Management for Qualis, a brand dedicated to delivering excellence and innovation. Through impactful campaigns, creative content, and targeted strategies, we help Qualis strengthen its online presence, engage its audience, and drive consistent growth in a competitive market.`,
            link: `https://www.instagram.com/qualishomeware/`
        },
        {
            id: 6,
            src: '/portfolio/9.png',
            alt: "rms",
            width: 800,
            height: 600,
            title: `RMS Chandigarh`,
            desc: `We work with RMs Chandigarh to provide event management services for schools and colleges, ensuring smooth, memorable experiences. We also support them with professional reel editing, helping to capture and showcase their events with dynamic, high-quality video content that drives engagement and visibility.`,
            link: `https://www.instagram.com/rms_chandigarh/`
        },
        {
            id: 7,
            src: '/portfolio/8.png',
            alt: "Swadika Delight",
            width: 800,
            height: 600,
            title: `Swaadika Delights`,
            desc: `We helped Swaadika Delights create a unique logo, develop their branding, and packaging design a complete visual identity that reflects their values and vision. Our work ensures they stand out with a cohesive and professional look across all platforms.`,
            link: `https://www.instagram.com/swaadika.delights/`
        },
        {
            id: 8,
            src: '/portfolio/4.png',
            alt: "Fresh Kart",
            width: 800,
            height: 600,
            title: `Freshkart`,
            desc: `We created a dynamic video for Freshkart, showcasing their products and brand story. Our video helped highlight their unique offerings and connect with their target audience, enhancing their marketing efforts`,
            link: `https://www.instagram.com/freshkart.india?igsh=MXA4cGdubjg4YjR3aQ%3D%3D`
        },
        {
            id: 9,
            src: '/portfolio/1.png',
            alt: "Swadika Mohali",
            width: 800,
            height: 600,
            title: `Swaadika`,
            desc: `We helped Swaadika create a unique logo, develop their branding, and menu design a complete visual identity that reflects their values and vision. Our work ensures they stand out with a cohesive and professional look across all platforms.`,
            link: `https://www.instagram.com/swaadika_mohali?igsh=MTNrY3gzdXhyY3N3`
        }
    ];

    // Custom CSS for image hover shadow
    const imageHoverStyle = `
        .portfolio-image-box:hover {
            box-shadow: 6px 6px 10px 4px rgb(234 179 8 / 70%);
        }
    `;

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            {/* Add style tag for custom CSS */}
            <style jsx>{imageHoverStyle}</style>

            <div className="flex mx-auto text-center">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <ThreeDText
                            elementType="h2"
                            gradient={false}
                            className="text-2xl sm:text-3xl md:text-7xl font-extrabold hero-heading"
                        >
                            Our Clients
                        </ThreeDText>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="portfolio-image-box flex flex-col bg-gray-950 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col items-center text-center flex-grow">
                                    <h3 className="text-xl font-bold mb-3 text-white">{image.title}</h3>
                                    <p className="text-white/80 mb-5 line-clamp-4">{image.desc}</p>
                                    <div className="mt-auto">
                                        <a
                                            href={image.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-2 bg-yellow-500 text-blue-900 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                                        >
                                            Visit Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;