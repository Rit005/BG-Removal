import mongoose from 'mongoose';
import fs from 'fs'; // Import fs at the top for Node.js environment

const connectDB = async () => {
    try {
        let sslOptions = {};

        // Assuming you need SSL options for your MongoDB connection in this Node.js environment
        // Make sure these file paths are ABSOLUTE or correct relative to where you run the script
        const certPath = '/path/to/your/client.cert'; // !! REPLACE with your ACTUAL path !!
        const keyPath = '/path/to/your/client.key';   // !! REPLACE with your ACTUAL path !!

        // Check if the certificate files exist before trying to read them
        if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
             sslOptions = {
                ssl: true,
                sslCert: fs.readFileSync(certPath),
                sslKey: fs.readFileSync(keyPath),
            };
        } else {
             console.warn("SSL certificate or key file not found. Proceeding without SSL options for MongoDB.");
             // You might want to throw an error here if SSL is mandatory
             // throw new Error("MongoDB SSL certificate or key file missing.");
        }


        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ...sslOptions,
            serverSelectionTimeoutMS: 5000, // Added a timeout
            // ... other options
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`); // More specific error message
        process.exit(1);
    }
};

export default connectDB;