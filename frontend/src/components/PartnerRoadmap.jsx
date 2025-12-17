import React from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    id: 'registered',
    title: 'Registered AWS Partner',
    badge: '/badges/registered.png',
    details: ['Create APN Partner Central account', 'Company profile setup', 'No certification mandatory initially'],
    color: 'bg-orange-100',
    align: 'left'
  },
  {
    id: 'standard',
    title: 'Standard Tier',
    badge: '/badges/standard.png',
    details: ['Minimum 2 AWS Certified Professionals', 'Technical & Business Accreditations', '10+ clients served, customer references'],
    color: 'bg-yellow-100',
    align: 'right'
  },
  {
    id: 'advanced',
    title: 'Advanced Tier',
    badge: '/badges/advanced.png',
    details: ['4+ Associate Certs', '2+ Professional Certs', '30+ clients served, 50+ AWS certifications across team'],
    color: 'bg-blue-100',
    align: 'left'
  },
  {
    id: 'premier',
    title: 'Premier Tier',
    badge: '/badges/premier.png',
    details: ['20+ Associate Certs', '8+ Professional Certs', 'Regional AWS spend threshold'],
    color: 'bg-purple-100',
    align: 'right'
  }
];

const StepCard = ({ step, index }) => {
  const ref = React.useRef();
  const inView = useInView(ref, { once: true, margin: '-120px' });

  const commonTransition = { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.12 };

  return (
    <div ref={ref} className="w-full flex md:justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80, rotateY: 12 }}
        animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : undefined}
        transition={commonTransition}
        className={`max-w-xl w-full relative p-6 rounded-2xl shadow-2xl backdrop-blur ${step.color} border border-gray-200`}
        style={{ perspective: 1200 }}
      >
        <div className="flex items-center space-x-4">
          <motion.img
            src={step.badge}
            alt={step.title}
            className="w-16 h-16 object-contain drop-shadow-md"
            animate={inView ? { y: [-6, 6, -6] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={step.id === 'standard' ? { rotate: 8, scale: 1.03 } : { scale: 1.02 }}
            style={{ transformOrigin: '50% 50%' }}
          />

          <div>
            <h4 className="text-lg font-bold">{step.title}</h4>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              {step.details.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
          </div>
        </div>

        {/* Advanced glowing border */}
        {step.id === 'advanced' && inView && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ boxShadow: '0 0 0px rgba(96,165,250,0)' }}
            animate={{ boxShadow: '0 6px 36px rgba(59,130,246,0.16), 0 0 24px rgba(59,130,246,0.08)' }}
            transition={{ duration: 0.8 }}
          />
        )}

        {/* Premier confetti + scale-up on view */}
        {step.id === 'premier' && (
          <>
            <motion.div
              initial={{ scale: 0.98 }}
              animate={inView ? { scale: 1.02 } : undefined}
              transition={{ duration: 0.6 }}
              className="absolute -top-4 -right-4"
            />
            {inView && (
              <div className="pointer-events-none absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-1">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-confetti" />
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-confetti delay-75" />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-confetti delay-150" />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-confetti delay-225" />
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

const PartnerRoadmap = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">AWS Partner Journey</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

          {steps.map((s, idx) => (
            <div key={s.id} className={`md:col-span-1 ${s.align === 'left' ? 'md:justify-end' : ''} flex`}>
              <div className={`w-full md:w-1/2 ${s.align === 'left' ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'}`}>
                <StepCard step={s} index={idx} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerRoadmap;
