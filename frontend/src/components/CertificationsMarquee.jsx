import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../mockData';

const CertificationsMarquee = () => {
  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...certifications, ...certifications].map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-44 p-3"
            title={c.name}
            aria-label={c.name}
          >
            <img
              src={c.badge}
              alt={c.name}
              loading="lazy"
              className="h-20 object-contain transform transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificationsMarquee;
