'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ThreeDText } from '@/components/ui/3d-text';
import Image from 'next/image';
import { FloatingIcon } from '@/components/ui/floating-icon';
import { MarketingIcons } from '@/components/icons/marketing-icons';
import { randomRange, getRandomElement } from '@/lib/utils';

// Images for each paragraph
import aboutImage1 from '@/public/Images/About/prachar.png';
import aboutImage2 from '@/public/Images/About/about-2.jpg';
import aboutImage3 from '@/public/Images/About/approch.png';

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

export default function AboutSection() {
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
                <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">
                    <div className="container mx-auto">
                        <ThreeDText
                            elementType="h1"
                            className="text-5xl md:text-7xl font-extrabold mb-6"
                        >
                            About Us
                        </ThreeDText>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    {/* Paragraph 1 with Image */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <Image
                                    src={aboutImage1}
                                    alt="Prachar Advertising & Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-4">𝐏𝐫𝐚𝐜𝐡𝐚𝐫 𝐀𝐝𝐯𝐞𝐫𝐭𝐢𝐬𝐢𝐧𝐠 & 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                𝐏𝐫𝐚𝐜𝐡𝐚𝐫 𝐀𝐝𝐯𝐞𝐫𝐭𝐢𝐬𝐢𝐧𝐠 & 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 is a dynamic agency that helps businesses grow by providing
                                creative and tailored advertising solutions. Our tagline, "𝐁𝐞𝐲𝐨𝐧𝐝 𝐈𝐦𝐚𝐠𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐒𝐮𝐜𝐜𝐞𝐬𝐬,"
                                reflects our commitment to delivering innovative strategies that go beyond the ordinary,
                                ensuring your brand stands out and achieves measurable success. We believe in pushing
                                the limits of creativity to offer results that truly make an impact.
                            </p>
                        </div>
                    </div>

                    {/* Paragraph 2 with Image (reversed) */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <Image
                                    src={aboutImage2}
                                    alt="Our Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Specialized Services</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                We specialize in a variety of services, including digital marketing, where we connect
                                businesses with their target audience through effective social media campaigns, SEO, and
                                paid advertising. Our branding expertise ensures that your brand identity is not only
                                unique but also resonates with your audience, while our photography and videography
                                services capture your story in the most visually appealing way. Additionally, our PR
                                strategies and event management services help enhance your brand's presence and
                                reputation, creating lasting impressions in the market.
                            </p>
                        </div>
                    </div>

                    {/* Paragraph 3 with Image */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <Image
                                    src={aboutImage3}
                                    alt="Our Approach"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Approach</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                At Prachar, we pride ourselves on our ability to create meaningful connections between
                                brands and their customers. With our strategic consulting services, we help businesses
                                develop tailored strategies that align with their goals, ensuring growth and success. With
                                Prachar, you can trust that your brand's journey will go beyond imagination, reaching new
                                heights of success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}