export const authAPI = {
  // Login
  login: async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Login failed');
    }

    return res.json();
  },

  // Logout
  logout: async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Logout failed');
    }

    return res.json();
  },

  // Get current admin
  getCurrentAdmin: async () => {
    const res = await fetch('/api/auth/me', {
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch admin');
    }

    return res.json();
  },
};