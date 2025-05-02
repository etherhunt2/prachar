"use client";

import React, { useEffect, useState } from 'react'
import { FloatingIcon } from '../ui/floating-icon';
import { ThreeDText } from '../ui/3d-text';
import { MarketingIcons } from '../icons/marketing-icons';
import { randomRange, getRandomElement } from '@/lib/utils';
import { motion } from "framer-motion";
import Image from 'next/image';
import aditi from "@/public/Images/aditi.jpg";
import r from "@/public/Images/rahul.jpg";

const ICON_POSITIONS = [
    { x: '25%', y: '15%' },
    { x: '50%', y: '10%' },
    { x: '75%', y: '15%' },
    { x: '10%', y: '30%' },
    { x: '15%', y: '50%' },
    { x: '10%', y: '70%' },
    { x: '90%', y: '30%' },
    { x: '85%', y: '50%' },
    { x: '90%', y: '70%' },
    { x: '50%', y: '85%' },
];

const imageVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

const TeamPage = () => {

    const [iconPositions, setIconPositions] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const generatedPositions = ICON_POSITIONS.map((position, i) => {
            const xOffset = randomRange(-3, 3);
            const yOffset = randomRange(-3, 3);

            const x = `calc(${position.x} + ${xOffset}%)`;
            const y = `calc(${position.y} + ${yOffset}%)`;

            const size = getRandomElement(['sm', 'md']);

            const delay = randomRange(0, 20) / 10;
            const duration = randomRange(40, 60) / 10;

            return {
                key: `icon-${i}`,
                icon: getRandomElement(Object.keys(MarketingIcons)),
                x,
                y,
                size,
                delay,
                duration,
            };
        });

        setIconPositions(generatedPositions);
    }, []);

    return (
        <>
            <div className="about-page bg-black">
                {/* Hero Section with Floating Icons */}
                <section className="relative py-24 overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>

                    {/* Floating Icons Layer 1 */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="relative w-full h-full max-w-7xl mx-auto">
                            {isClient && iconPositions.slice(0, 5).map((item) => {
                                const Icon = MarketingIcons[item.icon];
                                return (
                                    <FloatingIcon
                                        key={item.key}
                                        icon={<Icon className="w-full h-full text-white/30" />}
                                        size={item.size}
                                        delay={item.delay}
                                        duration={item.duration}
                                        className="absolute"
                                        style={{ left: item.x, top: item.y }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Floating Icons Layer 2 */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="relative w-full h-full max-w-7xl mx-auto">
                            {isClient && iconPositions.slice(5).map((item) => {
                                const Icon = MarketingIcons[item.icon];
                                return (
                                    <FloatingIcon
                                        key={item.key}
                                        icon={<Icon className="w-full h-full text-mustard/50" />}
                                        size={item.size}
                                        delay={item.delay}
                                        duration={item.duration}
                                        className="absolute"
                                        style={{ left: item.x, top: item.y }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="relative z-10 mt-5 w-full max-w-4xl mx-auto text-center px-6">
                        <div className="container mx-auto">
                            <ThreeDText
                                elementType="h1"
                                className="text-5xl md:text-7xl font-extrabold mb-6"
                            >
                                Our Team
                            </ThreeDText>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 bg-black">
                    <div className="container mx-auto px-4 gap-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-full md:w-1/2 relative h-80 md:h-auto rounded-xl overflow-hidden perspective-800 border border-white/5 hover:border-yellow-300/30"
                            >
                                <motion.div
                                    variants={imageVariants}
                                    className="h-full"
                                >
                                    <Image
                                        src={aditi}
                                        alt='aditi'
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover w-full h-full"
                                        width={500}
                                        height={500}
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="w-full md:w-1/2 flex flex-col justify-center p-6 bg-black/50 rounded-xl border border-white/5"
                            >
                                <h3 className="text-2xl font-bold text-white mb-3">Aditi Sharma</h3>
                                <p className="text-mustard text-lg mb-4">Co-Founder, Prachar</p>
                                <p className="text-white/70 mb-4">
                                    With over 4 years of experience in client relationship management,
                                    business development, and sales, Aditi Sharma is the driving force behind building
                                    lasting partnerships at Prachar. Known for her exceptional communication skills and
                                    public speaking abilities, she has a natural talent for connecting with people.
                                    Aditi is currently focused on crafting effective growth strategies with a clear mission—to
                                    help every business reach the heights it truly deserves.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://www.linkedin.com/in/aditisharma21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-mustard hover:text-white transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/aditii.sharmaa21?igsh=MWMybmt0NzdoNG1lYQ==" className="text-mustard hover:text-white transition-colors">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-full md:w-1/2 relative h-80 md:h-auto rounded-xl overflow-hidden perspective-800 border border-white/5 hover:border-yellow-300/30"
                            >
                                <motion.div
                                    variants={imageVariants}
                                    className="h-full"
                                >
                                    <Image
                                        src={r}
                                        alt='rahul'
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover w-full h-full"
                                        width={500}
                                        height={500}
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="w-full md:w-1/2 flex flex-col justify-center p-6 bg-black/50 rounded-xl border border-white/5"
                            >
                                <h3 className="text-2xl font-bold text-white mb-3">Rahul Kareer</h3>
                                <p className="text-mustard text-lg mb-4">Co-Founder, Prachar</p>
                                <p className="text-white/70 mb-4">
                                    With over 4.5 years of experience in design, Rahul Kareer brings a deep understanding of motion graphics and
                                    CGI editing to the table. As the Co-Founder of Prachar, he has helped numerous brands enhance their digital
                                    presence through visually compelling content. His creative expertise and technical skills ensure every project
                                    stands out with a strong visual impact.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://www.linkedin.com/in/rahul-kareer09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-mustard hover:text-white transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/rahul_kareer08?igsh=MTBndWp0ZnpkOXliNA==" className="text-mustard hover:text-white transition-colors">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TeamPage