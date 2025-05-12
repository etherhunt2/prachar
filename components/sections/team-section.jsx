'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThreeDText } from '@/components/ui/3d-text';
import aditi from '@/public/Images/aditi.jpg';
import r from '@/public/Images/rahulcrop.jpg';

// Example team members
const teamMembers = [
  {
    id: 1,
    name: 'Aditi Sharma',
    role: 'Co-Founder, Prachar',
    image: aditi,
  },
  {
    id: 2,
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
      const cardElement = e.target.closest('.team-card');
      if (cardElement) {
        const cardId = parseInt(cardElement.getAttribute('data-id'));
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
            <ThreeDText as="h2" className="text-4xl md:text-5xl font-bold mb-6" gradient={false}>
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
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80 rounded-xl overflow-hidden perspective-800 team-card border border-white/5 hover:border-mustard/30 active:border-mustard/30"
              data-id={member.id}
              data-active={touchedCard === member.id}
              whileHover={{
                boxShadow: '0 10px 25px rgba(255, 219, 88, 0.15)',
                borderColor: 'rgba(255, 219, 88, 0.3)',
                transition: { duration: 0.3 }
              }}
              whileTap={{
                boxShadow: '0 10px 25px rgba(255, 219, 88, 0.15)',
                borderColor: 'rgba(255, 219, 88, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                whileTap="hover"
                animate={touchedCard === member.id ? "hover" : "initial"}
                className={`${isCardActive(member.id)} relative w-full h-full`}
              >
                <motion.div
                  className={`absolute inset-0`}
                  variants={imageVariants}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover w-full h-full inset-0"
                      width={500}
                      height={500}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6 team-overlay overlay-gradient"
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

            <Button variant="mustard" size="lg" className="rounded-full cursor-pointer" onClick={() => window.location.href = '/team'}>
              Meet Our Team
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}