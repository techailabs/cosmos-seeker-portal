
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement Supabase auth
    console.log('Login attempt:', { email, password });
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🔮</div>
                <h1 className="text-3xl font-bold cosmic-text mb-2">Welcome Back</h1>
                <p className="text-gray-600">Continue your spiritual journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full cosmic-gradient text-white hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <Link to="/forgot-password" className="text-purple-600 hover:text-purple-700 text-sm">
                  Forgot your password?
                </Link>
                <div className="text-gray-600 text-sm">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-purple-600 hover:text-purple-700 font-medium">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
