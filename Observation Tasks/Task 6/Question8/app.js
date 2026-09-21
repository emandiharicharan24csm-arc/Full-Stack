const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
// EXAMPLE OF A CUSTOM LOGGING MIDDLEWARE
// ==========================================
// This middleware runs for EVERY incoming request because we use app.use()
app.use((req, res, next) => {
    // 1. Get current date and time
    const now = new Date();
    
    // 2. Extract information from the request object
    const method = req.method; // e.g., GET, POST
    const url = req.url;       // e.g., '/', '/about'
    
    // 3. Log the information to the terminal
    console.log(`[${now.toLocaleString()}] Middleware Log: Received a ${method} request to ${url}`);
    
    // 4. CRITICAL: Call next() to pass control to the next middleware/route handler
    // If we don't call next(), the client's browser will hang forever!
    next();
});

// --- Routes (These act as the final step in the cycle) ---

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><p>Check your terminal to see the middleware log!</p><a href="/about">Go to About Page</a>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>Check your terminal again! A new log was created.</p><a href="/">Go Back</a>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try visiting the URLs and watch this console for the middleware logs.\n`);
});
