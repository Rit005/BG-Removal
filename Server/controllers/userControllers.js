import { Webhook } from 'svix';
import userModel from '../models/userModel.js';

// API Controller Function to Manage Clerk User with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
    try {
        // Create a Svix instance with Clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOKS_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        const { data, type } = req.body;
        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_address[0].email_address ,
                    firstName: data.first_name ,
                    lastName: data.last_name ,
                    photo: data.image_url ,
                };

                await userModel.create(userData);
                res.json({});

                break;
            }

            case "user.updated": {
                const userData = {
                    email: data.email_address[0].email_address,
                    firstName: data.first_name ,
                    lastName: data.last_name ,
                    photo: data.image_url ,
                };

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({});

                break;
            }

            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({});

                break;
            }

            default:
                break;
        }
    } catch (error) {
        console.error('Error processing webhook:', error.message);
        res.json({ success: false, message: error.message });
    }
};


// API Controller function to get user available credits data
// controllers/userControllers.js -> userCredits function
const userCredits = async (req, res) => {
    try {
        const { clerkId } = req.body;
        if (!clerkId) { /* ... return 400 ... */ }

        console.log(`Backend: Fetching credits for clerkId: ${clerkId}`); // Add logging
        const userData = await userModel.findOne({ clerkId });
        console.log(`Backend: Found userData: ${JSON.stringify(userData)}`); // Log found data

        if (!userData) {
            console.log(`Backend: User not found for clerkId: ${clerkId}`);
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // === ADD THIS CHECK ===
        if (userData.creditBalance === undefined || userData.creditBalance === null) {
             console.error(`Backend: User ${clerkId} found but creditBalance is missing/null! Assigning default.`);
             // Option 1: Return a default value (e.g., 0 or 5)
             // userData.creditBalance = 5; // Or 0 if preferred
             // Option 2: Return an error
              return res.status(500).json({ success: false, message: 'User data incomplete on server.' });
        }
        // =====================

        console.log(`Backend: Returning credits: ${userData.creditBalance}`);
        return res.status(200).json({
            success: true,
            credits: userData.creditBalance
        });
    } catch (error) {
        console.error('Backend: Error in userCredits:', error); // Log the full error
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
};

export { clerkWebhooks,userCredits };
