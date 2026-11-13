import React from 'react';
import { motion } from 'framer-motion';

// Smooth cubic-bezier medical/luxury easing
const smoothEase = [0.16, 1, 0.3, 1];

/**
 * ScrollReveal: Animates elements in and out on scroll bi-directionally.
 * - direction: 'up' | 'down' | 'left' | 'right' | 'scale'
 * - delay: in seconds (e.g. 0.05, 0.15)
 * - duration: in seconds (default 0.7)
 * - amount: viewport trigger threshold (0.2 = 20% visible)
 */
export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  className = '',
  style = {}
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'right': // Slides in from right (+45px)
        return { opacity: 0, x: 45, y: 0 };
      case 'left': // Slides in from left (-45px)
        return { opacity: 0, x: -45, y: 0 };
      case 'down': // Slides in from top (-35px)
        return { opacity: 0, x: 0, y: -35 };
      case 'scale': // Subtle pop scale
        return { opacity: 0, scale: 0.94, y: 15 };
      case 'up': // Standard bottom to top (+35px)
      default:
        return { opacity: 0, x: 0, y: 35 };
    }
  };

  const initial = getInitialPosition();
  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: false, amount }} // 'once: false' triggers exit when scrolled away and re-animates when scrolled back
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/**
 * HeadingReveal: Specialized staggered entrance for large headings
 */
export const HeadingReveal = ({
  children,
  delay = 0.05,
  className = '',
  style = {}
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: smoothEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

