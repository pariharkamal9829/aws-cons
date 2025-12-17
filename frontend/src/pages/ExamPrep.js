import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, FileCheck, Calendar, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { examPrepFeatures } from '../mockData';

const ExamPrep = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Expert-Led Preparation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Exam Preparation & Success Support
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Structured mentorship and comprehensive guidance to maximize your exam success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-orange-500 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Exam Preparation Package</h2>
                <p className="text-orange-100">Complete mentorship & readiness support</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    ₹2,000
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">per exam preparation</p>
                </div>

                <div className="space-y-4 mb-8">
                  {examPrepFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our proven methodology ensures you're fully prepared for your AWS certification exam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Personalized Plan',
                description: 'Custom study plan based on your current knowledge and target exam'
              },
              {
                icon: BookOpen,
                title: 'Expert Mentorship',
                description: 'One-on-one sessions with AWS certified professionals'
              },
              {
                icon: FileCheck,
                title: 'Practice Tests',
                description: 'Comprehensive mock exams to gauge your readiness'
              },
              {
                icon: Calendar,
                title: 'Final Week Prep',
                description: 'Intensive revision strategy for the week before your exam'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">
                    Important Compliance Notice
                  </h3>
                  <div className="space-y-2 text-orange-800 dark:text-orange-400">
                    <p>
                      <strong>No Guarantees:</strong> We provide structured mentorship and preparation support. We do not guarantee exam success or specific outcomes.
                    </p>
                    <p>
                      <strong>Ethical Practices:</strong> Our services follow AWS certification policies and ethical guidelines. We focus on genuine skill development.
                    </p>
                    <p>
                      <strong>Your Responsibility:</strong> Success requires dedication, consistent study, and hands-on practice. We provide guidance and support throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Preparation?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Connect with our experts and get a personalized preparation plan
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrep;
