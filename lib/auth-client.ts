// Simple auth client for demo purposes
export const authClient = {
  signOut: async () => {
    // Mock sign out
  },
}

// Mock session hook
export const useSession = () => ({
  data: null,
  isPending: false,
})
