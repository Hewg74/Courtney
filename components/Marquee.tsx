import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  // We duplicate the items several times to ensure it can smoothly loop without running out of content on large screens
  const repeated = [...items, ...items, ...items, ...items];
  
  return (
    <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
      <motion.div
        className="flex whitespace-nowrap shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 60, // Slower scrolling for a calming effect
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 mx-1.5 md:space-x-4 md:mx-2">
            <span className="text-sm md:text-base text-sand-500 font-medium tracking-wide capitalize">
              {item}
            </span>
            <span className="text-sand-300">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
