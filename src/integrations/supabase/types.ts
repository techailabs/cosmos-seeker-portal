export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_tools: {
        Row: {
          api_endpoint: string | null
          category: string | null
          company: string | null
          created_at: string | null
          description: string | null
          documentation_url: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          key_features: string[] | null
          name: string
          pricing_info: string | null
          pricing_model: string | null
          short_description: string | null
          slug: string | null
          tags: string[] | null
          updated_at: string | null
          use_cases: string[] | null
        }
        Insert: {
          api_endpoint?: string | null
          category?: string | null
          company?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          key_features?: string[] | null
          name: string
          pricing_info?: string | null
          pricing_model?: string | null
          short_description?: string | null
          slug?: string | null
          tags?: string[] | null
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Update: {
          api_endpoint?: string | null
          category?: string | null
          company?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          key_features?: string[] | null
          name?: string
          pricing_info?: string | null
          pricing_model?: string | null
          short_description?: string | null
          slug?: string | null
          tags?: string[] | null
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Relationships: []
      }
      article_tags: {
        Row: {
          article_id: string | null
          created_at: string | null
          id: string
          tag_id: string | null
        }
        Insert: {
          article_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Update: {
          article_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "article_tags_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author_name: string | null
          category: string | null
          content: Json | null
          created_at: string | null
          excerpt: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          read_time: number | null
          slug: string
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_name?: string | null
          category?: string | null
          content?: Json | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          read_time?: number | null
          slug: string
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_name?: string | null
          category?: string | null
          content?: Json | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          read_time?: number | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          challenge: string | null
          client_logo: string | null
          client_name: string | null
          content: Json | null
          created_at: string | null
          description: string | null
          id: string
          industry: string | null
          meta_description: string | null
          meta_title: string | null
          project_duration: string | null
          results: Json | null
          results_metrics: Json | null
          slug: string
          solution: string | null
          status: string | null
          team_size: number | null
          technologies: string[] | null
          technologies_used: string[] | null
          testimonial_author: string | null
          testimonial_position: string | null
          testimonial_quote: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          challenge?: string | null
          client_logo?: string | null
          client_name?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          meta_description?: string | null
          meta_title?: string | null
          project_duration?: string | null
          results?: Json | null
          results_metrics?: Json | null
          slug: string
          solution?: string | null
          status?: string | null
          team_size?: number | null
          technologies?: string[] | null
          technologies_used?: string[] | null
          testimonial_author?: string | null
          testimonial_position?: string | null
          testimonial_quote?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          challenge?: string | null
          client_logo?: string | null
          client_name?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          meta_description?: string | null
          meta_title?: string | null
          project_duration?: string | null
          results?: Json | null
          results_metrics?: Json | null
          slug?: string
          solution?: string | null
          status?: string | null
          team_size?: number | null
          technologies?: string[] | null
          technologies_used?: string[] | null
          testimonial_author?: string | null
          testimonial_position?: string | null
          testimonial_quote?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      case_study_tags: {
        Row: {
          case_study_id: string | null
          created_at: string | null
          id: string
          tag_id: string | null
        }
        Insert: {
          case_study_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Update: {
          case_study_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_study_tags_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          question: string
          updated_at: string | null
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          question: string
          updated_at?: string | null
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          question?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          preferences: string[] | null
          source: string | null
          status: string | null
          subscribed_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          preferences?: string[] | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          preferences?: string[] | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          content: Json | null
          created_at: string | null
          description: string | null
          id: string
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      practitioner_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string
          experience_years: number | null
          hourly_rate_inr: number | null
          id: string
          is_active: boolean | null
          name: string
          rating: number | null
          specialization: string[] | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email: string
          experience_years?: number | null
          hourly_rate_inr?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          rating?: number | null
          specialization?: string[] | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          experience_years?: number | null
          hourly_rate_inr?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          rating?: number | null
          specialization?: string[] | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          birth_date: string | null
          birth_place: string | null
          birth_time: string | null
          created_at: string
          energy_level: number | null
          full_name: string | null
          id: string
          karma_points: number | null
          meditation_streak: number | null
          phone: string | null
          preferences: Json | null
          spiritual_level: string | null
          subscription_plan: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          birth_date?: string | null
          birth_place?: string | null
          birth_time?: string | null
          created_at?: string
          energy_level?: number | null
          full_name?: string | null
          id?: string
          karma_points?: number | null
          meditation_streak?: number | null
          phone?: string | null
          preferences?: Json | null
          spiritual_level?: string | null
          subscription_plan?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          birth_date?: string | null
          birth_place?: string | null
          birth_time?: string | null
          created_at?: string
          energy_level?: number | null
          full_name?: string | null
          id?: string
          karma_points?: number | null
          meditation_streak?: number | null
          phone?: string | null
          preferences?: Json | null
          spiritual_level?: string | null
          subscription_plan?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      seo_settings: {
        Row: {
          canonical_url: string | null
          created_at: string | null
          id: string
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          page_type: string
          robots_directive: string | null
          structured_data: Json | null
          twitter_description: string | null
          twitter_image: string | null
          twitter_title: string | null
          updated_at: string | null
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_type: string
          robots_directive?: string | null
          structured_data?: Json | null
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string | null
        }
        Update: {
          canonical_url?: string | null
          created_at?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_type?: string
          robots_directive?: string | null
          structured_data?: Json | null
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      service_ai_tools: {
        Row: {
          ai_tool_id: string | null
          created_at: string | null
          id: string
          service_id: string | null
        }
        Insert: {
          ai_tool_id?: string | null
          created_at?: string | null
          id?: string
          service_id?: string | null
        }
        Update: {
          ai_tool_id?: string | null
          created_at?: string | null
          id?: string
          service_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_ai_tools_ai_tool_id_fkey"
            columns: ["ai_tool_id"]
            isOneToOne: false
            referencedRelation: "ai_tools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_ai_tools_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      service_workflows: {
        Row: {
          created_at: string | null
          id: string
          service_id: string | null
          workflow_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          service_id?: string | null
          workflow_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          service_id?: string | null
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_workflows_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_workflows_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category: string | null
          category_id: string | null
          content: Json | null
          created_at: string | null
          description: string | null
          features: string[] | null
          icon: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          short_description: string | null
          slug: string
          status: string | null
          technologies: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          category_id?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          icon?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          short_description?: string | null
          slug: string
          status?: string | null
          technologies?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          category_id?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          icon?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          short_description?: string | null
          slug?: string
          status?: string | null
          technologies?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          setting_key: string
          setting_type: string | null
          setting_value: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key: string
          setting_type?: string | null
          setting_value?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key?: string
          setting_type?: string | null
          setting_value?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      solutions: {
        Row: {
          benefits: string[] | null
          category: string | null
          content: Json | null
          created_at: string | null
          description: string | null
          features: string[] | null
          id: string
          ideal_for: string | null
          key_features: string[] | null
          meta_description: string | null
          meta_title: string | null
          short_description: string | null
          slug: string
          status: string | null
          target_audience: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          category?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          id?: string
          ideal_for?: string | null
          key_features?: string[] | null
          meta_description?: string | null
          meta_title?: string | null
          short_description?: string | null
          slug: string
          status?: string | null
          target_audience?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: string | null
          content?: Json | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          id?: string
          ideal_for?: string | null
          key_features?: string[] | null
          meta_description?: string | null
          meta_title?: string | null
          short_description?: string | null
          slug?: string
          status?: string | null
          target_audience?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      spiritual_reports: {
        Row: {
          content: Json | null
          created_at: string
          file_url: string | null
          generated_date: string
          id: string
          report_type: string
          title: string
          user_id: string
        }
        Insert: {
          content?: Json | null
          created_at?: string
          file_url?: string | null
          generated_date?: string
          id?: string
          report_type: string
          title: string
          user_id: string
        }
        Update: {
          content?: Json | null
          created_at?: string
          file_url?: string | null
          generated_date?: string
          id?: string
          report_type?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      sub_services: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          service_id: string | null
          slug: string
          sort_order: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          service_id?: string | null
          slug: string
          sort_order?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          service_id?: string | null
          slug?: string
          sort_order?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sub_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string
          duration_months: number | null
          features: string[] | null
          id: string
          is_active: boolean | null
          name: string
          price_inr: number
        }
        Insert: {
          created_at?: string
          duration_months?: number | null
          features?: string[] | null
          id?: string
          is_active?: boolean | null
          name: string
          price_inr: number
        }
        Update: {
          created_at?: string
          duration_months?: number | null
          features?: string[] | null
          id?: string
          is_active?: boolean | null
          name?: string
          price_inr?: number
        }
        Relationships: []
      }
      tags: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          client_company: string | null
          client_name: string
          client_position: string | null
          created_at: string | null
          featured: boolean | null
          id: string
          project_type: string | null
          rating: number | null
          status: string | null
          testimonial_text: string
          updated_at: string | null
        }
        Insert: {
          client_company?: string | null
          client_name: string
          client_position?: string | null
          created_at?: string | null
          featured?: boolean | null
          id?: string
          project_type?: string | null
          rating?: number | null
          status?: string | null
          testimonial_text: string
          updated_at?: string | null
        }
        Update: {
          client_company?: string | null
          client_name?: string
          client_position?: string | null
          created_at?: string | null
          featured?: boolean | null
          id?: string
          project_type?: string | null
          rating?: number | null
          status?: string | null
          testimonial_text?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tool_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          metadata: Json | null
          session_id: string | null
          tool_name: string
          user_agent: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          session_id?: string | null
          tool_name: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          session_id?: string | null
          tool_name?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string
          duration_minutes: number | null
          id: string
          notes: string | null
          practitioner_name: string | null
          price_inr: number | null
          rating: number | null
          service_type: string
          session_date: string
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          practitioner_name?: string | null
          price_inr?: number | null
          rating?: number | null
          service_type: string
          session_date: string
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          practitioner_name?: string | null
          price_inr?: number | null
          rating?: number | null
          service_type?: string
          session_date?: string
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      workflows: {
        Row: {
          automation_level: string | null
          complexity_level: string | null
          created_at: string | null
          description: string | null
          estimated_time: string | null
          id: string
          is_active: boolean | null
          name: string
          steps: Json | null
          updated_at: string | null
        }
        Insert: {
          automation_level?: string | null
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          estimated_time?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          steps?: Json | null
          updated_at?: string | null
        }
        Update: {
          automation_level?: string | null
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          estimated_time?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          steps?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
