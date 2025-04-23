import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import cars from './cars.js';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

// ... rest of your server.js code
// Load environment variables
dotenv.config();

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
async function startServer() {
    await connectDB();

    // Initialize Middlewares
    app.use(express.json());

    // Use cars router
    app.use('/cars', cars);  // Add the cars routes to the '/cars' path

    // API routes
    app.get('/', (req, res) => res.send("API Working"));
    app.use('/api/user',userRouter)

    // Start server
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}

// Start the server
startServer();
