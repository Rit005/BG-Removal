import dotenv from 'dotenv'; 
import express from 'express'; 
import cars from './cars.js'; 
import connectDB from './configs/mongodb.js';

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

    // Start server
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}

// Start the server
startServer();
