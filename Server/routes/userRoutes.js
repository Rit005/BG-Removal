import express from 'express';
// Make sure these paths are correct relative to userRoutes.js
import { clerkWebhooks, userCredits } from '../controllers/userControllers.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

// Full path: POST /api/user/webhooks
userRouter.post('/webhooks', clerkWebhooks);

// Full path: GET /api/user/credits
// This route uses authUser middleware before calling userCredits controller
userRouter.get('/credits', authUser, userCredits);

export default userRouter;