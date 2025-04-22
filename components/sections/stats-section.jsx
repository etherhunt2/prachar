'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeDText } from '@/components/ui/3d-text';
import {
  Users,
  Briefcase,
  Sparkles,
  BarChart4,
  Award,
  Rocket,
  HeartHandshake
} from 'lucide-react';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Stat data
const stats = [
  {
    value: 5,
    label: 'Years of Smart Gen Z Experience',
    description: 'Bringing fresh perspectives and digital-first thinking',
    icon: <Users className="w-8 h-8 text-green-500" />,
    suffix: '+',
    color: 'from-violet-400/50 to-violet-400/20',
    delay: 0
  },
  {
    value: 25,
    label: 'Ongoing Projects',
    description: 'Actively managing diverse campaigns across industries',
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    suffix: '',
    color: 'from-blue-400/50 to-blue-400/20',
    delay: 0.1
  },
  {
    value: 60,
    label: 'Happy Customers',
    description: 'Satisfaction is our priority, measurable in results',
    icon: <HeartHandshake className="w-8 h-8 text-pink-400" />,
    suffix: '+',
    color: 'from-pink-400/50 to-pink-400/20',
    delay: 0.2
  },
  {
    value: 15,
    label: 'Active Clients',
    description: 'Building long-term partnerships that drive success',
    icon: <Award className="w-8 h-8 text-teal-400" />,
    suffix: '',
    color: 'from-teal-400/50 to-teal-400/20',
    delay: 0.3
  }
];

function CountUp({ value, suffix = '', duration = 2, delay = 0 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const countAnimation = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(countAnimation);
        } else {
          setCount(value);
        }
      };

      // Add delay before starting animation
      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(countAnimation);
      }, delay * 1000);

      return () => {
        cancelAnimationFrame(animationFrame);
        clearTimeout(timer);
      };
    }
  }, [isInView, value, duration, delay]);

  return (
    <span ref={countRef} className="text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
}

function StatCard({ stat, index }) {
  const cardRef = useRef(null);
  const progressRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && progressRef.current) {
      // Animate progress bar when in view
      gsap.to(progressRef.current, {
        width: '100%',
        duration: 1.5,
        delay: 0.2 + stat.delay,
        ease: 'power2.out'
      });
    }
  }, [isInView, stat.delay]);

  // Calculate a different animation for each card
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: stat.delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/5 shadow-xl relative overflow-hidden group"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 bg-gradient-radial"></div>

      {/* Icon with animated circle */}
      <div className="relative mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color} blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
        <div className="relative bg-black/60 rounded-full p-3 inline-flex">
          {stat.icon}
        </div>
      </div>

      {/* Stat number with countup animation */}
      <div className="mb-2">
        <CountUp value={stat.value} suffix={stat.suffix} delay={stat.delay + 0.2} />
      </div>

      {/* Stat label */}
      <h3 className="text-xl font-semibold mb-2 text-white">{stat.label}</h3>

      {/* Progress bar */}
      <div className="h-1 bg-white/10 rounded-full w-full mb-3">
        <div
          ref={progressRef}
          className={`h-full rounded-full bg-gradient-to-r ${stat.color} w-0`}
        ></div>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm">{stat.description}</p>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-tl-full"></div>
      <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-white/10 rounded-full"></div>
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading when scrolled into view
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      });

      // Particle floating effect for decorative elements
      gsap.to(".stat-particle", {
        y: -20,
        duration: 2,
        ease: "sine.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-5 relative overflow-hidden"
      id="stats"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-mustard/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="stat-particle absolute top-[20%] left-[10%] w-2 h-2 bg-mustard/40 rounded-full"></div>
        <div className="stat-particle absolute top-[40%] left-[20%] w-3 h-3 bg-blue-400/30 rounded-full"></div>
        <div className="stat-particle absolute top-[10%] right-[30%] w-2 h-2 bg-pink-400/40 rounded-full"></div>
        <div className="stat-particle absolute bottom-[30%] right-[15%] w-4 h-4 bg-teal-400/20 rounded-full"></div>
        <div className="stat-particle absolute bottom-[10%] left-[40%] w-3 h-3 bg-mustard/30 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16" ref={headingRef}>
          <span className="inline-block text-mustard font-medium mb-2">OUR IMPACT</span>
          <ThreeDText as="h2" className="text-4xl md:text-5xl font-bold mb-6">
            By The Numbers
          </ThreeDText>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Metrics that tell our story of growth, collaboration, and success with clients across industries.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Ready to become our next success story? Let's transform your brand together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mustard to-mustard/80 text-black px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-mustard/20 transition-all duration-300"
          >
            <Rocket className="w-4 h-4" />
            <span>Get Started</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}