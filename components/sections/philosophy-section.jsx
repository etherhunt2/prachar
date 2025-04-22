'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeDText } from '@/components/ui/3d-text';
import { FloatingIcon } from '@/components/ui/floating-icon';
import { MarketingIcons } from '@/components/icons/marketing-icons';
import { Philosophy2DAnimation } from '@/components/ui/philosophy-2d-animation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconKeys = Object.keys(MarketingIcons);

const fixedIcons = [
  { icon: 'SEO', x: '10%', y: '15%', size: 'md', delay: 0.2, duration: 5 },
  { icon: 'Video', x: '85%', y: '20%', size: 'sm', delay: 0.5, duration: 4 },
  { icon: 'SocialMedia', x: '20%', y: '80%', size: 'md', delay: 0.3, duration: 6 },
  { icon: 'Mail', x: '80%', y: '70%', size: 'sm', delay: 0.7, duration: 5 },
  { icon: 'BarChart', x: '25%', y: '30%', size: 'sm', delay: 0.2, duration: 4.5 },
  { icon: 'Globe', x: '75%', y: '40%', size: 'md', delay: 0.4, duration: 5.5 },
];

export default function PhilosophySection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [visualMode, setVisualMode] = useState('3d');

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      gsap.from(".philosophy-reveal", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      id="philosophy"
    >
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-0"></div>

      <div className="absolute w-[800px] h-[800px] rounded-full bg-mustard/5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl top-1/4 right-1/4"></div>

      <div className="absolute inset-0 pointer-events-none opacity-60">
        {fixedIcons.map((item, index) => {
          const Icon = MarketingIcons[item.icon];
          return (
            <FloatingIcon
              key={`philosophy-icon-${index}`}
              icon={<Icon className="w-full h-full text-mustard/30" />}
              size={item.size}
              delay={item.delay}
              duration={item.duration}
              className="absolute"
              style={{ left: item.x, top: item.y }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={textRef}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-3/5">
              <div className="mb-8 philosophy-reveal">
                <span className="inline-block text-mustard font-medium mb-2">OUR PHILOSOPHY</span>
                <ThreeDText as="h2" className="text-4xl md:text-5xl font-bold mb-6" gradient={false}>
                  We strongly believe:
                </ThreeDText>
              </div>

              <div className="mb-6 philosophy-reveal">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white/90">
                  𝐔𝐜𝐡𝐢 𝐝𝐮𝐤𝐚𝐧, 𝐟𝐞𝐞𝐤𝐚 𝐩𝐚𝐤𝐰𝐚𝐧
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  We're not about fancy packaging with no substance.
                  We focus on delivering genuine value that drives
                  real results for your business.
                </p>
              </div>

              <div className="mb-6 philosophy-reveal">
                <p className="text-xl font-semibold text-mustard mb-2">
                  𝐅𝐮𝐥𝐥 𝐬𝐭𝐨𝐦𝐚𝐜𝐡𝐬 𝐚𝐧𝐝 𝐬𝐚𝐭𝐢𝐬𝐟𝐢𝐞𝐝 𝐡𝐞𝐚𝐫𝐭𝐬
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Our marketing strategies are designed to provide genuine satisfaction through
                  meaningful connections with your audience and sustainable business growth.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 philosophy-reveal">
                <button
                  onClick={() => setVisualMode('3d')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all z-10 ${visualMode === '3d'
                    ? 'bg-mustard text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 active:bg-white/20'
                    }`}
                >
                  3D Visualization
                </button>
                <button
                  onClick={() => setVisualMode('2d')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all z-10 ${visualMode === '2d'
                    ? 'bg-mustard text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 active:bg-white/20'
                    }`}
                >
                  2D Animation
                </button>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-96 md:w-3/5 philosophy-reveal">
              {/* {visualMode === '3d' ? (
                <Philosophy3DModel />
              ) : (
                <Philosophy2DAnimation />
              )} */}
              <Philosophy2DAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 