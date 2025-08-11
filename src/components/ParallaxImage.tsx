import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
  scaleOnHover?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  parallaxSpeed = 0.3,
  scaleOnHover = true
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const offsetY = useParallax(parallaxSpeed);

  return (
    <motion.div
      ref={elementRef}
      className={`overflow-hidden ${className}`}
      whileHover={scaleOnHover ? { scale: 1.05 } : {}}
      data-anim="parallax-y"
      data-speed={parallaxSpeed}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y: offsetY }}
        loading="lazy"
        data-anim="parallax-y"
      />
    </motion.div>
  );
};

export default ParallaxImage;