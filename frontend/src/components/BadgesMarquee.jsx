import React from 'react';
import { motion } from 'framer-motion';

const badges = [
  '/badges/registered.png',
  '/badges/standard.png',
  '/badges/advanced.png',
  '/badges/premier.png',
  '/badges/100-certified.png',
  '/badges/50-certified.png'
];

const BadgesMarquee = () => {
  return (
    <div className="hidden lg:block overflow-hidden py-6">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {[...badges, ...badges].map((b, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-56 h-44 sm:w-48 sm:h-32 md:w-56 md:h-36"
          >
            <img
              src={b}
              alt={`badge-${i}`}
              className="h-28 sm:h-24 md:h-28 w-auto object-contain bg-transparent p-0 transition-transform duration-200 ease-linear dark:bg-transparent"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BadgesMarquee;
