'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Predefined fixed positions for client/server consistency
const VALUE_PARTICLES = [
  { width: 6.5, height: 5.9, top: 29.1, left: 74.3, opacity: 0.8 },
  { width: 5.0, height: 14.6, top: 62.6, left: 66.5, opacity: 0.8 },
  { width: 5.8, height: 13.8, top: 59.4, left: 46.7, opacity: 0.8 },
  { width: 6.3, height: 11.2, top: 48.1, left: 69.8, opacity: 0.8 },
  { width: 13.8, height: 5.6, top: 76.6, left: 46.4, opacity: 0.8 },
  { width: 12.1, height: 6.2, top: 70.9, left: 51.6, opacity: 0.8 },
  { width: 14.5, height: 13.6, top: 66.6, left: 58.7, opacity: 0.8 },
  { width: 13.1, height: 11.2, top: 70.4, left: 47.6, opacity: 0.8 }
];

const FLASHY_ELEMENTS = [
  { width: 76.7, height: 65.7, top: 25.2, left: 39.3, rotation: 25.5, opacity: 0.7 },
  { width: 53.5, height: 91.0, top: 33.1, left: 38.7, rotation: 40.1, opacity: 0.7 },
  { width: 82.0, height: 41.9, top: 51.4, left: 77.9, rotation: 37.6, opacity: 0.7 },
  { width: 89.3, height: 66.5, top: 32.7, left: 77.2, rotation: 2.5, opacity: 0.7 },
  { width: 54.1, height: 98.6, top: 36.9, left: 26.2, rotation: 30.8, opacity: 0.7 }
];

export function Philosophy2DAnimation() {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const valueParticlesRef = useRef([]);
  const flashyElementsRef = useRef([]);
  const heartRef = useRef(null);
  const growthRef = useRef(null);
  const textRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Only run animations on the client

    const ctx = gsap.context(() => {
      // Core substance animation (pulsing with genuine energy)
      gsap.to(coreRef.current, {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        opacity: 1,
        ease: "power1.inOut"
      });

      // Value particles animation (organic movement)
      valueParticlesRef.current.forEach((particle, i) => {
        if (!particle) return;

        gsap.to(particle, {
          x: i % 2 === 0 ? 10 : -10, // Deterministic movement
          y: i % 3 === 0 ? 5 : -5,
          rotation: i % 2 === 0 ? 10 : -10,
          duration: 3 + (i * 0.5), // Varied but deterministic duration
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
          ease: "sine.inOut"
        });
      });

      // Flashy elements animation (fading in/out to represent empty style)
      flashyElementsRef.current.forEach((element, i) => {
        if (!element) return;

        gsap.to(element, {
          opacity: 0.3,
          scale: 1.2,
          duration: 2 + i, // Deterministic duration
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
          ease: "power1.inOut"
        });
      });

      // Heartbeat animation
      if (heartRef.current) {
        gsap.to(heartRef.current, {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          backgroundColor: "pink",
          ease: "power1.inOut"
        });
      }

      // Sustainable growth animation
      if (growthRef.current) {
        gsap.fromTo(growthRef.current,
          { scaleY: 0.8, transformOrigin: "bottom center" },
          {
            scaleY: 1.1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "elastic.out(1, 0.3)"
          }
        );
      }

      // Text reveal animation
      if (textRef.current && textRef.current.children) {
        gsap.from(textRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: "back.out(1.7)"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isClient]); // Only run when isClient changes (first client render)

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Core substance element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          ref={coreRef}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-mustard to-mustard/70 flex items-center justify-center shadow-lg shadow-mustard/30"
        >
          {/* Heart of the business */}
          <div
            ref={heartRef}
            className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center"
          >
            <svg className="w-16 h-16 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Value particles (real results) - using predefined values */}
      {VALUE_PARTICLES.map((particle, i) => (
        <div
          key={`particle-${i}`}
          ref={el => valueParticlesRef.current[i] = el}
          className="absolute rounded-full bg-mustard/80"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            opacity: particle.opacity,
            zIndex: 10
          }}
        ></div>
      ))}

      {/* Empty flashy elements (fancy packaging) - using predefined values */}
      {FLASHY_ELEMENTS.map((element, i) => (
        <div
          key={`element-${i}`}
          ref={el => flashyElementsRef.current[i] = el}
          className="absolute border-2 border-white/30 rounded-lg"
          style={{
            width: `${element.width}px`,
            height: `${element.height}px`,
            top: `${element.top}%`,
            left: `${element.left}%`,
            transform: `rotate(${element.rotation}deg)`,
            opacity: element.opacity,
            zIndex: 10
          }}
        ></div>
      ))}

      {/* Growth visualization */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48">
        <div
          ref={growthRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 bg-gradient-to-t from-green-500 to-green-700 rounded-t-lg"
          style={{ height: '80%' }}
        ></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-700 rounded-b-lg"></div>
      </div>

      {/* Philosophy text */}
      <div
        ref={textRef}
        className="absolute top-0 md:top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-2">Not fancy packaging. Genuine value.</h3>
        <p className="text-yellow-400 text-lg mb-4">Driving real results for your business</p>
      </div>

      {/* Subtle animated elements - using fixed positions */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-zinc-800 rounded-full animate-pulse z-100"></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-green-500/30 rounded-full animate-ping z-100"></div>
    </motion.div>
  );
}
