import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const slides = [
  {
    title: 'AWS Certified Software Developers - Remote Contract Work',
    client: 'RemoteDev Co',
    dates: 'Nov 11, 2025 - Nov 23, 2025',
    feedback: 'Delivered high-quality software, fully AWS-aligned architecture and CI/CD pipelines.'
  },
  {
    title: 'Certified AWS Experts Needed',
    client: 'CloudHire',
    dates: 'Oct 30, 2025 - Nov 3, 2025',
    feedback: 'Rapid ramp-up and expert advice to meet strict compliance and performance goals.'
  },
  {
    title: 'AWS Certified Professionals for Cloud Migration & Modernization',
    client: 'ModernizeIT',
    dates: 'Sep 10, 2025 - Sep 30, 2025',
    feedback: 'Seamless migration with minimal downtime and optimized cost structure.'
  }
];

const UpworkTestimonials = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <img src="/logos/upwork.png" alt="Upwork" className="h-8" />
            <h3 className="text-xl font-bold">Trusted by Global Clients on Upwork</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold flex items-center gap-2 shadow">5
              <Star className="w-4 h-4" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Top Rated · Proven Results</div>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 py-4 items-stretch"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...slides, ...slides].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.03, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % slides.length) * 0.08 }}
                className="min-w-[340px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-2xl cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex items-center gap-3">
                    <img src="/logos/upwork.png" alt="Upwork" className="h-8 w-8 object-contain" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.client}</div>
                      {s.dates && <div className="text-xs text-gray-400">{s.dates}</div>}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <motion.div
                        className="flex items-center gap-1"
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >

                      {/* show 5 orange stars */}
                      <div className="flex text-orange-500">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm font-bold text-orange-600">5.0</div>
                    </motion.div>
                    <div className="text-xs text-gray-400">Upwork · Completed</div>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-sm text-gray-700 dark:text-gray-300 italic"
                >
                  "{s.feedback}"
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpworkTestimonials;
