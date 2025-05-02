"use client";

import React, { useEffect, useState } from 'react';
import { FloatingIcon } from '../ui/floating-icon';
import { MarketingIcons } from '../icons/marketing-icons';
import { ThreeDText } from '../ui/3d-text';
import { randomRange, getRandomElement } from '@/lib/utils';
import { Zap } from 'lucide-react';

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

const services = [
    {
        id: 'videography',
        title: 'Videography',
        subtitle: 'Your Brand Deserves More Than Just Another Video',
        description: [
            "Let's cut to the chase—everyone's making videos, but not everyone's making good ones.",
            "Our team of cinematic visionaries, drone masters, and influencer whisperers know how to create high-impact, scroll-stopping masterpieces."
        ],
        features: [
            {
                title: 'Cinematic Shoots',
                description: 'We don\'t just film; we direct. Every frame is meticulously planned, every shot a work of art.',
                icon: 'Rideo'
            },
            {
                title: 'Drone Videos',
                description: 'Aerial shots add drama, perspective, and that undeniable "wow" factor.',
                icon: 'Drone'
            },
            {
                title: 'Influencer Shoots',
                description: 'We ensure seamless, authentic storytelling that engages audiences.',
                icon: 'Influencer'
            },
            {
                title: 'Corporate & Product Films',
                description: 'Your brand\'s message, minus the corporate jargon. We make professionalism look effortlessly cool.',
                icon: 'Corporate'
            }
        ],
        conclusion: "At Prachar, we don't just create videos; we create experiences. Great visuals aren't just seen—they're felt.",
        image: '/Images/videography.jpg'
    },
    {
        id: 'photography',
        title: 'Photography',
        subtitle: 'Photography That Speaks Louder Than Words',
        description: [
            "A good photo captures a moment. A great photo creates a story.",
            "We bring a fresh perspective, expert framing, and perfect balance of light and shadow to every image."
        ],
        features: [
            {
                title: 'Cinematic Photography',
                description: 'We create visuals that feel alive, not just staged photos.',
                icon: 'Camero'
            },
            {
                title: 'Product Photography',
                description: 'If your product doesn\'t look good, it doesn\'t sell. We make it irresistible.',
                icon: 'Product'
            },
            {
                title: 'Corporate Shoots',
                description: 'From powerful headshots to office culture photography, we help businesses put their best face forward.',
                icon: 'Corporate'
            },
            {
                title: 'Event Coverage',
                description: 'We capture the moments that matter at high-energy concerts, grand launches, and intimate gatherings.',
                icon: 'Event'
            }
        ],
        conclusion: "In a world flooded with images, only the truly remarkable ones stand out. We create photos that work, not just sit pretty.",
        image: '/Images/services/photography.png'
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        subtitle: 'SEO That Gets You Found, Not Forgotten',
        description: [
            "Having a website without SEO is like opening a store in the middle of nowhere.",
            "It's a strategic game of algorithms, content, and technical expertise."
        ],
        features: [
            {
                title: 'On-Page SEO',
                description: 'We optimize content, meta tags, and site structure to speak Google\'s language.',
                icon: 'Searcher'
            },
            {
                title: 'Off-Page SEO',
                description: 'We build authority with high-quality, relevant backlinks that boost credibility.',
                icon: 'Link'
            },
            {
                title: 'Technical SEO',
                description: 'We optimize site speed, mobile responsiveness, and technical performance.',
                icon: 'Gear'
            },
            {
                title: 'Local SEO',
                description: 'We optimize for Google My Business and location-based keywords to dominate local searches.',
                icon: 'Location'
            }
        ],
        conclusion: "We deliver sustainable, long-term results that keep your business ahead. If your brand isn't on the first page, does it even exist?",
        image: '/Images/services/seo.png'
    },
    {
        id: 'social-media',
        title: 'Social Media Management',
        subtitle: 'Social Media That Sells, Not Just Scrolls',
        description: [
            "We build digital identities that grab attention and drive real engagement.",
            "From Instagram to LinkedIn, Twitter to YouTube, we craft content that performs."
        ],
        features: [
            {
                title: 'Content Strategy',
                description: 'Viral-worthy reels, engaging carousels, compelling captions that click.',
                icon: 'Content'
            },
            {
                title: 'Account Growth',
                description: 'Real engagement strategies that build communities, not just followers.',
                icon: 'Growth'
            },
            {
                title: 'Influencer Marketing',
                description: 'Authentic partnerships with the right voices to amplify your brand.',
                icon: 'Influencer'
            },
            {
                title: 'Ad Campaigns',
                description: 'Paid strategies that ensure your budget gets real ROI across platforms.',
                icon: 'ads'
            }
        ],
        conclusion: "In a world of endless scrolling, only the smartest brands get noticed. We position you for success across all platforms.",
        image: '/Images/services/social.jpg'
    },
    {
        id: 'ad-management',
        title: 'Ad Management',
        subtitle: 'Ad Management That Spends Smart, Not Just Spends',
        description: [
            "We create strategic, data-driven ad campaigns that convert.",
            "No throwing money at platforms and hoping for the best."
        ],
        features: [
            {
                title: 'Meta Ads',
                description: 'Thumb-stopping visuals with razor-sharp targeting for Facebook/Instagram.',
                icon: 'Meta'
            },
            {
                title: 'Google Ads',
                description: 'High-performing search, display, and YouTube ads that bring conversions.',
                icon: 'Google'
            },
            {
                title: 'A/B Testing',
                description: 'Real-time testing and constant optimization based on data, not guesses.',
                icon: 'Test'
            },
            {
                title: 'ROI-Focused Budgeting',
                description: 'We ensure maximum return on every rupee spent, outperforming competitors.',
                icon: 'Budget'
            }
        ],
        conclusion: "We don't just run ads—we engineer success. Let's make your budget work like never before.",
        image: '/Images/ads.png'
    },
    {
        id: 'gmb',
        title: 'Google My Business',
        subtitle: 'Because If They Can\'t Find You, You Don\'t Exist',
        description: [
            "We make sure your business stands out, ranks higher, and attracts customers.",
            "Optimizing GMB is like putting up the best sign for your digital storefront."
        ],
        features: [
            {
                title: 'Profile Optimization',
                description: 'Fine-tuned details with compelling descriptions that make people click.',
                icon: 'Profile'
            },
            {
                title: 'Review Management',
                description: 'Get more positive reviews and respond smartly to build trust and sales.',
                icon: 'Review'
            },
            {
                title: 'Local SEO Boost',
                description: 'Dominate "near me" searches with optimized keywords and location signals.',
                icon: 'Location'
            },
            {
                title: 'Performance Tracking',
                description: 'Data-driven insights on who\'s searching, calling, and visiting.',
                icon: 'Analytics'
            }
        ],
        conclusion: "We turn GMB into a lead-generating powerhouse. If you're not showing up where it matters, your competition is winning.",
        image: '/Images/services/gMyB.png'
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        subtitle: 'Content That Converts, Not Just Fills Space',
        description: [
            "We craft powerful, engaging, and SEO-friendly content that drives action.",
            "No one remembers bland copy—we make your words unforgettable."
        ],
        features: [
            {
                title: 'Website Content',
                description: 'Compelling copy that turns your 24/7 sales machine into a conversion powerhouse.',
                icon: 'Website'
            },
            {
                title: 'Ad Copy',
                description: 'Short, sharp, and persuasive content designed to get clicks and conversions.',
                icon: 'ads'
            },
            {
                title: 'Brand Storytelling',
                description: 'We bring out your unique voice so people buy into your story, not just products.',
                icon: 'Story'
            },
            {
                title: 'SEO Content',
                description: 'Strategically placed keywords that rank higher without sounding robotic.',
                icon: 'SEOs'
            }
        ],
        conclusion: "In a world full of noise, only the best words get heard. Let's write your success story.",
        image: '/Images/services/content.jpg'
    },
    {
        id: 'graphic-design',
        title: 'Graphic & Motion Design',
        subtitle: 'Design That Speaks Louder Than Words',
        description: [
            "We craft visual experiences that make people stop, stare, and engage.",
            "In a world of short attention spans, boring designs are a death sentence."
        ],
        features: [
            {
                title: 'Brand Identity',
                description: 'Logos, color palettes, and typography that define your personality.',
                icon: 'Brand'
            },
            {
                title: 'Motion Graphics',
                description: 'Animated logos, explainer videos, and motion ads that captivate.',
                icon: 'Motion'
            },
            {
                title: 'UI/UX Design',
                description: 'Clean, engaging website graphics that enhance user experience.',
                icon: 'Design'
            },
            {
                title: 'Ad Creatives',
                description: 'Scroll-stopping Meta ads and eye-catching Google banners that sell.',
                icon: 'ads'
            }
        ],
        conclusion: "We don't do generic. Every design is crafted with strategy and impact in mind. Let's make your brand unforgettable.",
        image: '/Images/services/graphics.jpg'
    },
    {
        id: 'brochure-design',
        title: 'Brochure & Pamphlet Design',
        subtitle: 'Design That Sells, Not Just Sits on a Table',
        description: [
            "We create brochures that get read, remembered, and responded to.",
            "A great brochure is a silent salesperson for your brand."
        ],
        features: [
            {
                title: 'Corporate Brochures',
                description: 'Sleek or bold designs that reflect your brand personality.',
                icon: 'Corporate'
            },
            {
                title: 'Product Catalogs',
                description: 'Clean layouts with stunning visuals that showcase products irresistibly.',
                icon: 'Product'
            },
            {
                title: 'Strategic Layouts',
                description: 'Content placement that guides, informs, and convinces readers.',
                icon: 'Layout'
            },
            {
                title: 'Print-Ready Files',
                description: 'High-quality tailored designs that make your materials pop.',
                icon: 'Print'
            }
        ],
        conclusion: "We design materials that create impact, not collect dust. Let's design something worth keeping.",
        image: '/Images/services/design.jpg'
    },
    {
        id: 'event-management',
        title: 'Event Management',
        subtitle: 'Creating Experiences, Not Just Events',
        description: [
            "We craft immersive experiences that leave people talking long after the event.",
            "From corporate conferences to influencer meetups, we orchestrate perfection."
        ],
        features: [
            {
                title: 'Brand Activations',
                description: 'Flawless execution with maximum brand impact at every touchpoint.',
                icon: 'Brand'
            },
            {
                title: 'Live Coverage',
                description: 'Professional photography/videography to turn moments into content gold.',
                icon: 'camera'
            },
            {
                title: 'End-to-End Planning',
                description: 'Venue selection, theme design, decor, logistics - we handle it all.',
                icon: 'Planning'
            },
            {
                title: 'Targeted Promotion',
                description: 'Digital and offline strategies to get the right audience in the room.',
                icon: 'Promotion'
            }
        ],
        conclusion: "An event should tell a story and strengthen your brand. Let's make magic happen.",
        image: '/Images/services/event.png'
    },
    {
        id: 'pr',
        title: 'PR Activities',
        subtitle: 'Get Noticed, Not Just Mentioned',
        description: [
            "We craft strategic PR campaigns that build credibility and influence.",
            "In a noisy world, good PR is about more than just coverage."
        ],
        features: [
            {
                title: 'Media Relations',
                description: 'Connections with top journalists and media houses for impactful features.',
                icon: 'Media'
            },
            {
                title: 'Press Conferences',
                description: 'Orchestrated events that make people talk about your announcements.',
                icon: 'Press'
            },
            {
                title: 'Crisis Management',
                description: 'Control narratives and turn setbacks into opportunities.',
                icon: 'Crisis'
            },
            {
                title: 'Influencer Collaborations',
                description: 'Authentic partnerships that drive real engagement and trust.',
                icon: 'Influencer'
            }
        ],
        conclusion: "We create PR that makes an impact and drives results. Let's make headlines together.",
        image: '/Images/services/pr.png'
    },
    {
        id: 'web-development',
        title: 'Website Development',
        subtitle: 'Websites That Work, Not Just Look Good',
        description: [
            "We build high-performing, conversion-driven platforms.",
            "Your website should be a 24/7 sales machine, not just a digital brochure."
        ],
        features: [
            {
                title: 'Custom Development',
                description: 'Tailored solutions from corporate sites to eCommerce stores.',
                icon: 'Code'
            },
            {
                title: 'Lightning Speed',
                description: 'Optimized performance that keeps visitors engaged.',
                icon: 'Speed'
            },
            {
                title: 'UI/UX Design',
                description: 'Intuitive interfaces that guide users toward action.',
                icon: 'Design'
            },
            {
                title: 'E-Commerce',
                description: 'Shopify, WooCommerce, Magento - we build platforms that sell.',
                icon: 'Cart'
            }
        ],
        conclusion: "We create digital experiences that work for your business. Let's build something extraordinary.",
        image: '/Images/webdev.jpg'
    },
    {
        id: 'influencer-marketing',
        title: 'Influencer Marketing',
        subtitle: 'Marketing That Sells, Not Just Trends',
        description: [
            "We turn influencer engagement into actual sales.",
            "No chasing viral moments without ROI."
        ],
        features: [
            {
                title: 'Strategic Partnerships',
                description: 'Matches with the right influencers for authentic impact.',
                icon: 'Handshake'
            },
            {
                title: 'Performance Tracking',
                description: 'Focus on lead generation and conversions, not just likes.',
                icon: 'Analytics'
            },
            {
                title: 'Content Creation',
                description: 'Scroll-stopping posts that fit seamlessly into feeds.',
                icon: 'Content'
            },
            {
                title: 'Multi-Platform',
                description: 'Reels, YouTube integrations, Twitter trends - we cover all bases.',
                icon: 'Social'
            }
        ],
        conclusion: "Influencer marketing should drive sales, not just hype. Let's make your brand the next big thing.",
        image: '/Images/services/influencer.png'
    }
];

const Service = () => {
    const [iconPositions, setIconPositions] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const generatedPositions = ICON_POSITIONS.map((position, i) => ({
            key: `icon-${i}`,
            icon: getRandomElement(Object.keys(MarketingIcons)),
            x: `calc(${position.x} + ${randomRange(-3, 3)}%)`,
            y: `calc(${position.y} + ${randomRange(-3, 3)}%)`,
            size: getRandomElement(['sm', 'md']),
            delay: randomRange(0, 20) / 10,
            duration: randomRange(40, 60) / 10,
        }));
        setIconPositions(generatedPositions);
    }, []);

    const renderServiceSection = (service) => (
        <div key={service.id} className="mb-12">
            <div className="text-center mb-8">
                <ThreeDText elementType="h3" className="text-3xl md:text-5xl font-bold mb-4">
                    {service.title}
                </ThreeDText>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="w-full lg:w-2/5">
                    <div className="rounded-xl overflow-hidden h-full relative">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-3/5">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        {service.subtitle}
                    </h3>
                    <div className="text-white/80 space-y-3 mb-4">
                        {service.description.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                            What We Do (And Do Better Than Most)
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, i) => {
                                const IconComponent = MarketingIcons[feature.icon];

                                return (
                                    <div key={i} className="flex items-start p-3 bg-gray-900/20 rounded-lg border border-white/5">
                                        <div className="mr-3 text-yellow-400">
                                            {IconComponent ? (
                                                <IconComponent className="h-6 w-6" />
                                            ) : (
                                                <Zap className="h-6 w-6" />
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="text-white font-medium mb-1">{feature.title}</h5>
                                            <p className="text-white/70 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900/30 p-4 rounded-xl border border-white/5">
                <p className="text-white/80 text-center">
                    {service.conclusion}
                </p>
            </div>
        </div>
    );

    return (
        <div className="about-page bg-black">
            <section className="relative py-24 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>

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

                <div className="relative z-10 mt-5 w-full max-w-4xl mx-auto text-center px-6">
                    <div className="container mx-auto">
                        <ThreeDText
                            elementType="h1"
                            className="text-5xl md:text-7xl font-extrabold mb-6"
                        >
                            Our Services
                        </ThreeDText>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 gap-8">
                    {services.map(renderServiceSection)}
                </div>
            </section>
        </div>
    );
};

export default Service;