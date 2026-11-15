// ============================================
// DATABASE CONNECTION
// This file connects our Express server to MongoDB.
//
// Mongoose is a library that:
//   1. Connects to MongoDB
//   2. Lets you define "schemas" (what data looks like)
//   3. Provides easy methods to create/read/update/delete data
//
// The connection string (URI) comes from the .env file.
// In Phase 5, we'll replace it with a real MongoDB Atlas URI.
// ============================================

const dns = require('dns');
const mongoose = require('mongoose');

// Configure Node.js to use Google's Public DNS (8.8.8.8) to prevent querySrv ECONNREFUSED on Windows
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    // mongoose.connect() tries to connect to the database
    // process.env.MONGODB_URI reads the URI from the .env file
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Exit the process with failure code (1 = error)
    process.exit(1);
  }
};

// Export the function so server.js can use it
module.exports = connectDB;

