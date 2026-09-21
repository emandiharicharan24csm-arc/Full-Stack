// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port number for the server to listen on
const PORT = 3000;

// Dummy data: List of at least five students
const students = [
    { id: 1, name: "Alice Johnson", course: "Computer Science" },
    { id: 2, name: "Bob Smith", course: "Information Technology" },
    { id: 3, name: "Charlie Brown", course: "Mechanical Engineering" },
    { id: 4, name: "Diana Prince", course: "Electrical Engineering" },
    { id: 5, name: "Evan Wright", course: "Civil Engineering" }
];

// Route 1: Home route ('/')
// HTTP Method: GET
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>Welcome to the Student API Server!</h1>
            <p>Available routes:</p>
            <ul style="list-style-type: none; padding: 0;">
                <li><a href="/students" style="color: blue; text-decoration: none;">/students</a> - View Student List</li>
                <li><a href="/about" style="color: blue; text-decoration: none;">/about</a> - About Application</li>
            </ul>
        </div>
    `);
});

// Route 2: Students route ('/students')
// HTTP Method: GET
// Returns the list of students in JSON format
app.get('/students', (req, res) => {
    // res.json() automatically formats the array/object as a JSON response
    // and sets the correct headers for JSON
    res.json(students);
});

// Route 3: About route ('/about')
// HTTP Method: GET
app.get('/about', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>About This Application</h1>
            <p>This is a basic Express.js server built for a Project-Based Learning (PBL) task.</p>
            <p><strong>What it demonstrates:</strong></p>
            <ul>
                <li>Server setup and listening on a port</li>
                <li>Routing (/, /students, /about)</li>
                <li>Handling HTTP GET requests</li>
                <li>Responding with HTML and JSON data</li>
            </ul>
            <br>
            <a href="/">Back to Home</a>
        </div>
    `);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`\n===========================================`);
    console.log(`   Server is successfully running!`);
    console.log(`  Open your browser and visit:`);
    console.log(`     http://localhost:${PORT}`);
    console.log(`===========================================\n`);
});
