export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          cabin_id: number | null
          cabin_price: number | null
          created_at: string
          end_date: string | null
          extras_price: number | null
          guest_id: number | null
          has_breakfast: boolean | null
          id: number
          is_paid: boolean | null
          num_guests: number | null
          num_nights: number | null
          observations: string | null
          start_date: string | null
          status: string | null
          total_price: number | null
        }
        Insert: {
          cabin_id?: number | null
          cabin_price?: number | null
          created_at?: string
          end_date?: string | null
          extras_price?: number | null
          guest_id?: number | null
          has_breakfast?: boolean | null
          id?: number
          is_paid?: boolean | null
          num_guests?: number | null
          num_nights?: number | null
          observations?: string | null
          start_date?: string | null
          status?: string | null
          total_price?: number | null
        }
        Update: {
          cabin_id?: number | null
          cabin_price?: number | null
          created_at?: string
          end_date?: string | null
          extras_price?: number | null
          guest_id?: number | null
          has_breakfast?: boolean | null
          id?: number
          is_paid?: boolean | null
          num_guests?: number | null
          num_nights?: number | null
          observations?: string | null
          start_date?: string | null
          status?: string | null
          total_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_cabin_id_fkey"
            columns: ["cabin_id"]
            referencedRelation: "cabins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_guest_id_fkey"
            columns: ["guest_id"]
            referencedRelation: "guests"
            referencedColumns: ["id"]
          }
        ]
      }
      cabins: {
        Row: {
          created_at: string
          description: string | null
          discount: number | null
          id: number
          image: string | null
          max_capacity: number | null
          name: string | null
          regular_price: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          max_capacity?: number | null
          name?: string | null
          regular_price?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          max_capacity?: number | null
          name?: string | null
          regular_price?: number | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          country_flag: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: number
          national_id: string | null
          nationality: string | null
        }
        Insert: {
          country_flag?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          national_id?: string | null
          nationality?: string | null
        }
        Update: {
          country_flag?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          national_id?: string | null
          nationality?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          breakfast_price: number | null
          created_at: string
          id: number
          max_booking_length: number | null
          max_guests_per_booking: number | null
          min_booking_length: number | null
        }
        Insert: {
          breakfast_price?: number | null
          created_at?: string
          id?: number
          max_booking_length?: number | null
          max_guests_per_booking?: number | null
          min_booking_length?: number | null
        }
        Update: {
          breakfast_price?: number | null
          created_at?: string
          id?: number
          max_booking_length?: number | null
          max_guests_per_booking?: number | null
          min_booking_length?: number | null
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

