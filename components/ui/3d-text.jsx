import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function ThreeDText({
  children,
  className,
  as: Component = 'h1',
  gradient = true,
  animate = true,
  color = "mustard", // New prop for color customization
  depth = "medium", // New prop for 3D depth: "light", "medium", "heavy"
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced text styling with new color options
  const baseClass = `relative font-extrabold tracking-tight ${gradient ? 'gradient-text' : 'text-white'
    } hero-heading`;

  // Enhanced 3D text shadow based on depth
  const getShadowStyle = () => {
    const shadowColor = gradient
      ? 'rgba(0,0,0,0.5)'
      : color === "mustard"
        ? 'rgba(255,219,88,0.5)'
        : color === "blue"
          ? 'rgba(96,165,250,0.5)'
          : 'rgba(255,255,255,0.5)';

    const highlightColor = gradient
      ? 'rgba(255,255,255,0.2)'
      : color === "mustard"
        ? 'rgba(255,235,156,0.25)'
        : color === "blue"
          ? 'rgba(191,219,254,0.25)'
          : 'rgba(255,255,255,0.25)';

    // Use heavier shadows for mobile
    if (isMobile) {
      return {
        textShadow: `
          0px 2px 3px ${shadowColor},
          0px 4px 6px ${shadowColor},
          0px 6px 10px ${shadowColor},
          2px 2px 0px ${highlightColor},
          -2px -2px 1px rgba(0,0,0,0.2)
        `,
        opacity: 1,
        color: gradient ? 'white' : (color === "mustard" ? '#f0c850' : 'white'),
        WebkitTextFillColor: gradient ? 'white' : (color === "mustard" ? '#f0c850' : 'white'),
      };
    }

    // Different shadow depths for desktop
    if (depth === "light") {
      return {
        textShadow: `
          0px 1px 2px ${shadowColor},
          0px 2px 4px ${shadowColor},
          1px 1px 0px ${highlightColor},
          -1px -1px 0px rgba(0,0,0,0.1)
        `,
      };
    }
    else if (depth === "heavy") {
      return {
        textShadow: `
          0px 2px 3px ${shadowColor},
          0px 4px 6px ${shadowColor},
          0px 6px 10px ${shadowColor},
          0px 8px 16px ${shadowColor},
          2px 2px 0px ${highlightColor},
          -2px -2px 1px rgba(0,0,0,0.2)
        `,
        transform: 'translateZ(0)',
      };
    }
    // Default "medium" depth
    return {
      textShadow: `
        0px 2px 4px ${shadowColor},
        0px 4px 8px ${shadowColor},
        1px 1px 0px ${highlightColor},
        -1px -1px 1px rgba(0,0,0,0.15)
      `,
    };
  };

  // Enhanced animation with better keyframes
  const textVariants = {
    initial: {
      y: 50,
      opacity: 0,
      rotateX: gradient ? 10 : 0, // Subtle 3D rotation for gradient mode
      scale: 0.95,
    },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // Enhanced easing curve
        opacity: { duration: 0.7 },
        scale: { duration: 0.8 },
      },
    },
  };

  if (animate) {
    return (
      <motion.div
        className="overflow-hidden perspective-[1000px]" // Added perspective for 3D effect
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          variants={textVariants}
          className="overflow-hidden transform-gpu" // Using GPU for smoother animations
        >
          <Component
            className={cn(baseClass, className)}
            style={{
              ...getShadowStyle(),
              // Add subtle text stroke for extra definition
              WebkitTextStroke: gradient ? '0.5px rgba(255,255,255,0.2)' : 'none',
            }}
          >
            {children}

            {/* Optional highlight overlay for enhanced 3D effect */}
            {(depth === "heavy" || isMobile) && (
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay pointer-events-none"
                aria-hidden="true"></span>
            )}
          </Component>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Component
      className={cn(baseClass, className)}
      style={{
        ...getShadowStyle(),
        WebkitTextStroke: gradient ? '0.5px rgba(255,255,255,0.2)' : 'none',
      }}
    >
      {children}

      {/* Optional highlight overlay for enhanced 3D effect */}
      {(depth === "heavy" || isMobile) && (
        <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay pointer-events-none"
          aria-hidden="true"></span>
      )}
    </Component>
  );
}