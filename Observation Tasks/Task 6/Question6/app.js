// Import the built-in modules using 'require'
const os = require('os');
const path = require('path');
const fs = require('fs');

console.log("==========================================");
console.log(" Node.js Built-in Modules Demonstration");
console.log("==========================================\n");

// --- 1. OS Module Example ---
// Used to get info about the operating system
console.log("--- 1. OS Module ---");
console.log(`OS Platform: ${os.platform()}`); // e.g., 'win32', 'linux'
console.log(`System Architecture: ${os.arch()}`); // e.g., 'x64'
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log("\n");

// --- 2. Path Module Example ---
// Used to cleanly handle file paths
console.log("--- 2. Path Module ---");
const examplePath = '/users/student/projects/app.js';
console.log(`Given Path: ${examplePath}`);
console.log(`Base file name: ${path.basename(examplePath)}`); // 'app.js'
console.log(`Directory name: ${path.dirname(examplePath)}`); // '/users/student/projects'
console.log(`File extension: ${path.extname(examplePath)}`); // '.js'
console.log("\n");

// --- 3. FS Module Example ---
// Used to read, write, and manipulate files
console.log("--- 3. FS (File System) Module ---");
const tempFileName = 'sample.txt';

// Writing a file synchronously
fs.writeFileSync(tempFileName, 'Hello! This is a file created by the fs module.');
console.log(`[SUCCESS] File '${tempFileName}' created and written.`);

// Reading the file synchronously
const fileContent = fs.readFileSync(tempFileName, 'utf-8');
console.log(`[READ] Content of '${tempFileName}': "${fileContent}"`);

// Clean up: delete the file after demonstration
fs.unlinkSync(tempFileName);
console.log(`[SUCCESS] File '${tempFileName}' deleted.`);
console.log("\n==========================================");
