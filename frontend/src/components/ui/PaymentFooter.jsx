import React from 'react';

const PaymentFooter = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">100% Secure</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Payments processed securely</div>
        </div>

        <div className="flex items-center gap-4">
          <img src="/logos/upi.png" alt="UPI" className="h-6" loading="lazy" />
          <img src="/logos/paytm.png" alt="Paytm" className="h-6" loading="lazy" />
          <img src="/logos/phonepe.png" alt="PhonePe" className="h-6" loading="lazy" />
          <img src="/logos/gpay.png" alt="GPay" className="h-6" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default PaymentFooter;
