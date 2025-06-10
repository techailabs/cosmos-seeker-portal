
-- Create user profiles table for enhanced user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  full_name TEXT,
  phone TEXT,
  birth_date DATE,
  birth_time TIME,
  birth_place TEXT,
  spiritual_level TEXT DEFAULT 'Seeker',
  karma_points INTEGER DEFAULT 0,
  energy_level INTEGER DEFAULT 75,
  meditation_streak INTEGER DEFAULT 0,
  subscription_plan TEXT DEFAULT 'free',
  avatar_url TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user sessions table for tracking spiritual sessions
CREATE TABLE public.user_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  service_type TEXT NOT NULL,
  practitioner_name TEXT,
  session_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  status TEXT DEFAULT 'scheduled',
  price_inr DECIMAL(10,2),
  notes TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create practitioner profiles table
CREATE TABLE public.practitioner_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  specialization TEXT[],
  experience_years INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 4.5,
  hourly_rate_inr DECIMAL(10,2),
  bio TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create subscription plans table
CREATE TABLE public.subscription_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price_inr DECIMAL(10,2) NOT NULL,
  features TEXT[],
  duration_months INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create spiritual reports table
CREATE TABLE public.spiritual_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  report_type TEXT NOT NULL,
  content JSONB,
  file_url TEXT,
  generated_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Add RLS policies for user_sessions table
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sessions" 
  ON public.user_sessions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own sessions" 
  ON public.user_sessions 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sessions" 
  ON public.user_sessions 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Add RLS policies for spiritual_reports table
ALTER TABLE public.spiritual_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own reports" 
  ON public.spiritual_reports 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own reports" 
  ON public.spiritual_reports 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create admin policies for all tables
CREATE POLICY "Admins can view all profiles" 
  ON public.profiles 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE email = (auth.jwt() ->> 'email')
    )
  );

CREATE POLICY "Admins can manage all sessions" 
  ON public.user_sessions 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE email = (auth.jwt() ->> 'email')
    )
  );

CREATE POLICY "Admins can manage all reports" 
  ON public.spiritual_reports 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE email = (auth.jwt() ->> 'email')
    )
  );

-- Create policies for public read access where needed
CREATE POLICY "Public read access to practitioner profiles" 
  ON public.practitioner_profiles 
  FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Public read access to subscription plans" 
  ON public.subscription_plans 
  FOR SELECT 
  USING (is_active = true);

-- Enable RLS for other tables
ALTER TABLE public.practitioner_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spiritual_reports ENABLE ROW LEVEL SECURITY;

-- Insert default admin user
INSERT INTO public.admin_users (email, role, created_at) 
VALUES ('admin@gurujicosmos.com', 'super_admin', now())
ON CONFLICT (email) DO NOTHING;

-- Insert subscription plans
INSERT INTO public.subscription_plans (name, price_inr, features, duration_months) VALUES
('Basic Seeker', 799.00, ARRAY['1 Monthly Session', 'Basic Reports', 'Community Access'], 1),
('Spiritual Explorer', 1499.00, ARRAY['3 Monthly Sessions', 'Detailed Reports', 'Priority Support', 'Meditation Guide'], 1),
('Cosmic Mystic', 2999.00, ARRAY['Unlimited Sessions', 'Premium Reports', 'Personal Practitioner', 'Advanced Readings'], 1),
('Annual Enlightened', 14999.00, ARRAY['Unlimited Everything', 'Yearly Planning', 'Personal Guidance', 'Exclusive Events'], 12);

-- Insert practitioner profiles
INSERT INTO public.practitioner_profiles (name, email, specialization, experience_years, rating, hourly_rate_inr, bio, is_active) VALUES
('Guruji Ananda', 'ananda@gurujicosmos.com', ARRAY['Astrology', 'Meditation'], 15, 4.9, 2500.00, 'Master astrologer with 15+ years of experience in Vedic astrology and spiritual guidance.', true),
('Master Priya', 'priya@gurujicosmos.com', ARRAY['Palmistry', 'Energy Healing'], 12, 4.8, 2000.00, 'Expert in palmistry and chakra healing with deep knowledge of ancient healing arts.', true),
('Dr. Vikram', 'vikram@gurujicosmos.com', ARRAY['Hypnotherapy', 'Mind Reading'], 10, 4.7, 3000.00, 'Clinical hypnotherapist specializing in past life regression and consciousness exploration.', true),
('Swami Rajesh', 'rajesh@gurujicosmos.com', ARRAY['Meditation', 'Music Therapy'], 20, 4.9, 1800.00, 'Meditation master and sound healer with expertise in transformational music therapy.', true);

-- Create trigger function for user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, created_at)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name', now());
  RETURN NEW;
END;
$$;

-- Create trigger for automatic profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
