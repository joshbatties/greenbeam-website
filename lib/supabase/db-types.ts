export type Database = {
    public: {
      Tables: {
        subscribers: {
          Row: {
            id: string
            email: string
            created_at: string
            status: 'active' | 'unsubscribed'
          }
          Insert: {
            id?: string
            email: string
            created_at?: string
            status?: 'active' | 'unsubscribed'
          }
          Update: {
            id?: string
            email?: string
            created_at?: string
            status?: 'active' | 'unsubscribed'
          }
        }
      }
    }
  }