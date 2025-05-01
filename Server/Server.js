import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cars from './cars.js'; // Assuming this is a router or middleware
import connectDB from './configs/mongodb.js'; // Assuming this function connects to MongoDB
import userRouter from './routes/userRoutes.js'; // Assuming this is a router

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
async function startServer() {
    try {
        await connectDB();
        console.log("MongoDB connected successfully");

        // Initialize Middlewares
        app.use(cors({
            origin: 'http://localhost:5174', // Make sure this matches your frontend URL
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'token'] // Ensure 'token' or your actual auth header name is here if used
        }));
        app.use(express.json());

        // Use cars router (ensure './cars.js' exports a valid router)
        app.use('/cars', cars); // Add the cars routes to the '/cars' path

        // API routes
        app.get('/', (req, res) => res.send("API Working"));
        app.use('/api/user', userRouter); // Mounts user routes under /api/user

        // Start server
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

// Start the server
startServer();