import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
  role: 'actor' | 'producer'
}

interface AuthState {
  user: User | null
  subscription: {
    plan: 'actor' | 'producer' | null
    status: 'active' | 'expired' | null
    expiresAt: string | null
  }
  setUser: (user: User | null) => void
  setSubscription: (subscription: AuthState['subscription']) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      subscription: {
        plan: null,
        status: null,
        expiresAt: null,
      },
      setUser: (user) => set({ user }),
      setSubscription: (subscription) => set({ subscription }),
      logout: () => set({ 
        user: null, 
        subscription: {
          plan: null,
          status: null,
          expiresAt: null,
        }
      }),
    }),
    {
      name: 'auth-storage',
    }
  )
) 