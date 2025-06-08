
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "🔮 Welcome to your Cosmic Guide! I'm here to help you navigate your spiritual journey. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('astrology') || input.includes('birth chart')) {
      return "✨ Astrology holds profound insights! Your birth chart is like a cosmic fingerprint. Would you like to book an astrology reading to discover your soul's blueprint?";
    } else if (input.includes('meditation') || input.includes('calm')) {
      return "🧘‍♀️ Meditation is the gateway to inner peace. I sense you're seeking tranquility. Our guided meditation sessions can help you find your center. Shall I book you a session?";
    } else if (input.includes('healing') || input.includes('pain') || input.includes('trauma')) {
      return "💫 Healing is a sacred journey. Our hypnotherapy and energy healing services can help release what no longer serves you. Would you like immediate support or prefer to schedule a session?";
    } else if (input.includes('purpose') || input.includes('direction') || input.includes('lost')) {
      return "🌟 Finding your purpose is a beautiful quest. Our soul mapping services and life coaching can illuminate your path. Let me connect you with our spiritual advisors who can guide you.";
    } else if (input.includes('relationship') || input.includes('love') || input.includes('partner')) {
      return "💕 Love and relationships are mirrors for our growth. Our relationship astrology and tantric healing services can help harmonize your connections. Shall we explore this together?";
    } else if (input.includes('emergency') || input.includes('crisis') || input.includes('help')) {
      return "🆘 I sense urgency in your energy. You're not alone. Our crisis support team is available 24/7. Would you like me to connect you immediately with our emergency spiritual guidance line?";
    } else {
      return "🔮 I feel your energy seeking guidance. Every question is sacred, and I'm here to help you find the answers within. What aspect of your spiritual journey would you like to explore today?";
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full cosmic-gradient shadow-lg hover:shadow-xl transition-all duration-300 glow"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="w-80 h-96 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center">
              <span className="text-white text-sm">🔮</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Cosmic Guide</h3>
              <p className="text-purple-200 text-xs">Your AI Spiritual Assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/20">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask your cosmic question..."
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleVoice}
              className={`text-white hover:bg-white/10 ${isListening ? 'bg-red-500/50' : ''}`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSendMessage}
              className="text-white hover:bg-white/10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
