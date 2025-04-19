import mongoose from "mongoose";
import fs from 'fs'; // Import the 'fs' module if you need to read certificate files

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected");
    });

    const mongoUri = process.env.MONGO_URI;
    const sslOptions = {
      ssl: true, // Enable SSL
      // If your MongoDB server uses a custom CA, provide the path here:
      // sslCA: [fs.readFileSync('./path/to/your/ca.crt')],
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(mongoUri, sslOptions);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;