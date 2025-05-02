// userRoutes.js - Example router file
import express from 'express';
import { clerkWebhooks, userCredits } from '../controllers/userController.js';

const router = express.Router();

// Webhook route
router.post('/webhooks', clerkWebhooks);

// User credits route - Support both GET and POST methods
router.get('/credits', userCredits);  // Add this GET route
router.post('/credits', userCredits); // Keep this if you still need POST support

export default router;

// Then in your main app.js or server.js file:
// app.use('/api/user', userRoutes);

// Modified userCredits controller function
const userCredits = async (req, res) => {
    try {
        let clerkId;
        
        // Handle both GET and POST requests
        if (req.method === 'GET') {
            // For GET requests, look for clerkId in query params
            clerkId = req.query.clerkId;
        } else {
            // For POST requests, look in body
            clerkId = req.body.clerkId;
        }
        
        if (!clerkId) {
            return res.status(400).json({
                success: false,
                message: 'Clerk ID is required'
            });
        }

        const userData = await userModel.findOne({ clerkId });
        
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            credits: userData.creditBalance
        });
    } catch (error) {
        console.error('Error fetching user credits:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};