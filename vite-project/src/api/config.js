import axios from 'axios';

// Create axios instance with base URL from environment variables
const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api` || 'http://localhost:4000/api'
});

// Request interceptor - can be used to add auth tokens
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - handle common errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (401, 403, 500, etc.)
    if (error.response?.status === 401) {
      // Handle unauthorized (could redirect to login)
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export default API;