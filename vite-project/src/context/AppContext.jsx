import { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { userAPI } from '../api';

// Create context
export const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const { user, isSignedIn } = useUser();
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user credits
  const fetchUserCredits = async () => {
    if (!isSignedIn || !user?.id) return;
    
    setLoading(true);
    try {
      const response = await userAPI.getCredits(user.id);
      if (response.success) {
        setCredits(response.credits);
      } else {
        setError('Failed to load credits');
      }
    } catch (err) {
      console.error('Error loading credits:', err);
      setError('Error loading credits. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Use credits for an operation
  const useCredits = async (amount = 1) => {
    // This is a placeholder - you'd implement actual credit usage based on your API
    // In a real implementation, you would call an API endpoint to deduct credits
    // and then update the local state based on the response
    
    // For now, we'll just update the local state
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    return false;
  };

  // Refresh credits (e.g., after purchase)
  const refreshCredits = () => {
    fetchUserCredits();
  };

  // Fetch credits when user signs in
  useEffect(() => {
    if (isSignedIn) {
      fetchUserCredits();
    } else {
      setCredits(null);
    }
  }, [isSignedIn, user?.id]);

  // Context value
  const value = {
    credits,
    creditLoading: loading,
    creditError: error,
    useCredits,
    refreshCredits
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;