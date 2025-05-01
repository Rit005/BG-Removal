import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cars from './cars.js'; // Assuming this is a router or middleware
import connectDB from './configs/mongodb.js'; // Assuming this function connects to MongoDB
import userRouter from './routes/userRoutes.js'; // Assuming this is a router

// Load environment variables (This line is duplicated, one is enough)
// dotenv.config();

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
async function startServer() {
    try { // Added try-catch for better error handling during DB connection
        await connectDB();
        console.log("MongoDB connected successfully"); // Added log for successful connection

        // Initialize Middlewares
        app.use(cors({
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'token'] // Added 'token' here
        }));
        app.use(express.json());

        // Use cars router
        app.use('/cars', cars); // Add the cars routes to the '/cars' path

        // API routes
        app.get('/', (req, res) => res.send("API Working"));
        app.use('/api/user', userRouter);

        // Start server
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error); // Log error if DB connection fails
        process.exit(1); // Exit process if server fails to start
    }
}

// Start the server
startServer();