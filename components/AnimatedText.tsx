import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  words: string[];
  intervalMs?: number;
  longestWord?: string; // Optional: helps reserve exact width, if omitted we try to guess based on length
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  words, 
  intervalMs = 4500,
  longestWord 
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs); 
    return () => clearInterval(interval);
  }, [words.length, intervalMs]);

  // Determine the longest word to reserve layout space so the layout doesn't jump
  const getLongest = () => {
    if (longestWord) return longestWord;
    return words.reduce((a, b) => a.length > b.length ? a : b, "");
  }

  return (
    <span className="relative inline-block text-left whitespace-nowrap">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 italic font-light text-clay-500"
        >
          {words[index]}?
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to reserve width */}
      <span className="invisible italic font-light pr-2">
        {getLongest()}?
      </span>
    </span>
  );
};
