import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Info, X } from 'lucide-react';
import { certifications } from '../mockData';
import CheckoutModal from '../components/ui/CheckoutModal';
import CertificationsMarquee from '../components/CertificationsMarquee';
import { toast } from 'sonner';

const Certifications = () => {
  const [cart, setCart] = useState([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('All');

  const levels = ['All', 'Foundational', 'Associate', 'Professional', 'Specialty'];

  const filteredCertifications = selectedLevel === 'All'
    ? certifications
    : certifications.filter(cert => cert.level === selectedLevel);

  const addToCart = (cert) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === cert.id);
      if (exists) {
        toast.info('Item already in cart');
        return prev;
      }
      toast.success(`${cert.name} added to cart`);
      setDrawerOpen(true);
      return [...prev, cert];
    });
  };

  const removeFromCart = (certId) => {
    setCart(prev => prev.filter(item => item.id !== certId));
    toast.success('Item removed from cart');
    if (cart.length <= 1) {
      // closing after removal if last item removed
      setDrawerOpen(false);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CertificationsMarquee />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AWS Certification Vouchers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get official AWS certification exam vouchers at competitive prices
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedLevel === level
                  ? 'bg-orange-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Certifications Grid (3-per-row on laptop/desktop) */}
          <div className="w-full">
            <div className="grid md:grid-cols-3 gap-6">
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <img
                        src={cert.badge}
                        alt={cert.name}
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                    <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded-full mb-3">
                      {cert.level}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-500">
                          ₹{cert.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {cert.currency}
                        </span>
                      </div>
                      {cart.find(item => item.id === cert.id) ? (
                        <button
                          onClick={() => removeFromCart(cert.id)}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                        >
                          <Check className="w-4 h-4" />
                          <span>Added</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(cert)}
                          className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Checkout modal remains available; removing inline cart sidebar per request */}
          <CheckoutModal
            open={checkoutOpen}
            onClose={() => setCheckoutOpen(false)}
            cart={cart}
            onSuccess={() => setCart([])}
          />

          {/* Right-side drawer cart (slides in from right when items added). */}
          {drawerOpen && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50 p-4 overflow-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Cart ({cart.length})</h3>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
              ) : (
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.name}</p>
                        <p className="text-sm font-semibold text-orange-500">₹{item.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => {
                        // remove and if last, close drawer
                        setCart(prev => {
                          const next = prev.filter(it => it.id !== item.id);
                          if (next.length === 0) setDrawerOpen(false);
                          return next;
                        });
                        toast.success('Item removed from cart');
                      }} className="text-red-500 hover:text-red-600 text-sm font-medium ml-2">Remove</button>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900 dark:text-white">Total:</span>
                  <span className="text-orange-500">₹{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
              <button onClick={() => { setDrawerOpen(false); setCheckoutOpen(true); }} className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200">Proceed to Checkout</button>
            </motion.aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
