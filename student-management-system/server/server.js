// ============================================
// SERVER.JS — Main Entry Point
// This is the file that starts your backend server.
//
// What it does (in order):
//   1. Loads environment variables from .env
//   2. Imports required packages
//   3. Connects to MongoDB
//   4. Sets up middleware (CORS, JSON parsing)
//   5. Registers API routes
//   6. Starts listening on a port
//
// To run: npm run dev  (uses nodemon for auto-restart)
// Or:     npm start    (for production/deployment)
// ============================================

// Step 1: Load environment variables from .env file
// This MUST be the first line — before any other imports
const dotenv = require('dotenv');
dotenv.config();

// Step 2: Import packages
const express = require('express');    // Web framework
const cors = require('cors');          // Cross-Origin Resource Sharing
const connectDB = require('./config/db');       // Our database connection function
const studentRoutes = require('./routes/studentRoutes'); // Our API routes

// Step 3: Create the Express app
const app = express();
const PORT = process.env.PORT || 5000;  // Use port from .env, or 5000 as fallback

// Step 4: Connect to MongoDB
connectDB();

// Step 5: Set up Middleware
// Middleware = functions that run on every request before it reaches a route

// CORS: Allows the frontend (on a different port/domain) to talk to this backend
// Without CORS, the browser would BLOCK the frontend from calling our API
// This is CRITICAL for your Q6 question!
app.use(cors({
  origin: '*',  // Allow requests from ANY origin (we'll restrict this in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
  allowedHeaders: ['Content-Type']             // Allowed request headers
}));

// JSON Parser: Converts incoming request data from JSON text to JavaScript objects
// Without this, req.body would be undefined
app.use(express.json());

// Step 6: Register Routes
// Any request to /api/students will be handled by studentRoutes
app.use('/api/students', studentRoutes);

// Health check endpoint (matches classroom assessment standards)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Student Management API is running' });
});

// Root route — just to verify the server is running
app.get('/', (req, res) => {
  res.json({
    message: '🎓 Student Management System API is running!',
    student: 'Hari Charan',
    rollNumber: 'A24126552080',
    endpoints: {
      getAllStudents: 'GET /api/students',
      getOneStudent: 'GET /api/students/:id',
      createStudent: 'POST /api/students',
      updateStudent: 'PUT /api/students/:id',
      deleteStudent: 'DELETE /api/students/:id'
    }
  });
});

// Step 7: Start listening for requests
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API available at http://localhost:${PORT}/api/students`);
  console.log(`👤 Student: Hari Charan | Roll No: A24126552080\n`);
});

