
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, IndianRupee, Shield, Award, Calendar, MessageCircle } from 'lucide-react';

const HypnotherapyService = () => {
  const [selectedPackage, setSelectedPackage] = useState('single');

  const packages = {
    single: {
      name: "Single Session",
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "90 minutes",
      features: [
        "One-on-one hypnotherapy session",
        "Personalized induction technique",
        "Session recording included",
        "24-hour follow-up support",
        "Healing affirmations guide"
      ]
    },
    package3: {
      name: "Transformation Package",
      price: "₹6,999",
      originalPrice: "₹9,999",
      duration: "3 Sessions",
      features: [
        "3 progressive hypnotherapy sessions",
        "Customized treatment plan",
        "All session recordings",
        "Weekly progress check-ins",
        "Personal meditation guide",
        "Emergency support access"
      ],
      popular: true
    },
    package6: {
      name: "Complete Healing Journey",
      price: "₹12,999",
      originalPrice: "₹18,999",
      duration: "6 Sessions",
      features: [
        "6 comprehensive sessions",
        "Full psychological assessment",
        "Trauma-informed approach",
        "All recordings & resources",
        "Unlimited chat support",
        "Life coaching integration",
        "Spiritual guidance sessions"
      ]
    }
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "After years of anxiety, just 3 sessions helped me find peace. The practitioner was incredibly skilled.",
      issue: "Anxiety & Panic Attacks"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Broke my smoking habit of 15 years. The hypnotherapy was gentle yet powerful.",
      issue: "Smoking Addiction"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      text: "Overcame my fear of public speaking. Now I'm confidently presenting at work!",
      issue: "Public Speaking Fear"
    }
  ];

  const conditions = [
    { name: "Anxiety & Stress", success: "95%", sessions: "2-4" },
    { name: "Phobias & Fears", success: "90%", sessions: "3-6" },
    { name: "Bad Habits", success: "85%", sessions: "4-8" },
    { name: "Trauma Recovery", success: "88%", sessions: "6-12" },
    { name: "Confidence Building", success: "92%", sessions: "3-5" },
    { name: "Sleep Issues", success: "87%", sessions: "2-4" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animate-pulse-soft">💫</div>
              <h1 className="text-5xl font-bold mb-6 cosmic-text">Hypnotherapy</h1>
              <p className="text-xl text-gray-600 mb-8">
                Heal trauma, crush bad patterns, reprogram self-worth
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>90 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>1-on-1 Session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 Rating</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Left Column - Service Details */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Transform Your Mind</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                        <div>
                          <h3 className="font-semibold mb-1">Trauma Healing</h3>
                          <p className="text-gray-600">Gentle release of past traumas and emotional wounds</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                        <div>
                          <h3 className="font-semibold mb-1">Habit Breaking</h3>
                          <p className="text-gray-600">Eliminate destructive patterns and addictive behaviors</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                        <div>
                          <h3 className="font-semibold mb-1">Confidence Building</h3>
                          <p className="text-gray-600">Reprogram limiting beliefs and boost self-worth</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full cosmic-gradient mt-2"></span>
                        <div>
                          <h3 className="font-semibold mb-1">Goal Achievement</h3>
                          <p className="text-gray-600">Align subconscious mind with your conscious goals</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Success Rates */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Success Rates & Treatment Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {conditions.map((condition, index) => (
                        <div key={index} className="p-4 border border-purple-200 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-sm">{condition.name}</h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {condition.success}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">Typical: {condition.sessions} sessions</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonials */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Client Success Stories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 border-l-4 border-purple-400 bg-purple-50">
                          <div className="flex items-center mb-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {testimonial.name}, {testimonial.location}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">"{testimonial.text}"</p>
                          <Badge variant="outline">{testimonial.issue}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Booking */}
              <div className="space-y-6">
                {/* Package Selection */}
                <Card className="bg-white shadow-lg sticky top-6">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Choose Your Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(packages).map(([key, pkg]) => (
                        <div 
                          key={key}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedPackage === key 
                              ? 'border-purple-500 bg-purple-50' 
                              : 'border-gray-200 hover:border-purple-300'
                          } ${pkg.popular ? 'relative' : ''}`}
                          onClick={() => setSelectedPackage(key)}
                        >
                          {pkg.popular && (
                            <Badge className="absolute -top-2 left-4 bg-orange-500 text-white">
                              Most Popular
                            </Badge>
                          )}
                          
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{pkg.name}</h3>
                            <div className="text-right">
                              <div className="flex items-center space-x-1">
                                <IndianRupee className="w-4 h-4 text-purple-600" />
                                <span className="font-bold text-purple-600">{pkg.price}</span>
                              </div>
                              <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{pkg.duration}</p>
                          
                          <ul className="space-y-1">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-xs text-gray-600">
                                <span className="w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Package Price:</span>
                        <span className="font-semibold">{packages[selectedPackage as keyof typeof packages].price}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>GST (18%):</span>
                        <span>₹{Math.round(parseInt(packages[selectedPackage as keyof typeof packages].price.slice(1)) * 0.18)}</span>
                      </div>
                      <div className="border-t pt-2 flex items-center justify-between font-bold">
                        <span>Total Amount:</span>
                        <span className="cosmic-text">₹{Math.round(parseInt(packages[selectedPackage as keyof typeof packages].price.slice(1)) * 1.18)}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link to="/book-session">
                        <Button className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity">
                          <Calendar className="mr-2" size={16} />
                          Book Your Session
                        </Button>
                      </Link>
                      
                      <Button variant="outline" className="w-full">
                        <MessageCircle className="mr-2" size={16} />
                        Chat with Practitioner
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-6 space-y-3 pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>100% Confidential & Secure</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-purple-600" />
                        <span>Certified Hypnotherapists</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>1000+ Successful Cases</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Support */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-800 mb-2">Need Immediate Support?</h3>
                    <p className="text-sm text-red-700 mb-3">
                      If you're experiencing a crisis, our emergency support team is available 24/7.
                    </p>
                    <Button variant="destructive" size="sm" className="w-full">
                      Emergency Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HypnotherapyService;
