import API from './config';

/**
 * User-related API calls
 */
const userApi = {
  /**
   * Get user credits by clerkId
   * @param {string} clerkId - The Clerk user ID
   * @returns {Promise} Promise with user credits data
   */
  getCredits: async (clerkId) => {
    try {
      const response = await API.get(`/user/credits?clerkId=${clerkId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching credits:', error);
      throw error;
    }
  },
  
  /**
   * Update user profile data
   * @param {string} clerkId - The Clerk user ID
   * @param {Object} profileData - The profile data to update
   * @returns {Promise} Promise with updated user data
   */
  updateProfile: async (clerkId, profileData) => {
    try {
      const response = await API.post('/user/profile', { 
        clerkId,
        ...profileData 
      });
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};

export default userApi;