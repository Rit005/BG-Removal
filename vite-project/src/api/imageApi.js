import API from './config';

/**
 * Image generation related API calls
 */
const imageApi = {
  /**
   * Generate an image based on a prompt
   * @param {string} prompt - The image generation prompt
   * @param {Object} settings - Additional generation settings
   * @returns {Promise} Promise with generated image data
   */
  generateImage: async (prompt, settings = {}) => {
    try {
      const response = await API.post('/image/generate', {
        prompt,
        ...settings
      });
      return response.data;
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  },
  
  /**
   * Get user's image generation history
   * @param {string} clerkId - The Clerk user ID
   * @returns {Promise} Promise with image history data
   */
  getHistory: async (clerkId) => {
    try {
      const response = await API.get(`/image/history?clerkId=${clerkId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching image history:', error);
      throw error;
    }
  }
};

export default imageApi;