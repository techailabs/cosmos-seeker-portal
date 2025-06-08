
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Download, Mail, Star, Calendar, MapPin } from 'lucide-react';

interface SoulReportForm {
  fullName: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: string;
  primaryQuestion: string;
  lifeArea: string;
}

const FreeSoulReport = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [reportData, setReportData] = useState<any>(null);

  const form = useForm<SoulReportForm>({
    defaultValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      gender: '',
      primaryQuestion: '',
      lifeArea: 'general'
    }
  });

  const generateSoulReport = async (data: SoulReportForm) => {
    setIsGenerating(true);
    
    // Simulate API call for soul report generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate personalized insights based on form data
    const insights = generatePersonalizedInsights(data);
    setReportData(insights);
    setReportGenerated(true);
    setIsGenerating(false);
  };

  const generatePersonalizedInsights = (data: SoulReportForm) => {
    const birthDate = new Date(data.dateOfBirth);
    const zodiacSign = getZodiacSign(birthDate);
    const lifePathNumber = calculateLifePathNumber(birthDate);
    const soulArchetype = determineSoulArchetype(data.fullName, birthDate);
    
    return {
      name: data.fullName,
      zodiacSign,
      lifePathNumber,
      soulArchetype,
      primaryElement: getElementByZodiac(zodiacSign),
      spiritualGifts: generateSpiritualGifts(lifePathNumber),
      lifePurpose: generateLifePurpose(zodiacSign, lifePathNumber),
      challenges: generateChallenges(zodiacSign),
      recommendations: generateRecommendations(data.lifeArea, zodiacSign),
      luckyNumbers: generateLuckyNumbers(birthDate),
      gemstones: getGemstonesByZodiac(zodiacSign),
      mantras: getMantrasByZodiac(zodiacSign)
    };
  };

  const getZodiacSign = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    return "Pisces";
  };

  const calculateLifePathNumber = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
    let sum = dateStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9 && sum !== 11 && sum !== 22) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
  };

  const determineSoulArchetype = (name: string, date: Date) => {
    const archetypes = ["The Healer", "The Mystic", "The Teacher", "The Guardian", "The Visionary", "The Warrior", "The Sage"];
    const index = (name.length + date.getDate()) % archetypes.length;
    return archetypes[index];
  };

  const getElementByZodiac = (zodiac: string) => {
    const fireElements = ["Aries", "Leo", "Sagittarius"];
    const earthElements = ["Taurus", "Virgo", "Capricorn"];
    const airElements = ["Gemini", "Libra", "Aquarius"];
    const waterElements = ["Cancer", "Scorpio", "Pisces"];
    
    if (fireElements.includes(zodiac)) return "Fire";
    if (earthElements.includes(zodiac)) return "Earth";
    if (airElements.includes(zodiac)) return "Air";
    return "Water";
  };

  const generateSpiritualGifts = (lifePathNumber: number) => {
    const gifts = {
      1: ["Leadership", "Innovation", "Independence"],
      2: ["Cooperation", "Healing", "Diplomacy"],
      3: ["Creativity", "Communication", "Joy"],
      4: ["Organization", "Stability", "Practicality"],
      5: ["Freedom", "Adventure", "Versatility"],
      6: ["Nurturing", "Responsibility", "Harmony"],
      7: ["Intuition", "Spirituality", "Analysis"],
      8: ["Manifestation", "Authority", "Material Mastery"],
      9: ["Compassion", "Wisdom", "Universal Love"],
      11: ["Spiritual Insight", "Inspiration", "Enlightenment"],
      22: ["Master Builder", "Visionary", "Global Impact"]
    };
    return gifts[lifePathNumber as keyof typeof gifts] || gifts[9];
  };

  const generateLifePurpose = (zodiac: string, lifePathNumber: number) => {
    const purposes = {
      "Aries": "To lead with courage and pioneer new paths for humanity.",
      "Taurus": "To create beauty and stability in the world through practical means.",
      "Gemini": "To connect people through communication and share knowledge.",
      "Cancer": "To nurture and heal others through emotional wisdom.",
      "Leo": "To inspire and lead others through creative self-expression.",
      "Virgo": "To serve others through attention to detail and healing.",
      "Libra": "To bring harmony and justice to relationships and society.",
      "Scorpio": "To transform and heal through deep psychological insights.",
      "Sagittarius": "To expand consciousness through teaching and exploration.",
      "Capricorn": "To build lasting structures that benefit society.",
      "Aquarius": "To innovate and bring humanitarian change to the world.",
      "Pisces": "To heal and inspire through spiritual and artistic gifts."
    };
    return purposes[zodiac as keyof typeof purposes];
  };

  const generateChallenges = (zodiac: string) => {
    const challenges = {
      "Aries": "Learning patience and considering others' perspectives",
      "Taurus": "Embracing change and releasing stubbornness",
      "Gemini": "Focusing energy and deepening relationships",
      "Cancer": "Balancing emotions and avoiding over-sensitivity",
      "Leo": "Developing humility and sharing the spotlight",
      "Virgo": "Accepting imperfection and trusting intuition",
      "Libra": "Making decisions and asserting personal needs",
      "Scorpio": "Releasing control and trusting the process",
      "Sagittarius": "Committing to goals and considering details",
      "Capricorn": "Balancing work with personal relationships",
      "Aquarius": "Connecting emotionally and accepting traditions",
      "Pisces": "Setting boundaries and grounding in reality"
    };
    return challenges[zodiac as keyof typeof challenges];
  };

  const generateRecommendations = (lifeArea: string, zodiac: string) => {
    return [
      `Daily meditation practice focusing on ${zodiac} energy`,
      "Journaling your spiritual insights and dreams",
      "Connecting with nature through regular walks",
      "Practicing gratitude and mindfulness",
      "Exploring creative expression through art or music"
    ];
  };

  const generateLuckyNumbers = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return [day, month, (day + month) % 10, (day * month) % 10].slice(0, 3);
  };

  const getGemstonesByZodiac = (zodiac: string) => {
    const stones = {
      "Aries": ["Diamond", "Ruby", "Bloodstone"],
      "Taurus": ["Emerald", "Rose Quartz", "Sapphire"],
      "Gemini": ["Agate", "Citrine", "Pearl"],
      "Cancer": ["Moonstone", "Pearl", "Ruby"],
      "Leo": ["Peridot", "Citrine", "Onyx"],
      "Virgo": ["Sapphire", "Carnelian", "Peridot"],
      "Libra": ["Opal", "Lapis Lazuli", "Peridot"],
      "Scorpio": ["Topaz", "Garnet", "Aquamarine"],
      "Sagittarius": ["Turquoise", "Topaz", "Amethyst"],
      "Capricorn": ["Garnet", "Onyx", "Ruby"],
      "Aquarius": ["Amethyst", "Garnet", "Jasper"],
      "Pisces": ["Aquamarine", "Bloodstone", "Jasper"]
    };
    return stones[zodiac as keyof typeof stones];
  };

  const getMantrasByZodiac = (zodiac: string) => {
    const mantras = {
      "Aries": "Om Gam Ganapataye Namaha",
      "Taurus": "Om Shrim Mahalakshmiyei Namaha",
      "Gemini": "Om Aim Saraswatyai Namaha",
      "Cancer": "Om Som Somaya Namaha",
      "Leo": "Om Suryaya Namaha",
      "Virgo": "Om Bum Budhaya Namaha",
      "Libra": "Om Shum Shukraya Namaha",
      "Scorpio": "Om Mangalaya Namaha",
      "Sagittarius": "Om Brim Brihaspataye Namaha",
      "Capricorn": "Om Sham Shanicharaya Namaha",
      "Aquarius": "Om Rahave Namaha",
      "Pisces": "Om Ketave Namaha"
    };
    return mantras[zodiac as keyof typeof mantras];
  };

  const downloadPDF = () => {
    // This would integrate with a PDF generation library
    console.log("Generating PDF report for:", reportData);
    alert("PDF generation feature will be implemented with proper backend integration!");
  };

  const emailReport = () => {
    console.log("Emailing report to:", form.getValues("email"));
    alert("Email feature will be implemented with proper backend integration!");
  };

  if (reportGenerated && reportData) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-6xl mb-6 animate-pulse-soft">✨</div>
                <h1 className="text-4xl font-bold mb-4 cosmic-text">Your Soul Report is Ready!</h1>
                <p className="text-lg text-gray-600">Here are your personalized spiritual insights</p>
              </div>

              <div className="space-y-6">
                {/* Personal Info Card */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="text-yellow-500" />
                      <span>Personal Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-purple-700">Zodiac Sign</h3>
                        <p className="text-gray-700">{reportData.zodiacSign}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-700">Life Path Number</h3>
                        <p className="text-gray-700">{reportData.lifePathNumber}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-700">Soul Archetype</h3>
                        <p className="text-gray-700">{reportData.soulArchetype}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-700">Primary Element</h3>
                        <p className="text-gray-700">{reportData.primaryElement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Life Purpose Card */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Your Life Purpose</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{reportData.lifePurpose}</p>
                  </CardContent>
                </Card>

                {/* Spiritual Gifts */}
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="cosmic-text">Your Spiritual Gifts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {reportData.spiritualGifts.map((gift: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {gift}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Gemstones & Mantras */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="cosmic-text">Lucky Gemstones</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {reportData.gemstones.map((stone: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full cosmic-gradient"></span>
                            <span>{stone}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="cosmic-text">Personal Mantra</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-purple-700 text-center py-4">
                        {reportData.mantras}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button onClick={downloadPDF} className="flex-1 cosmic-gradient text-white">
                    <Download className="mr-2" size={16} />
                    Download PDF Report
                  </Button>
                  <Button onClick={emailReport} variant="outline" className="flex-1">
                    <Mail className="mr-2" size={16} />
                    Email Report
                  </Button>
                  <Button onClick={() => setReportGenerated(false)} variant="outline" className="flex-1">
                    Generate New Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20 animate-float"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-8 animate-pulse-soft">🌟</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Your Free Soul Report
              <span className="block text-3xl md:text-4xl mt-4 text-purple-200">
                Awaits Discovery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Uncover the cosmic blueprint of your soul's journey. Get personalized insights into your 
              spiritual path, life purpose, and hidden potentials - completely free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6 cosmic-text">What's Included in Your Report</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔮</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Soul Archetype Analysis</h3>
                      <p className="text-gray-600">Discover your core spiritual nature and cosmic personality type</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌙</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Life Purpose Insights</h3>
                      <p className="text-gray-600">Understand your soul's mission and how to align with it</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Spiritual Gifts & Talents</h3>
                      <p className="text-gray-600">Uncover your natural spiritual abilities and how to develop them</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🧘</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalized Practices</h3>
                      <p className="text-gray-600">Custom meditation and spiritual practices for your journey</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lucky Gemstones & Mantras</h3>
                      <p className="text-gray-600">Personal gemstone recommendations and sacred mantras</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 cosmic-text text-center">Get Your Free Report</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(generateSoulReport)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>Date of Birth *</span>
                            </FormLabel>
                            <FormControl>
                              <Input type="date" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time of Birth</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="placeOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>Place of Birth</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="City, State, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lifeArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Life Area to Explore</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose focus area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Life Guidance</SelectItem>
                              <SelectItem value="career">Career & Purpose</SelectItem>
                              <SelectItem value="relationships">Love & Relationships</SelectItem>
                              <SelectItem value="health">Health & Wellness</SelectItem>
                              <SelectItem value="spirituality">Spiritual Growth</SelectItem>
                              <SelectItem value="finances">Money & Abundance</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="primaryQuestion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Question (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={3}
                              placeholder="What aspect of your spiritual journey would you like to explore?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full golden-gradient text-white hover:opacity-90 transition-opacity text-lg py-4"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <span className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Generating Your Soul Report...</span>
                        </span>
                      ) : (
                        "Generate My Free Soul Report ✨"
                      )}
                    </Button>
                  </form>
                </Form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information is completely secure and will never be shared. Report generation is instant!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeSoulReport;
