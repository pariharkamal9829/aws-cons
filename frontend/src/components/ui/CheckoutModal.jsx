import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import PaymentFooter from './PaymentFooter';
import { toast } from 'sonner';

const CheckoutModal = ({ open, onClose, cart = [], onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  // Initialize amount once when modal opens so user edits aren't overwritten
  React.useEffect(() => {
    if (open) {
      setAmount(cart.reduce((s, i) => s + i.price, 0));
    }
    // only run when modal open state changes
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const certifications = cart.map(c => c.name).join(', ');

    // Send to Netlify function which will forward email via SendGrid (env: SENDGRID_API_KEY)
    try {
      const body = { name, phone, email, amount, certifications, type: 'checkout', to: 'info@awspartnerx.cloud' };
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const text = await res.text().catch(() => 'Unknown server error');
        console.error('sendEmail error:', text);
        if (res.status === 404 || text.includes('not found')) {
          toast.error('Server function not found. Opening mail client as fallback.');
          window.location.href = `mailto:info@awspartnerx.cloud?subject=Order%20from%20site&body=${encodeURIComponent(certifications)}`;
          return;
        }
        throw new Error(text || 'Failed to submit');
      }

      toast.success('Order submitted — we will contact you shortly');
      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Submission failed. The form is saved — please contact us.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative max-w-2xl w-full mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Checkout</h3>
            <button onClick={onClose} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} name="checkout" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="checkout" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input required value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded" name="name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-3 py-2 border rounded" name="phone" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" name="email" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Certifications</label>
                <div className="flex flex-wrap gap-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                      <img src={item.badge} alt={item.name} className="w-10 h-10 object-contain" />
                      <div>
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-xs text-orange-500">₹{item.price.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold">Pay / Submit Order</button>
            </div>
          </form>
        </div>
        <PaymentFooter />
      </motion.div>
    </div>
  );
};

export default CheckoutModal;
