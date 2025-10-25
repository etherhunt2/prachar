"use client";

import React, { useEffect, useState } from 'react'
import { FloatingIcon } from '../ui/floating-icon';
import { ThreeDText } from '../ui/3d-text';
import { MarketingIcons } from '../icons/marketing-icons';
import { randomRange, getRandomElement } from '@/lib/utils';
import { motion } from "framer-motion";
import ContactForm from '../ui/ContactForm';

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

const ContactPage = () => {

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
                                        icon={<Icon className="w-full h-full text-yellow-400/50" />}
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
                                gradient={false}
                            >
                                Contact Us
                            </ThreeDText>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-black flex">
                    <div className="container mx-auto px-4 gap-8 items-center justify-center">
                        <div className="flex flex-col gap-8">
                            {/* Form  */}
                            <ContactForm />
                            {/* Contact Information */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                                {/* Email */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L19 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Email Us</h3>
                                            <p className="text-gray-400">Get in touch via email</p>
                                        </div>
                                    </div>
                                    <a href="mailto:pracharbusinesss@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                        pracharbusinesss@gmail.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Call Us</h3>
                                            <p className="text-gray-400">Speak directly with our team</p>
                                        </div>
                                    </div>
                                    <a href="tel:+917973825465" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                        +91 797 382 5465
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                                            <p className="text-gray-400">Meet us at our office</p>
                                        </div>
                                    </div>
                                    <p className="text-yellow-400">
                                        #595, sec 8b, Chandigarh, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactPage