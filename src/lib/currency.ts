
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateGST = (amount: number, gstRate: number = 18): number => {
  return Math.round(amount * (gstRate / 100));
};

export const calculateTotalWithGST = (amount: number, gstRate: number = 18): number => {
  return amount + calculateGST(amount, gstRate);
};

export const parseINRAmount = (inrString: string): number => {
  return parseInt(inrString.replace(/[₹,]/g, ''));
};

// Pricing tiers for different services
export const servicePricing = {
  astrology: {
    basic: 1999,
    premium: 3999,
    deluxe: 7999
  },
  hypnotherapy: {
    single: 2499,
    package3: 6999,
    package6: 12999
  },
  palmistry: {
    basic: 1299,
    detailed: 2499
  },
  meditation: {
    group: 799,
    private: 1999
  },
  musicTherapy: {
    group: 1499,
    private: 2999
  }
};

// Calculate discounts
export const calculateDiscount = (originalPrice: number, discountedPrice: number): number => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};
