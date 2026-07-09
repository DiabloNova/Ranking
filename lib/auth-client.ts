// Simple auth client for demo purposes
export const authClient = {
  signOut: async () => {
    // Mock sign out
  },
  signIn: {
    email: async (data: any) => ({ data: { user: { id: '1', name: 'User' } }, error: null }),
  },
  signUp: {
    email: async (data: any) => ({ data: { user: { id: '1', name: 'User' } }, error: null }),
  },
}

interface SessionData {
  user: {
    id: string
    name: string
    email?: string
    image?: string
  }
}

// Mock session hook
export const useSession = () => ({
  data: null as SessionData | null,
  isPending: false,
})
