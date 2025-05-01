import { createContext, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // Initialize credit with 0 instead of false for better type consistency
    const [credit, setCredit] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure this is correctly set, e.g., 'http://localhost:4000'
    const { getToken } = useAuth();

    const loadCreditData = async () => {
        setIsLoading(true);
        try {
            const token = await getToken();
            // Check if token exists
            if (!token) {
                console.log("No authentication token available");
                toast.error("Authentication required to load credits."); // User-friendly message
                setIsLoading(false);
                setCredit(0); // Ensure credit is reset if not authenticated
                return;
            }

            // This URL seems correct based on your backend routes
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: { token } // Ensure backend expects 'token' header (or 'Authorization: Bearer token')
            });

            if (data.success) {
                // Set credits with a default of 0 if credits is null/undefined
                setCredit(data.credits || 0);
                console.log("Credits loaded:", data.credits);
            } else {
                // Handle unsuccessful response from backend
                console.log("Failed to load credits (API Error):", data.message);
                toast.error(data.message || "Failed to load credits from server");
                setCredit(0); // Reset credits on failure
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error loading credits (Network/Client Error):", error);
            // Provide more specific error message if possible
            const errorMessage = error.response?.data?.message || error.message || "An error occurred while loading credits";
            toast.error(errorMessage);
            // Consider different handling based on error type (e.g., 401 Unauthorized vs 500 Server Error)
            setCredit(0); // Reset credits on error
        } finally {
            setIsLoading(false);
        }
    };

    // Consider adding loadCreditData to useEffect hook to load on mount/auth change if needed
    // Example:
    // useEffect(() => {
    //    loadCreditData();
    // }, [getToken]); // Dependency array might need adjustment based on your auth flow

    const value = {
        credit,
        setCredit,
        loadCreditData, // Expose function to allow manual refresh if needed
        backendUrl,
        isLoading
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;