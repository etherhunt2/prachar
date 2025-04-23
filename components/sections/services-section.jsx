'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ThreeDText } from '@/components/ui/3d-text';
import { Button } from '@/components/ui/button';
import { MarketingIcons } from '@/components/icons/marketing-icons';
import videography from '@/public/Images/videography.jpg';
import socialImage from '@/public/Images/social-media.jpg';
import adsImage from '@/public/Images/ads.jpg';
import webDevImage from '@/public/Images/webdev.jpg';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 'videography',
    title: 'Videography',
    subtitle: 'Your Brand Deserves More Than Just Another Video',
    description: `Let's cut to the chase—everyone's making videos, but not everyone's making good ones. That's where Prachar steps in. If you think a video is just about hitting record, think again...`,
    icon: 'Video',
    image: videography,
  },
  {
    id: 'photography',
    title: 'Photography',
    subtitle: 'Photography That Speaks Louder Than Words',
    description: `A good photo captures a moment. A great photo creates a story. At Prachar, we don't just click pictures—we craft visual narratives that make people stop, stare, and feel...`,
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    subtitle: 'SEO That Gets You Found, Not Forgotten',
    description: `Having a website without SEO is like opening a store in the middle of nowhere and expecting a crowd. At Prachar, we make sure your brand isn't just present online—it's...`,
    icon: 'SEO',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 'ads',
    title: 'Ad Management',
    subtitle: 'Ad Management That Spends Smart, Not Just Spends',
    description: `Running ads isn't rocket science—running ads that actually convert is. At Prachar, we don't believe in throwing money at Meta and Google....`,
    icon: 'Ads',
    image: adsImage,
  },
  {
    id: 'social',
    title: 'Social Media Management',
    subtitle: 'Social Media That Sells, Not Just Scrolls',
    description: `Posting pretty pictures and hoping for the best? That's not a strategy—that's wishful thinking. At Prachar, we don't just manage social media;...`,
    icon: 'SocialMedia',
    image: socialImage,
  },
  {
    id: 'webDev',
    title: 'Website Development',
    subtitle: 'Website Development That Works, Not Just Looks Good',
    description: `A website isn't just a digital business card—it's your 24/7 sales machine. At Prachar, we don't just build websites;...`,
    icon: 'WebDesign',
    image: webDevImage,
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchedCard, setTouchedCard] = useState(null);

  const isCardActive = (cardId) => {
    return touchedCard === cardId ? 'active-card' : '';
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleTouchStart = (e) => {
      const cardElement = e.target.closest('.service-card');
      if (cardElement) {
        const cardId = cardElement.getAttribute('data-id');
        setTouchedCard(cardId);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setTouchedCard(null);
      }, 300);
    };

    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (isMobile) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 100,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20"
      id="services"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-0"></div>

      <div className="relative z-1 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ThreeDText
              as="h2"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </ThreeDText>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We deliver results-driven digital marketing solutions tailored to your unique business goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 z-1">
          {services.map((service) => (
            <motion.div
              key={service.id}
              data-id={service.id}
              className={`service-card ${isCardActive(service.id)} rounded-xl overflow-hidden transition-all duration-500 group h-full flex flex-col border border-white/5 hover:border-mustard/30 active:border-mustard/30`}
              whileHover={{ boxShadow: '0 15px 30px rgba(255, 219, 88, 0.15)', scale: 1.02, transition: { duration: 0.3 } }}
              whileTap={{ boxShadow: '0 15px 30px rgba(255, 219, 88, 0.15)', scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                />

                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-mustard/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black">
                  {React.createElement(MarketingIcons[service.icon], { size: 20 })}
                </div>
              </div>

              <div className="p-6 bg-black/80 backdrop-blur-lg flex-grow border-t border-mustard/20">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-amber-200 group-active:text-amber-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm font-medium mb-4 text-zinc-400/90">
                  {service.subtitle}
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto relative z-30">
                  <Button
                    variant="outline"
                    className="rounded-full border-x-amber-200/50 text-yellow-300 hover:bg-emerald-600/70 hover:text-red-800 active:bg-emerald-600/70 active:text-red-800 transition-all w-full relative z-30"
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event from bubbling up to the card
                      console.log(`Learn more about ${service.title}`);
                      // Navigate or show more info
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-white/5 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Looking for More Services?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We offer a wide range of digital marketing services beyond what's listed here.
            Get in touch to discuss your specific needs and goals.
          </p>
          <Button
            variant="mustard"
            size="lg"
            className="rounded-full px-8 z-2 text-white/70 hover:text-black/70 bg-blue-200/50 hover:bg-blue-300/70 transition-all duration-300 ease-in-out"
          >
            View More
          </Button>
        </motion.div>
      </div>
      {/*Decoration Element*/}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-2 border-amber-500 opacity-30 z-2 animate-rotate"></div>
      <div className="absolute top-10 left-10 w-16 h-16 rounded-md border-2 border-white/10 opacity-20 animate-float z-20"></div>
    </section>
  );
}