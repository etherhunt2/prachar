import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { randomRange } from '@/lib/utils';

const floatVariants = {
  initial: { y: 0, x: 0, rotate: 0 },
  animate: (custom) => ({
    y: [0, custom.yMove, 0],
    x: [0, custom.xMove, 0],
    rotate: [0, custom.rotation, 0],
    transition: {
      duration: custom.duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: custom.delay,
    },
  }),
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export function FloatingIcon({
  icon,
  size = 'md',
  delay = 0,
  duration = 5,
  className = '',
  style = {},
}) {
  const controls = useAnimation();
  const custom = useRef({
    yMove: randomRange(-20, -40),
    xMove: randomRange(-10, 10),
    rotation: randomRange(-10, 10),
    delay: delay,
    duration: duration,
  });

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <motion.div
      className={`text-white relative opacity-80 ${sizeMap[size]} ${className}`}
      variants={floatVariants}
      initial="initial"
      animate={controls}
      custom={custom.current}
      style={style}
    >
      <div className="transform-style-3d perspective-800 w-full h-full">
        {icon}
      </div>
    </motion.div>
  );
} 