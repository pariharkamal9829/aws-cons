import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: 'No full-time hiring', desc: 'Scale with certified professionals without hiring permanently', icon: '👥' },
  { title: 'Monthly flexible model', desc: 'Pay month-to-month for expert cloud resources', icon: '📅' },
  { title: 'Certification-based pricing', desc: 'Transparent pricing tied to certification levels', icon: '🎓' }
];

const HowWeHelp = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">How We Help</h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">We help AWS Partner companies grow faster by providing AWS-certified professionals attached to your AWS organization on a monthly basis — without permanent hiring.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} whileHover={{ y: -8, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-shadow">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
