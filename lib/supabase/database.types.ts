export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      breeders: {
        Row: {
          id: string
          user_id: string
          business_name: string
          description: string | null
          website: string | null
          phone: string | null
          email: string | null
          address: string | null
          city: string | null
          state: string | null
          country: string
          postal_code: string | null
          latitude: number | null
          longitude: number | null
          is_verified: boolean
          akc_registered: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          description?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          is_verified?: boolean
          akc_registered?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          description?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          is_verified?: boolean
          akc_registered?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      rescues: {
        Row: {
          id: string
          user_id: string
          organization_name: string
          description: string | null
          website: string | null
          phone: string | null
          email: string | null
          address: string | null
          city: string | null
          state: string | null
          country: string
          postal_code: string | null
          latitude: number | null
          longitude: number | null
          is_verified: boolean
          is_nonprofit: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          organization_name: string
          description?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          is_verified?: boolean
          is_nonprofit?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          organization_name?: string
          description?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          is_verified?: boolean
          is_nonprofit?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          entity_id: string
          entity_type: string
          rating: number
          title: string
          content: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          entity_id: string
          entity_type: string
          rating: number
          title: string
          content?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          entity_id?: string
          entity_type?: string
          rating?: number
          title?: string
          content?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}