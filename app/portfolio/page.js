"use client";

import { ThreeDText } from '@/components/ui/3d-text';
import React, { useEffect, useState } from 'react';
import { randomRange, getRandomElement } from '@/lib/utils';
import { MarketingIcons } from '../../components/icons/marketing-icons';
import { FloatingIcon } from '@/components/ui/floating-icon';
import PortfolioGallery from '@/components/sections/portfolio';

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

const Portfolio = () => {
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
                                        icon={<Icon className="w-full h-full text-yellow-300/50" />}
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
                                Portfolio
                            </ThreeDText>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 bg-black">
                    <div className="container mx-auto px-4 gap-8">
                        <PortfolioGallery />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Portfolio