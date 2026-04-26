import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to get cookie by name
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

// Request interceptor for CSRF protection
api.interceptors.request.use((config) => {
  // Only attach XSRF token for state-changing requests
  const stateChangingMethods = ['post', 'put', 'delete', 'patch'];
  
  if (config.method && stateChangingMethods.includes(config.method.toLowerCase())) {
    const xsrfToken = getCookie('XSRF-TOKEN');
    if (xsrfToken) {
      config.headers['X-XSRF-TOKEN'] = xsrfToken;
    }
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., clear user state, redirect to login)
      // This will be handled in the AuthProvider
    }
    return Promise.reject(error);
  }
);

export default api;
