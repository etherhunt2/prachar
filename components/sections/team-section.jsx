'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThreeDText } from '@/components/ui/3d-text';
import aditi from '@/public/Images/aditi.jpg';
import r from '@/public/Images/rahul.jpg';

// Example team members
const teamMembers = [
  {
    name: 'Aditi Sharma',
    role: 'Co-Founder, Prachar',
    image: aditi,
  },
  {
    name: 'Rahul Kareer',
    role: 'Co-Founder, Prachar',
    image: r,
  }
];

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFDB5840_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ThreeDText as="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </ThreeDText>

            <p className="text-xl text-white/70 mb-8">
              Our team of digital marketing experts combines creativity, technical skill, and strategic insight to deliver exceptional results for our clients.
            </p>

            <div className="w-20 h-1 bg-mustard mx-auto mb-12"></div>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80 rounded-xl overflow-hidden perspective-800"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                className="relative w-full h-full"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-fill"
                      width={500}  /* Add width property */
                      height={500} /* Add height property */
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6"
                  variants={overlayVariants}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-mustard">{member.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              With decades of combined experience in digital marketing, content creation, and brand development, our team is ready to take your business to the next level.
            </p>

            <Button variant="green" size="lg" className="rounded-full">
              Meet the Full Team
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 