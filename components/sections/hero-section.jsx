'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeDText } from '@/components/ui/3d-text';
import { FloatingIcon } from '@/components/ui/floating-icon';
import { MarketingIcons } from '@/components/icons/marketing-icons';
import { randomRange, getRandomElement } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const STYLES = {
  svgPath: {
    fill: 'transparent',
  },
  svgText: {
    fill: 'rgba(255, 255, 255, 0.7)',
    fontSize: '24px',
  },
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  gradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, black, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9))',
  },
  parallaxLayer: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  layerContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '56rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '0 1.5rem',
  },
  scrollIndicator: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '2.5rem',
  },
  scrollCircle: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '9999px',
    border: '1px solid rgba(240, 200, 80, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
  },
};

const iconKeys = Object.keys(MarketingIcons);

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

export default function HeroSection() {
  const containerRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

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
        icon: getRandomElement(iconKeys),
        x,
        y,
        size,
        delay,
        duration,
      };
    });

    setIconPositions(generatedPositions);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      gsap.to('.parallax-layer-1', {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.parallax-layer-2', {
        y: -80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-content', {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isClient]);

  const handleService = () => {
    window.location.href = '/services';
  }

  const handleContact = () => {
    window.location.href = '/contact';
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>

      <div className="parallax-layer-1 absolute inset-0 pointer-events-none">
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

      <div className="parallax-layer-2 absolute inset-0 pointer-events-none">
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

      <div className="hero-content relative z-10 w-full max-w-4xl mx-auto text-center px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <ThreeDText
              elementType="h1"
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold hero-heading !opacity-100"
              gradient={false}
            >
              Rekindle Your WHY
            </ThreeDText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
              We are the agency that wants to bring you closer to the story of why you started your
              business in the first place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="mustardOutline"
              size="lg"
              onClick={handleService}
              className="cursor-pointer rounded-full px-8 py-6 text-lg font-bold"
            >
              Our Services
            </Button>
            <Button variant="3d" onClick={handleContact} size="lg" className="cursor-pointer rounded-full px-8 py-6 text-lg font-bold">
              Contact Us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={STYLES.scrollIndicator}
          className="z-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="mb-0">
              <div className="w-14 h-14 rounded-full border-2 border-mustard flex flex-col items-center justify-center gap-1 bg-black backdrop-blur-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white z-2 opacity-95"
                >
                  <path
                    d="M12 5V19M12 19L19 12M12 19L5 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
} 