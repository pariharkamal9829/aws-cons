import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../mockData';

const MobileCollapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <button
          className="lg:hidden p-2 rounded-md bg-gray-800/30 hover:bg-gray-800/40"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <div className="hidden lg:block">{children}</div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-0 rounded-lg overflow-hidden w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center">
                <img
                  src="/logos/awspartnerxlogo.png"
                  alt="AWS Partner X logo"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <span className="font-bold text-lg text-white">
                {companyInfo.name.split(' ')[0]}{" "}
                <span className="text-orange-500">
                  {companyInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Trusted AWS consultancy delivering certification enablement and APN partner growth solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href={companyInfo.social?.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social?.twitter || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <MobileCollapsible title="Quick Links">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-orange-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apn-enablement" className="text-sm hover:text-orange-500 transition-colors duration-200">
                  APN Enablement
                </Link>
                
              </li>
              <li>
                <Link to="/exam-prep" className="text-sm hover:text-orange-500 transition-colors duration-200">
                  Exam Preparation
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-sm hover:text-orange-500 transition-colors duration-200">
                  Certifications
                </Link>
              </li>
            </ul>
          </MobileCollapsible>

          {/* Services */}
          <MobileCollapsible title="Services">
            <ul className="space-y-2">
              <li className="text-sm">APN Partner Registration</li>
              <li className="text-sm">AWS Certification Vouchers</li>
              <li className="text-sm">Exam Preparation Support</li>
              <li className="text-sm">Partner Score Optimization</li>
            </ul>
          </MobileCollapsible>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-orange-500 transition-colors duration-200">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center">
              AWS and AWS Certification logos are trademarks of Amazon Web Services, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
