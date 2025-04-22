'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ThreeDText } from '@/components/ui/3d-text';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, TechStart Inc.',
    content: 'Working with Prachar has been a game-changer for our brand. Their strategic approach to digital marketing helped us increase our online presence and drive real business results. The team is creative, responsive, and truly cares about our success.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Bloom Retail',
    content: `The photography and videography work that Prachar delivered exceeded our expectations. The content perfectly captured our brand essence and has performed exceptionally well across all our marketing channels. Their team's attention to detail is unmatched.`,
    image: `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Raj Kumar',
    role: 'Founder, EcoSolutions',
    content: `The SEO strategy that Prachar implemented has transformed our online presence. We've seen a 200% increase in organic traffic and a significant boost in qualified leads. They took the time to understand our unique market position and delivered results quickly.`,
    image: `https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80`,
    rating: 4,
  },
];

const Star = ({ filled }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={filled ? "#FFDB58" : "none"}
    xmlns="http://www.w3.org/2000/svg"
    className={filled ? "text-mustard" : "text-white/20"}
  >
    <path
      d="M9.99999 1.66667L12.575 6.88334L18.3333 7.725L14.1667 11.7833L15.15 17.5167L9.99999 14.8083L4.84999 17.5167L5.83333 11.7833L1.66666 7.725L7.42499 6.88334L9.99999 1.66667Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TestimonialSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* 3D decorative elements */}
      <div className="absolute left-[10%] top-[20%] w-24 h-24 rounded-full border-2 border-mustard/20 animate-float opacity-50"></div>
      <div className="absolute right-[15%] bottom-[25%] w-40 h-40 rounded-full border-2 border-mustard/10 animate-rotate opacity-30"></div>
      <div className="absolute left-[5%] bottom-[15%] w-16 h-16 bg-mustard/5 rounded-lg rotate-45 animate-float"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ThreeDText as="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </ThreeDText>

            <p className="text-xl text-white/70">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="testimonial-card relative"
            >
              <div className="mb-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} filled={star <= testimonial.rating} />
                  ))}
                </div>
                <p className="text-white/80 italic">"{testimonial.content}"</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    width={500}  /* Add width property */
                    height={500} /* Add height property */
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-mustard">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-mustard/20 rounded-lg -rotate-12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 