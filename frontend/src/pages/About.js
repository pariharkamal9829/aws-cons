import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Shield, Heart, Zap } from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About AWS CloudEdge Consulting
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your trusted partner for AWS certification and APN enablement excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower organizations and professionals with the knowledge, certifications, and partnerships needed to excel in the AWS cloud ecosystem. We believe in building long-term relationships based on trust, expertise, and mutual success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
            >
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-orange-100 leading-relaxed">
                To be the leading AWS consultancy recognized for accelerating cloud transformation through certification excellence and strategic partner enablement. We envision a future where every organization can leverage AWS capabilities to their fullest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in AWS certification and consulting services'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Ethical practices and compliance are at the heart of our operations'
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We build lasting relationships focused on mutual growth and success'
              },
              {
                icon: Heart,
                title: 'Commitment',
                description: 'Dedicated to your success with personalized attention and support'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Staying ahead with the latest AWS technologies and best practices'
              },
              {
                icon: Target,
                title: 'Results',
                description: 'Focused on delivering measurable outcomes and achieving your goals'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              What We Do
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  AWS Certification Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We provide official AWS certification exam vouchers at competitive prices and offer comprehensive exam preparation support. Our structured mentorship program helps professionals achieve their certification goals with confidence.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  APN Partner Enablement
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We guide organizations through the AWS Partner Network journey, from initial registration to Advanced Tier status. With access to 20+ AWS certified professionals, we help align your team's capabilities with APN requirements, optimize partner scores, and maintain long-term partnership success.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Cloud Consulting
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of AWS experts provides strategic consulting services to help organizations maximize their AWS investments. We focus on best practices, cost optimization, and architectural excellence to ensure your cloud success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Understand Your Goals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We start by deeply understanding your objectives, challenges, and desired outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Custom Strategy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Develop a tailored roadmap aligned with your specific needs and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Expert Execution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implement solutions with our team of certified AWS professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Continuous Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Provide ongoing guidance and optimization to ensure lasting success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>20+ AWS Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Ethical & Compliant Practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Personalized Attention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Long-term Partnership Focus</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-orange-100">
                  We're not just consultants—we're your partners in cloud success. Every client's achievement is our achievement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
