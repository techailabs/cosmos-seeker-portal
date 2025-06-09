
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Zap, Star, Gift, Infinity, Lock } from 'lucide-react';

const PremiumFeatures = () => {
  const [selectedTier, setSelectedTier] = useState('seeker');

  const tiers = [
    {
      id: 'seeker',
      name: 'Soul Seeker',
      price: '₹2,199',
      originalPrice: '₹2,999',
      period: '/month',
      icon: '🌟',
      description: 'Begin your spiritual journey',
      features: [
        'Monthly astrology insights',
        'Access to group meditations',
        'Basic spiritual dashboard',
        'Community forum access',
        'Weekly cosmic forecasts'
      ],
      popular: false
    },
    {
      id: 'mystic',
      name: 'Cosmic Mystic',
      price: '₹5,999',
      originalPrice: '₹7,999',
      period: '/month',
      icon: '🔮',
      description: 'Accelerate your transformation',
      features: [
        'Everything in Soul Seeker',
        '2 one-on-one sessions/month',
        'Premium AI cosmic guide',
        'Advanced analytics & insights',
        'Exclusive workshops & events',
        'Priority session booking',
        'Personal spiritual mentor'
      ],
      popular: true
    },
    {
      id: 'sage',
      name: 'Enlightened Sage',
      price: '₹14,999',
      originalPrice: '₹19,999',
      period: '/month',
      icon: '👑',
      description: 'Master your spiritual gifts',
      features: [
        'Everything in Cosmic Mystic',
        'Unlimited one-on-one sessions',
        'Personal spiritual coach',
        'Custom ritual creation',
        'VIP event access',
        '24/7 crisis support',
        'Spiritual business mentoring',
        'Create your own courses'
      ],
      popular: false
    }
  ];

  const digitalProducts = [
    {
      icon: '📚',
      title: 'Sacred Wisdom Library',
      description: 'Ancient texts, modern interpretations',
      price: '₹3,549',
      originalPrice: '₹4,999',
      type: 'Digital Course'
    },
    {
      icon: '🎵',
      title: 'Healing Frequency Collection',
      description: '432Hz meditation & healing tracks',
      price: '₹2,199',
      originalPrice: '₹2,999',
      type: 'Audio Bundle'
    },
    {
      icon: '🔮',
      title: 'Daily Oracle Cards',
      description: 'Digital deck with 365 messages',
      price: '₹1,449',
      originalPrice: '₹1,999',
      type: 'Digital Deck'
    },
    {
      icon: '📖',
      title: 'Personal Akashic Records Reading',
      description: 'Deep soul history exploration',
      price: '₹22,499',
      originalPrice: '₹29,999',
      type: 'Premium Reading'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20">
      <div className="container mx-auto px-4">
        {/* Subscription Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 divine-text text-glow-golden">
            Choose Your Spiritual Path
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Unlock deeper insights and accelerate your transformation with our premium memberships
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
            <span className="text-green-200 font-semibold">💰 All Prices in Indian Rupees (₹)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 glassmorphism ${
                tier.popular 
                  ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20 scale-105 glow-golden' 
                  : 'border-white/20 glow'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold sacred-text text-glow mb-2">{tier.name}</h3>
                <p className="text-gray-200 mb-6">{tier.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold divine-text text-glow">{tier.price}</span>
                    <span className="text-gray-300">{tier.period}</span>
                  </div>
                  <span className="text-sm text-gray-400 line-through">{tier.originalPrice}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'aurora-gradient text-white hover:opacity-90 glow-golden' 
                      : 'cosmic-gradient text-white hover:opacity-90 glow'
                  } transition-opacity`}
                >
                  {tier.popular ? 'Start Your Journey' : 'Choose This Path'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Marketplace */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-text text-glow">
            Spiritual Marketplace
          </h2>
          <p className="text-lg text-gray-200">
            Enhance your practice with our curated digital wisdom collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {digitalProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group glassmorphism glow"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs px-2 py-1 bg-purple-600/50 rounded-full text-purple-200">
                  {product.type}
                </span>
              </div>
              <h3 className="text-lg font-bold sacred-text text-glow mb-2">{product.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{product.description}</p>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold divine-text text-glow">{product.price}</span>
                  <div className="text-xs text-gray-400 line-through">{product.originalPrice}</div>
                </div>
                <Button size="sm" className="golden-gradient text-white hover:opacity-90 glow-golden">
                  Get Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center glassmorphism glow">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-yellow-400 mr-2" />
            <h3 className="text-2xl font-bold sacred-text text-glow">Limited Time Offer</h3>
          </div>
          <p className="text-xl text-gray-200 mb-6">
            Get 30% off your first month of any premium membership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="aurora-gradient text-white hover:opacity-90 px-8 py-3 glow-golden">
              Claim Your Discount
            </Button>
            <span className="text-sm text-purple-200">
              Offer expires in 72 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
