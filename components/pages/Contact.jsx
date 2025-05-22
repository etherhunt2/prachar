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
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Contact Detail Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-full md:w-1/2 relative h-80 md:h-auto rounded-xl overflow-hidden perspective-800 border border-white/5 hover:border-yellow-300/30"
                            >
                                <div className="p-8 flex flex-col h-full items-center justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-6" gradient={false}>Contact Information</h3>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mustard mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="text-white/80">+91 883 781 9955</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mustard mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-white/80">pracharbusinesss@gmail.com</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mustard mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-white/80">#595, sec 8b Chandigarh, India</span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-semibold text-white mb-4" gradient={false}>Follow Us</h4>
                                    <div className="flex space-x-4">
                                        <a href="https://www.facebook.com/share/1KLPiPi2rV/" className="text-white hover:text-yellow-200 hover:scale-110 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/hello_prachar?igsh=MTZvZDBsemVsN2xq" className="text-white hover:text-yellow-200 hover:scale-110 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/helloprachar/" className="text-white hover:text-yellow-200 hover:scale-110 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-yellow-200 hover:scale-110 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactPage